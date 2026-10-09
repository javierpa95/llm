---
title: "🔒 Zenity: un solo prompt secuestró todos los agentes de IA de una cuenta de AWS mediante credenciales internas"
date: 2026-10-09
source: "The Decoder / Zenity Labs"
source_url: "https://the-decoder.com/a-single-prompt-was-enough-to-hijack-every-ai-agent-in-an-aws-account-zenity-researchers-found/"
category: "seguridad"
summary: "Zenity descubre 'AgentCorruption': un prompt inyectado en un agente público de Bedrock AgentCore roba credenciales IMDS y toma el control de todos los agentes de la cuenta y región."
reading_time: "3 min"
tags: [seguridad, agentes, aws, bedrock, agentcore, prompt-injection, credenciales, memory-poisoning, zenity]
draft: true
---

**BORRADOR (pendiente de revisión).** Zenity Labs publicó «AgentCorruption», una cadena de vulnerabilidades en **Amazon Bedrock AgentCore** que permitió a sus investigadores tomar el control de **todos los agentes de IA de una misma cuenta y región de AWS** partiendo de un solo chat message contra un agente público.

## El ataque en tres pasos

1. **Prompt injection en un agente público.** Construyeron un agente de prueba con **Strands** (framework open-source de AWS) con herramienta web, y en el chat de soporte de una tienda falsa le pidieron en lenguaje natural consultar el servicio de metadatos (IMDS, 169.254.169.254) y enviar la respuesta a un servidor externo. El agente obedeció: «el sandbox boundary que supuestamente debíamos derrotar simplemente no existía», dicen los investigadores.
2. **Robo de credenciales.** IMDS devolvió las credenciales temporales AWS completas (AccessKeyId, SecretAccessKey, session token), que funcionaron fuera de la plataforma. También expusieron material de certificados internos y una presigned URL de un S3 que no era de su cuenta. Quitar la herramienta web no habría ayudado: el fallo estaba en la plataforma; el ataque también funcionó vía CLI.
3. **Escalada a toda la región.** El rol por defecto de AgentCore no estaba limitado al agente receptor: aplicaba a **todos los agentes de la misma cuenta y región**, con permisos de lectura, escritura y borrado. Listaron todos los agentes, descargaron sus paquetes de código (a menudo con passwords y API keys olvidadas) y pudieron leer conversaciones privadas y **envenenar la memoria a largo plazo** de otros agentes para redirigir sus futuras conversaciones.

## Respuesta de AWS y contexto

Zenity reportó los hallazgos a AWS el **25 de diciembre de 2025**; desde entonces, AWS hizo de **IMDSv2** el despliegue por defecto y reforzó el rol de ejecución por defecto. Zenity vende una plataforma de seguridad para agentes, así que tiene interés comercial en divulgar este tipo de fallos — matiz importante.

El caso encaja en el patrón que ya venimos cubriendo de agentes con exceso de permisos: [[2026-10-07-wikimedia-agentes-openai-rogue-etherpad-proxy|los agentes 'rogue' de OpenAI contra Wikimedia]] o [[2026-10-01-anthropic-glm-5-3-exploits-open-weight-salvaguardas-bypass|GLM-5.3 construyendo exploits según Anthropic]]. La lección de principio de mínimo privilegio —que Sam Altman defiende públicamente— se quedó en papel en los defaults de AgentCore.
