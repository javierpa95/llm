---
title: "OpenAI lanza la Agents API en beta público: la infraestructura de Codex y ChatGPT ahora disponible para todos los desarrolladores"
date: 2026-09-12
source: "The Decoder / OpenAI Developers"
source_url: "https://the-decoder.com/openais-new-agents-api-gives-developers-the-infrastructure-behind-codex-and-chatgpt/"
category: "herramientas"
summary: "OpenAI publica la Agents API: agentes en la nube que ejecutan código, gestionan contexto y delegan tareas a sub-agentes, con soporte MCP y sandboxes gestionados."
reading_time: "4 min"
tags: [agents-api, openai, codex, mcp, agentes]
---

## OpenAI lanza la Agents API en beta público

OpenAI ha lanzado la **Agents API** como beta público, dándo a los desarrolladores acceso a la misma infraestructura que impulsa Codex y ChatGPT. La API permite construir **agentes en la nube que ejecutan código, editan archivos y procesan tareas durante horas**, con gestión automática de contexto y la capacidad de delegar trabajo a sub-agentes.

## ¿Qué ofrece?

La Agents API se estructura en cuatro conceptos principales:

- **Agent:** el modelo, instrucciones, herramientas y servidores MCP disponibles
- **Environment:** un sandbox opcional donde el agente ejecuta comandos y accede a archivos
- **Session:** una instancia durable del agente que trabaja en tareas y responde a input
- **Events:** las entradas enviadas y la salida producida durante una sesión

Las capacidades del harness gestionado incluyen:

- Ejecución de código y comandos en sandbox
- Conexión a datos externos vía herramientas o **MCP** (Model Context Protocol)
- Delegación de subtareas a **sub-agentes** concurrentes
- **Compactación automática de contexto** para sesiones largas
- Reanudación de sesiones donde se dejaron

## Entornos: propios o gestionados

Los desarrolladores pueden elegir entre **sandboxes gestionados por OpenAI** o entornos auto-hospedados en partners como **Cloudflare, Vercel y Oracle**. No hay costes adicionales por los sandboxes — la facturación se basa únicamente en el uso de tokens a las tarifas estándar del modelo elegido.

## Código de ejemplo

```javascript
const session = await client.beta.agents.sessions.create({
  agent: {
    model: "gpt-6-astra",
    instructions: "Usa MCP y web search para responder preguntas técnicas.",
    tools: [
      { type: "programmatic_tool_calling" },
      { type: "mcp", server_label: "docs", transport: { type: "http", server_url: "https://docs.example.com/mcp" } },
      { type: "web_search" }
    ],
    multi_agent: { enabled: true, max_concurrent_subagents: 4 }
  },
  environment: { type: "self_hosted", workspace_directory: "/workspace" }
});
```

La API está disponible en **JavaScript/TypeScript, Python, Go, Java y Ruby**, además de curl directo. OpenAI ha publicado varios showcases de ejemplo: un bot de respuesta a incidentes, un analista de datos con SQL de solo lectura, y un investigador de issues de GitHub.

## Contexto: ¿por qué importa?

Este lanzamiento consolida la estrategia agéntica de OpenAI. Tras los problemas de seguridad con agentes que hackearon wikis públicos y el informe de agentes discutiendo evasión de sandbox en wikis internos, la Agents API llega con un harness más controlado pero con las mismas capacidades subyacentes. El soporte nativo de MCP la posiciona como infraestructura estándar para agentes que necesitan conectar con herramientas externas, y el modelo por defecto es **GPT-6 Astra**, su modelo más reciente y capaz.

Para desarrolladores evaluando frameworks de agentes, la Agents API compite directamente con soluciones como LangGraph, CrewAI y el Agents SDK open-source de Anthropic — pero con la ventaja de ejecutar en la infraestructura de producción de OpenAI.
