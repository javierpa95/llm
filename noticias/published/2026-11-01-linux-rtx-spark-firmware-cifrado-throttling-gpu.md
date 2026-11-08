---
title: "🔌 Linux en el portátil RTX Spark: el driver abierto funciona, pero un firmware cifrado de Windows estrangula la GPU a 780 MHz — 65 tok/s en Windows, 14 en Linux"
date: 2026-11-01
source: "MindStudio Blog / Hacker News"
source_url: "https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop"
category: "hardware"
summary: "Dual-boot verificado en el MSI Prestige RTX Spark: GPU acelerada vía driver abierto de Nvidia, 4K a 120Hz y todo funciona — hasta que enchufas el portátil a la pared y el clock cae de 2,2 GHz a 780 MHz porque la tabla de potencia del firmware solo la descifra el driver de Windows."
reading_time: "5 min"
tags: [hardware-local, nvidia, linux, rtx-spark, inferencia]
---

Los primeros portátiles con el chip **RTX Spark** —MSI Prestige, Asus ProArt, Dell XPS— comparten GPU con el DGX Spark de sobremesa y llegan con hasta 128 GB de memoria unificada, la apuesta de Nvidia por la IA local. Pero el ecosistema de inferencia (vLLM, SGLang) es Linux-first, así que la pregunta era obvia: ¿se puede dual-bootear Linux en estas máquinas? Un análisis hands-on del ecosistema MindStudio lo ha probado a fondo en el MSI Prestige N16 Flip AI Plus ([artículo original](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop)).

### Qué funciona (y qué no)

La respuesta corta: **sí funciona, con una trampa seria**. Linux instala y arranca con escritorio completo, aceleración GPU vía el driver abierto de kernel de Nvidia, salida 4K a 120 Hz, audio, teclado y touchpad operativos tras configuración. El problema llega al enchufar el portátil a la corriente: el clock de la GPU se bloquea en **~780 MHz en Linux frente a los ~2,2 GHz de Windows**.

| Entorno | GPT-OSS-120B (tok/s) |
|---|---|
| Windows nativo | 65,4 |
| WSL2 | 65,1 |
| DGX Spark (sobremesa) | 61,0 |
| **Linux nativo (mismo portátil)** | **13,9** |

La causa raíz: un componente oculto de Windows llamado **Nvidia Platform Controllers and Framework** gestiona el reparto de potencia entre CPU y GPU, y su tabla de potencia está **cifrada — solo el driver de Windows puede descifrarla**. Sin esa tabla, Linux no puede pedir los clocks altos y el chip se estrangula solo. Como agravante, el reparto de los 128 GB de memoria unificada (96 GB reservados a GPU por defecto) solo se ajusta desde Windows, y Linux necesita ese ajuste previo para ver más RAM.

### La lectura para el IA local

El caso es un recordatorio incómodo de que **el hardware local se gana en firmware, no en drivers**: el mismo silicio rinde 4,7× peor según qué sistema operativo controle la gestión de potencia. La recomendación práctica hoy es **WSL2**, que monta la pila de drivers de Windows —full GPU boost enchufado o con batería— mientras conserva el tooling Linux-first (vLLM, SGLang, llama.cpp). El arreglo de verdad depende de Nvidia: portar la lógica del platform controller a su driver Linux convertiría estos portátiles en un DGX Spark portátil genuino. Mientras tanto, el sueño del portátil Linux de IA local choca contra un blob cifrado que ni siquiera admite que existe.
