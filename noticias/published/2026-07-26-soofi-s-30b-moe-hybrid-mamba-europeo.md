---
title: "Soofi S: consorcio europeo lanza modelo abierto de 30B con arquitectura híbrida Mamba-Transformer que domina benchmarks en alemán e inglés"
date: 2026-07-24
source: "The Decoder"
source_url: "https://the-decoder.com/german-ai-consortium-releases-soofi-s-an-open-30b-model-that-tops-benchmarks-in-both-english-and-german/"
category: "modelos"
summary: "Soofi S 30B-A3B es un modelo MoE europeo con arquitectura híbrida Mamba-2/Transformer que activa solo 3.2B parámetros por token y supera a OLMo 3 y Apertus 70B"
reading_time: "5 min"
tags: [soofi, moe, mamba, hybrid-architecture, european-ai, sovereign-ai, open-source]
---

## 🧠 Soofi S: infraestructura soberana europea con arquitectura híbrida

Un consorcio de investigación alemán coordinado por el **KI Bundesverband** (Asociación de IA de Alemania) ha lanzado **Soofi S 30B-A3B**, un modelo lenguaje abierto que combina arquitectura híbrida Mamba-2 con capas de atención tradicionales. Entrenado íntegramente en la nube de IA industrial de **Deutsche Telekom** en Múnich, Soofi S se posiciona como el primer gran modelo entrenado en infraestructura soberana europea con resultados de vanguardia.

### Arquitectura: MoE híbrida con KV cache reducido

Soofi S es un modelo **mixture-of-experts** con 31.6 mil millones de parámetros totales pero solo **3.2 mil millones activos por token**, lo que le da un coste computacional cercano a un modelo de 3B. La clave está en su arquitectura híbrida heredada de **NVIDIA Nemotron 3 Nano**:

- **52 capas totales**, pero solo **6 mantienen KV cache** (capas de atención)
- Las capas restantes usan **Mamba-2**, que no necesita cache lineal
- El resultado: **throughput constante de 4K a 256K tokens** de contexto

| Métrica | Soofi S | Modelos dense 14-24B |
|---------|---------|----------------------|
| Tokens/seg/GPU (40K ctx, 32 req) | ~8x más alto | Baseline |
| Caída throughput a 256K ctx | Mínima | Severa |

### Datos de entrenamiento: 27T tokens con enfoque alemán

El entrenamiento se realizó en tres fases con **27 billones de tokens**:

1. **Fase 1** (~20T tokens): fundamentos de lenguaje con web, código, matemáticas
2. **Fase 2** (~6T tokens): fuentes de alta calidad para refinar patrones
3. **Fase 3**: extensión de contexto con documentos de hasta **1 millón de tokens**

El peso del alemán crece deliberadamente: del 7.2% en la fase 1 al **15.3% en la fase 2**, frente al ~5% combinado de todos los no-inglés en la receta de Nemotron. Las fuentes incluyen el corpus Genios con 193 millones de artículos de prensa alemana.

### Benchmarks: líder entre modelos completamente abiertos

En evaluación contra 16 modelos abiertos, Soofi S lidera en:

- **HumanEval**: 73.8% (mejor entre open-source)
- **MBPP**: 70.2% / **MBPP-DE**: 84.2%
- **INCLUDE-DE**: 61.2 puntos (empata con Qwen3.5 35B-A3B)
- **GPQA-Diamond**: mejora de +9.6 puntos sobre Nemotron base

Supera a **OLMo 3 32B** (Allen Institute) y **Apertus 70B** (ETH Zurich/EPFL) en aggregate scores tanto en inglés como en alemán.

### El incidente de contaminación: transparencia como fortaleza

Tras el lanzamiento, la comunidad descrió que el dataset **QA-base** incluía preguntas re-formuladas del test de **GPQA Diamond**, incluido el subconjunto de ciencia. La causa: en Hugging Face, GPQA no tiene split de entrenamiento separado — todo está bajo la etiqueta "train". El pipeline de datos选取选取了这些内容以为是 ejercicios.

El consorcio:
- Eliminó GPQA de la evaluación y recalculó todos los resultados
- Confirmó que el ranking no cambió
- Puso a disposición **152,000 resultados individuales** para verificación
- Una evaluación independiente por **Ellamind** con datos de prueba reservados confirmó los resultados

Según Nicolas Flores Herr de Fraunfofer IAIS, este incidente demuestra que **el enfoque abierto funciona**: solo fue posible detectar el problema porque los datos son públicos.

### Contexto: escalado MoE vs. leyes de Chinchilla

Críticos señalaron que Soofi S está "sobre-entrenado" según las leyes de Chinchilla clásicas (~20 tokens/param). Con 27T tokens y 3.2B activos, la proporción llega a miles a uno. Pero el liderazgo técnico argumenta que **las leyes de escalado densas no aplican directamente a MoE**: los expertos individuales se benefician de ver los mismos documentos repetidamente.

### El modelo más grande ya está en entrenamiento

El consorcio — que incluye Fraunhofer IAIS/IIS, DFKI, TU Darmstadt, Universidad de Würzburg y empresas como Ellamind y Merantix — planea liberar las variantes **instruct y reasoning** en las próximas semanas bajo licencia permisiva. El modelo **Soofi L** (más grande) ya está en entrenamiento.

---

**Fuentes**: [The Decoder](https://the-decoder.com/german-ai-consortium-releases-soofi-s-an-open-30b-model-that-tops-benchmarks-in-both-english-and-german/) · [Tech Report v3](https://soofi.ai) · [Hugging Face](https://huggingface.co/soofi)
