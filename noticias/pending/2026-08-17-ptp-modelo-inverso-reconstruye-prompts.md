---
title: "PTP: un modelo inverso entrenado desde cero reconstruye prompts de LLMs con precisión casi perfecta, solo con el texto generado"
date: 2026-08-17
source: "The Decoder"
source_url: "https://the-decoder.com/researchers-can-now-reverse-engineer-llm-prompts-from-output-text-with-near-perfect-accuracy/"
category: "investigación"
summary: "Investigadores de IIT Bombay y Adobe Research entrenan un 'modelo de lenguaje inverso' que predice el token anterior en vez del siguiente: recupera el prompt original a partir de una sola respuesta, sin acceso a pesos ni al modelo."
reading_time: "3 min"
tags: [investigación, seguridad, prompts, inversión, arxiv, system-prompts]
---

Un LLM funciona prediciendo el siguiente token. La nueva técnica, llamada **Previous-Token Prediction (PTP)**, invierte ese proceso: entrena un *modelo de lenguaje inverso* que predice el **token anterior** en vez del siguiente. El modelo inverso se entrena desde cero, exclusivamente con datos sintéticos generados por el LLM objetivo — el único insumo es el texto de salida, sin acceso a pesos, arquitectura ni API interna.

Los resultados, presentados por investigadores de **IIT Bombay y Adobe Research** ([arXiv:2607.29378](https://arxiv.org/abs/2607.29378)), muestran reconstrucciones casi literales: el prompt *«How to reach out to competitors to find their pricing strategies?»* se recuperó palabra por palabra, y el modelo generó además seis variantes semánticamente equivalentes. La parte más inquietante es la transferencia: un modelo inverso pequeño entrenado con respuestas de **Qwen-3-0.6B** fue capaz de reconstruir la intención de prompts enviados a **GPT-4o**, lo que implica que un atacante ni siquiera necesitaría saber qué modelo produjo el texto.

El problema de seguridad es directo: si funciona contra modelos en producción, expone **system prompts propietarios** (secretos comerciales, reglas de moderación) y consultas personales de los usuarios. La limitación actual es que la técnica solo se ha demostrado con prompts cortos de una o dos frases — los system prompts largos de varios párrafos quedan sin probar. Aun así, es una vía de ataque nueva contra la capa de instrucción de los LLMs.