---
title: "Mistral lanza Leanstral 1.5: modelo abierto de verificación formal que encuentra bugs reales en código"
date: 2026-07-04
source: "The Decoder + Mistral AI"
source_url: "https://mistral.ai/news/leanstral-1-5/"
category: "modelos"
summary: "Mistral AI libera Leanstral 1.5, un modelo abierto (Apache 2.0, 6B parámetros activos) que alcanza el 100% en miniF2F, resuelve 587/672 problemas de la competición Putnam y descubre 5 bugs desconocidos en repositorios open-source reales."
reading_time: "3 min"
tags: [mistral, leaNStral, verificación-formal, lean4, open-source, modelos]
---

Mistral AI ha publicado **Leanstral 1.5**, una nueva versión de su modelo especializado en verificación formal con Lean 4. El modelo se distribuye bajo licencia **Apache 2.0** con una arquitectura MoE de 119B parámetros totales pero solo **6B activos por token**, lo que lo hace ejecutable en hardware de consumo.

Los resultados en benchmarks son contundentes: alcanza el **100% en miniF2F** (problemas desde nivel escolar hasta olimpiada de matemáticas), resuelve **587 de 672 problemas de PutnamBench** (la competición universitaria de matemáticas más prestigiosa de EE.UU.) y logra estado-del-arte en **FATE-H (87%) y FATE-X (34%)**, benchmarks de álgebra abstracta a nivel de máster y doctorado. Solo el sistema cerrado Aleph Prover lo supera en PutnamBench, pero a un costo 10× mayor por problema.

## Entrenamiento en tres fases

El modelo se entrenó con un pipeline de tres etapas: *mid-training* en dominios de razonamiento formal, *supervised fine-tuning* con demostraciones de proof engineering, y *reinforcement learning* mediante **CISPO** en dos entornos:

- **Multiturn environment:** el modelo recibe un teorema y debe demostrarlo o refutarlo iterativamente, recibiendo feedback del compilador Lean en cada intento.
- **Code agent environment:** Leanstral opera como un desarrollador en un sistema de ficheros real — edita archivos, ejecuta comandos bash y usa el *Lean language server* para inspeccionar objetivos, errores e información de tipos en tiempo real.

Esta capacidad de razonamiento prolongado se refleja en el *test-time scaling*: al aumentar el presupuesto de tokens de 50k a 4M, los problemas resueltos en PutnamBench pasan de 44 a 587, con una mejora monótona y continua.

## Caza de bugs en el mundo real

Más allá de los benchmarks, Leanstral 1.5 demuestra utilidad práctica en verificación de código. Mistral construyó un pipeline automatizado que traduce Rust a Lean mediante Aeneas, infiere propiedades de corrección y prueba cada propiedad hasta cuatro veces. Si todas fallan, intenta demostrar la negación.

En **57 repositorios open-source** analizados, el pipeline identificó **47 propiedades violadas**, de las cuales **11 apuntaban a bugs genuinos** y **5 eran desconocidos** — incluyendo un desbordamiento en la función `sign` de decodificación zigzag de la librería `varinteger` en Rust, donde la expresión `(value + 1)` provocaba crashes en modo debug y corrupción silenciosa en release.

> "Leanstral 1.5 demuestra que la verificación formal ya puede aplicarse a código real y encontrar bugs que los métodos tradicionales pasan por alto", señala Mistral en el anuncio.

El modelo ya está disponible en [Hugging Face](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) y a través de una API gratuita. Mistral recomienda usarlo con [Mistral Vibe](https://mistral.ai/news/leanstral-1-5/) para tareas de proof engineering en Lean 4.
