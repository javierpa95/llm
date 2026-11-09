---
title: "Claude Opus 5.5: Anthropic estrena la familia 5.5 liderando el coding agéntico con un coste un 40% menor que Opus 5"
date: 2026-11-09
source: "Anthropic"
source_url: "https://www.anthropic.com/claude-opus-5-5"
category: "modelos"
summary: "Opus 5.5 es el nuevo modelo líder de Anthropic: 66,4% en Terminal-Bench 4.0, precios de 4$/20$ por millón de tokens y cache reads un 60% más baratos."
reading_time: "4 min"
tags: [anthropic, claude, opus-5-5, coding-agentes, precios]
---

🧠 **Anthropic** ha lanzado **Claude Opus 5.5**, el primer modelo de su nueva familia 5.5 y el relevo de Opus 5 como modelo insignia. La promesa central no es solo más capacidad, sino **eficiencia**: rinde al nivel de Claude Fable 5.1 en la mayoría de tareas y cuesta un **40% menos** que Opus 5 en cargas típicas. Los precios por millón de tokens quedan en **4 $ de entrada y 20 $ de salida** (un 20% menos), y los **cache reads** — que dominan el coste del trabajo agéntico — bajan a 0,20 $, un **60% menos**. Además genera salida un 30% más rápido y ha sido evaluado antes de su lanzamiento por evaluadores externos como METR.

En benchmarks, Opus 5.5 lidera el **coding agéntico**: 66,4% en Terminal-Bench 4.0 (frente al 57,9% de GPT-6 Astra y 52,3% de Opus 5), 54,4% en FrontierCode v1.1 y 57,8% en CursorBench 4.0. La eficiencia es el argumento más sólido: a esfuerzo por defecto iguala a GPT-6 Astra en Terminal-Bench por un **40% del coste por tarea**, y le supera en FrontierCode gastando una quinta parte. En pruebas internas tradujo HAProxy de C a Rust en 9,5 horas (Fable 5.1 tardó 12) con un coste un 51% menor, y un tester auditorizó 200.000 líneas de código en menos de 3 horas, donde Opus 5 necesitó más de 20.

| Precio (por 1M tokens) | Opus 5.5 | Opus 5 |
|---|---|---|
| Cache reads | **0,20 $** (−60%) | 0,50 $ |
| Input | **4 $** (−20%) | 5 $ |
| Output | **20 $** (−20%) | 25 $ |
| Cache writes | **5 $** | 6,25 $ |

En seguridad, Opus 5.5 logra las mejores puntuaciones hasta la fecha en la **auditoría conductual automatizada** de Anthropic: es menos propenso a acciones difíciles de revertir, más resistente al prompt injection e incluye 'preserved thinking' contra la destilación. Al igualar a Claude Mythos 5.1 en biología y ciberseguridad, hereda las salvaguardas de Fable 5.1: la mayoría de tareas de ciberseguridad se redirigen a Opus 4.8, y el acceso ampliado requiere los programas de verificación de Life Sciences y Cyber. Anthropic anticipa además que los márgenes de benchmark «son cada vez menos fiables» a este nivel: la diferencia real con Fable 5.1 es más estrecha de lo que indican las tablas. El modelo ya está disponible en la API (`claude-opus-5-5`), AWS, Google Cloud y Azure.

Fuentes: [Anthropic — Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
