# LLM — Anatomía de un Modelo de Lenguaje Grande

> Proyecto divulgativo-técnico interactivo.
> Objetivo: quitarle la magia. Entender qué son, cómo funcionan y qué implica
> ejecutar LLMs reales, desde el concepto hasta el bit que viaja por un bus.
>
> 🌐 **Destino final**: web interactiva con 3 niveles por concepto.
> Cada sección indica 🎨 si tiene potencial de visualización web.

---

## 📋 Índice

1. [¿Qué es un LLM? — Next Token Prediction](#1-qué-es-un-llm--next-token-prediction)
2. [🔌 Hardware: la realidad física](#2-hardware-la-realidad-física)
3. [Parámetros: el esqueleto](#3-parámetros-el-esqueleto)
4. [Memoria: dónde vive el modelo](#4-memoria-dónde-vive-el-modelo)
5. [Arquitectura Transformer — visión global](#5-arquitectura-transformer--visión-global)
6. [Tokenización: de texto a números](#6-tokenización-de-texto-a-números)
7. [Embeddings: el espacio semántico](#7-embeddings-el-espacio-semántico)
8. [Atención: el núcleo](#8-atención-el-núcleo)
9. [Feed-Forward: la memoria del conocimiento](#9-feed-forward-la-memoria-del-conocimiento)
10. [Capa completa: el bloque Transformer](#10-capa-completa-el-bloque-transformer)
11. [Viaje completo de un token](#11-viaje-completo-de-un-token)
12. [Bucle autoregresivo](#12-bucle-autoregresivo)
13. [KV Cache: la optimización](#13-kv-cache-la-optimización)
14. [Velocidad: ancho de banda → tokens/s](#14-velocidad-ancho-de-banda--tokenss)
15. [¿Cómo se entrenan?](#15-cómo-se-entrenan)
16. [¿Por qué alucinan?](#16-por-qué-alucinan)
17. [Ejemplo práctico completo](#17-ejemplo-práctico-completo)
18. [Glosario visual](#18-glosario-visual)
19. [Referencias](#19-referencias)

---

## 1. ¿Qué es un LLM? — Next Token Prediction

### 🟢 Para empezar

Un LLM es una máquina que **predice la siguiente palabra**.

No "piensa", no "razona", no "entiende" como un humano. Lo que hace es:
1. Recibe una secuencia de palabras
2. Calcula cuál es la palabra más probable que sigue
3. La elige (con algo de creatividad)
4. La añade a la secuencia y vuelve al paso 1

```
"El gato está sobre la" → "mesa"
          ↓
"El gato está sobre la mesa" → "."
          ↓
"El gato está sobre la mesa." → "El"
          ↓
...
```

Eso es **todo**. La magia está en cómo hace ese cálculo.

> 🎨 **Visualización web**: animación tipo máquina de escribir. Las palabras
> entran por izquierda, la máquina "piensa" y escupe la siguiente. Se ve el
> bucle.

### 🟡 A fondo

Matemáticamente, el modelo estima:

```
P(token_n | token_1, token_2, ..., token_{n-1})
```

Es una distribución de probabilidad condicional sobre todo el vocabulario
(entre 32.000 y 152.000 tokens posibles, según el modelo).

Si la frase anterior en español es *"El gato está sobre la"*, la distribución
podría ser:

| Token | Probabilidad |
|-------|-------------|
| mesa  | 0.72 |
| alfombra | 0.15 |
| cama | 0.05 |
| silla | 0.03 |
| ... | ... |

El modelo no "sabe" que los gatos se suben a las mesas. Ha visto tantos
textos donde esa combinación aparece que ha aprendido que estadísticamente
es lo más probable.

### 🔬 Avanzado

El objetivo de entrenamiento es **minimizar la cross-entropy loss**:

```
L = - Σ log P(token_i | token_{<i})
```

Esto equivale a maximizar la log-probabilidad de los tokens reales en el
corpus de entrenamiento. El modelo aprende a comprimir el corpus:
un modelo que predice bien es un modelo que comprime bien el texto.

**Conexión con teoría de la información**: la perplexidad del modelo mide
cuántos bits por token necesita para codificar el texto. Un modelo con
perplejidad 10 necesita ~3.32 bits/token (log₂ 10).

---

## 3. Parámetros: el esqueleto

### 🟢 Para empezar

Un **parámetro** es un número que el modelo aprendió durante el entrenamiento.

Imagina una máquina de palancas. Cada palanca (parámetro) tiene un valor
numérico que modifica cómo se transforma la señal de entrada. Durante el
entrenamiento, millones de estas palancas se ajustan minuciosamente hasta
que la máquina acierta la siguiente palabra.

- 7 mil millones de parámetros = 7 mil millones de números
- Cada número ocupa espacio en memoria
- Más parámetros = más capacidad = más memoria

> 🎨 **Visualización web**: comparador visual — slider que muestra "este
> modelo tiene X parámetros" y lo representa como puntos en una cuadrícula
> (un punto = 1M params). Al lado, un texto dice cuánto ocupa.

### 🟡 A fondo

Los parámetros están organizados en **matrices** (tensores). Cada capa del
modelo contiene una o más matrices de pesos.

**Distribución típica en un Transformer estilo LLaMA 7B (~6.7B params):**

| Componente | Parámetros | % | Descripción |
|-----------|-----------|-----|-------------|
| Attention (Q,K,V,O) | ~1.1B | 16% | 4 proyecciones lineales (d_model → d_model) |
| Feed-Forward (gate,up,down) | ~4.2B | 63% | 3 proyecciones con expansión 4× d_model |
| Token Embedding | ~0.5B | 8% | Lookup table vocab → d_model |
| LM Head (output) | ~0.5B | 8% | Proyección d_model → logits |
| RMSNorm + biases | ~0.1B | 1.5% | Normalizaciones capa a capa |

> 💡 **Dato clave**: el Feed-Forward (MLP) ocupa ~2/3 de todos los parámetros.
> La atención es pequeña en comparación. Cada neurona del FFN parece
> especializarse en recuperar hechos concretos.

**Tamaños más comunes en 2025-2026:**

| Etiqueta | Params reales | Modelos |
|----------|--------------|---------|
| 1-3B | 1.3-3B | TinyLLaMA, Phi-3, Gemma 2 |
| 7-8B | 6.7-8B | LLaMA 3, Mistral, Qwen 2.5 |
| 14B | 12.5-14B | LLaMA 2, CodeLLaMA |
| 30-34B | 30-34B | Yi-34B, DeepSeek-Coder |
| 70B | 65-72B | LLaMA 3 70B, Qwen 72B |
| 405B | ~405B | LLaMA 3.1 405B |
| 671B (MoE) | 671B total / 37B activos | DeepSeek V3/R1 |

### 🔬 Avanzado

**Arquitecturas y densidades:**

| Arquitectura | Params por capa de atención | Params por capa FFN |
|-------------|---------------------------|---------------------|
| LLaMA 7B (dense) | 4 × d_model² = 4 × 4096² ≈ 67M | 3 × d_model × d_ff = 3 × 4096 × 11008 ≈ 135M |
| DeepSeek V3 (MoE) | 4 × d_model² = 4 × 7168² ≈ 205M | n_experts × 3 × d_model × d_ff_per_expert |
| Qwen 2.5 72B (dense) | 4 × 8192² = 268M | 3 × 8192 × 24576 ≈ 604M |

En MoE, cada token solo activa un subconjunto de expertos (típicamente 2-8
de 64-256). Los parámetros totales son enormes, pero el coste por token es
solo el de los expertos activos.

---

## 4. Memoria: dónde vive el modelo

### 🟢 Para empezar

Un modelo de 7B parámetros en FP32 son **28 GB de números**. No caben en la
RAM de un móvil. Necesitas una GPU con suficiente VRAM.

Piénsalo como un libro gigante. Para leerlo (inferencia), necesitas tenerlo
abierto en la mesa. La mesa es la VRAM. Si el libro es muy grande, no cabe
en la mesa y tienes que ir a buscarlo a la estantería (RAM), que es mucho
más lento.

> 🎨 **Visualización web**: "Calculadora VRAM". Tres sliders:
> - Parámetros (1B → 405B)
> - Precisión (FP32 / FP16 / INT8 / INT4)
> - Contexto (1k → 128k tokens)
>
> Muestra: GB de pesos + KV Cache + total. Y abajo: "Esto cabe en: [lista de
> GPUs que lo soportan]" con semáforo 🟢🟡🔴.

### 🟡 A fondo

**Fórmula de peso en GB:**

```
Peso (GB) = Parámetros_numericos × Bytes_por_param / 1024³

  ≈ Params_en_miles_de_millones × Bytes_por_param
```

**Tabla completa de pesos según precisión:**

| Modelo | FP32 (4B) | FP16/BF16 (2B) | INT8 (1B) | INT4 (0.5B) | Q4_K_M (~0.55B) |
|--------|-----------|----------------|-----------|-------------|-------------------|
| 1.3B | 5.2 GB | 2.6 GB | 1.3 GB | 0.65 GB | ~0.9 GB |
| 3B | 12 GB | 6 GB | 3 GB | 1.5 GB | ~1.9 GB |
| 7B | 28 GB | 14 GB | 7 GB | 3.5 GB | ~4.2 GB |
| 8B | 32 GB | 16 GB | 8 GB | 4 GB | ~4.8 GB |
| 13B | 52 GB | 26 GB | 13 GB | 6.5 GB | ~7.5 GB |
| 34B | 136 GB | 68 GB | 34 GB | 17 GB | ~19.5 GB |
| 70B | 280 GB | 140 GB | 70 GB | 35 GB | ~40 GB |
| 405B | 1620 GB | 810 GB | 405 GB | 202.5 GB | ~240 GB |

### 🔬 Avanzado

**Formatos de precisión en detalle:**

```
FP32 (IEEE 754 single):
  [1 bit signo | 8 bits exponente | 23 bits mantisa]
  Rango: ±3.4×10³⁸, Precisión: ~7 dígitos decimales

FP16 (IEEE 754 half):
  [1 bit signo | 5 bits exponente | 10 bits mantisa]
  Rango: ±6.5×10⁴, Precisión: ~3 dígitos
  ⚠️ El rango pequeño causa overflow fácilmente → popularizó BF16

BF16 (Google Brain float):
  [1 bit signo | 8 bits exponente | 7 bits mantisa]
  Rango: ±3.4×10³⁸ (igual que FP32), Precisión: ~2 dígitos
  ✅ Perfecto para training porque el exponente amplio evita overflow

INT8 (cuantización simétrica):
  [1 bit signo | 7 bits valor]
  Mapea W_fp32 a W_int8:  W_int8 = round(W_fp32 / scale)
  scale = max(|W_fp32|) / 127

INT4:
  [1 bit signo | 3 bits valor] → 16 valores posibles
  Se suele empaquetar 2 INT4 en 1 byte
```

**GGUF quantization types en llama.cpp:**

| Tipo | Bits medio | Calidad relativa VS FP16 |
|------|-----------|--------------------------|
| Q2_K | ~2.56 | ~85% |
| Q3_K_M | ~3.35 | ~91% |
| Q4_K_M | ~4.5 | ~96% |
| Q5_K_M | ~5.5 | ~98% |
| Q6_K | ~6.5 | ~99% |
| Q8_0 | ~8.5 | ~99.5% |

---

## 2. Hardware: la realidad física

Esta es la sección más importante para **quitarle la magia**. Un LLM no es
más que un archivo de números que se mueven físicamente por cables de
silicio, a velocidades finitas, gobernados por un reloj.

### 🟢 Para empezar

**El modelo es un archivo**. Como un .mp3, como un .pdf.

Cuando ejecutas un LLM:
1. **El archivo (pesos) está en el disco** (SSD, NVMe)
2. **Se carga a VRAM** (la memoria de la GPU) — esto tarda segundos
3. **Cada token requiere mover TODOS esos pesos** desde VRAM hasta los
   núcleos de cómputo
4. **Ese movimiento tiene un límite de velocidad**: el bus de memoria

El bus de memoria es como una autopista. Cuantos más carriles (bits de
ancho), más datos caben por cada viaje. La frecuencia del reloj es la
velocidad a la que los coches (bits) circulan.

```
Ancho de banda = Ancho del bus × Frecuencia × Transferencias por ciclo

  =   carriles     ×    viajes/s    ×    paquetes/viaje
```

> 🎨 **Visualización web**: animación de autopista. El modelo es un camión
> con cajas (pesos). El bus son carriles. Cada carril lleva bits. La
> frecuencia es la velocidad del tráfico. Se ve cómo el throughput (tokens/s)
> cambia al variar carriles o velocidad.

### 🟡 A fondo — El bus de memoria

El bus de memoria conecta la VRAM (donde están los pesos) con los núcleos
de la GPU (donde se calculan las operaciones).

**Anchos de bus comunes en GPUs:**

| GPU | Bus (bits) | Tipo memoria | Frecuencia efectiva | Ancho de banda |
|-----|-----------|-------------|-------------------|---------------|
| RTX 4060 | 128-bit | GDDR6 | 17 Gbps | 272 GB/s |
| RTX 4060 Ti | 128-bit | GDDR6X | 18 Gbps | 288 GB/s |
| RTX 4070 | 192-bit | GDDR6X | 21 Gbps | 504 GB/s |
| RTX 4080 | 256-bit | GDDR6X | 22.4 Gbps | 716 GB/s |
| RTX 4090 | 384-bit | GDDR6X | 21 Gbps | 1008 GB/s |
| RTX 5090 | 512-bit | GDDR7 | 28-30 Gbps | ~1792 GB/s |
| RTX 3090 | 384-bit | GDDR6X | 19.5 Gbps | 936 GB/s |
| A100 | 5120-bit* | HBM2e | 2.4 Gbps | 2039 GB/s |
| H100 | 5120-bit* | HBM3 | 3.2 Gbps | 3352 GB/s |

> *HBM usa múltiples stacks apilados con interposer, creando un bus
> extraordinariamente ancho. No es un bus físico de 5120 cables, sino
> múltiples canales de 1024 bits funcionando en paralelo.

**Cálculo del ancho de banda:**

```
GDDR6X (RTX 4090):
  BW = 384 bits × 21 Gbps ÷ 8 bits/byte
  BW = 384 × 21 × 10⁹ ÷ 8
  BW = 1.008 × 10¹² bytes/s
  BW = 1008 GB/s ✓

GDDR7 (RTX 5090, estimado):
  BW = 512 bits × 28 Gbps ÷ 8
  BW = 1792 GB/s

DDR5-4800 (CPU):
  BW = 64 bits × 4800 MT/s ÷ 8
  BW = 38.4 GB/s (un canal)
  Típicamente 2 canales → ~76.8 GB/s
```

**¿Qué significa esto físicamente?**

- Una RTX 4090 mueve **1 TB de datos cada segundo** entre VRAM y núcleos
- En el tiempo que parpadeas (100 ms), ha movido ~100 GB
- Pero un modelo de 7B en Q4 pesa ~4.2 GB
- Por tanto, **cada segundo puede cargar el modelo completo ~240 veces**
- **Ese es el límite: ~240 tokens/s**

### 🔬 A fondo — Jerarquía de memoria y ciclos de reloj

**La jerarquía completa de memoria en una GPU:**

```
Nivel             │ Tamaño típico │ Latencia │ BW         │ Quién
──────────────────┼───────────────┼──────────┼────────────┼────────────
Registros (SRAM)  │ 256 KB / SM   │ ~1 ciclo  │ ~50 TB/s  │ Cada thread
L1 Cache (SRAM)   │ 128 KB / SM   │ ~10 ciclos│ ~30 TB/s  │ Bloque SM
L2 Cache (SRAM)   │ 6-12 MB total │ ~50 ciclos│ ~5 TB/s   │ Global
HBM / VRAM        │ 8-80 GB       │ ~200 ciclos│ 1-3 TB/s │ Global
PCIe → RAM        │ Hasta CPU     │ ~1000 ciclos│ 32 GB/s  │ CPU host
NVMe / SSD        │ TB            │ ~10⁶ ciclos│ 7 GB/s   │ Almacén
```

**Un ciclo de reloj en una GPU moderna:**

```
RTX 4090: reloj base ~2.23 GHz
  1 ciclo = 1 / 2.23×10⁹ ≈ 0.45 nanosegundos
  La luz recorre 13.5 cm en ese tiempo

Para cargar 4 bytes desde VRAM a un núcleo:
  1. Dirección viaja por bus de direcciones: ~10 ciclos
  2. VRAM busca los datos: ~50-100 ciclos (CAS latency)
  3. Datos viajan por bus de datos: ~20-50 ciclos
  4. Pasan por L2, L1: ~10-20 ciclos
  Total: ~200 ciclos

  → Cargar 4 bytes (FP32) desde VRAM tarda ~90 nanosegundos
  → Una multiplicación tarda 1-4 ciclos

  Ratio: mover datos cuesta ~50-200× más que computar
```

**¿Por qué la inferencia es memory-bound y no compute-bound?**

```
Para 1 token con un modelo 7B FP16:

  Pesos VRAM a cargar: 14 GB
  Operaciones aritméticas: ~14 GFLOP (aprox 1 por parámetro)

  Tiempo de carga (BW 1008 GB/s): 14 GB / 1008 GB/s = 13.9 ms
  Tiempo de cómputo (82 TFLOPS): 14G / 82T = 0.17 ms

  ➜ 98.8% del tiempo es mover datos
  ➜ 1.2% del tiempo es calcular

  ¡Es un ejercicio de logística, no de matemáticas!
```

**Memory Wall:** desde 2005, los CPUs/GPUs duplican su capacidad de cómputo
cada ~2 años, pero el ancho de banda de memoria solo crece ~15% anual. Cada
año estamos más limitados por memoria.

### 🔬 Ultra — Organización de una GPU

```
GPU (ej: AD102 de RTX 4090)
├── 11 GPC (Graphics Processing Clusters)
│   └── 6 TPC (Texture Processing Clusters) cada uno
│       └── 2 SM (Streaming Multiprocessors) cada uno
│           ├── 128 CUDA Cores  ← aquí se hacen las operaciones
│           ├── 4 Tensor Cores  ← aquí se hacen operaciones matriciales
│           ├── L1/Shared Memory (128 KB)
│           ├── 65536 Registros (256 KB)
│           └── Warp Scheduler (lanza instrucciones)

Total RTX 4090:
  - 128 SM × 128 CUDA cores = 16384 CUDA cores
  - 128 SM × 4 Tensor Cores = 512 Tensor Cores
  - L2 Cache: 72 MB
  - VRAM: 24 GB GDDR6X
  - Bus: 384-bit

Cada SM ejecuta en grupos de 32 threads (warp):
  - Los 32 threads ejecutan la MISMA instrucción
  - Si hay un if/else divergente, unos threads esperan
  - Ideal: cargas masivas de datos, misma operación para todos
```

**Tensor Cores vs CUDA Cores:**

```
Multiplicación de matrices 4×4 en FP16:
  CUDA Core:  16 operaciones individuales (16 ciclos)
  Tensor Core: 1 operación matricial (1 ciclo)
  ➜ 16× más rápido

Para inferencia de LLMs:
  - CUDA Cores: atención (softmax, normalizaciones)
  - Tensor Cores: matmuls de las proyecciones Q,K,V,O, FFN
  - El ~90% del tiempo se va en matmuls → Tensor Cores
```

> 🎨 **Visualización web**: "Tour virtual de una GPU". Diagrama interactivo
> donde puedes hacer zoom: Chip → GPC → SM → CUDA Core / Tensor Core.
> Muestra las memorias (Registros → L1 → L2 → VRAM) y cómo viaja un peso.

---

## 5. Arquitectura Transformer — visión global

### 🟢 Para empezar

El Transformer es una **fábrica con estaciones de trabajo dispuestas en
cadena**. Cada estación transforma los datos y los pasa a la siguiente.

```
Entrada → [Tokenizar] → [Embedding] → [Capa 1] → [Capa 2] → ... → [Capa N] → [Salida]
```

Cada **Capa** (Transformer Block) tiene 2 estaciones:

1. **Atención**: cada palabra "mira a las demás" para entender contexto
2. **Feed-Forward**: cada palabra "piensa en lo que ha visto"

Y al final, una **estación de salida** convierte los vectores en
probabilidades para elegir la siguiente palabra.

### 🟡 A fondo — Diagrama de una capa

```
     ┌─────────────────────────────────────┐
     │         ENTRADA (x)                 │
     │    [seq_len × d_model]              │
     └────────────┬────────────────────────┘
                  │
                  ▼
     ┌──────────────────────┐
     │     RMSNorm          │  ← normalización
     └────────────┬─────────┘
                  │
                  ▼
     ┌─────────────────────────────────────┐
     │  Multi-Head Self-Attention          │
     │                                     │
     │  Q = x · W_Q   [d_model → d_model] │
     │  K = x · W_K   [d_model → d_model] │
     │  V = x · W_V   [d_model → d_model] │
     │                                     │
     │  heads = split(Q,K,V, n_heads)     │
     │  for each head:                     │
     │    attn = softmax(Q·K^T/√d_k)·V     │
     │                                     │
     │  out = concat(heads) · W_O          │
     └────────────┬────────────────────────┘
                  │
                  ▼
     ┌──────────────────────┐
     │  Residual: x + out   │  ← la conexión que salva el gradiente
     └────────────┬─────────┘
                  │
                  ▼
     ┌──────────────────────┐
     │     RMSNorm          │
     └────────────┬─────────┘
                  │
                  ▼
     ┌─────────────────────────────────────┐
     │  Feed-Forward (SwiGLU)              │
     │                                     │
     │  gate = SiLU(x · W_gate)            │
     │  up   = x · W_up                    │
     │  hidden = gate × up                 │
     │  out   = hidden · W_down            │
     │                                     │
     │  d_model → d_ff → d_model           │
     │  (d_ff ≈ 4 × d_model en la práctica)│
     └────────────┬────────────────────────┘
                  │
                  ▼
     ┌──────────────────────┐
     │  Residual: x + out   │
     └────────────┬─────────┘
                  │
                  ▼
     ┌──────────────────────┐
     │        SALIDA        │
     │   (misma forma)      │
     └──────────────────────┘
```

### 🔬 Avanzado

**Parámetros clave por tamaño de modelo:**

| Modelo | d_model | n_layers | n_heads | d_ff | d_head | n_params |
|--------|---------|----------|---------|------|--------|----------|
| TinyLLaMA 1.1B | 2048 | 22 | 16 | 5632 | 128 | 1.1B |
| LLaMA 3.2 3B | 3072 | 28 | 24 | 8192 | 128 | 3.2B |
| LLaMA 3.1 8B | 4096 | 32 | 32 | 11008 | 128 | 8.0B |
| Mistral 7B | 4096 | 32 | 32 | 14336 | 128 | 7.3B |
| Qwen 2.5 14B | 5120 | 48 | 40 | 13696 | 128 | 14.3B |
| LLaMA 3 70B | 8192 | 80 | 64 | 22016 | 128 | 70.6B |
| DeepSeek V3 (MoE) | 7168 | 67 | 64 | 2048×256 (MoE) | 128 | 671B |

**Fórmula de total de parámetros (LLaMA-like):**

```
Total = vocab × d_model                     (embedding + LM head, compartidos o no)
      + n_layers × 4 × d_model²             (attention: Q,K,V,O)
      + n_layers × 3 × d_model × d_ff       (FFN: gate, up, down)
      + n_layers × 2 × d_model              (2× RMSNorm por capa)
      + 1 × d_model                         (RMSNorm final)
```

---

## 6. Tokenización: de texto a números

### 🟢 Para empezar

El modelo solo entiende números. El tokenizador convierte texto en una
secuencia de IDs numéricos.

```
"Me gusta la IA" → [492, 8912, 492, 45231]

Cada ID = una "subpalabra" del vocabulario del modelo.
```

**¿Qué es una subpalabra?** Palabras muy comunes son un solo token. Palabras
raras se dividen en partes más pequeñas.

```
"gato" → ["gat", "o"]  (si "gat" aparece mucho en el corpus)
"transformers" → ["transform", "ers"]
"estaba" → ["est", "aba"]
"ChatGPT" → ["Chat", "G", "PT"]  (palabra nueva → se fragmenta)
```

> 🎨 **Visualización web**: textarea donde escribes texto y se colorea cada
> token con un color. Al hacer hover sobre un token, muestra su ID numérico.

### 🟡 A fondo

**Byte-Pair Encoding (BPE):**

1. Normalización Unicode (NFKC: Ñ → N~, etc.)
2. Pre-tokenización: split por espacios y signos de puntuación
3. Añadir tokens del byte-level (256 tokens base)
4. Fusionar iterativamente los pares más frecuentes:
   - Contar todos los pares (tokens adyacentes) en el corpus
   - Fusionar el par más frecuente en un nuevo token
   - Repetir hasta alcanzar el tamaño de vocabulario deseado

```
Corpus: "aa ab aa ab" (simplificado)
Vocabulario inicial: [a, b]

Iteración 1: par "a a" aparece 4 veces → añadir token "aa"
Iteración 2: par "aa a" (de "aa a b") → fusionar...
...
Vocabulario final: [a, b, aa, ab, aa_, ...] + espacio de bytes
```

**Vocabularios por modelo:**

| Modelo | Tamaño vocab | Tokenizador |
|--------|-------------|-------------|
| LLaMA 2/3 | 32,000 | BPE (SentencePiece) |
| LLaMA 3.1 | 128,000 | BPE (tiktoken) |
| Qwen 2.5 | 151,936 | BPE (tiktoken) |
| DeepSeek V2/V3 | 102,400 | BPE (HuggingFace) |
| GPT-4 | ~100,000 | BPE (tiktoken cl100k_base) |

**Longitud de tokens por idioma (efecto en coste):**

```
"The cat is on the table" → 7 tokens
"El gato está sobre la mesa" → 8 tokens   (ligeramente peor ratio)
"一只猫在桌子上" → 5 tokens                 (chino: muy eficiente)
"Un gato está encima de la mesa" → 10 tokens (español verboso)
```

El tokenizador afecta directamente al **coste** porque el precio de APIs y
el contexto máximo se miden en tokens.

### 🔬 Avanzado

**SentencePiece vs tiktoken:**

- **SentencePiece** (LLaMA 2): entrena directamente sobre texto raw, sin
  pre-tokenización. Soporta BPE y unigram LM.
- **tiktoken** (GPT-4, LLaMA 3.1): pre-tokenización con regex
  (patrón GPT-2 mejorado), luego BPE. Más rápido, mejor manejo de
  espacios y números.

**Bytes-to-BPE (BBPE):** cuando un carácter no está en el vocabulario
(emojis, caracteres raros), se descompone en bytes UTF-8 individuales.

```
"🤖" → bytes: F0 9F A4 96 → [198, 154, 157, 145] (token IDs)
```

Esto garantiza que cualquier string se puede tokenizar, pero multiplica
la longitud para caracteres no latinos.

---

## 7. Embeddings: el espacio semántico

### 🟢 Para empezar

Un embedding es un **mapa**. Cada palabra tiene una coordenada en un espacio
de muchas dimensiones. Palabras con significado parecido tienen coordenadas
cercanas.

```
Espacio 2D (simplificado para visualizar):
        │
  "casa"│ "hogar"
        │
    "perro"    "gato"
        │
  ──────┼────────────── "león" → por aquí estarían felinos grandes
        │
        │
        │ "coche"  "auto"
        │
```

En realidad es 4096 dimensiones. No podemos visualizarlo, pero la idea es
la misma: **cercanía en el espacio = similitud semántica**.

> 🎨 **Visualización web**: "Word2Vec playground". Campo para escribir
> palabras, se proyectan en 2D/3D con PCA/t-SNE. Se ven los clusters
> semánticos. Animación de "rey - hombre + mujer = reina".

### 🟡 A fondo

La capa de embedding es una matriz E de tamaño `[vocab_size × d_model]`.

```
Token ID 492 (ej: "gato") → E[492] → vector de 4096 números:
  [0.21, -0.15, 0.83, 0.04, ..., -0.55]

Toda la secuencia:
  "El gato está sobre la" → [5 × 4096] matrix
```

**Operaciones con embeddings:**

```
vector("gato") - vector("mascota") ≈ vector("felino")
vector("Madrid") - vector("España") + vector("Francia") ≈ vector("París")
```

Estos patrones emergen naturalmente durante el entrenamiento. No se
programan explícitamente.

**Weight Tying:** en muchos modelos, la matriz de embedding (input) y la
de salida (LM Head) comparten los mismos pesos. Esto reduce parámetros y
mejora la calidad porque fuerza simetría entre cómo se reciben y cómo se
emiten los tokens.

### 🔬 Avanzado

**Teoría de espacios semánticos:**
- Los embeddings capturan la **distribución contextual** de las palabras
  (hipótesis distribucional de Harris: "palabras en contextos similares
  tienen significados similares")
- La dimensión d_model es un hiperparámetro crítico: muy pequeña → el modelo
  no tiene capacidad para separar conceptos; muy grande → overfitting

**Proyecciones en la práctica:**
- PCA a 2D captura ~5-15% de la varianza total
- t-SNE/UMAP capturan estructura local pero globalmente distorsionan
- En 4096D, dos vectores aleatorios en [-1,1] tienen una distancia coseno
  cercana a 0 (ortogonalidad accidental rara en alta dimensionalidad)

---

## 8. Atención: el núcleo

### 🟢 Para empezar

La atención es el mecanismo que permite a cada palabra **mirar a las demás**
para entender el contexto.

**Analogía**: estás en una fiesta y alguien dice "¡mira eso!". No sabes qué
es "eso" hasta que ves hacia dónde mira. Eso es la atención: cada palabra
mira a las demás para entender qué significan en este contexto.

```
"El banco cerró la cuenta"

"banco" mira a "cerrÓ" y "cuenta" → banco = entidad financiera
vs.

"Me senté en el banco del parque"

"banco" mira a "senté" y "parque" → banco = asiento
```

> 🎨 **Visualización web**: heatmap de atención. El usuario escribe una
> frase, cada palabra se muestra como fila y columna. El brillo de cada
> celda = peso de atención. Se ve cómo "banco" atiende fuertemente a
> "cuenta" o a "parque" según contexto.

### 🟡 A fondo

**Scaled Dot-Product Attention:**

Para cada token, creamos tres vectores:
- **Q (Query)**: "¿qué estoy buscando?"
- **K (Key)**: "¿qué información tengo?"
- **V (Value)**: "¿qué información doy?"

```
Score = Q · K^T           ← similitud entre cada par de tokens
Scale: / √d_k             ← evitar que scores crezcan con dimensión
Mask (causal): −∞ para tokens futuros ← en autoatención causal
Softmax: normalizar a [0,1]
Output: scores × V         ← suma ponderada de valores
```

**Ejemplo numérico simplificado:**

```
Tokens: ["Yo", "como", "fruta"]
d_head = 2 (simplificado)

Q = [[1, 0], [0, 1], [1, 1]]   → cada token pregunta algo
K = [[1, 0], [0, 1], [1, 0]]   → cada token ofrece algo

Scores = Q · K^T
  Yo     como   fruta
[[ 1.0,   0.0,   1.0 ],    → "Yo" se relaciona con "Yo" y "fruta"
 [ 0.0,   1.0,   0.0 ],    → "como" solo consigo mismo
 [ 1.0,   1.0,   1.0 ]]    → "fruta" se relaciona con todos

/√2 ≈ /1.41:
[[0.71, 0,    0.71],
 [0,    0.71, 0   ],
 [0.71, 0.71, 0.71]]

Softmax por filas:
[[0.50, 0.25, 0.25],     ← "Yo" se mira a sí mismo y a "fruta"
 [0.25, 0.50, 0.25],     ← "como" es más autoreferente
 [0.33, 0.33, 0.33]]     ← "fruta" se distribuye equitativamente

V = [[1,0], [0,1], [0,0]]
Output = scores × V:
  "Yo":    0.50×[1,0] + 0.25×[0,1] + 0.25×[0,0] = [0.50, 0.25]
  "como":  0.25×[1,0] + 0.50×[0,1] + 0.25×[0,0] = [0.25, 0.50]
  "fruta": 0.33×[1,0] + 0.33×[0,1] + 0.33×[0,0] = [0.33, 0.33]
```

**Multi-Head Attention:** en lugar de una atención, hacemos h en paralelo.

```
7B: h=32 cabezas, d_head=128
  → 32 atenciones paralelas
  → Cada cabeza aprende un tipo de relación diferente:
    - Cabeza 1: relaciones sintácticas (sujeto-verbo)
    - Cabeza 2: relaciones anafóricas (pronombre → referente)
    - Cabeza 3: patrones posicionales (qué palabra va antes de qué)
    - Cabeza 4: relaciones semánticas profundas
    - Cabeza 5-8: relaciones de negación, condición...
```

**Atención Causal (masking):** en autoregresión, un token no puede "ver" a
los tokens futuros. Se aplica una máscara triangular.

```
Máscara causal para 5 tokens:
[1, 0, 0, 0, 0]   → token 1 solo se ve a sí mismo
[1, 1, 0, 0, 0]   → token 2 ve tokens 1 y 2
[1, 1, 1, 0, 0]   → token 3 ve tokens 1,2,3
[1, 1, 1, 1, 0]
[1, 1, 1, 1, 1]   → token 5 ve todos (es el último)
```

### 🔬 Avanzado

**Variantes de atención en modelos modernos:**

| Tipo | Ratio K,V compartidas | Ahorro KV Cache | Modelos |
|------|----------------------|-----------------|---------|
| MHA (Multi-Head) | 1:1 (cada cabeza su propio K,V) | 1× | GPT-2, LLaMA 1 |
| GQA (Grouped Query) | 8 queries → 1 par K,V | 8× | LLaMA 2/3, Mistral |
| MQA (Multi-Query) | todas las queries → 1 par K,V | 32× | Falcon, PaLM |
| MLA (Multi-Latent) | compresión latente de K,V | ~10× | DeepSeek V2/V3 |

**FlashAttention:** optimización de memoria que:
- No materializa la matriz de atención completa (N²)
- Procesa por bloques (tiling)
- Usa memoria compartida del SM (mucho más rápida que VRAM)
- Logra 2-4× más velocidad y usa mucha menos VRAM

---

## 9. Feed-Forward: la memoria del conocimiento

### 🟢 Para empezar

Si la atención decide **qué información** considerar, el Feed-Forward decide
**qué hacer con ella**. Cada token pasa por una red de neuronas que lo
transforma, consultando el "conocimiento almacenado" del modelo.

```
Entrada → [Expansión 4×] → [Activación] → [Compresión] → Salida
```

Es como preguntar a un experto:
1. Le das la información (entrada)
2. El experto consulta su memoria (expansión)
3. Filtra lo relevante (activación)
4. Te da una respuesta elaborada (compresión)

### 🟡 A fondo

En LLaMA y modelos modernos se usa **SwiGLU** (una variante de GLU con
activación SiLU):

```
RMSNorm(x)   → normalización

x · W_up     → proyección UP: [d_model] → [d_ff]     (expansión)
x · W_gate   → proyección GATE: [d_model] → [d_ff]   (control)
SiLU(x_gate) × x_up   → activación elemento a elemento
resultado · W_down   → proyección DOWN: [d_ff] → [d_model] (compresión)
```

Donde `d_ff ≈ 4 × d_model` en la práctica (para 7B: 4096 → 11008).

**¿Qué hace realmente cada neurona del FFN?**

Se ha observado que neuronas individuales se especializan:

```
Neurona 5723: se activa con contextos relacionados a París
Neurona 8921: se activa con términos de programación
Neurona 1452: se activa con conceptos matemáticos
```

Eliminar una neurona específica puede eliminar la capacidad de hablar de
un tema concreto. Esto se llama **"surgical model editing"** y se usa para
corregir hechos sin reentrenar.

> 🎨 **Visualización web**: "Neuron Explorer". Mapa de activación del FFN
> para una frase concreta. Cada neurona es un punto que se ilumina más o
> menos. Se puede buscar un concepto (ej: "medicina") y ver qué neuronas
> se activan.

### 🔬 Avanzado

**Activaciones en modelos modernos:**

| Tipo | Fórmula | Usado en |
|------|---------|----------|
| ReLU | max(0, x) | GPT-1, modelos antiguos |
| GELU | x · Φ(x) (CDF gaussiana) | GPT-2, BERT |
| Swish/SiLU | x · σ(x) (σ = sigmoid) | LLaMA 1 |
| SwiGLU | SiLU(x·W_gate) × (x·W_up) | LLaMA 2/3, Mistral |
| GeGLU | GELU(x·W_gate) × (x·W_up) | PaLM |
| ReGLU | ReLU(x·W_gate) × (x·W_up) | Variantes |

SwiGLU requiere 3 matrices de peso en lugar de 2 (gate, up, down vs up, down
en MLP clásico). Añade ~50% más parámetros al FFN, pero la calidad mejora
lo suficiente para que compense.

---

## 10. Capa completa: el bloque Transformer

Diagrama completo de una capa con medidas reales (LLaMA 7B):

```
        ┌────────────────────────────┐
        │  x ∈ [seq_len × 4096]      │  ← activación de la capa anterior
        └────────────┬───────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  RMSNorm                   │  4096 params (escala)
        │  y = x / sqrt(mean(x²) + ε)│
        └────────────┬───────────────┘
                     │
                     ▼
        ┌──────────────────────────────────────────────────┐
        │  ATTENTION (4 matrices de 4096×4096 ≈ 67M params)│
        │                                                  │
        │  Q = x · W_Q    →  [s, 4096]                    │
        │  K = x · W_K    →  [s, 4096]                    │
        │  V = x · W_V    →  [s, 4096]                    │
        │                                                  │
        │  Reshape: [s, 32×128] → 32 cabezas [s, 128]     │
        │  for head in 32:                                 │
        │    attn = softmax(Q·K^T/11.3) · V   √128 = 11.3 │
        │  Concat + W_O    →  [s, 4096]                   │
        └────────────┬─────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  + x (residual)            │  → [s, 4096]
        └────────────┬───────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  RMSNorm                   │
        └────────────┬───────────────┘
                     │
                     ▼
        ┌──────────────────────────────────────────────────┐
        │  FFN (SwiGLU) (3 matrices ≈ 135M params)        │
        │                                                  │
        │  gate = SiLU(x · W_gate)    [4096→11008]        │
        │  up   = x · W_up           [4096→11008]         │
        │  hidden = gate × up        [11008]              │
        │  out   = hidden · W_down   [11008→4096]         │
        └────────────┬────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  + x (residual)            │
        └────────────┬───────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  x' ∈ [seq_len × 4096]    │  ← salida = entrada de la sig. capa
        └────────────────────────────┘
```

**32 capas como esta** en un modelo 7B.

---

## 11. Viaje completo de un token

### 🟢 Para empezar

Sigamos qué pasa realmente cuando envías un mensaje a un LLM.

```
Tú: "¿Cuál es la capital de Francia?"
          │
          ▼
    1. Tokenización: se convierte en IDs
          │
          ▼
    2. Embedding: cada ID → coordenada en espacio semántico
          │
          ▼
    3. 32 capas Transformer (×32 veces):
       a. Atención: cada palabra mira a todas las demás
       b. Feed-Forward: cada palabra procesa lo que ha visto
          │
          ▼
    4. Capa de salida: convierte vector → probabilidades
          │
          ▼
    5. Sampling: elige "París"
          │
          ▼
El modelo responde: "París"
          │
          ▼
    (y ahora se añade "París" al mensaje original y se repite)
```

### 🟡 A fondo — Traza numérica real

**Entrada:** "La capital de Francia es"

**Paso 0 — Tokenización:**

| Token original | ID | Fragmentos BPE |
|---------------|-----|----------------|
| "La" | 263 | Token completo |
| " capital" | 11432 | " cap" + "ital" |
| " de" | 315 | Token completo (común) |
| " Francia" | 45231 | Token completo (país común) |
| " es" | 592 | Token completo (verbo común) |

**Paso 1 — Embedding:**

```
Cada token ID → lookup en matriz E de [32000 × 4096]
  → vector de 4096 floats: [0.21, -0.15, 0.83, 0.04, ...]

Tensor de entrada al Transformer: [5 × 4096]
```

**Paso 2 — 32 capas Transformer:**

En cada capa, cada token pasa por atención y FFN:

```
Capa 1:
  Atención: "Francia" atiende fuertemente a "capital" (score: 0.85)
            "Francia" atiende débilmente a "La" (score: 0.02)
  FFN:      "Francia" activa neuronas de geografía/europa

Capa 2:
  ... patrones más complejos

...

Capa 32:
  El token "es" (posición 5) ha acumulado información contextual
  de toda la frase. Su vector representa "pregunta sobre capital de Francia".
```

**Paso 3 — LM Head y Softmax:**

```
logits = h_5 · W_head^T    [1 × 32000]

logits["París"]   = 15.3   ← dominante
logits["capital"] = 2.1
logits["Londres"] = -4.2
logits["Berlín"]  = -8.7
logits["rojo"]    = -12.7

softmax:
  P("París")   = exp(15.3) / Σ ≈ 0.91
  P("capital") = exp(2.1) / Σ  ≈ 0.05
  P("el")      = exp(0.5) / Σ  ≈ 0.02
  ...
```

**Paso 4 — Sampling (greedy):**

```
token_salida = argmax(P) = "París" (ID: 15624)
```

**Output del modelo:** "París"

### 🔬 Avanzado

**Propagación de errores numéricos:**

Cada operación en punto flotante introduce un error de redondeo. En FP16:
- Una suma puede perder ~0.001 de precisión
- Softmax: sumar 32000 exponenciales en FP16 requiere mucha precisión
  → se usa trick: exp(x - max(x)) para evitar overflow
  → en FP16 hay que tener cuidado con underflow de valores muy negativos

**El techo de información (information bandwidth):**
- d_model = 4096 vectores en FP16 = 8192 bytes por token
- 30-50 capas → ~300-600 KB de activaciones por token
- Pero la información útil que pasa entre capas es solo una fracción
- La atención "filtra" y "comprime" el contexto en cada capa

---

## 12. Bucle autoregresivo

### 🟢 Para empezar

**Un LLM genera un token cada vez.**

No es como una imagen que aparece entera. Es como alguien que escribe
letra por letra: cada nueva letra depende de todo lo que ha escrito antes.

```
Mensaje original: "La capital de Francia es"

Iteración 1: prompt = "La capital de Francia es"     → genera "París"
Iteración 2: prompt = "La capital de Francia es París" → genera "."
Iteración 3: prompt = "La capital de Francia es París." → genera "Es"
Iteración 4: prompt = "La capital de Francia es París. Es" → genera "una"
Iteración 5: prompt = "La capital de Francia es París. Es una" → "ciudad"
...
```

Cada iteración = **forward pass completo** del modelo.

> 🎨 **Visualización web**: animación tipo "cinta transportadora".
> El prompt entra, la máquina produce un token, ese token se añade al
> prompt, la cinta avanza, la máquina vuelve a procesar. Se ve cómo
> crece el contexto y cómo cada paso requiere el cómputo completo.

### 🟡 A fondo — El coste O(N²)

**Sin ninguna optimización:**

```
Paso 1: Forward([t1, t2, t3, t4, t5])    → t6
Paso 2: Forward([t1, t2, t3, t4, t5, t6]) → t7
...
Paso N: Forward([t1 ... t_{M+N}])        → t_{M+N+1}

Donde M = tokens de entrada, N = tokens de salida.

FLOPs totales ≈ Σ_{i=1}^{N} (M + i) × O(d_model²)
              ≈ N × (M + N/2) × O(d_model²)
              ≈ O(N × (M+N))   ← CUADRÁTICO en tokens generados
```

**Ejemplo concreto:**
```
M=50 tokens de prompt, N=100 tokens generados, d_model=4096:

FLOPs totales = 100 × (50+50) × 4096² = 100 × 100 × 16.7M = 167 GFLOP

Pero el 98% del tiempo es mover memoria, no computar.
Tiempo real ≈ 14 GB (pesos) / 1008 GB/s × 100 pasos ≈ 1.4 segundos
```

### 🔬 Avanzado

**Speculative Decoding:** técnica para acelerar el bucle autoregresivo.

```
Idea: usar un modelo pequeño (draft model) para generar K tokens rápidamente,
luego el modelo grande (target model) los verifica en paralelo.

1. Draft (modelo pequeño, rápido): genera K tokens especulativos
2. Verify (modelo grande): procesa los K tokens en UN forward pass
   (paralelo, porque la atención puede ver todos a la vez)
3. Si todos son aceptados → ahorro de K-1 forward passes
   Si alguno es rechazado → retroceder y regenerar

Ahorro típico: 2-3× en velocidad.
```

---

## 13. KV Cache: la optimización

### 🟢 Para empezar

**El problema**: en cada paso del bucle, recalculamos las mismas cosas una
y otra vez. Los tokens del prompt original no cambian, pero los procesamos
cada vez.

**La solución**: guardar (cachear) las matrices K y V de cada token.
Cuando generamos un nuevo token, solo procesamos ese token nuevo y
reutilizamos lo guardado de los anteriores.

```
Sin KV Cache (ineficiente):     Con KV Cache (eficiente):
Paso 1: [A, B, C] → D           Paso 1: [A, B, C] → D → guardar K_A, V_A...
Paso 2: [A, B, C, D] → E        Paso 2: [D] → E → guardar K_D, V_D
Paso 3: [A, B, C, D, E] → F     Paso 3: [E] → F → guardar K_E, V_E
```

> 🎨 **Visualización web**: dos paneles lado a lado. Sin KV Cache vs Con KV
> Cache. Animación que muestra cómo sin cache se repinta todo el contexto,
> mientras que con cache solo se añade el nuevo token. Barra de coste
> (verde/rojo).

### 🟡 A fondo — Prefill y Decode

**Fase 1: Prefill** — procesar el prompt completo (paralelo)

```
Entrada: [t1, t2, ..., tM] (todos a la vez)
- Forward completo para todos los tokens
- Atención: matriz M×M
- Se genera el primer token de salida
- Se guarda K_i, V_i para todos los tokens en KV Cache

Coste: ~1 forward pass de tamaño M (rápido, ~50 ms para 100 tokens)
```

**Fase 2: Decode** — generar tokens uno a uno (serial)

```
Entrada: [t_{M+k}] (solo el nuevo token)
- Forward de UN SOLO token
- Q_{nuevo}: se calcula para el token nuevo
- K_{nuevo}, V_{nuevo}: se calculan y se añaden a la cache
- Atención: Q_{nuevo} mira a [K_cache + K_{nuevo}]
- FFN para el token nuevo

Coste: ~1 forward pass de tamaño 1 (rápido, ~5 ms por token)
```

**Ahorro:**

```
Para M=50, N=100 tokens:
  Sin KV Cache: forward de 50 + 51 + 52 + ... + 150 ≈ 10,050 unidades
  Con KV Cache: 1 prefill de 50 + 100 decodes de 1 ≈ 150 unidades
  Ahorro: ~98%
```

### El coste oculto: VRAM

La KV Cache ocupa mucha VRAM, proporcional a:

```
KV_Cache_bytes = 2 × n_layers × d_model × n_tokens × bytes_por_param

Para LLaMA 7B, 4096 tokens, FP16:
  = 2 × 32 × 4096 × 4096 × 2
  = 2.147 GB

Para 128k tokens (LLaMA 3.1 8B):
  = 2 × 32 × 4096 × 131072 × 2
  = 68.7 GB   ← más que el propio modelo (16 GB en FP16)
```

> 😱 **Para contexto largo, la KV Cache es el nuevo modelo.**

**Técnicas de compresión de KV Cache:**

| Técnica | Factor de ahorro | Cómo |
|---------|-----------------|------|
| GQA | 8× | 8 queries comparten 1 par KV |
| KV Cache quantization | 2× | Guardar KV en INT8 |
| Budget forcing | Variable | Solo guardar los últimos N tokens |
| H2O (Heavy Hitter) | 5× | Solo guardar tokens con alta atención |
| MLA (DeepSeek) | ~10× | Comprimir KV en espacio latente |

---

## 14. Velocidad: ancho de banda → tokens/s

### 🟢 Para empezar

**La velocidad a la que un LLM genera texto depende casi exclusivamente del
ancho de banda de memoria de tu GPU, no de lo rápida que sea haciendo
cálculos.**

Es como una fábrica embotellando agua:
- La línea de embotellado es rapidísima (TFLOPS)
- Pero el agua llega por una tubería estrecha (ancho de banda)
- El cuello de botella es la tubería, no la embotelladora

> 🎨 **Visualización web**: "Speed Calculator". Selector de GPU (RTX 4060,
> RTX 4090, A100, H100, M2 Ultra) y modelo (3B, 7B, 13B, 70B). Muestra
> tokens/s estimados con barra comparativa. Highlight: cuello de botella
> de memoria.

### 🟡 A fondo — La fórmula

```
tokens/s ≈ BW_memoria / (n_params × bytes_por_param)
```

**Tabla para modelo 7B (batch=1):**

| GPU | BW (GB/s) | FP16 (14 GB) | Q4_K_M (4.2 GB) | INT8 (7 GB) |
|-----|-----------|-------------|----------------|------------|
| RTX 4090 | 1008 | 72 t/s | 240 t/s | 144 t/s |
| RTX 4080 | 716 | 51 t/s | 170 t/s | 102 t/s |
| RTX 4070 | 504 | 36 t/s | 120 t/s | 72 t/s |
| RTX 4060 | 272 | 19 t/s | 65 t/s | 39 t/s |
| RTX 3090 | 936 | 67 t/s | 223 t/s | 134 t/s |
| A100 | 2039 | 146 t/s | 486 t/s | 291 t/s |
| H100 | 3352 | 239 t/s | 798 t/s | 479 t/s |
| M2 Ultra | 800 | 57 t/s | 190 t/s | 114 t/s |
| DDR5-4800 (CPU) | 50 | 3.6 t/s | 12 t/s | 7.1 t/s |

> ⚠️ Las velocidades reales suelen ser 60-80% de la teórica por overhead de
> atención, softmax, y normalización. llama.cpp logra ~70-80% de eficiencia.

**Tokens/s para modelos grandes (Q4_K_M):**

| GPU | 13B (7.5 GB) | 34B (19.5 GB) | 70B (40 GB) | 405B (240 GB) |
|-----|-------------|--------------|------------|--------------|
| RTX 4090 (24 GB) | 134 t/s | ❌ no cabe | ❌ no cabe | ❌ |
| 2× RTX 3090 | 125 t/s | 48 t/s | 23 t/s | ❌ |
| A100 80 GB | 270 t/s | 105 t/s | 51 t/s | 8.5 t/s |
| H100 (80 GB) | 447 t/s | 172 t/s | 84 t/s | 14 t/s |

**¿Qué significan estas velocidades?**

```
240 t/s → la respuesta aparece instantánea (como ChatGPT)
 50 t/s → se nota el parpadeo pero es cómodo
 10 t/s → visiblemente lento, esperas a que termine
  2 t/s → doloroso, cada palabra tarda medio segundo
```

### 🔬 A avanzado

**¿Por qué el ancho de banda y no los TFLOPS?**

```
Modelo 7B FP16: 14 GB de pesos
GPU RTX 4090:   1008 GB/s, 82 TFLOPS

Por token:
  Leer pesos de VRAM: 14 GB / 1008 GB/s = 13.9 ms
  Operaciones: 14 GFLOP / 82 TFLOP = 0.17 ms

  → 98.8% del tiempo es I/O de memoria
  → 1.2% es cómputo real

Si la GPU fuera 10× más rápida en cómputo:
  → Velocidad pasaría de 72 t/s a 73 t/s  (casi nada)
```

**Batch Size > 1 (throughput):**

En servidores de producción, se usa batch size > 1 para atender a varios
usuarios simultáneamente:

```
Batch=1:  14 GB de pesos → 1 usuario     → 72 t/s
Batch=4:  14 GB de pesos → 4 usuarios    → 4 × 50 t/s = 200 t/s total
Batch=16: 14 GB de pesos → 16 usuarios   → 16 × 30 t/s = 480 t/s total
```

Aumentar batch reduce la velocidad individual pero aumenta el throughput
total. Los pesos se cargan una vez y el cómputo extra de atención se
amortiza.

**vLLM y PagedAttention:**
- Gestiona KV Cache como páginas de memoria virtual
- Elimina fragmentación → más requests simultáneas
- Comparte KV Cache entre requests con el mismo prefijo (Prompt Caching)
- Mejora el throughput 2-4× respecto a naive implementation

---

## 15. ¿Cómo se entrenan?

### 🟢 Para empezar

El entrenamiento es el proceso de **ajustar los millones de parámetros**
para que el modelo acierte la siguiente palabra.

Imagina a un estudiante (el modelo) que tiene que hacer un examen de
rellenar la palabra que falta en millones de frases. Cada vez que falla,
ajusta ligeramente sus "conexiones cerebrales" (parámetros) para acertar
la próxima vez.

**3 fases del entrenamiento moderno:**

1. **Pre-training**: aprende de Internet (billones de palabras)
2. **SFT (Supervised Fine-Tuning)**: aprende a conversar con ejemplos
3. **RLHF / GRPO**: aprende qué respuestas prefiere un humano

### 🟡 A fondo

**Pre-training (Next Token Prediction):**

```
Dataset: CommonCrawl + libros + artículos + código (~15T tokens)
Objetivo: predecir el siguiente token

Cada batch:
  1. Forward: calcula P(token_i | token_{<i}) para todos los tokens
  2. Loss: cross-entropy entre predicción y token real
  3. Backward: gradiente de la pérdida respecto a cada parámetro
     (regla de la cadena, backpropagation)
  4. Optimizer step: ajustar parámetros (AdamW)

Coste estimado:
  LLaMA 3 70B: ~6.4M GPU-hours en H100 (~3 meses con 3000 GPUs)
  Coste: ~$50-100M USD

Secuencia completa en cada paso:
                            ┌──────────┐
  input_ids ───────────────►│ Forward  │───► logits
                            └─────┬────┘
                                  │
                                  ▼
                            ┌──────────┐
                            │  Loss    │───► loss_value
                            └─────┬────┘
                                  │
                                  ▼
                            ┌──────────┐
          labels ──────────►│ Backward │───► gradients (∂loss/∂w)
                            └─────┬────┘
                                  │
                                  ▼
                            ┌──────────┐
                            │ Optimizer│───► actualizar pesos w'
                            └──────────┘
```

**SFT (Fine-tuning supervisado):**

```
Dataset: pares (instrucción, respuesta ideal) — ~100k-1M ejemplos
Objetivo: que el modelo imite las respuestas correctas

Ejemplo:
  Input: "Explica la fotosíntesis en una frase"
  Target: "Las plantas convierten luz solar en energía química"

Coste: horas o días en una GPU (vs meses para pre-training)
```

**RLHF / GRPO (Alineamiento):**

```
1. Generar varias respuestas para un prompt
2. Un reward model (modelo entrenado para evaluar) las puntúa
3. El LLM se ajusta para maximizar la recompensa esperada
   (PPO: Proximal Policy Optimization, o GRPO: Group Relative Policy Opt.)

GRPO (DeepSeek R1):
  - Genera un grupo de respuestas para el mismo prompt
  - Puntúa cada una
  - Actualiza el modelo para favorecer las mejor puntuadas
  - No necesita reward model externo (más eficiente que RLHF)
```

### 🔬 Avanzado

**Paralelismo de entrenamiento:**

| Tipo | Divide | Cuándo se usa |
|------|--------|---------------|
| DDP (Data Parallel) | Datos: cada GPU procesa batch distinto | Modelos que caben en 1 GPU |
| TP (Tensor Parallel) | Capas: parte la matriz entre GPUs | Modelos medianos (7-70B) |
| PP (Pipeline Parallel) | Capas: cada GPU tiene capas distintas | Modelos grandes |
| FSDP (Fully Sharded DP) | Parámetros: sharding de pesos, activaciones, gradientes | Alternativa a TP+PP |
| ZeRO (Stages 1-3) | Estados del optimizer, gradientes, parámetros | Base de FSDP |

**Training vs Inference cost:**

```
Training:
  - Forward + Backward + Optimizer step
  - Necesita almacenar activaciones (muchísima VRAM)
  - Necesita almacenar gradientes
  - Necesita almacenar estados del optimizer (Adam: 2× params)
  - Ej: LLaMA 70B training necesita ~500 GB de VRAM

Inference:
  - Solo Forward
  - No necesita gradientes ni optimizer states
  - Ej: LLaMA 70B inference en Q4_K_M necesita ~40+5 GB
  - Ratio: training cuesta 10-20× más que inference
```

---

## 16. ¿Por qué alucinan?

### 🟢 Para empezar

Los LLMs **no saben qué es verdad**. Solo saben qué palabra es más
probable estadísticamente.

Cuando un LLM dice algo falso con total confianza, es porque esa
secuencia de palabras era probable según su entrenamiento. No "miente"
porque no tiene intención. **Alucina**.

```
Prompt: "¿Cuándo descubrió Colón América?"
Correcto: "1492"
Pero si preguntas: "¿Qué tratado firmó Napoleón con la reina de Marte?"
El modelo podría decir algo como "El Tratado de Olympus Mons"
    porque "Tratado de..." + "Napoleón" + "Marte" → secuencia plausible
```

> 🎨 **Visualización web**: "The Hallucination Demo". Side-by-side:
> dos frases, una verdadera y otra falsa, y mostrar las distribuciones
> de probabilidad de los tokens. La falsa también tiene alta probabilidad
> porque sus piezas encajan estadísticamente.

### 🟡 A fondo

**Causas técnicas:**

1. **Next-token prediction no busca verdad**:
   El objetivo de entrenamiento es maximizar P(token | contexto).
   No hay penalización por falsedades, solo por baja probabilidad.

2. **Knowledge cutoff**:
   El modelo solo sabe lo que había en sus datos de entrenamiento.
   No tiene acceso a información nueva ni puede "buscar en Internet"
   (a menos que se le añadan herramientas).

3. **Overconfidence en colas de distribución**:
   Para preguntas raras, todas las opciones tienen baja probabilidad.
   Pero softmax siempre elige una, y suele hacerlo con confianza alta
   (entropía baja aunque la certeza objetiva sea baja).

4. **Memorización vs generalización**:
   Hechos muy frecuentes (fechas históricas comunes) se memorizan.
   Hechos raros se "reconstruyen" mezclando patrones similares.

5. **Ambigüedad del contexto**:
   "El banco..." sin más contexto: el modelo no sabe si es financiero
   o de parque. La distribución puede estar dividida 50/50.

**Soluciones parciales:**

| Técnica | Cómo ayuda |
|---------|-----------|
| RAG (Retrieval Augmented Generation) | Añadir búsqueda en base de datos antes de generar |
| Tool use | Dejar que el modelo ejecute código (cálculos) |
| Chain-of-Thought | Forzar razonamiento paso a paso (reduce errores) |
| Sampling con temperatura baja | Reduce creatividad (pero también variedad) |
| Verificación externa | Validar hechos contra fuentes externas |

### 🔬 Avanzado

**Métrica de calibración:**

La calibración mide si la confianza del modelo coincide con su precisión.

```
Perfect calibration: cuando el modelo dice P=0.9, acierta el 90% de las veces.

Expected Calibration Error (ECE) = Σ |accuracy(bin) - confidence(bin)|

Ejemplo: de todas las veces que el modelo asigna P=0.7, solo acierta el 40%
  → ECE = |0.4 - 0.7| = 0.3 (mal calibrado)
```

**Investigación sobre alucinaciones (2025-2026):**

- **Model editing**: modificar pesos específicos para corregir hechos falsos
  (ROME, MEMIT, FT)
- **Contrastive decoding**: restar la distribución de un modelo más pequeño
  para reducir tokens "demasiado obvios"
- **Entropy-based detection**: detectar alucinaciones midiendo la entropía
  de la distribución de atención

---

## 17. Ejemplo práctico completo

### 🟢 Para empezar — Escenario real

**Hardware:** RTX 4090 (24 GB VRAM, 1008 GB/s) + Ryzen 7950X + 32 GB DDR5
**Software:** llama.cpp + Qwen 2.5 7B Q4_K_M (4.2 GB)
**Prompt:** "Explica qué es un agujero negro en 3 frases"

### 🟡 A fondo — Las métricas

```
=== CARGA DEL MODELO ===
llama_model_loader: loaded 291 tensors (4.19 GB)
llama_kv_cache: allocated 0.12 GB for KV cache (initial, 1024 tokens)
VRAM total usada: ~4.5 GB (quedan ~19.5 GB libres)

=== PREFILL (procesar prompt) ===
Prompt: "Explica qué es un agujero negro en 3 frases"
Tokens de entrada: 10 tokens
Tiempo: 42 ms
→ 4.2 ms/token de entrada

=== DECODE (generar respuesta) ===
Respuesta generada: 85 tokens
Velocidad media: 198 tokens/s
Tiempo total decode: 429 ms
→ 5.0 ms por token

Tiempo total: 42 + 429 = 471 ms
                   ↑ menos de medio segundo

=== COMPARATIVA CON OTRA PRECISIÓN ===
Mismo modelo en FP16 (14 GB):
  Cabe en VRAM? Sí (14 < 24)
  Velocidad: ~68 tokens/s
  Tiempo para 85 tokens: 1.25 segundos
  → Q4_K_M es 2.9× más rápido que FP16

=== SI USÁRAMOS CPU (DDR5-4800) ===
Velocidad: ~10 tokens/s
Tiempo para 85 tokens: 8.5 segundos
→ Diferencia: 471 ms vs 8.5s = 18× más lento
```

### 🔬 Avanzado — Perfilado detallado

**Distribución del tiempo por operación (decode):**

```
Qwen 7B Q4_K_M, RTX 4090, batch=1:

Operación                  │ Tiempo  │ %
───────────────────────────┼─────────┼─────
RMSNorm                    │ 0.05 ms │  1%
Q,K,V projections          │ 0.80 ms │ 16%
Attention (softmax,score)  │ 0.45 ms │  9%
Output projection (W_O)    │ 0.25 ms │  5%
FFN gate                   │ 0.60 ms │ 12%
FFN up                     │ 0.60 ms │ 12%
FFN down (cuantizado)      │ 1.20 ms │ 24%
Residual + overhead        │ 0.15 ms │  3%
Carga de pesos (dequant)   │ 0.90 ms │ 18%

Total por capa             │ 5.0 ms  │ 100%
×32 capas                   │ 160 ms  │ (esto sería sin pipeline)
Pero con pipeline GPU:     │ ~5 ms   │
```

---

## 18. Glosario visual rápido

| Término | Explicación corta |
|---------|------------------|
| **Parámetro** | Un número que el modelo aprendió. Hay miles de millones. |
| **d_model** | Tamaño del vector oculto (4096 para 7B, 8192 para 70B) |
| **n_heads** | Atenciones paralelas (32 para 7B, 64 para 70B) |
| **d_head** | d_model / n_heads (128 en casi todos) |
| **n_layers** | Bloques Transformer apilados (32-80) |
| **Contexto** | Ventana de tokens que el modelo puede "ver" |
| **KV Cache** | Memoria que evita recalcular atención en cada paso |
| **Prefill** | Procesar el prompt (rápido, en paralelo) |
| **Decode** | Generar token a token (lento, serial) |
| **Quantización** | Reducir precisión de los números para que pesen menos |
| **Ancho de banda** | Velocidad a la que la VRAM alimenta a los núcleos |
| **Bus de memoria** | Autopista de bits que conecta VRAM y GPU |
| **TFLOPS** | Operaciones matemáticas por segundo (no es el cuello de botella) |
| **Perplejidad** | Cuánto "sorprende" al modelo un texto (menor = mejor) |
| **Alucinación** | Decir algo falso con confianza (no es mentira, es estadística) |
| **RoPE** | Cómo el modelo sabe la posición de cada palabra |
| **SwiGLU** | La activación del FFN (SiLU × Gate) |
| **Speculative Decoding** | Usar un modelo pequeño para adivinar tokens antes del grande |

---

## 19. Referencias

**Papers fundacionales:**
- *Attention Is All You Need* — Vaswani et al. (2017)
- *Language Models are Unsupervised Multitask Learners* (GPT-2) — Radford et al. (2019)
- *Scaling Laws for Neural Language Models* — Kaplan et al. (2020)
- *Training Compute-Optimal Large Language Models* (Chinchilla) — Hoffmann et al. (2022)

**Modelos abiertos:**
- *LLaMA: Open and Efficient Foundation Language Models* — Meta (2023)
- *LLaMA 2: Open Foundation and Fine-Tuned Chat Models* — Meta (2023)
- *The Llama 3 Herd of Models* — Meta (2024)
- *DeepSeek-V2: A Strong, Economical, and Efficient MoE* — DeepSeek (2024)
- *DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL* — DeepSeek (2025)

**Hardware e inferencia:**
- *FlashAttention: Fast and Memory-Efficient Exact Attention* — Dao et al. (2022)
- *Efficient Memory Management for LLM Serving* (vLLM) — Kwon et al. (2023)
- *llama.cpp* — Gerganov et al. (2023-2026)
- *NVIDIA Ada GPU Architecture Whitepaper* — NVIDIA (2022)
- *H100 Tensor Core GPU Architecture* — NVIDIA (2022)

**Alineamiento y alucinaciones:**
- *Training Language Models to Follow Instructions with Human Feedback* (InstructGPT) — Ouyang et al. (2022)
- *Constitutional AI* — Anthropic (2023)
- *GRPO: Group Relative Policy Optimization* — DeepSeek (2025)

---

*Documento v2 — Hermes — Junio 2026*
*Próximo paso: spec.md → definición de stack y plan de implementación web*

> **Filosofía**: un LLM no es magia. Es matemáticas sobre silicio.
> El conocimiento cabe en números que viajan por autopistas de bits
> a velocidades finitas. Todo se puede medir, todo se puede explicar.
