---
title: "AlphaProof Code: DeepMind verifica matemáticamente el núcleo criptográfico de Signal en 4 semanas en lugar de años"
date: 2026-11-12
source: "The Decoder / Google DeepMind"
source_url: "https://the-decoder.com/google-deepminds-alphaproof-code-verified-signals-cryptographic-core-in-four-weeks-instead-of-years/"
category: "investigación"
summary: "El nuevo sistema de DeepMind genera 6M de líneas de pruebas formales en Lean para verificar el código real de Signal, no solo su diseño. Solo el 1% queda para revisión humana y dos bugs plantados fueron detectados al instante."
reading_time: "3 min"
tags: [deepmind, verificación-formal, signal, agentes, lean, seguridad]
---

Google DeepMind ha presentado **AlphaProof Code**, un sistema de IA que demuestra matemáticamente que un programa cumple sus especificaciones de seguridad. La demostración de fuerza ha sido verificar el núcleo criptográfico de **Signal** — el código que cifra los mensajes de millones de usuarios — en **cuatro semanas**, un trabajo de verificación formal que tradicionalmente lleva años. La diferencia clave con esfuerzos anteriores: aquellos se detenían en el diseño teórico, mientras que AlphaProof Code ha verificado el **código real que corre en los dispositivos de los usuarios**.

## 🔬 Cómo funciona

El proceso tiene dos fases con agentes de IA separados:

| Fase | Qué hace |
|------|----------|
| **Especificación** | Expertos en seguridad definen formalmente los requisitos de seguridad del software |
| **Demostración** | Agentes construidos sobre Gemini Carbon escriben demostraciones formales en Lean de que el código cumple esas especificaciones |

Los números del proyecto Signal son elocuentes: más de **6 millones de líneas** escritas en Lean, el lenguaje de pruebas formales. El sistema marcó solo alrededor del **1% del código base** para revisión humana, y los **dos bugs plantados deliberadamente** por los evaluadores fueron detectados de inmediato.

Signal confirma que su núcleo criptográfico ha pasado la verificación. Su CTO Ehren Kret destaca que el enfoque refuerza la confianza en la privacidad de los datos justo cuando las amenazas impulsadas por IA crecen.

## 🧠 Por qué importa

La verificación formal es la promesa incumplida del software seguro desde hace décadas: demostrar matemáticamente que un programa no puede fallar. El cuello de botella siempre fue el coste humano — escribir demostraciones en Lean es lento y requiere perfiles muy escasos. Si los agentes de IA pueden asumir ese trabajo, la ecuación cambia: los sistemas críticos (criptografía, dispositivos médicos, redes eléctricas) ya pueden aspirar a garantías que antes eran inalcanzables en la práctica.

DeepMind ya ha anunciado la siguiente fase: aplicar el método a **infraestructuras críticas como redes eléctricas y dispositivos médicos**, en línea con CodeMender, su sistema para encontrar y corregir automáticamente vulnerabilidades de software.

Para el ecosistema LLM, la lección es doble: los agentes de código están pasando de *escribir* software a **demostrar propiedades sobre él**, y la métrica dejará de ser «más código generado» para convertirse en «más garantías matemáticas por hora de agente».
