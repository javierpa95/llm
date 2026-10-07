---
title: "🔬 Olmo-core 3: Allen AI abre su infraestructura de entrenamiento MoE y escala a 2,38 billones de parámetros"
date: 2026-10-04
source: "Allen AI (Hugging Face Blog)"
source_url: "https://huggingface.co/blog/allenai/olmocore3"
category: "investigación"
summary: "Borrador. Olmo-core 3 rediseña el entrenamiento MoE de Allen AI: DDP en vez de FSDP, 2,7× throughput en B300, MXFP8 +21% y benchmarks hasta 2,38T de parámetros."
reading_time: "4 min"
tags: [moe, entrenamiento, allen-ai, olmo, open-source, mxfp8, infraestructura]
---

> **BORRADOR** — publicado en pending/ para revisión humana. Candidata relevante no publicada el 2026-10-04 (se priorizó Kolibri-1 de Aleph Alpha).

## La noticia

Allen AI publicó **Olmo-core 3** (1 oct 2026), una revisión importante de su framework de entrenamiento de LLM, con un sistema de entrenamiento MoE rediseñado de cero. Es la base de la próxima generación de modelos Olmo, que será MoE.

## Datos técnicos

| Métrica | Valor |
|---|---|
| Pool de expertos | de 8 a **128**, manteniendo 4 activos/token (~3,2B activos) |
| Capacidad total | de 4,6B a **47B** con < caída del 5% de throughput |
| Throughput (8× B300, 47B MoE) | **52.000 tok/s/GPU** vs 19.400 antes → **2,7×** |
| MXFP8 vs BF16 (4× B300) | **+21% throughput**, memoria pico de 103→95 GiB |
| Benchmark de escala | **1,2T** parámetros (58,36B activos) en 512 GPUs, **858 TFLOP/s/GPU** |
| Prueba con DeepEP v2 | hasta **2,38T** parámetros totales (test de capacidad, no entrenamiento sostenido) |

**Cambios de arquitectura de sistema:** de FSDP (gather/reshard de pesos por batch) a DDP con expertos residentes en GPU; *rowwise expert parallelism*; *GPU-resident routing*; *grouped GEMM*; y soporte de **MXFP8**.

**Técnicas de paralelismo:** expert parallelism + pipeline parallelism + distributed optimizer.

**Hallazgos del tech report (los interesantes para el sitio):**
- ***Token gerrymandering***: una métrica que premia el balance de routing puede mejorar mientras el balance real empeora.
- Bajar el learning rate de los expertos (por procesar menos tokens) **no mejoró** resultados.
- El tiempo de cálculo GPU varía con los **valores** procesados, no solo con las dimensiones de la matriz → las comparaciones de rendimiento necesitan valores de entrada coincidentes, no solo shapes.
- Superponer comunicación y cómputo en streams separados **no siempre** aceleró; en algunos tests lo ralentizó.

## Contexto

- Sucesor de OlmoE (MoE con 64 expertos enrutados) y de Olmo 3 (denso).
- No se han publicado cifras de cómputo totales (FLOPS) ni de consumo energético del entrenamiento — a diferencia de Kolibri-1, que sí los detalló.
- Competencia de referencia: NVIDIA Megatron-Core.
- Próximo Olmo será MoE, con el dataset más grande y la ventana de contexto más larga de la serie.

## Por qué es relevante para el sitio

Encaja con la sección de **Entrenamiento** y con la filosofía del proyecto: infraestructura abierta para que laboratorios pequeños puedan entrenar MoEs. El concepto de *token gerrymandering* es material didáctico de primera mano sobre fallos de diseño de métricas.

## Ángulo posible

«Por qué entrenar un MoE es más difícil de lo que parece» — usar los cuatro hallazgos negativos del tech report como columna vertebral, no solo los benchmarks positivos.

## Fuentes

- https://huggingface.co/blog/allenai/olmocore3
- https://allenai.org/papers/olmocore3 (tech report)
- https://github.com/allenai/olmo-core
- https://narrative.allen.ai/scaling-up-training (demo interactiva)

## Pendiente de verificar

- [ ] Confirmar fecha de publicación exacta del tech report en allenai.org
- [ ] Buscar cobertura adicional (The Decoder / VentureBeat) para datos de contexto
- [ ] Comprobar si ya hay benchmark independiente del throughput
