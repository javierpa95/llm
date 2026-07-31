---
title: "🧠 Google lanza Gemini Robotics 2.0: tres modelos de IA que dan 'inteligencia corporal completa' a robots humanoides"
date: 2026-07-30
source: "Ars Technica"
source_url: "https://arstechnica.com/ai/2026/07/google-reveals-gemini-robotics-2-0-promising-improved-dexterity-and-safety/"
category: "modelos"
summary: "Google DeepMind presenta Gemini Robotics 2 con tres submodelos: razonamiento encarnado con video en vivo, generación de acciones robóticas y una versión on-device que se adapta con solo 200 ejemplos."
reading_time: "4 min"
tags: [gemini, robotics, VLM, deepmind, embodied-reasoning, google]
---

# 🧠 Google Gemini Robotics 2.0: inteligencia corporal completa para robots

Google DeepMind ha presentado **Gemini Robotics 2**, una suite de tres modelos de IA diseñados para dar a los robots humanoides la capacidad de realizar tareas complejas en el mundo real. A diferencia de versiones anteriores donde los robots执行aban tareas programadas de forma rígida, esta nueva generación apunta a lo que DeepMind llama **"AGI físico"**: un robot generalista al que le dices qué hacer y lo hace.

## Los tres modelos

La suite se compone de:

- **Gemini Robotics ER 2** (Embodied Reasoning): un modelo de lenguaje visual (VLM) que procesa feeds de video en vivo desde las cámaras del robot. Puede clasificar la completitud de frames de video con casi un 60% de precisión e identificar momentos clave en una tarea (como cuándo dejar de verter café) con un 90% de precisión. Está integrado con la **Gemini Live API** y ya está disponible para desarrolladores.

- **Gemini Robotics 2**: el modelo de acción que genera movimientos robóticos a partir de instrucciones, de la misma forma que otros modelos generativos crean texto o imágenes. Es el encargado de traducir el "entendimiento" del ER 2 en movimiento físico.

- **Gemini Robotics On-Device 2**: una versión de baja latencia que funciona sin conexión. Lo más notable es que se adapta a nuevos diseños de robot con solo **unas horas de datos de movimiento** (aproximadamente 200 ejemplos).

## Colaboración y recuperación de fallos

Una de las novedades más significativas es la capacidad de **colaboración entre robots**. En las demos, el robot Apollo 2 de Apptronik y el Franka F3 Duo trabajan juntos en una tarea sin interferirse. Además, el sistema ahora puede detectar fallos en tiempo real y reintentar un paso específico en lugar de volver al inicio completo — por ejemplo, si un objeto se mueve, el robot simplemente reajusta su posición.

## Seguridad: el benchmark ASIMOV-Agentic

Con robots compartiendo espacio físico con humanos, la seguridad es crítica. DeepMind ha creado **ASIMOV-Agentic**, un nuevo benchmark que evalúa si un agente de razonamiento encarnado se niega a ejecutar llamadas de herramientas inseguras, si puede determinar si una tarea es posible de completar de forma segura, y si puede solicitar ayuda humana cuando no está seguro. Según DeepMind, el ER 2 es su modelo más seguro hasta la fecha, con capacidad robusta para detener acciones cuando un humano está demasiado cerca.

El benchmark completo está disponible en **Hugging Face**. Los modelos de acción (Gemini Robotics 2 y On-Device 2) aún están en fase de pruebas con un grupo reducido de testers.
