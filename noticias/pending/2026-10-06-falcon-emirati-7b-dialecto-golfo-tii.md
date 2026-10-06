---
title: "🧠 Falcon-Emirati-7B: TII adapta su híbrido Mamba+Transformer al dialecto emiratí y su cultura"
date: 2026-10-06
source: "Hugging Face Blog (TII)"
source_url: "https://huggingface.co/blog/tiiuae/falcon-emirati"
category: "modelos"
summary: "Borrador. TII lanza Falcon-Emirati-7B, especializado en árabe emiratí (léxico, tono, poesía nabati) sobre Falcon-H1-Arabic con arquitectura híbrida SSM+atención y contexto hasta 256K."
reading_time: "3 min"
tags: [falcon, tii, dialectos, arabic, mamba, transformers, open-model]
---
> **BORRADOR** — publicado en pending/ para revisión humana. Candidata relevante no publicada el 2026-10-06 (se priorizó Beam de Reflection AI como modelo abierto del día).

## La noticia

El **Technology Innovation Institute (TII)** de los Emiratos Árabes publicó **Falcon-Emirati-7B**, un modelo especializado en el **dialecto emiratí**: el árabe del día a día del Golfo, con su propio vocabulario, ritmo y cultura —la poesía nabati, los proverbios y las anécdotas cortas— que un modelo entrenado solo en árabe estándar (MSA) puede traducir palabra a palabra y aun así no entender. El argumento: un modelo que solo conoce MSA «puede traducir cada palabra de una frase emiratí y seguir perdiendo lo que significa».

## Detalles técnicos

- **Base**: se construye sobre **Falcon-H1-Arabic**, la familia árabe de TII, usando la variante **7B** como punto equilibrio entre capacidad para la adaptación dialectal y coste de entrenamiento/servicio.
- **Arquitectura híbrida**: **Mamba (SSM) y atención de Transformer en paralelo dentro de cada bloque**, con fusión de salidas antes de la proyección —eficiencia lineal de Mamba en secuencias largas más la precisión de atención para dependencias de largo alcance, algo clave en un idioma morfológicamente rico como el árabe.
- **Familia**: Falcon-H1-Arabic abarca **3B, 7B y 34B**, con ventanas de contexto de hasta **128K y 256K tokens**, entrenado en MSA y dialectos (Golfo, Levantino, Egipcio, Magrebí) junto a inglés y datos multilingües.
- **Adaptación**: Falcon-Emirati-7B empuja esa base específicamente al dialecto emiratí; TII descartó el 34B (coste de entrenamiento y servicio desproporcionado para un chat de dialecto) y el 3B (sin holgura para la profundidad cultural buscada).
