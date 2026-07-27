---
title: "Claude Opus 5 destroza ARC-AGI-3 con 30.2%: un salto de 4x sobre el récord anterior en el benchmark que mide razonamiento real"
date: 2026-07-27
source: "The Decoder"
source_url: "https://the-decoder.com/anthropics-opus-5-blows-past-fable-5-and-gpt-5-6-sol-on-the-benchmark-designed-to-measure-real-intelligence/"
category: "investigación"
summary: "Opus 5 logra 30.2% en ARC-AGI-3, 4 veces más que el récord anterior de GPT-5.6 Sol. ARC Prize atribuye el salto a un razonamiento más autónomo, no a trucos de entrenamiento"
reading_time: "6 min"
tags: [claude-opus-5, arc-agi-3, benchmark, razonamiento, anthropic, agi]
---

## 🔬 Opus 5 logra 30.2% en ARC-AGI-3: un salto cualitativo en razonamiento autónomo

**Anthropic's Claude Opus 5** ha logrado un **30.2%** en ARC-AGI-3, el benchmark diseñado para medir la capacidad de un modelo para resolver tareas nuevas que no vio durante el entrenamiento. El récord anterior era del **7.8%**, establecido por **GPT-5.6 Sol (Max)** de OpenAI. Es un salto de casi **4x** en un benchmark que la comunidad considera el más cercano a una medición de inteligencia general.

El equipo de **ARC Prize** (los creadores del benchmark) publicó un análisis detallado atribuyendo el avance a un **razonamiento genuinamente mejor**, no a atajos de entrenamiento o trucos de ingeniería:

> *"Opus 5 showed behavior that researchers hadn't seen from a model before. It translated tasks into algebraic notation, developed novel strategies, and solved environments through autonomous exploration."*

### ¿Qué hace especial este resultado?

ARC-AGI-3 funciona como un **juego interactivo**: el modelo debe inferir las reglas de un entorno desconocido, planificar sus acciones y ejecutarlas paso a paso. A diferencia de benchmarks estáticos (como MMLU o HumanEval), no se puede "memorizar" la respuesta — hay que **pensar** en tiempo real.

| Modelo | ARC-AGI-3 | ARC-AGI-2 | ARC-AGI-1 |
|--------|-----------|-----------|-----------|
| **Claude Opus 5** | **30.2%** | 90.4% | 97.5% |
| GPT-5.6 Sol (Max) | 7.8% | — | — |
| Fable-class models | <15% | — | — |

Opus 5 resolvió **5 entornos que nadie había resuelto antes**, cuatro de ellos a nivel humano o superior. De los 25 entornos públicos del benchmark, **6 están resueltos** en total.

### El matiz: ¿entrenamiento dirigido o razonamiento general?

El análisis de ARC Prize es cauteloso. **Greg Kamradt**, uno de los investigadores detrás del benchmark, señaló que Opus 5 fue desarrollado **después** de que ARC-AGI-3 y su formato fueran públicos. Esto podría haber permitido a Anthropic dirigir el entrenamiento hacia las habilidades específicas del benchmark.

Sin embargo, las pruebas en **Witness** (un benchmark privado de puzzle games creado por Guanghan Ning) muestran un patrón más matizado: Opus 5 anotó 43.4, empatando estadísticamente con Kimi K3 y Fable 5, con mejoras **mucho menores** que en ARC-AGI-3.

Ning comparó esto con la evolución de benchmarks de código: los modelos primero optimizan para el benchmark más visible, y luego las mejoras se generalizan. ARC-AGI-3, como objetivo principal de razonamiento interactivo, probablemente recibe **el primer esfuerzo de entrenamiento**.

### Implicaciones para el ecosistema

El resultado tiene varias implicaciones directas:

1. **El razonamiento autónomo avanza rápido**: de 7.8% a 30.2% en meses sugiere que los modelos están mejorando en capacidades que antes parecían exclusivamente humanas.

2. **Los benchmarks están siendo "conquistados"**: como ocurrió con ImageNet y los modelos de visión, ARC-AGI-3 podría dejar de ser una medida válida de progreso si los modelos se entrenan específicamente para él.

3. **La brecha entre frontier y open se amplía**: Opus 5 es un modelo cerrado. Los modelos open-weight (como Kimi K3 y Qwen 3.8) están lejos de estos números en tareas de razonamiento interactivo.

Para los lectores de "Anatomía de un LLM", este resultado es un caso de estudio perfecto: un modelo que no solo memoriza patrones, sino que **planifica y ejecuta estrategias** en entornos completamente nuevos. Es la diferencia entre un学生 que ha visto el examen y uno que puede resolver problemas que nunca ha encontrado.
