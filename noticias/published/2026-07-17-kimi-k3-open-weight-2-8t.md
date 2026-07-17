---
title: "Kimi lanza K3: modelo abierto de 2.8 billones de parámetros que se acerca a GPT-5.6 Sol y Fable 5"
date: 2026-07-17
source: "The Decoder"
source_url: "https://the-decoder.com/kimis-open-model-k3-nears-gpt-5-6-sol-and-fable-5-while-signaling-the-end-of-super-cheap-chinese-ai/"
category: "modelos"
summary: "Moonshot AI lanza K3, el primer modelo open-weight de ~3 billones de parámetros con 1M tokens de contexto, MoE 896 expertos y rendimiento rival de GPT-5.6 Sol"
reading_time: "4 min"
tags: [kimi, moonshot-ai, moe, open-weight, 2.8t, mixture-of-experts]
---

## Kimi K3: el primer modelo open-weight de escala frontier

Moonshot AI ha lanzado **Kimi K3**, un modelo multimodal de pesos abiertos con **2.8 billones de parámetros totales** en arquitectura Mixture-of-Experts (MoE). El modelo activa solo 16 de 896 expertos por inferencia, lo que le permite mantener costes de inferencia competitivos a pesar de su escala masiva.

K3 soporta **un millón de tokens de contexto** y procesa nativamente imágenes y video. Según los benchmarks de Kimi, el modelo se acerca al rendimiento de Claude Fable 5 y GPT-5.6 Sol, superando a todos los demás sistemas testados incluyendo Claude Opus 4.8, GPT-5.5 y el rival chino GLM-5.2.

## Arquitectura: MoE + Kimi Delta Attention

La novedad técnica clave es **Kimi Delta Attention**, una nueva arquitectura de atención que Kimi afirma permite decodificación hasta **6.3 veces más rápida** en contextos de un millón de tokens. Las "atención residual" mejoran la eficiencia de entrenamiento en ~25% con menos del 2% de overhead adicional de cómputo.

En programación, K3 gana 2 de 6 benchmarks y queda segundo o tercero en el resto. En agentes generales, gana 3 de 6 pruebas. De las 35 pruebas totales, K3 toma primero en ~7 y segundo/tercero en la mayoría de las demás.

## Verificación independente: Artificial Analysis confirma, pero señala alucinaciones

La plataforma de benchmarking **Artificial Analysis** publicó evaluación independiente: K3 puntúa **57 en su Intelligence Index**, empatando con Opus 4.8 y GPT-5.5, aunque por debajo de Fable 5 (60) y GPT-5.6 Sol (59).

En tareas de agentes (GDPval v2), K3 alcanza un Elo de **1.668**, superando a GLM-5.2 (1.514), GPT-5.5 (1.494) y Opus 4.8 (1.600), aunque por debajo de Fable 5 (1.760).

**Pero hay un problema**: la tasa de alucinación subió del 39% (en K2.6) al **51%** en K3. Aunque la precisión mejoró del 33% al 46%, el modelo fabrica más respuestas mientras acierta más preguntas — una compensación que limita su uso en aplicaciones que requieren alta fiabilidad factual.

## Precios: fin de la era del AI chino barato

| Modelo | Input (cache hit) | Input (sin hit) | Output |
|--------|-------------------|-----------------|--------|
| **Kimi K3** | $0.30 | $3.00 | $15.00 |
| Kimi K2.6 | $0.16 | $0.95 | $4.00 |
| Claude Sonnet 5 | $0.30 | $3.00 | $15.00 |
| Claude Fable 5 | $1.00 | $10.00 | $50.00 |
| GPT 5.6 Sol | $0.50 | $5.00 | $30.00 |

K3 cuesta **$0.94 por tarea** en el Intelligence Index, comparable a GPT-5.6 Sol ($1.04) y la mitad del precio de Opus 4.8 ($1.80). Pero es **más caro** que sus pares open-weight chinos: GLM-5.2 ($0.32/tarea) y DeepSeek V4 Pro ($0.04/tarea). La era del AI chino ultra-barato parece terminar para modelos frontier.

## Caso de uso: desarrollo de software a largo plazo

El caso de uso principal de K3 es **desarrollo de software con supervisión mínima humana**. Analiza grandes codebases, coordina herramientas de terminal y mantiene foco a través de muchos pasos de trabajo. El modelo incluye "Vision in the Loop" — examina capturas de pantalla, modifica código y verifica el output visible, posicionándolo para desarrollo de games, UI y CAD.

Las demostraciones incluyen un juego 3D open-world generado enteramente en el navegador con Three.js y WebGPU, una visualización de agujero negro, una simulación del lanzamiento del cohete Long March 10, y un emulador de Game Boy Advance.

## Disponibilidad

Los pesos completos se espera que se liberen **antes del 27 de julio**. K3 ya está disponible en Kimi.com, apps móviles (iOS/Android/HarmonyOS), Kimi Work desktop (v3.1.0+), Kimi Code, y en OpenRouter bajo el identificador `moonshotai/kimi-k3`. Para empresas, Kimi ofrece versiones separadas con gestión de miembros y un plan para **Kimi Hosted Agent** — entornos aislados para tareas de larga duración.

---

*Fuente: [The Decoder](https://the-decoder.com/kimis-open-model-k3-nears-gpt-5-6-sol-and-fable-5-while-signaling-the-end-of-super-cheap-chinese-ai/) — 16 julio 2026*
