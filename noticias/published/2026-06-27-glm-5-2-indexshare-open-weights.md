---
title: "GLM-5.2: el mejor modelo open-weight hoy, con IndexShare para atención escasa eficiente"
date: 2026-06-27
source: "Sebastian Raschka / Interconnects (Nathan Lambert)"
source_url: "https://sebastianraschka.com/blog/2026/glm-5-2-indexshare.html"
category: "modelos"
summary: "Z.ai lanza GLM-5.2, considerado el mejor modelo open-weight del momento. Incorpora IndexShare, una técnica que reutiliza el indexador de atención escasa cada 4 capas para abaratar la inferencia de 1M de tokens."
reading_time: "3 min"
tags: [glm, open-weight, modelos, atención-escasa, indexshare, contexto-largo, moe]
---

## Qué ha pasado

Z.ai ha lanzado **GLM-5.2**, la última versión de su familia de modelos open-weight. Tanto Sebastian Raschka como Nathan Lambert (Interconnects) coinciden en que es, por el momento, **el mejor modelo open-weight disponible**. Lambert lo califica como "el cambio de paso (*step change*) para agentes abiertos".

Arquitectónicamente, GLM-5.2 mantiene el backbone **sparse MoE** de GLM-5 y GLM-5.1, reutilizando dos técnicas ya conocidas: **Multi-head Latent Attention** (MLA) y **DeepSeek Sparse Attention** (DSA), esta última proveniente de DeepSeek V3.2.

La novedad principal es **IndexShare**: un truco de reutilización entre capas (*cross-layer reuse*) para DSA. En lugar de ejecutar el indexador completo de atención escasa (*top-k indexer*) en cada capa, GLM-5.2 lo ejecuta solo **una vez cada cuatro capas**. Las capas intermedias reutilizan los índices de tokens seleccionados. El resultado es una inferencia de **1M de tokens más barata**, manteniendo el patrón de atención adaptativo.

## Por qué es relevante

IndexShare es un ejemplo perfecto de cómo la innovación en modelos abiertos no siempre viene de nuevos mecanismos de atención, sino de **ingeniería inteligente para reducir costes**. La atención escasa (sparse attention) es clave para manejar contextos largos sin disparar el coste cuadrático de la atención completa. Pero ejecutar el indexador en cada capa tiene un coste no trivial.

Compartir índices entre capas es una idea intuitiva que nadie había implementado así en producción. Si funciona bien —y los benchmarks de GLM-5.2 sugieren que sí— podría convertirse en una técnica estándar en futuros modelos de contexto largo.

## Contexto

GLM-5.2 llega en una primavera de 2026 especialmente fértil para modelos abiertos. En los últimos meses hemos visto Gemma 4, DeepSeek V3.2/V4, Nemotron 3 Ultra, North Mini Code y ahora GLM-5.2. La competencia en el espacio open-weight se intensifica, y técnicas como IndexShare muestran que los modelos abiertos no solo copian a los propietarios, sino que también innovan en eficiencia de inferencia.
