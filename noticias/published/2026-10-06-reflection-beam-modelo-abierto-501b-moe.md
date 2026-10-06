---
title: "🧠 Reflection lanza Beam: el modelo abierto de 501B que iguala a GLM-5.2 con 3-4× menos cómputo de inferencia"
date: 2026-10-06
source: "Reflection AI / TechCrunch"
source_url: "https://reflection.ai/blog/introducing-beam"
category: "modelos"
summary: "Beam, primer modelo open-weight frontier de Reflection AI: MoE de 501B con 23B activos, preentrenado con 23,8T tokens y RL masivo sobre 10,5K GB300. Pesos Apache 2.0, este mes."
reading_time: "5 min"
tags: [open-weight, moe, reinforcement-learning, reflection-ai, coding, agentes, inferencia]
---
Reflection AI —el laboratorio de Brooklyn fundado en 2024 por dos ex-investigadores de Google DeepMind, con unos 4.700M$ levantados de Nvidia, Sequoia y Lightspeed y una valoración pre-money de 25.000M$— presentó el 5 de octubre **Beam**, su primer modelo **open-weight frontier**. Es un MoE (mixture-of-experts) **solo de texto** con **501B de parámetros totales y 23B activos por token**, ventana de contexto de **1M de tokens** y preentrenado con **23,8T tokens** de web y datos con licencia. La promesa: pesar como los modelos chinos open-weight y costar una fracción. Los pesos se liberarán bajo **licencia Apache 2.0** «este mes», junto con informe técnico, model card y stack completo de ejecución y fine-tuning; de momento hay lista de espera en [platform.reflection.ai](https://platform.reflection.ai/). La jugada comercial —según recoge [TechCrunch](https://techcrunch.com/2026/10/05/reflection-debuts-beam-a-open-weight-ai-model-to-rival-chinese-models-at-lower-compute-cost/)— es vender «AI factories»: que empresas y naciones soberanas entrenen los pesos de Reflection sobre sus propios datos.

## 📊 Frente al open-weight chino: menos cómputo, misma inteligencia

Las comparativas publicadas por Reflection —**cifras autoreportadas por el vendor, sin verificación independiente**— sitúan a Beam en la frontera open occidental:

| Modelo | Parámetros | Activos | Contexto | Licencia |
|---|---|---|---|---|
| **Beam (Reflection)** | 501B | 23B | 1M | Apache 2.0 (próximamente) |
| GLM-5.2 (Z.ai) | ~744B | 40B | — | — |
| Qwen 3.8-Max | familia 2T+ | — | — | — |
| [[2026-10-04-aleph-alpha-kolibri-1-moe-78b-soberano-europeo\|Kolibri-1 (Aleph Alpha)]] | 78B | ~3B | hasta 1M | Apache 2.0 |

El argumento central no es ganar benchmarks, sino **inteligencia por token de cómputo**: Beam afirma alcanzar puntuaciones de razonamiento avanzado comparables a GLM-5.2 —la familia open-weight de Zhipu que [[2026-10-01-anthropic-glm-5-3-exploits-open-weight-salvaguardas-bypass|el Frontier Red Team de Anthropic analizó en profundidad]]— usando **3-4× menos cómputo de inferencia**, y se queda «acercándose» a Qwen 3.8-Max en coding y tareas agénticas, donde los modelos de la familia 2T+ pagan un sobrecosto por token enorme. Kimi K3 sigue por delante en capacidad bruta, según admite la propia compañía. Frente al otro modelo open occidental reciente, Inkling de Thinking Machines (Mira Murati), Beam lo supera en cuatro tests de coding donde ambos reportan resultados —aunque Beam es solo texto e Inkling es multimodal—. Como referencia de escala, [[2026-09-04-nvidia-compra-hugging-face-12900m|Nvidia, hoy accionista de Reflection]], es también el proveedor del hardware de su entrenamiento.

## 🧪 La pieza técnica: RL a escala industrial

Lo que diferencia a Beam de un preentreno más no es el preentreno —23,8T tokens, comparable a otros MoE de su clase— sino su apuesta por el **refuerzo con alto cómputo como eje de escalado**: **10.500 GPUs NVIDIA GB300 durante 4 semanas**, generando **más de 100 millones de rollouts** con contexto máximo de 256K tokens, **~1,3B de sandboxes** y un entorno de tareas de ~1M de coding, agénticas y STEM (mayoritariamente sintéticos). Reflection lo presenta como uno de los mayores runs de RL de cualquier laboratorio abierto, y afirma que **las capacidades seguían subiendo al aumentar el cómputo de RL, sin meseta a la vista**. El detalle de ingeniería notable: entrenaron con **gradientes de política asíncronos**, un método que a escala se resiente con la «staleness» de la política (los primeros tokens de un rollout largo generados por checkpoints antiguos). Desarrollaron algoritmos para mantener el aprendizaje estable incluso cuando las interacciones provienen de hace más de un día, y redujeron sistemáticamente el desajuste entre motores de entrenamiento e inferencia.

El segundo hallazgo interesante es cómo Beam **aprendió a razonar barato**: con una penalización de longitud controlable, las primeras fases de RL mejoraron el rendimiento mientras las respuestas se acortaban —el modelo aprendió a resolver con menos razonamiento—; después, con capacidades agénticas ya formadas, los tokens extra volvieron a crecer pero pagando rendimiento. Reflection expone ese balance al usuario con un **parámetro de reasoning effort**. Y hay transferencia real: entrenaron en razonamiento, SWE y terminal, y vieron ganancias en browsing **sin incluir tareas de browsing**; con acceso a web, el modelo aprendió por su cuenta a consultar a otros LLMs y a usar APIs de OCR para leer documentos.

## 🛡️ Seguridad y qué viene ahora

Beam sigue en **red-teaming y evaluaciones finales**. Su entrenamiento de seguridad usa **deliberative alignment** (Guan et al., 2024) con un dataset construido de forma adversarial e iterativa: entrenar, generar prompts que elicitan daño o sobre-rechazo, y devolver los ataques exitosos al mixture de SFT. En la fase de safety RL, un adversario simulado presiona al modelo tool-using para que tome acciones inseguras, reduciendo a la vez excesivos rechazos y cumplimiento dañino. Reflection promete **open-source de sus evaluaciones de seguridad** para que el ecosistema pueda auditarlas y contribuir. La secuencia completa —preview en lista de espera, pesos Apache 2.0 y artefactos completos antes de final de mes— la repetirá en «una serie de modelos»: ya están entrenando el siguiente.
