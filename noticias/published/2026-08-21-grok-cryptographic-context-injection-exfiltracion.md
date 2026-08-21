---
title: "Cryptographic Context Injection: cifrar las instrucciones maliciosas para que Grok exfiltre chats y datos personales"
date: 2026-08-21
source: "Ars Technica"
source_url: "https://arstechnica.com/security/2026/08/grok-exfiltrates-user-data-when-malicious-instructions-are-encrypted/"
category: "seguridad"
summary: "Un investigador de Adversa elude los guardarraíles de Grok cifrando las instrucciones maliciosas: el modelo las descifra en su sandbox de ejecución y entrega chats e información personal sin que el filtro estático las inspeccione."
reading_time: "3 min"
tags: [grok, xai, prompt-injection, seguridad, jailbreak, red-teaming]
---

Un investigador de la firma de seguridad **Adversa** ha demostrado un ataque contra **Grok** que exfiltra los chats y datos personales del usuario mediante una técnica bautizada como **Cryptographic Context Injection**: en lugar de escribir la instrucción maliciosa en texto plano, la **cifra** dentro de una página web, y deja junto al ciphertext las instrucciones y la clave para descifrarla. El LLM solo necesita que el usuario le pida **resumir la página** para descifrar el contenido en su propio sandbox de ejecución y ejecutarlo sin ninguna advertencia.

El flujo es engañosamente simple: la página aloja el ciphertext, unas instrucciones de descifrado y la clave; Grok decodifica el contenido (con **PBKDF2 y AES-256-GCM**) y lo trata como salida de su propia herramienta de ejecución de código. El texto descifrado le ordena construir un "valor de clave" que en realidad es el **nombre, ubicación e historial de chat** del usuario, y ese valor se **inyecta como parámetro de una URL** hacia el servidor del atacante. Según Adversa, cuando el artículo se publicó el ataque **seguía funcionando** pese a que xAI fue informado en junio.

La clave de por qué funciona es que los **guardarraíles estáticos leen el contenido como texto pero no lo ejecutan**: el filtro de Grok ve solo ciphertext sin sentido y lo deja pasar, porque un clasificador puede leer las instrucciones de descifrado pero no resolver a qué conducen. Una vez descifrado, el payload llega al modelo como salida de su propia ejecución de código, sin que el filtro lo inspeccione. Adversa aplicó la misma técnica contra **Gemini** en un jailbreak para violar sus reglas de seguridad, y el artículo subraya la conclusión de fondo: **los LLM no resuelven la causa raíz de la prompt injection**, y los desarrolladores solo pueden construir guardarraíles que redirigen el comportamiento dañino en lugar de corregirlo.
