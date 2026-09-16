---
title: "Google lanza Gemini 3.8 Live: el primer modelo de voz que supera a OpenAI y cuesta un 55% menos"
date: 2026-09-16
source: "The Decoder / Google Blog"
source_url: "https://the-decoder.com/google-launches-gemini-3-8-live-to-take-on-openais-gpt-live-1-at-a-fraction-of-the-cost/"
category: "modelos"
summary: "Gemini 3.8 Live y 3.8 Live Extended Thinking llegan con #1 en el leaderboard de speech-to-speech, 97 idiomas y precios que hunden el coste de los agentes de voz."
reading_time: "3 min"
tags: [gemini, google, speech-to-speech, voice-agents, multimodal, extended-thinking]
---

Google DeepMind ha lanzado **Gemini 3.8 Live** y **Gemini 3.8 Live Extended Thinking**, dos modelos de audio en tiempo real disponibles a través de la Gemini API y Google AI Studio. El modelo Extended Thinking ocupa el **primer puesto** en el Speech-to-Speech Leaderboard de Artificial Analysis con un 82.6%, superando a los últimos modelos GPT-Live-1 de OpenAI en la métrica general de calidad conversacional.

## Lo que hacen estos modelos

Gemini 3.8 Live está diseñado para **agentes de voz en producción**: puede hacer llamadas a APIs en segundo plano mientras mantiene la conversación, procesar entrada visual en tiempo real y alternar automáticamente entre **97 idiomas** durante una misma llamada. El modelo Extended Thinking lleva esto más lejos: razona y habla simultáneamente, usando señales verbales tempranas como *"Déjame comprobar eso..."* para reconocer peticiones de forma natural mientras ejecuta tareas multi-paso en background.

En benchmarks específicos de agentes de voz, los resultados son sólidos:

- **68.6% en τ-Voice** (completación de tareas agénticas)
- **35.1% en τ-Voice-banking** (Sierra)
- **97.7% en Big Bench Audio** (razonamiento)
- **#1 en EVA-Bench de ServiceNow** (equilibrio precisión-calidad conversacional)

## La guerra de precios: Google vs OpenAI en voz

Aquí es donde la historia se pone interesante para los desarrolladores. Google cobra **$0.005/minuto** de entrada de audio y **$0.018** de salida. OpenAI cobra **$0.05/minuto** para GPT-Live-1. En la práctica:

| | Google Gemini 3.8 Live | OpenAI GPT-Live-1 |
|---|---|---|
| Coste por hora | **~$1.38** | **~$3.00+** |
| Full duplex | No (half-duplex) | Sí |
| Calidad percibida | Buena | Superior |

Google optimizó por **precio y escala**; OpenAI por **naturalidad conversacional**. El full duplex de OpenAI — escuchar y hablar al mismo tiempo — sigue siendo una ventaja real en conversaciones fluidas, pero la diferencia de coste del 55% hará que muchas empresas elijan Google para agentes de alto volumen.

## Disponibilidad

Los modelos están disponibles ya para desarrolladores en la Gemini API y Google AI Studio. La variante Extended Thinking llega también a Gemini Enterprise (vista privada) y a los suscriptores de Google AI Pro/Ultra en Workspace, Gmail y Keep. Toda la salida de audio lleva marca de agua **SynthID** integrada.

Para un site que desmitifica los LLMs, esta noticia es relevante: demuestra que la IA conversacional de voz ya no es monopolio de OpenAI, y que la arquitectura y la ingeniería de costes importan tanto como los benchmarks.
