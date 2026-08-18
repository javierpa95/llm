---
title: "Anthropic marca con watermark el texto de Claude (basado en SynthID-Text) y los críticos cuestionan el impacto en calidad"
date: 2026-08-18
source: "The Decoder"
source_url: "https://the-decoder.com/anthropic-watermarks-claudes-output-but-critics-question-the-tradeoffs/"
category: "herramientas"
summary: "Anthropic integra en Claude un watermarking estadístico basado en SynthID-Text para cumplir la regulación europea; críticos como John Gruber sostienen que el patrón altera la elección léxica y degrada el texto."
reading_time: "2 min"
tags: [anthropic, watermarking, synthid-text, seguridad, regulacion, ia-generativa]
---
Anthropic ha empezado a incrustar una **marca de agua (watermark)** en el texto generado por Claude que lo hace estadísticamente detectable como contenido de IA, con el objetivo de cumplir la regulación europea. El método, basado en el enfoque **SynthID-Text de Google DeepMind**, no inserta caracteres visibles ni ocultos: modifica sutilmente la fuente de aleatoriedad de la selección de palabras durante la generación para crear un patrón estadístico que un detector puede reconocer. Anthropic insiste en que no afecta a la creatividad, la legibilidad ni la calidad del contenido.

No todos lo ven así. **John Gruber** (Daring Fireball, co-creador de Markdown) argumenta en un análisis extenso que *ningún par de sinónimos significa exactamente lo mismo*: cuando Claude elige entre "overcast" y "grey" según la clave secreta del watermark en lugar de por precisión semántica, el sistema a veces **aumenta la probabilidad de una palabra peor y reduce la de la mejor**, degradando el resultado. Gruber también descarta el estudio de SynthID publicado en *Nature* que Anthropic cita como evidencia, y sugiere que la reputación de Gemini como peor generador de texto podría deberse en parte a que SynthID ya está activo en sus outputs. Herramientas como **Declaude** pueden además eliminar la marca, lo que complica el argumento regulatorio.

Para los despachos de abogados la marca es un no-problema en la práctica, según *Artificial Lawyer*: el marcado es inofensivo. Pero el texto detectable de forma permanente introduce dolores de cabeza nuevos: negociaciones de honorarios, contratos que prohíben explícitamente el uso de IA o clientes que exigen textos sin marca. La tensión de fondo es la de siempre con el watermarking: un mecanismo pensado para la transparencia que, al actuar sobre la propia generación del lenguaje, toca la calidad percibida del modelo.

> ⚠️ Borrador pendiente de revisión humana antes de publicar.