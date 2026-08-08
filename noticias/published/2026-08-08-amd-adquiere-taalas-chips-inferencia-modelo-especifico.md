---
title: "AMD adquiere Taalas: chips que 'queman' el modelo completo en silicio para inferencia ultrarápida"
date: 2026-08-08
source: "The Decoder / ServeTheHome"
source_url: "https://the-decoder.com/amd-acquires-taalas-a-startup-that-bakes-ai-models-directly-into-silicon/"
category: "hardware"
summary: "AMD compra la startup canadiense Taalas, cuyos chips incrustan la arquitectura y los pesos del modelo directamente en silicio: 16-17k tokens/s por usuario con Llama 3.1 8B, a costa de quedar fijados a un único modelo."
reading_time: "4 min"
tags: [amd, taalas, inferencia, chips, hardware, model-specific, llama]
---

AMD ha anunciado la **adquisición de Taalas**, una startup canadiense fundada en Toronto en 2023 que fabrica chips de inferencia *model-specific*: en lugar de cargar los pesos desde memoria HBM y ejecutarlos en hardware programable, **incrusta la arquitectura y los parámetros entrenados del modelo directamente en el silicio**. El resultado es una velocidad de inferencia muy superior, pero cada chip queda bloqueado a un único modelo — cambiar de modelo obliga a cambiar de chip.

## El demostrador HC1: 16.000+ tokens/s con Llama 3.1 8B

Taalas salió de stealth en febrero de 2026 con su tarjeta demostradora **HC1**: un chip de **TSMC 6nm con un die de 815 mm² y 53.000 millones de transistores** que ejecuta **Llama 3.1 8B a más de 16.000 tokens por segundo por usuario** — cifras que la compañía compara, con mediciones propias, contra las Nvidia H200/B200, Groq, SambaNova y Cerebras. La clave está en "quemar" el modelo en CMOS: al eliminar la indirección de pesos en memoria, los beneficios de rendimiento son enormes frente a soluciones más programables.

El coste es la flexibilidad. Los modelos grandes actuales (centenares de miles de millones de parámetros) requerirían **múltiples chips del tamaño de un reticle** solo para contener el modelo completo, con la complejidad logística de fabricar, empaquetar y validar varios tipos de chip distintos. Es un enfoque radicalmente opuesto al de las GPUs: máximo rendimiento por modelo, cero generalidad.

## Estrategia: complemento a las Instinct, no sustituto

AMD planea **integrar la tecnología de Taalas en su roadmap de aceleradores**, ofreciéndola como solución a nivel de sistema junto a sus GPUs Instinct, no como reemplazo. Vamsi Boppana, SVP de la división de IA de AMD, ha dicho que el acuerdo refuerza su cartera de IA; el cofundador de Taalas, Ljubisa Bajic, apunta a que AMD aporta la escala que la startup necesitaba. La operación está sujeta a aprobaciones regulatorias estándar.

La jugada llega en un momento en que el *model-specific silicon* gana tracción: Google desarrolla su chip [[2026-07-21-google-frozen-v2-chip-arquitectura-gemini-silicio|Frozen v2]] para incrustar la arquitectura de Gemini en silicio, y DeepSeek ya trabaja en sus propios chips de inferencia. Si la tesis de Taalas se confirma a escala, la era de "un modelo por chip" podría redefinir la economía de la inferencia para cargas de trabajo estables y masivas.

---

*Fuentes: [The Decoder — AMD acquires Taalas, a startup that bakes AI models directly into silicon](https://the-decoder.com/amd-acquires-taalas-a-startup-that-bakes-ai-models-directly-into-silicon/) (7 agosto 2026) y [ServeTheHome — AMD to Acquire Taalas for Model Specific AI Inference Chips](https://www.servethehome.com/amd-to-acquire-taalas-for-model-specific-ai-inference-chips/) (6 agosto 2026)*
