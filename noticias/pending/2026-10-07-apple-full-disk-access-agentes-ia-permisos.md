---
title: "Borrador: Apple restringe Full Disk Access en macOS para frenar el abuso de agentes de IA que leen mensajes y historiales"
date: 2026-10-07
source: "Ars Technica / Apple Developer"
source_url: "https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/"
category: "seguridad"
summary: "Borrador. Apple cambia los permisos de Full Disk Access en macOS tras el caso Muse de Meta: los agentes de IA con FDA podían leer mensajes, correo y historiales sin que el usuario lo entendiera."
reading_time: "3 min"
tags: [apple, macos, agentes, permisos, full-disk-access, meta, muse, seguridad]
---

> **BORRADOR** — publicado en pending/ para revisión humana. Candidata el 2026-10-07 (se priorizó el incidente de Wikimedia/OpenAI como noticia principal del día).

## La noticia

El viernes 2 de octubre, **Apple anunció** que va a cambiar los permisos de **Full Disk Access (FDA)** en macOS para frenar el uso indebido por parte de desarrolladores de aplicaciones —en particular, de **agentes de IA**— que acceden a todo el sistema (archivos, correo, mensajes, historiales de navegación) sin que el usuario comprenda el alcance. El anuncio llegó dos semanas después de que el columnista **Jason Aten** denunciara que el agente **Muse de Meta** le mostró una notificación que hacía referencia a una conversación privada en Apple Messages sin que él lo hubiera pedido.

## El he said/she said

- **Meta** (CTO David Singleton) sostuvo que leer Messages requería dos permisos manuales: FDA y activar el conector de Messages en Muse.
- El experto en macOS **Patrick Wardle** cuestionó esa versión: técnicamente, con FDA cualquier archivo no-root es legible, incluidos chats y cookies. Wardle había descrito 11 días antes una configuración de Muse que permitía a cualquier código en el Mac **tomar control completo del asistente** (ataques ClickFix), y Amazon había bloqueado Muse de su plataforma.
- La declaración de Apple contradice implícitamente la postura de Meta: «A medida que los agentes de IA se vuelven más capaces y autónomos, los riesgos asociados a este nivel de acceso crecerán sustancialmente».

## Pendiente de verificar

- Detalle técnico exacto de los cambios de FDA en la próxima versión de macOS (disponible en el boletín para desarrolladores de Apple)
- Si hay más apps afectadas o si el cambio aplica solo a nuevas concesiones
- Respuesta final de Meta tras el anuncio
