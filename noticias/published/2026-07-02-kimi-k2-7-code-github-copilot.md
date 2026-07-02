---
title: "Kimi K2.7 Code aterriza en GitHub Copilot — primer modelo open-weight en el selector"
date: 2026-07-02
source: "GitHub Blog"
source_url: "https://github.blog/changelog/2026-07-01-kimi-k2-7-is-now-available-in-github-copilot/"
category: "herramientas"
summary: "GitHub añade Kimi K2.7 Code de Moonshot AI como modelo seleccionable en Copilot. Es la primera vez que un modelo open-weight aparece en el selector, ofreciendo una alternativa más económica a los modelos propietarios."
reading_time: "3 min"
tags: [github-copilot, kimi-k2-7, moonshot-ai, modelos-open-weight, coding, herramientas-ia]
---

**GitHub Copilot acaba de incorporar Kimi K2.7 Code de Moonshot AI como modelo seleccionable**, marcando la primera vez que un modelo de pesos abiertos (open-weight) aparece en el selector de modelos de Copilot. Hasta ahora solo estaban disponibles los modelos propietarios de OpenAI, Anthropic y Google.

El modelo está alojado por GitHub en infraestructura de Microsoft Azure y se factura según el consumo (usage-based billing) al precio que fije el proveedor. La integración supone un cambio de paradigma: **por primera vez, los usuarios de Copilot pueden elegir un modelo abierto** directamente desde el selector, sin necesidad de APIs externas ni configuraciones manuales.

## 📦 Disponibilidad

Kimi K2.7 Code se despliega gradualmente en los planes **Copilot Pro, Pro+ y Max**. Se puede seleccionar desde el model picker en:

- **VS Code** (v1.127.0+) y **Visual Studio** (v17.14.6+)
- **Copilot CLI**, **Copilot cloud agent** y **Copilot App**
- **github.com**, **GitHub Mobile** (iOS/Android)
- **JetBrains** (v1.9.1-251+), **Xcode** y **Eclipse

En las próximas semanas llegará también a los planes **Business y Enterprise**. Los administradores de organizaciones Copilot Business/Enterprise deben **activar explícitamente** la política de Kimi K2.7 Code en los ajustes de Copilot antes de que los miembros del equipo puedan usarlo. GitHub recomienda revisar los requisitos de seguridad, compliance y gobierno de datos antes de habilitar modelos open-weight.

## 🔍 ¿Qué es Kimi K2.7 Code?

Desarrollado por **Moonshot AI** (la misma compañía detrás del asistente Kimi), K2.7 Code es un modelo de **pesos abiertos** especializado en generación de código. Aunque no es tan conocido como Claude Sonnet o GPT-4o en el ámbito del coding, el modelo ha demostrado un rendimiento sólido en tareas de programación y destaca especialmente por su **relación calidad-coste**, compitiendo directamente con opciones propietarias más caras.

El modelo ya se podía usar de forma externa a través de APIs y herramientas como Cline, Roo Code o Claude Code, pero la integración nativa en Copilot simplifica drásticamente el acceso para los millones de desarrolladores que usan el ecosistema GitHub.

## 💡 Por qué importa

1. **Elección real** — Hasta ahora Copilot ofrecía modelos propietarios. Kimi K2.7 es la primera alternativa open-weight en el selector, y GitHub ha dejado claro que planea añadir más en el futuro.

2. **Coste más bajo** — Al ser un modelo open-weight alojado, los precios de uso pueden ser significativamente menores que los de los modelos frontier propietarios, una ventaja para equipos con alto volumen de peticiones.

3. **Open-weight en entornos enterprise** — Que GitHub (propiedad de Microsoft) aloje y ofrezca un modelo open-weight en Copilot es una señal de que el ecosistema se está moviendo hacia la interoperabilidad. Los equipos que antes no podían usar modelos abiertos por restricciones de infraestructura ahora tienen una vía oficial.

## 🧠 En contexto

GitHub Copilot no deja de ampliar su oferta de modelos. Esta misma semana también incorporó **Claude Sonnet 5** (general availability) y mejoras en **Copilot Agent**, **Copilot vision** y **auto model selection**. La apuesta de GitHub es clara: convertir Copilot en un **hub multicloud de modelos de IA**, donde el desarrollador elige según tarea, coste y preferencia, en lugar de estar atado a un único proveedor.

Kimi K2.7 Code se une a una tendencia más amplia: los modelos open-weight ya no son solo para ejecución local o APIs alternativas — empiezan a integrarse en los productos mainstream de desarrollo.
