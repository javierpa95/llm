---
title: "Mojo🔥 es ahora open source: el compilador y toolchain bajo Apache 2.0 tras el prometido release 1.0"
date: 2026-08-19
source: "Simon Willison's Blog / Modular"
source_url: "https://www.modular.com/blog/mojo-open-source"
category: "herramientas"
summary: "Modular cumple la promesa de 2023: el compilador de Mojo, lenguaje estilo Python optimizado para programación GPU, se publica bajo Apache 2.0 tras el 1.0 de la semana pasada."
reading_time: "2 min"
tags: [mojo, modular, gpu-programming, open-source, apache-2.0, compilador, python]
---

La semana pasada Mojo alcanzó su versión 1.0 y hoy Modular ha cumplido la promesa original de 2023: el compilador y el toolchain de **Mojo** se publican bajo licencia **Apache 2.0**. Es un movimiento relevante para el ecosistema de IA porque Mojo nació como un superset de Python diseñado para hacer la programación de GPUs "tan indolora como sea posible" con sintaxis inspirada en Python.

Un matiz importante: la hoja de ruta cambió en agosto de 2025. Mojo ya no aspira a ser un superset completo de Python (la migración de código Python a Mojo se delega, en parte, en las propias herramientas de código asistido por IA), sino a ser su propio lenguaje, optimizado para cómputo en GPU y aceleradores. Abrir el compilador permite a la comunidad auditar, portar y contribuir kernels críticos para inferencia sin depender de una toolchain propietaria.