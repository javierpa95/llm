---
title: "🧠 Kolibri-1: Aleph Alpha libera su MoE europeo de 78B con 3,46B activos, Apache 2.0 y contexto nativo de 262K"
date: 2026-10-04
source: "Aleph Alpha / Hugging Face"
source_url: "https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/"
category: "modelos"
summary: "Aleph Alpha publica Kolibri-1: MoE de 78B con 3,46B activos, Apache 2.0, pesos FP8 de ~78 GB y 262K de contexto nativo. Entrenado con 768 B200 en 21 días y ~950 MWh."
reading_time: "5 min"
tags: [moe, open-weights, aleph-alpha, apache-2, german, sovereign-ai, fp8, inferencia-local]
---

## 🧠 Un colibrí de 78B que bate el ala con el 4,4% de su cuerpo

El 3 de octubre, Día de la Unidad Alemana, **Aleph Alpha** publicó los pesos completos de **Kolibri-1** en Hugging Face bajo licencia **Apache 2.0**. No es una demo ni una API de pago: es un modelo de **78.103.074.560 parámetros totales** de los cuales solo **3.457.573.120 se activan por token** —el 4,4%—, bilingüe alemán-inglés, con razonamiento y tool calling, y pensado para correr en infraestructura propia.

El dato que resume el lanzamiento es ese porcentaje. Kolibri tiene la capacidad de almacenamiento de un modelo de 78B y el coste computacional por token de uno de 3,5B. Es la promesa del MoE llevada a un caso de uso muy concreto: **despliegues soberanos on-premise** en administración pública, industria y aeronáutica, donde los datos no pueden salir del servidor.

Aleph Alpha lo publica en un momento particular: la empresa se está integrando en **Cohere** tras un acuerdo del 16 de septiembre valorado en **500M€** con financiación del Schwarz Group, y cinco días antes del lanzamiento había dimitido su co-CEO Reto Spörri, quedando Ilhan Scheer al frente en solitario. El modelo, sin embargo, llega con la transparencia completa: pesos, informe técnico de 189 páginas, resumen de datos de entrenamiento y hasta la cifra de energía consumida.

## La arquitectura: 384 expertos, atención híbrida y Muon

Kolibri es un Transformer MoE de **50 capas** con una configuración poco habitual que merece leerse despacio:

| Componente | Especificación |
|---|---|
| **Parámetros totales** | 78.103.074.560 |
| **Activos por token** | 3.457.573.120 (4,4%) |
| **Expertos por capa** | 384 — **1 compartido + 6 enrutados** (top-6) |
| **Atención** | Ratio **4:1 SWA:GQA** (sliding window : grouped query) |
| **Optimizador** | **Muon** + *Exact Quantile Balancing* |
| **Tokenización** | Bilingüe alemán/inglés, diseñada de cero |

Dos detalles son los que hacen interesante el diseño. El primero: **la codificación posicional solo se aplica en las capas de ventana deslizante**. Como explica la ficha del modelo, eso permite extender el contexto «sin ningún escalado posicional, en principio a longitudes arbitrarias». El segundo: al entrenar solo con **dos idiomas en vez de muchos**, el equipo puede profundizar en ambos —21,3% de los tokens de preentrenamiento son alemán, con apenas un 6% de datos traducidos— en lugar de repartirse en cuero.

La consecuencia práctica de esa decisión de diseño la resume el propio equipo con una frase que debería caersele encima a cualquier hispanohablante que haya usado un LLM: Kolibri es *«bilingual by design, not an English model that has read some German»* —bilingüe por diseño, no un modelo inglés que ha leído algo de alemán—.

## El contexto: 16K → 66K → 262K, y un millón «si te atreves»

El entrenamiento del contexto se hizo en tres fases crecientes, una práctica cada vez más estándar:

1. **Preentrenamiento** a **16.384** tokens
2. **Mid-training** a **65.536** tokens
3. **Extensión de contexto largo** a **262.144** tokens —la longitud nativa

El máximo anunciado es de **1.048.576 tokens**, pero con una salvedad honesta que pocos modelos publican: los 262K son la longitud **nativa y recomendada**; llegar al millón exige flags explícitos de vLLM (`--max-model-len 1048576 --hf-overrides '{"max_position_embeddings": 1048576}'`). Para tareas sensibles a latencia o rendimiento, el propio modelo aconseja no pasar de 262K.

## Cómo se entrena: 768 B200, 21 días y 950 MWh

Este es el bloque que debería interesarle a cualquiera que esté construyendo infraestructura de entrenamiento, porque Aleph Alpha ha publicado las cifras exactas en la ficha del modelo:

| Fase | Duración | GPU-horas | Paralelismo |
|---|---|---|---|
| **Preentrenamiento** | 21 días (511 h) | **392.000 GPUh** | EP8 · FSDP16 · DP6 |
| **Mid-training** | 5 días | 90.000 GPUh | idéntico |
| **Contexto largo** | 13 h | 10.000 GPUh | FSDP128 · DP6 |
| **Total** | ~26 días | ~492.000 GPUh | **6,4e23 FLOPS** |

El hardware: **768 NVIDIA B200** organizados en 96 nodos HGX de 8 GPUs. Y la cifra que casi nunca se publica: un consumo energético estimado de **9,5 × 10² MWh** —unos 950 MWh—, incluyendo la potencia de los nodos y el sobrecoste del datacenter (PUE), aunque excluyendo SFT, RL y modelos de ablations.

