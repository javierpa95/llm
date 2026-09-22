---
title: "Jev y los Decision Models: una nueva categoría de LLM que no genera texto sino probabilidades"
date: 2026-09-22
source: "Simon Willison's Blog"
source_url: "https://simonwillison.net/2026/Sep/21/jev/"
category: "modelos"
summary: "TypeSafe AI lanza Jev, el primer 'System One Model': acepta texto, devuelve probabilidades tipadas. 40-200x más rápido y 444x más barato que los LLMs frontier."
reading_time: "4 min"
tags: [decision-models, llm, typesafe-ai, inferencia, cuantización, open-source]
---

## 🧠 Jev y los Decision Models: una nueva categoría de LLM que no genera texto sino probabilidades

[TypeSafe AI](https://typesafe.ai/) — fundada por Diogo Almeida, ex-OpenAI (creó los métodos detrás de ChatGPT) — ha lanzado **Jev**, el primer modelo de una categoría que llaman **"System One Models"** (o *Decision Models*, como prefiere Maggie Appleton). La propuesta es radical: un modelo que acepta texto como entrada pero **nunca genera texto de salida**. En su lugar, devuelve números de punto flotante correspondientes a categorías, preguntas sí/no, puntuaciones y niveles de confianza asociados.

### ¿Qué es exactamente?

Jev funciona como una **función de inferencia de inteligencia frontier**: accepts un "estado" no estructurado (un documento, un cliente, un registro) y una o más preguntas, y devuelve decisiones tipadas con probabilidades calibradas. Soporta tres tipos de consulta:

- **Noul** (Bernoulli): preguntas sí/no con un float entre 0 y 1 de confianza
- **Choice**: selección de una opción de un conjunto, con distribución de probabilidad completa
- **Score**: puntuación numérica a lo largo de un rango definido

Las preguntas se evalúan en paralelo — enviar 100 preguntas sobre el mismo documento toma aproximadamente lo mismo que enviar una.

### Los números que importan

| Métrica | LLMs frontier | Jev (System One) |
|---|---|---|
| Velocidad | 3–329 segundos | 70ms–500ms |
| Coste entrada | $0.20–$10/MTok | $0.042/MTok |
| Coste salida | ~5x más caro que entrada | **Gratis** |
| Alucinaciones | Posibles | Imposible por diseño |
| Errores de tipo | Posibles | 0% (salida tipada) |

La formación usa un nuevo algoritmo llamado **RLCD** (Reinforcement Learning for Calibrated Decisions) en lugar del RLHF estándar, optimizando para probabilidades epistémicamente honestas en tareas de decisión, no para preferencias humanas de chat.

### Reacciones y ecosistema

En menos de una semana desde su lanzamiento, la comunidad ha generado proyectos como **Kev** (recreación open-weight usando Qwen 3.5 con modelos de 0.8B, 4B y 9B), un benchmark comparativo (**JevBench**), implementaciones absurdas como *jev-leftpad* y *jev-2048*, e incluso un chatbot que le pregunta a Jev "¿qué carácter viene siguiente?" en cada paso. Simon Willison lo ha experimentado para *reranking* de búsqueda: recuperar 100 candidatos con BM25 y luego puntuarlos con Jev para relevancia.

### La sombra del negro

Willison señala una regresión hacia sistemas de ML de caja negra: Jev ni siquiera ofrece la posibilidad de justificar sus decisiones como los LLMs. Un float no explica por qué algo fue clasificado como spam o qué sesgos oculta. Esto hace que **evaluaciones y experimentos estructurados sean más críticos que nunca** — y que el sesgo en decisiones automatizadas sea un riesgo real si se usa para filtrar candidatos a empleo o decisiones similares.

### ¿Por qué importa?

Jev representa una desviación deliberada de la carrera por chatbots cada vez más capaces. En lugar de intentar que un modelo "haga todo", optimiza para **automatizar decisiones de software**: clasificar, enrutar, puntuar, extraer, ramificar donde la lógica manual es demasiado rígida. Es el equivalente a pasar de un asistente conversacional a una función inteligente que se integra directamente en código con garantías de tipo y latencia. Si la premisa se mantiene, podría redefinir dónde y cómo usamos IA en producción.
