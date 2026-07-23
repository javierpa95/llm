---
title: "POCKET: un modelo de 35B parámetros que corre en tu iPhone y en tu PC sin GPU"
date: 2026-07-23
source: "Hugging Face Blog"
source_url: "https://huggingface.co/blog/FINAL-Bench/pocket"
category: "modelos"
summary: "POCKET es un modelo MoE de 35B parámetros que activa solo ~3B por token, corre en iPhone, Android y PC sin GPU a 20 tok/s usando llama.cpp sin forks."
reading_time: "4 min"
tags: [moe, quantization, gguf, llama-cpp, local-ai, iphone, cpu-inference]
---

## 🧠 POCKET: un modelo de 35B parámetros que corre en tu iPhone y en tu PC sin GPU

POCKET es una familia de modelos cuantizados para ejecución en dispositivos personales, construida a partir de **Darwin-36B-Opus**, el modelo insignia de VIDRAFT. Lo extraordinario no es que sea grande — 34.66B de parámetros — sino que funciona como un **Mixture-of-Experts (MoE) sparse**: activa solo **~3B parámetros por token**, lo que mantiene el trabajo por token pequeño a pesar de que el archivo completo sea enorme.

### ¿Por qué importa?

El problema clásico de los modelos grandes en hardware de consumo es la **bandwidth de memoria**: un modelo denso de 27B lee todos sus pesos (~3.5 GB) en cada token. POCKET, al ser MoE, lee solo **~0.66 GB por token**. Esa diferencia se traduce directamente en velocidad: en la misma máquina, con llama.cpp sin modificaciones, POCKET genera **2.7× más rápido en CPU** y **2.2× más rápido en GPU** que el mejor modelo 1-bit de 27B, con calidad equivalente.

### Builds disponibles

| Dispositivo | Build | Tamaño | Calidad relativa |
|-------------|-------|--------|-----------------|
| PC sin GPU / mini-PC | POCKET-35B-Q2_K | 13 GB | 88% del original |
| Android | POCKET-KR-IQ2_M / POCKET-EN | ~5 GB | Expertos podados por idioma |
| iPhone / iPad / Mac | POCKET-KR-MLX | 5.1 GB | MLX nativo (Metal) |
| Server GPU (H100) | Cualquier build con -ngl 99 | — | ~197 tok/s |

La regla clave: **la RAM decide la calidad**. Con 16 GB puedes correr IQ1_M; con 32 GB, Q4_K_M — la calidad prácticamente se duplica. En un mini-PC AMD de 12 núcleos con 32 GB de RAM, POCKET alcanza **~20 tok/s sin tarjeta gráfica**, más rápido de lo que puedes leer.

### Detalles técnicos

El truco está en la **esparsidad MoE**: Darwin-36B-Opus tiene 96 expertos, pero solo activa un pequeño subconjunto por token. Esto significa que el modelo completo ocupa espacio en disco, pero el trabajo real por token es comparable a un modelo de 3B. La cuantización GGUF permite mixed-precision — algo que MLX nativo no soporta — lo que habilita la versión en inglés para iPhone como GGUF ejecutable en PocketPal.

Un detalle revelador: el rival de tamaño similar **Ternary-Bonsai-27B-Q2_0** (7.2 GB) no carga en llama.cpp upstream — requiere el fork PrismML. POCKET funciona con la herramienta estándar.

### Elige tu build

- **PC sin GPU**: POCKET-35B-Q2_K (13 GB) — el build más recomendado
- **Android**: POCKET-EN o POCKET-KR según idioma (~5 GB)
- **iPhone/iPad**: POCKET-KR-MLX (5.1 GB) o POCKET-EN-GGUF vía PocketPal
- **Mac**: MLX nativo o GGUF
- **Server**: cualquier build con -ngl 99

Para empezar: descarga el GGUF correspondiente, ábrelo en LM Studio, Ollama o PocketPal, y ejecuta. Sin forks, sin CUDA, sin nube.
