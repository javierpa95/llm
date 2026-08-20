---
title: "smolvm: sandbox de VM aisladas por hardware para ejecutar Python y JavaScript no confiables generados por IA"
date: 2026-08-20
source: "Simon Willison's Blog"
source_url: "https://simonwillison.net/2026/Aug/19/smolmachines-untrusted-sandbox/"
category: "herramientas"
summary: "Simon Willison prueba smolvm 1.8.3: VMs con aislamiento por hardware (no contenedores) para ejecutar código no confiable de Python y JS, con arranque en frío de 0.6-1.5 s y ejecución en caliente de ~50 ms."
reading_time: "3 min"
tags: [sandbox, seguridad, vm, python, javascript, agentes, herramientas, simon-willison]
---

Ejecutar el código que generan los agentes de IA es uno de los problemas abiertos de la automatización: ¿cómo darle al modelo un sandbox donde correr Python o JavaScript sin que pueda tumbar el sistema o tocar la red? La respuesta clásica son los contenedores, pero comparten kernel con el host. **smolvm** (de smolmachines) apuesta por otra vía: **máquinas virtuales con aislamiento por hardware**, sin KVM compartido, con imágenes locales offline, ejecución sin red, límites de CPU/RAM, timeouts impuestos por la VM invitada, cuotas de almacenamiento y montajes de entrada de solo lectura.

Simon Willison lo sometió a una batería de pruebas real con Claude Code. Los resultados: **arranque en frío de 0.6-1.5 segundos** y **ejecución en caliente de unos 50 ms**, con todos los controles funcionando como se espera, incluyendo el modo `--unprivileged`. Curiosamente, el entorno de Claude Code para web no pudo ejecutarlo por falta de anidamiento de virtualización (`/dev/kvm` inexistente), así que las pruebas se hicieron vía GitHub Actions, donde los runners sí exponen `/dev/kvm`.

*Borrador pendiente de revisión: valorar si es noticia o reseña de herramienta; candidata a categoría herramientas.*