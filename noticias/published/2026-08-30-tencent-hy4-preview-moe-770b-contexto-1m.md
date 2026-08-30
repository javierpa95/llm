---
title: "Tencent lanza Hy4 Preview: el MoE abierto de 770B que activa solo 49B por token y llega a 1M de contexto"
date: 2026-08-30
source: "Simon Willison's Blog / Hugging Face (Tencent Hy Team)"
source_url: "https://huggingface.co/tencent/Hy4-preview"
category: "modelos"
summary: "Tencent publica bajo Apache 2.0 Hy4 Preview, su nuevo modelo MoE flagship de 770B de parámetros con 49B activos por token, contexto de 1M tokens, Gated DeepSeek Sparse Attention y una capa MTP integrada para speculative decoding."
reading_time: "3 min"
tags: [tencent, hunyuan, hy4, moe, open-weights, contexto-1m, speculative-decoding, sparse-attention, apache-2.0, ia-abierta]
---

Tencent ha publicado [**Hy4 Preview**](https://huggingface.co/tencent/Hy4-preview), la nueva generación de su modelo *flagship* bajo licencia **Apache 2.0**. Es un **Mixture-of-Experts (MoE)** de **770B de parámetros totales** de los que se **activan 49B por token**, con un **contexto nativo de 1M de tokens** —un salto muy por encima de su predecesor Hy3 (295B, 21B activos, 256K de contexto). El repositorio incluye también una versión cuantizada a **FP8**, y Simon Willison lo señaló como uno de los lanzamientos abiertos más destacados de la semana.

La arquitectura bebe directamente de las ideas recientes que dominan el estado del arte abierto. La atención usa **Gated DeepSeek Sparse Attention (DSA)** con **IndexCache** para reutilizar índices dispersos entre capas, y la vía residual recurre a **identity Hyper-Connections (iHC)** para ampliar el flujo de información entre capas. El backbone tiene 78 capas con **256 expertos enrutados + 1 experto compartido** (cada token activa los top-8 expertos). Además incluye **una capa MTP nativa de 10B** (0,7B activos) para **speculative decoding**, es decir, el modelo trae integrado el ahorro de latencia típicamente desplegado por separado en los servidores.

El resultado, según Tencent, es *"el mayor salto generación sobre generación medido"* en la familia, enfocado en **productividad**: mejor comprensión de código y tareas de desarrollo de larga duración, análisis de documentos y hojas de cálculo, generación de prototipos jugables en desarrollo de juegos e investigación científica (IA, dinámica molecular y física de la materia condensada). Con Hy4 Preview, la carrera de los **MoE abiertos gigantes** —junto a DeepSeek V4 Pro y Alibaba Qwen3.8-Max— suma a Tencent como un tercer contendiente chino que libera pesos de varios cientos de miles de millones con licencia permisiva.