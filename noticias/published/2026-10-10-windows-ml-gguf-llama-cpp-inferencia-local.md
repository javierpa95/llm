---
title: "Windows ML incorpora llama.cpp: los modelos GGUF ya se ejecutan en local en Windows sin convertirlos a ONNX"
date: 2026-10-10
source: "Microsoft Foundry on Windows Blog"
source_url: "https://devblogs.microsoft.com/foundry-on-windows/build-on-winml-oct-7-26/"
category: "herramientas"
summary: "Windows ML añade soporte experimental para GGUF vía llama.cpp, con endpoint compatible con el SDK de OpenAI y placement explícito de CPU/GPU/NPU."
reading_time: "4 min"
tags: [windows-ml, llama-cpp, gguf, inferencia-local, cuantización, microsoft]
---

Microsoft ha dado el paso que faltaba para que la inferencia local deje de ser un asunto de herramientas de terceros en Windows: **Windows ML, el framework nativo de inferencia de Windows, acepta ahora modelos en formato GGUF** mediante una integración experimental de llama.cpp. El anuncio, publicado el 7 de octubre en el blog oficial de Microsoft Foundry on Windows, permite descargar un modelo GGUF de Hugging Face y ejecutarlo localmente sin la conversión previa a ONNX que hasta ahora exigía el stack nativo de Microsoft.

## Una API de texto para dos mundos

La novedad principal es la **Text Generation API** de Windows ML: una única superficie de API que acepta modelos de lenguaje en GGUF **y** ONNX. El sistema selecciona automáticamente el motor de ejecución adecuado — llama.cpp para GGUF, ONNX Runtime para ONNX — de modo que la aplicación no necesita ramificarse por formato. En paralelo se lanza una **Speech Recognition API** que transcribe audio con un modelo Whisper en ONNX; ambas pueden combinarse para construir un asistente de voz completamente local.

Para prototipado rápido, las APIs exponen un **endpoint compatible con OpenAI**: se arranca un servidor local con el modelo y el SDK de OpenAI existente se conecta cambiando solo la URL base:

```powershell
WinMLServer.exe model.gguf --model-id qwen2.5-0.5b --target gpu --port 8080
```

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://127.0.0.1:8080/v1",
    api_key="<access key printed on startup>",
)

stream = client.chat.completions.create(
    model="qwen2.5-0.5b",
    messages=[{"role": "user", "content": "¿Qué puedo ejecutar en local?"}],
    stream=True,
)
```

## Runtime nativo con placement explícito por etapas

Por debajo de las APIs de alto nivel, Microsoft presenta la **Windows ML Runtime API** (experimental, vía NuGet `Microsoft.Windows.AI.MachineLearning` 2.7.2021). Sus novedades respecto a ONNX Runtime:

- **Pipelines multi-modelo deterministas** con placement explícito de dispositivo (CPU, GPU, NPU) por etapa — útil para encadenar un encoder con un decoder.
- **Tipos de datos nativos de Windows** con rutas zero-copy para imágenes, frames de vídeo, buffers de audio y texto.
- **Compilación anticipada** de modelos a artefactos listos para ejecutar, reduciendo el arranque.

Las ONNX Runtime APIs tradicionales siguen plenamente soportadas: ambas conviven, así que no hay presión por migrar.

| Componente | Formato | Estado |
|---|---|---|
| Text Generation API | GGUF + ONNX | Experimental |
| Speech Recognition API | ONNX (Whisper) | Experimental |
| Runtime API nativa | ONNX (y GGUF vía llama.cpp) | Preview experimental |
| ONNX Runtime APIs | ONNX | Soporte estable |

## Contribuciones directas a llama.cpp con NVIDIA

Microsoft no se limita a empaquetar llama.cpp: junto con NVIDIA y la comunidad reporta mejoras de rendimiento upstream — optimización de kernels CUDA, kernel fusion, mejor scheduling CPU–GPU, repacking de pesos y CUDA graphs — además de soporte para **speculative decoding** (Eagle-3, MTP, D-Flash2), ejecución multi-GPU y cuantización NVFP4. Estas contribuciones benefician a todo el ecosistema llama.cpp, no solo a Windows.

Encaja además con la dirección marcada hace dos semanas, cuando [[2026-09-28-transformers-gguf-llama-cpp-inferencia-local|transformers empezó a cargar GGUF directamente]]: el formato GGUF se está desacoplando de su runtime original y aparece en más y más stacks. Con Windows ML, el camino del "descargo un GGUF de Hugging Face y lo ejecuto" se vuelve nativo en los tres grandes ecosistemas de escritorio — Linux/macOS vía llama.cpp, Python vía transformers y ahora Windows vía el framework del SO.

Microsoft matiza que todo el conjunto es **experimental** y anima a revisar los escenarios soportados y limitaciones conocidas antes de depender de ello en producción; para los benchmarks, el contexto es la nueva generación de PCs Windows con RTX Spark (ver [[2026-10-09-microsoft-rtx-spark-surface-dev-box-1-petaflop-local|la noticia de ayer]]), con hasta 128 GB de memoria unificada.