El corpus de preentrenamiento son **20 billones de tokens** (en notación europea: 20 × 10¹²), repartidos en **62,5% inglés, 23,9% alemán y 13,6% código**, más 3,44 billones en mid-training y 201.000 millones para la fase de contexto largo.

## Del modelo al servidor: FP8, 78 GB y un plugin de vLLM

Kolibri viene cuantizado de fábrica a **FP8** (`float8_e4m3fn`) en bloques de 128×128 con activaciones cuantizadas dinámicamente y **KV cache en FP8**. Solo embeddings, LM head, normas y el router de expertos permanecen en BF16.

| Requisito | Valor |
|---|---|
| **Huella de memoria** | ~**78 GB** (pesos FP8) |
| **Mínimo** | 2× A100 80 GB · 2× H100 SXM5 · 1× H200 · 1× B200 · 1× B300 |
| **Recomendado** | 2× H100 SXM5 · 2× H200 · 1× B200 · 1× B300 |
| **Licencia** | **Apache 2.0** |

Es servible con vLLM, pero **no con un vLLM vanilla**: requiere el paquete `aleph-alpha-inference`, que instala el plugin dedicado con sus parsers de razonamiento y de tool calling.

```bash
pip install 'aleph-alpha-inference>=1'

vllm serve Aleph-Alpha/Kolibri-1 --kv-cache-dtype fp8 \
  --reasoning-parser kolibri1 \
  --tool-call-parser kolibri1 \
  --enable-auto-tool-choice
```

Los parámetros de muestreo recomendados son `temperature=1.0`, `top_p=0.97` y `top_k=128`. El modo de razonamiento se controla por chat template con `reasoning_effort` en **none / low / medium / high**, y el tool calling —estilo Hermes— se puede combinar con el razonamiento.

## Los números: fuertes en mates y código, matizados en tool use

Los benchmarks son **autoreportados por el vendor** —nadie los ha verificado de forma independiente todavía—, pero son consistentes y comparan contra tres rivales directos (Qwen3.6-35B-A3B, Nemotron 3 Super 120B-A12B y Mistral Small 4 119B-A6B):

| Benchmark | Kolibri-1 | Qwen3.6-35B-A3B | Nemotron 3 Super |
|---|---|---|---|
| **AIME 2025** | **96,9** | 84,6 | 91,7 |
| **AIME 2026** | **96,0** | 91,0 | 90,4 |
| **GPQA Diamond** | **84,3** | 83,4 | 78,0 |
| **LiveCodeBench v6** | **85,9** | 82,5 | 82,0 |
| **SWE-Bench Verified** | 66,4 | **73,8** | — |
| **BFCL v4 (tool use)** | 61,4 | **67,2** | 61,0 |
| **BrowseComp** | **29,4** | 26,9 | — |
| **AA-Omniscience (alucinación)** | −32,8 | **−15,3** | −36,5 |

La lectura honesta es que Kolibri **gana donde se le mide en mates, ciencia y código**, pero cede terreno donde importa mucho para un modelo de agentes: **tool calling** (61,4 frente al 67,2 de Qwen3.6) y, sobre todo, el **índice de alucinación** de Artificial Analysis, donde −32,8 queda muy por detrás del −15,3 de Qwen3.6 —cuanto más cercano a cero, mejor—. Su mejor baza es la τ³-bench de banca (38,1 vs 10,6 de Qwen3.6), un benchmark agéntico multi-turno donde la ventaja es aplastante.

El predecessor, **Kolibri Origin** (30,6B totales / 3,27B activos, contexto 65K, preentrenamiento terminado el 11 de junio de 2026), nunca se publicó: sirvió para validar el pipeline y mostrar el salto —en AIME 2026, de 81,5 a 96,0—.

## Un caso de estudio sobre cómo se construye un modelo abierto

Más allá de las cifras, lo que hace valioso a Kolibri para este sitio es que la **transparencia es parte del producto**. Aleph Alpha publica el informe técnico completo, el resumen de datos según la plantilla de la Comisión Europea, la huella energética y hasta el commit del que se auto-generó la ficha del modelo («Savanna», su *Model Factory*). Es el tipo de apertura que pocos laboratorios europeos han ofrecido a esta escala, y llega en el momento justo: tras el acuerdo con Cohere, la comunidad quiere saber si los pesos seguirán siendo tan abiertos.

En el arco más amplio de modelos abiertos que hemos ido cubriendo —desde [[2026-09-07-ifm-k2-horizon-seis-modelos-open-source-apache-2|IFM K2 Horizon]] hasta [[2026-08-30-tencent-hy4-preview-moe-770b-contexto-1m|Hy4 Preview]] de Tencent—, Kolibri aporta algo distinto: no es el modelo más grande ni el más rápido, sino el que **documenta hasta la última decisión de arquitectura**. Y en un ecosistema donde [[2026-08-28-glm-5-3-flash-sin-nvidia-mit|GLM-5.3-Flash]] ya demostró que los MoE abiertos pueden correr sin GPUs Nvidia, la pregunta para un modelo de 78B ya no es si es ejecutable, sino a qué coste energético y con qué latencia.

---

**Fuentes:** [Blog de Aleph Alpha: Kolibri Has Landed](https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/) · [Ficha del modelo en Hugging Face](https://huggingface.co/Aleph-Alpha/Kolibri-1) · [Informe técnico (PDF)](https://aleph-alpha.com/downloads/tech-report.pdf) · [Repo de inferencia](https://github.com/Aleph-Alpha/aleph-alpha-inference) · [Resumen de datos (Comisión Europea)](https://aleph-alpha.com/downloads/data-summary.pdf)
