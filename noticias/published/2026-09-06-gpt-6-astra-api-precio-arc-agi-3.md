---
title: "GPT-6 Astra llega a la API: mismo precio que Fable 5, 99.9% en ARC-AGI-3 y contexto hasta 1M tokens"
date: 2026-09-06
source: "Simon Willison's Blog / OpenAI"
source_url: "https://simonwillison.net/2026/Sep/3/gpt6-astra/"
category: "modelos"
summary: "OpenAI despliega GPT-6 Astra en la API a $10/M input y $50/M output, el mismo precio que Claude Fable 5, con resultados sobresalientes en seguridad y contexto largo."
reading_time: "3 min"
tags: [gpt-6-astra, openai, api, arc-agi-3, model-release]
---

## 🧠 GPT-6 Astra llega a la API: mismo precio que Fable 5, 99.9% en ARC-AGI-3 y contexto hasta 1M tokens

OpenAI ha comenzado el despliegue de **GPT-6 Astra** a través de su API, con un precio de **$10/millón de tokens de entrada y $50/millón de salida** — exactamente la misma tarifa que Claude Fable 5 y 5.1 de Anthropic. Esto convierte a Astra en el competidor directo de Fable en el segmento frontier, y la rivalidad entre ambos laboratorios se intensifica.

### Benchmarks: dónde brilla y dónde no

Astra presenta resultados impresionantes en varias áreas clave:

- **ARC-AGI-3**: 99.9% con el "Provider Adapter harness" de OpenAI (un adaptador que preserva estado de razonamiento opaco entre peticiones y usa compresión para conversaciones largas). Sin embargo, con el harness estándar de ARC-AGI, el modelo solo alcanza el **62.7%** por $26K — una diferencia significativa que revela la importancia de la infraestructura de inferencia.
- **Seguridad**: 100% en ExploitBench (vs. 78.5% de GPT-5.6 Sol), 42.4% en ExploitGym (vs. 30.3%) y 99.2% en SRE-Bench de ingeniería inversa binaria (vs. 68.7%). Estos números reflejan el enfoque de OpenAI en endurecer a sus modelos contra ataques de seguridad.
- **Contexto largo**: 100% en el benchmark de ocho agujas a 256K–512K tokens y **96.3% a 512K–1M tokens** — una mejora sustancial sobre generaciones anteriores.

Sin embargo, según **Artificial Analysis**, Astra no gana en todo. Su Intelligence Index es de 61, igual que GPT-5.6 Sol, pero **5 puntos por debajo de Claude Fable 5.1** (66) y por debajo del recién lanzado Meta Muse Spark 1.3. Lo compensa en eficiencia de coste: en su Coding Agent Index, Astra cuesta menos de la mitad que Fable 5 por la misma puntuación.

### Disponibilidad

Astra se está desplegando gradualmente: primero a un conjunto limitado de organizaciones, y en los próximos días estará disponible para todos los usuarios de **ChatGPT Plus, Pro, Business y Enterprise**, así como vía la API y AWS. El identificador del modelo en la API será `gpt-6-astra`.

### Contexto: la carrera Fable vs. Astra

Esta lanzamiento se produce en un momento de intensa competencia. Anthropic lanzó Fable 5.1 hace apenas cuatro días (mejor coding, 45% más barato y marcas de agua integradas), y OpenAI responde con un modelo que iguala su precio y supera sus capacidades de seguridad. La diferencia clave parece estar en la arquitectura de inferencia: el "Provider Adapter" de OpenAI preserva contexto entre peticiones, algo que Fable aún no iguala públicamente. Para desarrolladores, la elección entre ambos dependerá del caso de uso: Astra para tareas de seguridad y contexto largo, Fable para razonamiento general y Coding Agent más maduro.
