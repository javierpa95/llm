---
title: "🔬 NASA e IBM liberan el Lunar Foundation Model: 17 años de datos del LRO convertidos en modelo abierto para ciencia lunar"
date: 2026-10-05
source: "The Decoder"
source_url: "https://the-decoder.com/nasa-and-ibms-open-source-lunar-model-turns-17-years-of-orbiter-data-into-a-foundation-for-lunar-science/"
category: "investigación"
summary: "Borrador. NASA e IBM publican el Lunar Foundation Model, uno de los primeros foundation models open source para ciencia lunar, entrenado sobre SomBench (2M de tile bundles, 11 modalidades)."
reading_time: "4 min"
tags: [foundation-model, open-source, nasa, ibm, ciencia, multimodal, remoto-sensing]
---

> **BORRADOR** — publicado en pending/ para revisión humana. Candidata relevante no publicada el 2026-10-05 (se priorizó Gemini 4 Argon de Google).

## La noticia

NASA e IBM Research, con varias universidades, publicaron el **NASA-IBM Lunar Foundation Model**, descrito como uno de los primeros foundation models open source para ciencia lunar. No es un LLM: es un modelo multimodal de observación remota entrenado desde cero sobre datos de misión, pensado para adaptarse a tareas concretas con muy pocos ejemplos etiquetados.

## Datos técnicos

| Métrica | Valor |
|---|---|
| Corpus | **SomBench**: ~2 millones de tile bundles, 11 modalidades, 2 escalas espaciales |
| Imágenes NAC | ~1M a ~1 m/píxel (Lunar Reconnaissance Orbiter) |
| Imágenes multiespectrales WAC | ~964.000 a 100 m/píxel |
| Datos alineados | +30 capas de 9 instrumentos, 4 misiones (LRO, GRAIL, Lunar Prospector, Kaguya/SELENE) |
| Split train/val/test | Geográfico por zonas de mapa (evita leakage) |
| Base arquitectónica | TerraMind (modelo de observación terrestre), **entrenado desde cero** |
| Entrada explícita | Geometría de imagen: ángulos de iluminación, posición solar, extensión del tile |

## Hallazgos clave

- **El modelo recibe las condiciones de iluminación en vez de adivinarlas**: en la Luna, la luz moldea la superficie visible más que las propiedades del terreno; en lugar de forzar al modelo a corregir desde píxeles, se le da esa información como contexto
- Mejor rendimiento en **depósitos de hielo polar** y **detección de cráteres**
- La transparencia del corpus es parte del valor: registro científico de 17 años del LRO, cuyo volumen de datos supera al de todas las demás misiones planetarias de la NASA combinadas

## Por qué es relevante para el sitio

Foundation models aplicados a ciencia con datos escasos de etiquetado —el mismo patrón que hace años que los LLMs llevan a otros dominios. Ejemplo de cómo la filosofía "preentrena grande, adapta con poco" se sale del texto.

## Ángulo posible

«De 17 años de fotos de la Luna a un foundation model: cómo NASA e IBM entrenaron desde cero sobre 2 millones de tiles» — centrarse en el diseño del corpus y en la decisión de darle la iluminación como entrada.

## Fuentes

- https://the-decoder.com/nasa-and-ibms-open-source-lunar-model-turns-17-years-of-orbiter-data-into-a-foundation-for-lunar-science/
