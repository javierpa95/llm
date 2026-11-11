---
title: "Claude Code filtra secretos en GitHub: la opción «no volver a preguntar» guarda contraseñas en claro en settings.local.json"
date: 2026-11-11
source: "Ars Technica / Apiiro"
source_url: "https://arstechnica.com/ai/2026/11/claude-code-settings-files-expose-thousands-of-secrets-on-github/"
category: "industria"
summary: "Investigadores de Apiiro hallan más de 100.000 ficheros de ajustes de Claude Code subidos a repos públicos; ~1.100 contenían tokens API, contraseñas y claves privadas."
reading_time: "4 min"
tags: [claude-code, seguridad, github, agentes, secretos]
---

Los agentes de código tienen un problema de higiene que nadie había mirado de cerca: qué hacen con los permisos que les concedemos. Investigadores de **Apiiro** han descubierto que **Claude Code guarda en claro los comandos de shell que el usuario aprueba** cuando marca la casilla «Yes, and don't ask again». Esa regla se escribe en el fichero local `.claude/settings.local.json` —a veces como patrón, pero frecuentemente con el comando íntegro—, de modo que si el comando incluía un token de API, una contraseña de base de datos o credenciales root, **el secreto queda plasmado en un fichero de configuración**.

El fallo no está en el fichero en sí, sino en la protección que lo rodea. Anthropic documenta que `settings.local.json` se añade al `.gitignore` **global** del desarrollador, lo que suele bastar… hasta que algo rompe ese supuesto: se clona el repo en otra máquina, una carpeta se convierte en repo más tarde, o —el caso más delicado— **el propio Claude Code commitea el fichero sin intervención humana**. Al no existir esa exclusión a nivel de repositorio, el fichero termina en GitHub.

## Los números del escaneo

| Métrica | Valor |
|---------|-------|
| Ficheros `.claude/settings.local.json` en repos públicos | **>100.000** |
| Ficheros con secretos reales (tokens, contraseñas, claves privadas) | **~1.100** |
| Organizaciones afectadas | **63** |

Y hay un agravante típico de Git: **borrar el fichero no borra el secreto**. Persiste en el historial de commits y en los forks que alguien ya hubiera hecho del repositorio, por lo que la remediación exige rotar credenciales o reescribir la historia.

## Qué enseña este caso

La lección va más allá de Anthropic: es el precio de la comodidad en los agentes. Cada permiso permanente que otorgamos se materializa en un artefacto de configuración que vive en el disco, con contexto sensible incluido, y que ninguna herramienta de revisión de código trata como secreto por defecto. Las recomendaciones de Apiiro aplican a cualquier agente con memoria de permisos:

- **Añadir** `.claude/settings.local.json` (o su equivalente) al `.gitignore` **de cada repositorio**, no solo al global.
- Escanear los repos con detectores de secretos (gitleaks, truffleHog) antes de asumir que están limpios.
- Tratar las reglas de «don't ask again» como superficie de ataque: si un comando con credenciales se aprobó una vez, esas credenciales merecen rotación.
- Activar secret scanning de GitHub en organizaciones, que avisa aunque el commit sea antiguo.

No es un jailbreak ni un fallo del modelo: es un agente siendo demasiado diligente anotando qué le permitimos hacer. Justo lo contrario del caso de la semana pasada con agentes filtrando información en Grok Build, y otra muestra de que la seguridad de los agentes de código se juega tanto en el sistema de ficheros como en los pesos del modelo.
