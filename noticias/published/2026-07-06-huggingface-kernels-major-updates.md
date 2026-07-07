---
title: "🤗 Kernels: Hugging Face renueva su ecosistema de kernels personalizados con seguridad mejorada y desarrollo agéntico"
date: 2026-07-06
source: "Hugging Face Blog"
source_url: "https://huggingface.co/blog/revamped-kernels"
category: "herramientas"
summary: "Hugging Face anuncia una renovación profunda de su proyecto Kernels: nuevo tipo de repositorio en el Hub, firmado criptográfico de kernels, compatibilidad con Torch Stable ABI y Apache TVM FFI, y los primeros pasos hacia el desarrollo agéntico de kernels con IA."
reading_time: "3 min"
tags: [huggingface, kernels, cuda, performance, agentic-ai, torch, tvm]
---
**Hugging Face ha publicado una actualización importante de su proyecto Kernels**, pensado para estandarizar cómo se empaquetan, distribuyen y consumen los kernels personalizados — el código de bajo nivel que permite ejecutar operaciones como Flash Attention a máxima velocidad en GPUs y otros aceleradores.

El cambio más visible es la introducción de un **nuevo tipo de repositorio `kernel` en el Hub**. Cada kernel tiene su propia página con metadatos sobre aceleradores compatibles, sistemas operativos y versiones de backend. Puedes explorar todos los kernels disponibles en [huggingface.co/kernels](https://huggingface.co/kernels).

### Seguridad por diseño

Como los kernels ejecutan código nativo con los mismos privilegios que el proceso Python que los carga, un kernel malicioso podría causar daños reales. El proyecto refuerza la seguridad con dos nuevas capas:

1. **Editores de confianza (`trusted publishers`)**: solo organizaciones verificadas pueden publicar kernels por defecto. Para cargar kernels de fuentes no verificadas hay que usar explícitamente `trust_remote_code=True`.
2. **Firmado de kernels**: usando Sigstore/cosign con claves efímeras, cada kernel se firma criptográficamente. Si un atacante compromete las credenciales de un editor de confianza en el Hub, no puede firmar kernels maliciosos porque no tiene la clave privada necesaria.

Además, el sistema usa **Nix para builds herméticas y reproducibles**, incrustando el SHA1 del código fuente en el propio kernel para garantizar trazabilidad.

### Expansión de frameworks

El proyecto amplía su soporte más allá de PyTorch:

- **Torch Stable ABI**: los kernels pueden apuntar a una versión específica de Torch (p.ej., 2.9) y ser compatibles con versiones posteriores durante ~2 años.
- **Apache TVM FFI**: primer framework alternativo soportado. Es un ABI estandarizado que permite que los kernels funcionen a través de múltiples frameworks (PyTorch, JAX, CuPy).

### Desarrollo agéntico de kernels

Una de las novedades más interesantes es el soporte para que **agentes de IA desarrollen kernels de forma autónoma**. La nueva CLI de `kernel-builder` está diseñada para ser "agent-optimized": comandos no interactivos, salidas fáciles de parsear, y un diseño de proyecto predecible que los agentes pueden usar para crear, compilar, benchmarkear y optimizar kernels iterativamente.

El sistema se integra con **HF Jobs** para ejecutar benchmarks en diferentes configuraciones de hardware y comparar resultados contra una línea base — todo orquestado por el agente.

Ejemplos de kernels generados con este flujo ya están disponibles:
- [kernels/drbh/yamoe](https://huggingface.co/kernels/drbh/yamoe)
- [kernels/sayakpaul/qk-norm-rope](https://huggingface.co/kernels/sayakpaul/qk-norm-rope)

### Por qué es importante

Los kernels personalizados son el secreto del rendimiento en LLMs: Flash Attention, cuantización, kernels de MoE, y decenas de optimizaciones críticas dependen de este ecosistema. Que Hugging Face lo convierta en un ciudadano de primera clase del Hub —con seguridad, reproducibilidad y soporte para desarrollo por agentes— acelera significativamente el ciclo de innovación en inferencia y entrenamiento eficiente.
