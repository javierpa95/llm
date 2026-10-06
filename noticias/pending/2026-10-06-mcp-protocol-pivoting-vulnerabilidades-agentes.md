---
title: "🔒 Protocol pivoting: Google y cuatro organizaciones confirman vulnerabilidades en MCP que propagan prompt injection entre agentes"
date: 2026-10-06
source: "Ars Technica"
source_url: "https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/"
category: "seguridad"
summary: "Borrador. Investigador independiente demuestra 'protocol pivoting': explotar la confianza entre agentes en MCP/A2A para propagar prompt injection. Google, JP Morgan, Rapid7 y otros confirmaron vulnerabilidades; la de Google puntúa 8/10."
reading_time: "5 min"
tags: [mcp, agentes, prompt-injection, ssrf, seguridad, protocolos, a2a]
---
> **BORRADOR** — publicado en pending/ para revisión humana. Candidata relevante no publicada el 2026-10-06 (se priorizó Beam de Reflection AI como modelo abierto del día).

## La noticia

En los últimos cinco meses, **Google y cuatro organizaciones más** —JP Morgan Chase, Weviate, Rapid7, la dirección interministerial de informática del Estado francés y el gobierno federal de EE.UU. entre las probadas— han reconocido vulnerabilidades que permiten a un atacante usar un agente dentro de una red objetivo para **propagar instrucciones maliciosas a otros agentes internos**. El investigador independiente **Syed Anas Mohiuddin** lo demostró con pruebas de concepto contra los agentes de estas organizaciones y lo bautizó como **«protocol pivoting»**: un ataque multipaso que entra por un protocolo (MCP), explota las suposiciones de confianza entre protocolos (por ejemplo Google A2A o Agent Network Protocol) y escala a capacidades de otro protocolo donde la autorización «se pierde en la traducción».

## Datos técnicos

| Hallazgo | Detalle |
|---|---|
| **CVE-2026-97228** (Rapid7) | Severidad 2,7/10; parcheado en septiembre |
| **Google mcp-toolbox** | Severidad **8/10**: cliente HTTP sin política CheckRedirect ni validación de IP → SSRF vía parámetro de path que sigue redirecciones a endpoints internos. Parche con allow-list/block-list de IPs |
| **Clase de ataque** | Prompt injection indirecto entre agentes; los guardrails de agentes especializados (traducción, análisis de datos) suelen ser laxos |
| **Vector común** | Los servidores MCP guardan credenciales y los agentes confían en todos los agentes internos |

El responsable de inteligencia de vulnerabilidades de Rapid7, **Douglas McKee**, resume el problema: «Alguien planta texto en contenido, un agente lo lee y lo reenvía a otro agente como una tarea delegada normal, y ese segundo agente la ejecuta porque confía en quien le pasó el trabajo. Cada pieza de la cadena hizo exactamente lo que estaba diseñada para hacer, y por eso es tan difícil de detectar». El investigador de X41 D-Sec **Markus Vervier** matiza que, para él, sigue siendo «prompt injection indirecto»: que el prompt llegue por A2A y se manifieste vía MCP no es estrictamente necesario para el ataque. La lección para arquitecturas agénticas: MCP se ha extendido por millones de organizaciones **antes de endurecerse**, y en la carrera por construir arquitecturas agénticas se abandonó el principio de **zero trust** —asumir que algún nodo puede estar comprometido y exigir autorización entre nodos—. Cualquier cosa que salga de un LLM hacia una herramienta debe tratarse como «input de un desconocido de internet», porque en un escenario de prompt injection, exactamente eso es.
