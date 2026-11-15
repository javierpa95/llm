---
title: "llama.cpp v1.0.0: el motor de la IA local se hace mayor de edad con versionado semántico y caches FP8"
date: 2026-11-13
source: "Hugging Face Blog / ggml-org"
source_url: "https://huggingface.co/blog/ggml-org/llama-cpp-v1"
category: "herramientas"
summary: "El motor de inferencia C/C++ más usado de la IA local llega a v1.0.0: promesa de estabilidad de API/ABI, KV cache en FP8 (E4M3), cache MoE en memoria del host y soporte para Kimi-K3.1-Pro y Ripple."
reading_time: "4 min"
tags: [llama.cpp, ggml, ia-local, cuantizacion, kv-cache]
---

🛠️ **llama.cpp**, el motor de inferencia en C/C++ que hay debajo de la mayoría de las apps «ejecuta IA en tu ordenador», ha publicado la versión **v1.0.0** tanto de `libllama` como de `libggml` el 13 de noviembre de 2026, tres años y medio después del primer commit de Georgi Gerganov. El mensaje central es un contrato con los desarrolladores que dependen de sus librerías: **a partir de ahora, cualquier cambio incompatible en la API o ABI pública implicará un salto de versión mayor**. La tabla de reglas semver es explícita: MAJOR = breaking change en la API C pública de `./include`, MINOR = features compatibles, soporte de modelos o backends, PATCH = bugfixes.

## Qué trae la versión

| Cambio | Detalle |
|--------|---------|
| **KV cache FP8** | Nuevos caches clave-valor en formato E4M3 vía `-ctk f8_e4m3 -ctv f8_e4m3`, con escalas estáticas opcionales por tensor: menos memoria para contextos largos |
| **Cache MoE en host** | Cache de expertos en memoria del host con `moe_cache_size` / `moe_cache_cpu_share` configurables: modelos MoE que no caben en la VRAM pueden repartir trabajo con la CPU |
| **Nuevas arquitecturas** | Kimi-K3.1-Pro, Ripple-65B-Preview y xing4_0 (texto); drama-3 (TTS); visión para MageVL-Cowork y Kimi-K3.1 |
| **Limpieza de API** | Eliminadas 35 funciones deprecadas y `llama_set_warmup`; la API de speculative decoding NextN pasa a `llama.h` público |
| **llama-server** | Fixes de seguridad (SSRF, CORS, DNS rebinding), endpoint OpenAI-compatible `/v1/audio/speech` y web UI rediseñada con grupos de chat |
| **Distribución** | Artefactos para Linux/macOS/Windows/Android/iOS, Docker, Debian, Homebrew, conda-forge, Winget y XCFramework |

## Por qué importa

Para quien construye productos sobre inferencia local, la parte más relevante no es ninguna feature sino la **política de compatibilidad documentada** — hasta ahora, actualizar llama.cpp podía romper bindings sin aviso. El contra precio: esta misma versión elimina API deprecada, así que quien enlace `libllama` directamente debe recompilar bindings y pasar sus tests de integración antes de adoptarla. El equipo también ha reforzado la CI con runners self-hosted de NVIDIA, AMD, Qualcomm, Arm, IBM e Intel, y el proyecto ya soporta **más de 150 variantes de arquitecturas** además de todos los métodos mainstream de speculative decoding. Es el hito de madurez del ecosistema local: la pieza que hace viable la IA privada en hardware de consumo promete estabilidad de aquí en adelante.
