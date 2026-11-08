---
title: "🔬 Una CNN de 10 años aplasta a GPT-6 Astra y Claude Fable 5.1 en diagnóstico de cáncer de piel: 62% vs 42% en 200 lesiones con biopsia"
date: 2026-10-25
source: "Lynch Lab (Dr. Magnus Lynch) / Hacker News"
source_url: "https://lynchlab.net/llm-skin-cancer"
category: "investigación"
summary: "Un dermatólogo prueba GPT-6 Astra y Claude Fable 5.1 contra una Inception v3 de 2015 fine-tuned 20 minutos: la CNN acierta el 62% de 200 lesiones biopsy-proven, los LLMs frontier solo el 42% — y ambos dieron el alta a un melanoma invasivo."
reading_time: "5 min"
tags: [salud, dermatología, cnn, evaluación, multimodal]
---

Un dermatólogo, el Dr. Magnus Lynch, ha publicado una evaluación que desmonta la narrativa de que los LLM multimodales frontier ya sirven para diagnóstico visual clínico. Probó **GPT-6 Astra y Claude Fable 5.1** —dos de los modelos más capaces de octubre de 2026— contra una **Inception v3 de 2015 fine-tuned durante unos 20 minutos** en imágenes dermatológicas públicas, con 200 lesiones confirmadas por histopatología del dataset [MILK10k](https://www.isic-archive.com/) (International Skin Imaging Collaboration) ([artículo original](https://lynchlab.net/llm-skin-cancer)).

### Los números

| Modelo | Aciertos (de 200, 6 diagnósticos posibles) | % |
|---|---|---|
| CNN Inception v3 fine-tuned | 125 | **62%** |
| GPT-6 Astra | 84 | 42% |
| Claude Fable 5.1 | 85 | 42% |

La conclusión es incómoda: **una red convolucional de una década, afinada en 20 minutos, supera a los dos modelos frontier** en reconocimiento de cáncer de piel. Y el caso más grave lo ilustra mejor que las medias: un **melanoma invasivo de 0,8 mm en una oreja** que ambos LLMs diagnosticaron como queratosis seborreica benigna y recomendaron **dar de alta sin seguimiento**. La CNN lo identificó correctamente desde la imagen dermoscópica.

### Por qué gana la CNN

El diseño del test evita las trampas habituales de estas comparativas:

- **Todas las lesiones tienen biopsia**, incluidas las benignas — una nevo que alguien decidió extirpar es una lesión que preocupó a un clínico, así que el test es deliberadamente más difícil que la media del mundo real
- Cada lesión viene en **dupla: foto clínica + imagen dermoscópica** (la lupa iluminada que usa el dermatólogo), y los LLMs recibieron ambas, con el mismo prompt, sin negativas
- La CNN **no es state of the art deliberadamente**: es la arquitectura que cualquier equipo clínico podría desplegar hoy con su propio dataset

La lección técnica es la que la evaluación de LLMs clínicos repite semana tras semana: **no hay transferencia de validación entre tareas**. Un modelo que escribe como un residente de dermato no ve como un dermatoscopio. Para visión clínica específica, un modelo estrecho entrenado con datos del dominio sigue ganando — y los LLMs generales, hoy, dan una falsa sensación de seguridad precisamente porque son tan buenos con el texto. En un contexto de triaje, esa confianza mal colocada no es un fallo de benchmark: es un paciente con un melanoma al que se le dio el alta.
