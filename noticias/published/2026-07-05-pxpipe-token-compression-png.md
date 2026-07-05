---
title: "pxpipe: herramienta open-source que recorta un 70% los costes de tokens convirtiendo texto a PNG"
date: 2026-07-05
source: "The Decoder"
source_url: "https://the-decoder.com/open-source-tool-pxpipe-hides-text-in-pngs-to-cut-claude-code-and-fable-5-token-costs-up-to-70/"
category: "herramientas"
summary: "pxpipe convierte prompts largos en imágenes PNG para explotar la diferencia de precios entre tokens de texto e imagen, logrando ahorros del 59-70% en Claude Code y GPT."
reading_time: "3 min"
tags: [pxpipe, token-compression, claude-code, open-source, tooling, cost-optimization]
---

**pxpipe** es una herramienta open-source que reduce drásticamente el coste de inferencia al convertir fragmentos grandes de texto en imágenes PNG comprimidas, aprovechando la asimetría de precios entre tokens textuales y visuales de los modelos frontier.

## Cómo funciona

La idea es engañosamente simple: los modelos como Claude o GPT cobran aproximadamente 1 token por cada carácter de texto, pero las imágenes se facturan por un número fijo de tokens basado en sus dimensiones en píxeles, independientemente de la información que contengan. pxpipe empaqueta contenido denso —prompts de sistema, documentación de herramientas, historial de chat antiguo— en una imagen PNG densamente renderizada, logrando una compresión de ~3.1 caracteres por token de imagen.

Desarrollado por Steven Chong, pxpipe funciona como un proxy local que intercepta las solicitudes a Claude Code, renderiza las partes voluminosas como imágenes y deja pasar el texto reciente sin modificar. El resultado: en una sesión de Claude Fable 5, los costes bajaron de 42,21 $ a solo 6,06 $.

## Resultados y limitaciones

| Modelo | Precisión en benchmarks | Activado por defecto |
|--------|------------------------|----------------------|
| Claude Fable 5 | 100% | ✅ Sí |
| GPT 5.6 | 100% | ✅ Sí |
| Opus 4.7/4.8 | ~93% (7% error) | ❌ Manual |
| GPT 5.5 | ~93% (7% error) | ❌ Manual |

La herramienta no es gratuita en términos de latencia: al convertir texto a imagen, el modelo debe procesarlo con su codificador visual, lo que añade tiempo de inferencia. Además, el método es _lossy_: cadenas exactas como hashes pueden salir distorsionadas al ser leídas desde la imagen.

## Implicaciones

Si trucos como pxpipe se popularizan, las empresas de IA podrían responder subiendo el precio del procesamiento de imágenes. Por ahora, sin embargo, representa una brecha de precios real que cualquier equipo que use Claude Code o GPT puede explotar. El repositorio incluye benchmarks reproductibles y configuraciones para Fable 5 y GPT 5.6.

No es la primera vez que se explora esta vía: DeepSeek ya demostró en su momento un sistema OCR que comprimía documentos como imágenes en un factor de 10× manteniendo un 97% de fidelidad.

**Enlace:** [github.com/teamchong/pxpipe](https://github.com/teamchong/pxpipe)
