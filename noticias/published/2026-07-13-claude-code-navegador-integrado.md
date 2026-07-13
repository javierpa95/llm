---
title: "Claude Code ahora tiene un navegador integrado: el agente lee, hace clic y escribe en sitios web externos"
date: 2026-07-13
source: "The Decoder"
source_url: "https://the-decoder.com/claude-code-now-has-a-built-in-browser-that-lets-the-ai-read-click-and-type-on-external-websites/"
category: "herramientas"
summary: "Anthropic añade un navegador integrado a Claude Code que permite al agente leer documentación, interactuar con issue trackers y navegar por sitios web externos, con clasificadores de seguridad que bloquean compras automáticas y creación de cuentas."
reading_time: "2 min"
tags: [claude code, anthropic, herramientas, agentes, navegador]
---
Anthropic ha añadido una ventana de navegador integrada a **Claude Code**, su agente de programación en terminal. Claude ahora puede abrir páginas web, leer su contenido, hacer clic en enlaces y escribir en formularios directamente desde la aplicación, sin necesidad de extensiones externas.

El navegador funciona como un explorador con pestañas y se abre mediante un atajo de teclado. Claude usa las mismas herramientas que ya emplea para previsualizar aplicaciones locales, pero con controles de seguridad adicionales. **Clasificadores específicos** filtran cualquier acción de escritura en sitios externos, y el modelo no puede comprar nada, crear cuentas ni saltarse CAPTCHAs sin consentimiento explícito del usuario. El navegador opera sobre un perfil limpio, sin credenciales guardadas.

Las organizaciones pueden restringir el acceso a sitios externos mediante una lista de permitidos o deshabilitar completamente las herramientas de navegación. Para quienes necesiten que Claude actúe dentro de sus propias sesiones autenticadas, Anthropic recomienda usar la **extensión de Chrome** existente en lugar del navegador integrado.

## Por qué es relevante

Hasta ahora, Claude Code podía leer archivos locales y ejecutar comandos, pero interactuar con documentación web, issue trackers o APIs externas requería que el usuario copiara y pegara el contenido manualmente. Con el navegador integrado, el agente puede **seguir enlaces, leer páginas de documentación y rellenar formularios** de forma autónoma, cerrando el ciclo de interacción con el ecosistema web sin intervención humana constante.

Esta capacidad acerca a Claude Code a un **agente verdaderamente autónomo** que puede debuggear problemas consultando documentación online, reportar bugs en issue trackers, o incluso desplegar aplicaciones en plataformas web sin que el usuario tenga que salir del terminal.
