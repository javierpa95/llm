---
title: "LAION libera BVD: 10 millones de horas de vídeo abierto para entrenar modelos multimodales"
date: 2026-08-31
source: "The Decoder / LAION"
source_url: "https://the-decoder.com/laion-drops-massive-open-video-dataset-with-10-million-hours-of-footage-for-ai-research/"
category: "investigación"
summary: "LAION publica el Big Video Dataset (BVD): 10 millones de horas de vídeo —55M clips con descripciones y 300M imágenes— extraídos de 80M vídeos de CommonCrawl, para entrenar modelos que cruzan vídeo, audio y texto."
reading_time: "3 min"
tags: [laion, dataset, video, multimodal, open-source, commoncrawl, investigación, entrenamiento, modelo-abierto]
---

**LAION** —la organización sin ánimo de lucro detrás de datasets abiertos de referencia— ha publicado el **Big Video Dataset (BVD)**, uno de los mayores corpus de vídeo abiertos para investigación en IA. BVD parte de los **1.300 millones de URLs de vídeo** detectados en **CommonCrawl**, de los que el equipo descargó **80 millones**, sumando **10 millones de horas** de metraje. De ahí extrajo **55 millones de clips** con descripciones **autogeneradas de vídeo y audio**, además de **300 millones de imágenes fijas**.

La mayoría de los vídeos provienen de YouTube y están en inglés, pero el valor del dataset está en su **alineación multimodal nativa**: el corpus entrena a los modelos para cruzar simultáneamente vídeo, audio y texto, aprendiendo qué contenido visual corresponde con qué descripción o sonido. Según el [artículo de investigación](https://huggingface.co/papers/), los modelos entrenados sobre BVD superan a los entrenados sobre **InternVid** en hasta **2,1 puntos porcentuales** en benchmarks comunes de *video-to-text*.

BVD se publica **exclusivamente para fines de investigación**. A nivel legal, LAION puede apoyarse en una **sentencia del Tribunal Regional de Hamburgo de 2024** que permitió recopilar contenido con copyright para investigación no comercial, y pide a los usuarios que respeten los derechos de los creadores originales. El **dataset y el código son de libre acceso**, lo que lo convierte en un recurso clave para investigación aplicada y reproducción de experimentos en este momento en que el vídeo generativo (Wan3.0, Veo y rivales abiertos) marca el siguiente frente de la carrera multimodales.