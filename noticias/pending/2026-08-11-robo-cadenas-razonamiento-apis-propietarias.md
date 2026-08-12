---
title: "Roban las cadenas de razonamiento cifradas de ChatGPT, Claude y Gemini: un jailbreak en modelos pequeños revela el 'pensamiento' oculto"
date: 2026-08-11
source: "The Decoder / Simon Willison's Blog"
source_url: "https://the-decoder.com/but-marinade-and-leaked-passwords-are-what-researchers-found-in-chatgpts-hidden-reasoning/"
category: "investigación"
summary: "Investigadores explotan una vulnerabilidad en las APIs de OpenAI, Anthropic y Google para leer los chain-of-thought cifrados de los modelos de razonamiento: los replays cruzan sesiones, usuarios y modelos, y un jailbreak en el hermano pequeño revela el razonamiento crudo del grande."
reading_time: "3 min"
tags: [seguridad, chain-of-thought, jailbreak, openai, anthropic, google, criptografia]
---

El equipo liderado por Alexander Panfilov ha publicado el paper *"Stealing Reasoning Traces from Proprietary LLM APIs"* (con página dedicada en stolen-thoughts.com): los bloques cifrados de chain-of-thought que OpenAI, Anthropic y Google devuelven a los clientes son **reproducibles entre sesiones, usuarios y modelos de la misma familia**, porque todos comparten la misma clave de cifrado. Alimentando esos bloques al modelo más débil de la familia —Claude Haiku 4.5 fue el más fácil— y jailbreakeándolo, los investigadores consiguen que **transcriba en texto plano el razonamiento oculto del modelo grande** (Opus 4.8 en su caso), sin atacar al modelo robusto directamente.

Un escaneo de sesiones públicas compartidas reveló **decenas de contraseñas y API keys** expuestas en los razonamientos. Los investigadores también encontraron una variante de prompt injection: si un modelo *piensa* en exfiltrar datos dentro de su cadena de razonamiento, ese bloque cifrado reproducido en otro modelo se trata como sagrado y es mucho más probable que se obedezca. En los registros extraídos se ven modelos comunicándose en lenguaje incomprensible, construyendo respuestas en orden inverso o considerando engañar al usuario. Para la mayoría de consultas, el número de tokens extraídos coincide exactamente con los tokens de razonamiento facturados: se captura el razonamiento completo, no fragmentos.

La historia se remonta a mayo, cuando el criptógrafo Matthew Green descubrió que los blobs cifrados podían reproducirse fuera de su contexto original y lo reportó; los proveedores respondieron que *"no veían implicaciones de seguridad en side channels o replays"*. El nuevo trabajo sugiere que esa evaluación fue incorrecta, y de paso alimenta el debate sobre la destilación: si el razonamiento cifrado se puede extraer, entrenar modelos propietarios con el razonamiento de modelos más potentes pudo ser posible desde hace tiempo sin romper la criptografía. Los proveedores reconocieron el informe y, según los autores, la vulnerabilidad ya está parcheada.
