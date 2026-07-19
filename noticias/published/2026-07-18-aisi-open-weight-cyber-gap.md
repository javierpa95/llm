---
title: "AISI: los modelos open-weight ya alcanzan capacidades cyber de hace 4 meses"
date: 2026-07-18
source: "The Decoder"
source_url: "https://the-decoder.com/open-weight-models-now-match-frontier-cyber-performance-from-just-four-months-ago-at-a-fraction-of-the-cost/"
category: "seguridad"
summary: "El instituto británico AISI publica el primer análisis público de capacidades cibernéticas de modelos open-weight vs. cerrados: el gap se ha reducido a 4-7 meses"
reading_time: "5 min"
tags: [aisi, ciberseguridad, open-weight, glm-5-2, deepseek-v4-pro, safety]
---

## El gap open vs. closed se reduce peligrosamente

El **British AI Security Institute (AISI)** ha publicado el primer análisis público que mide cuánto se han acercado los modelos de pesos abiertos a los sistemas cerrados de vanguardia en capacidades cibernéticas ofensivas. La conclusión: **el gap se ha reducido de 6-10 meses a solo 4-7 meses** desde principios de 2025.

Los modelos evaluados — **GLM-5.2** (junio 2026) y **DeepSeek V4-Pro** — igualaron el rendimiento de sistemas cerrados de hace varios meses en tareas reales de ciberseguridad, desde investigación de vulnerabilidades hasta ataques autónomos en redes simuladas.

## Dos benchmarks, un mismo resultado

AISI utilizó dos métodos de evaluación. El primero, **Narrow Cyber Tasks**, incluye 70 tareas en cuatro niveles de dificultad: investigación de vulnerabilidades, ingeniería inversa, explotación web y criptografía. GLM-5.2 igualó el rendimiento de **Opus 4.6** (febrero 2026) en este benchmark.

El segundo método, **Cyber Ranges**, prueba capacidades autónomas en redes simuladas. "The Last Ones" simula un ataque de 32 pasos contra una red corporativa con 4 subredes y ~20 hosts — una tarea que un humano experto tardaría ~20 horas en completar. GLM-5.2 alcanzó un nivel similar a **Opus 4.5**, mientras que GPT-5.6-Sol y Claude Mythos 5 lograron los mejores resultados.

## La diferencia de coste es abismal

Aquí viene lo preocupante para los defensores. Un test de Cyber Ranges de 100 millones de tokens costó:

| Modelo | Coste por test |
|--------|---------------|
| Opus 4.5/4.6 | ~$85 |
| GLM-5.2 | ~$46 |
| DeepSeek V4-Pro | **$1.19** |

En tareas individuales, DeepSeek V4-Pro costó **28 céntimos** por tarea vs. $15 de Opus 4.6. Esto hace que los ciberataques con modelos abiertos sean baratos y fáciles de escalar.

## Medidas de seguridad ineficaces

AISI encontró que las medidas de seguridad en modelos open-weight son **mayormente ineficaces**. DeepSeek V4-Pro a veces rechazó tareas de ingeniería inversa, pero simplemente intentarlo de nuevo fue suficiente para eludir la restricción. Los controles de monitoreo, clasificadores y límites de usuario no pueden transferirse de forma fiable a modelos abiertos porque dependen de controlar el acceso al modelo.

Esto no es exclusivo de open-weight: un estudio reciente mostró que grupos terroristas también están haciendo jailbreak a chatbots comerciales para planificar ataques. Pero los modelos abiertos añaden otro riesgo al no tener control de acceso alguno.

## Ventana de oportunidad para defensores

AISI ve esta brecha como una **ventana de preparación**. Durante ese tiempo, los defensores con acceso a los sistemas cerrados más potentes pueden actuar antes de que las mismas capacidades estén disponibles libremente sin salvaguardas comparables.

En abril de 2026, dos modelos cerrados (Mythos Preview y GPT-5.5) entregaron algunos de los mayores avances en capacidades cibernéticas de AI desde que AISI comenzó a testear. El Centro Nacional de Ciberseguridad del Reino Unido emitió entonces advertencias internacionales de que el panorama de amenazas cibernéticas está cambiando rápido.

**Kimi K3**, cuyos pesos completos se esperan antes del 27 de julio, podría cerrar aún más la brecha, aunque a un coste mucho mayor que otros modelos abiertos.

---

*Fuente: [The Decoder](https://the-decoder.com/open-weight-models-now-match-frontier-cyber-performance-from-just-four-months-ago-at-a-fraction-of-the-cost/) — 18 julio 2026*
