---
title: "El filtro bio-weapons de Anthropic estuvo caído casi un año: 133 millones de chats pasaron sin control"
date: 2026-08-16
source: "The Decoder"
source_url: "https://the-decoder.com/anthropics-bio-weapons-filter-was-down-for-nearly-a-year"
category: "seguridad"
summary: "Los clasificadores biológicos de Anthropic estuvieron inactivos de mayo 2025 a abril 2026: unos 50.000 contratistas ejecutaron ~133M de chats sin el filtro anti-armas biológicas. Sin evidencia de uso indebido real."
reading_time: "3 min"
tags: [anthropic, seguridad, alignment, bioseguridad, red-teaming, rlhf]
---

La empresa cuyo CEO considera que el desarrollo asistido por IA de armas químicas y biológicas es una amenaza mayor que los ciberataques ha revelado en su informe de seguridad que sus **clasificadores biológicos de bloqueo estuvieron inactivos desde mayo de 2025 hasta abril de 2026**. Estos filtros están diseñados para impedir que los modelos se usen para extraer conocimiento peligroso sobre armas químicas o biológicas — y durante casi un año, todo el tráfico de los contratistas externos que proporcionan *feedback* humano corrió sin ellos.

La brecha afectó a un grupo de **unas 50.000 personas que ejecutaron aproximadamente 133 millones de chats** con los modelos. Según Anthropic, estos individuos fueron evaluados solo por proveedores externos cuyos procesos de selección eran a menudo insuficientes. La compañía afirma que su investigación interna **no encontró evidencia de uso indebido real**, pero ha endurecido desde entonces los requisitos exigidos a los contratistas.

El caso ilustra una tensión recurrente en la seguridad de los LLMs: los filtros de conocimiento peligroso se calibraron originalmente de forma agresiva, y Anthropic también ha **aflojado recientemente los clasificadores de Fable 5** después de que investigadores se quejaran de que bloqueaban investigación legítima. El equilibrio entre bloquear abuso y no ahogar el uso legítimo sigue siendo el punto ciego de la *bioseguridad* de los modelos, ahora que el *feedback* humano (RLHF) sigue siendo la principal fuente de alineación.
