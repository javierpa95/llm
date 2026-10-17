---
title: "🏢 China propone controles de exportación sobre los open weights: 2 billones de parámetros o 10²⁶ FLOPs para activar la restricción"
date: 2026-10-17
source: "The Decoder / Mofcom (Ministerio de Comercio de China)"
source_url: "https://the-decoder.com/china-plans-to-tighten-export-controls-on-open-weight-models-and-23-key-ai-technologies/"
category: "industria"
summary: "Pekín publica el borrador que restringe la exportación de 23 tecnologías de IA: pesos, checkpoints y código quedan controlados por encima de 2 billones de parámetros o 10²⁶ FLOPs, con vía rápida para open source."
reading_time: "4 min"
tags: [regulación, open-weight, china, export-controls, geopolítica]
---

Los ministerios de Comercio y de Ciencia y Tecnología de China publicaron un **borrador de actualización del catálogo nacional de tecnologías de exportación restringidas** que incluye **23 tecnologías clave de IA**: modelos grandes, agentes autónomos, clusters de cómputo y herramientas de procesado de datos ([The Decoder](https://the-decoder.com/china-plans-to-tighten-export-controls-on-open-weight-models-and-23-key-ai-technologies/), con fuente primaria en el [comunicado de Mofcom](https://www.mofcom.gov.cn/xwfb/xwfyrth/art/2026/art_d7661dbf62794345a221404f82a25959.html)). La medida más dura es un **prohibición total de exportar herramientas de IA capaces de escribir o alterar malware de forma autónoma** para atacar infraestructuras críticas, el ejército o agencias gubernamentales; las herramientas de IA para encontrar vulnerabilidades no se prohíben, pero pasan a tener nuevos límites de exportación.

### Dos umbrales que afectan a los pesos

Los controles sobre grandes modelos se activan en dos casos. El primero: modelos entrenados con los «datos importantes» definidos por la Ley de Seguridad de Datos de China y luego prestar servicios con ellos (los datos públicos lícitos quedan exentos, igual que residuos limpios de hasta un 0,1%). El segundo es el que le importa al ecosistema abierto: quedan restringidas **las tecnologías nucleares de los grandes modelos —pesos, checkpoints, código fuente, arquitectura y métodos de entrenamiento o inferencia—** cuando el sistema supera ciertos umbrales.

| Disparador | Umbral |
|---|---|
| Cómputo de entrenamiento | ≥ 10²⁶ FLOPs |
| Parámetros totales | ≥ 2 billones (2T) |
| Ranking | Top 10 mundial |

Para ponerlos en contexto: [Qwen3.8-Max](/noticias/2026-08-04-alibaba-qwen-3-8-max-open-weight) (2,4T) y [Kimi K3](/noticias/2026-07-17-kimi-k3-open-weight-2-8t) (2,8T) superan el umbral de parámetros de forma directa, y modelos como [GLM-5.3](/noticias/2026-08-28-glm-5-3-flash-sin-nvidia-mit) o DeepSeek V4 entran por cómputo o ranking. Es decir: los pesos descargables que hoy alimentan la punta del ecosistema abierto quedarían, técnicamente, como tecnología de exportación controlada.

### Open source como válvula de escape

La regla clave que evita un apocalipsis para el open-weight: **publicar la tecnología restringida y sus pesos como open source califica para «licencia automática»** —basta con registrarse y se aprueba al momento—. Del mismo modo quedan exentos ya cualquier tecnología que ya sea pública, el uso de modelos restringidos vía API, apps, web o SaaS, versiones ligeras para dispositivos locales, y las despliegues en nube propia en el extranjero. Lo que sí exige licencia estándar es **instalar tecnología de IA restringida en servidores locales en el extranjero**. Hasta la entrada en vigor, las empresas ya deben registrar las exportaciones afectadas en el portal del ministerio.

Analistas como Dean W. Ball, responsable de futuros estratégicos en OpenAI, interpretan que la medida no significa «China cierra los modelos open-weight», sino que **Pekín se reserva la opción de cerrarlos a voluntad**, calificando el marco de «imagen especular» de los controles de exportación de pesos que EE. UU. ya tiene implantados. La jugada tiene una lectura estratégica clara: al obligar a licenciar los pesos grandes pero dejar el open source con aprobación automática, el incentivo para los laboratorios chinos sigue siendo **publicar los pesos y competir por el ecosistema global** —mientras el Estado gana visibilidad y control sobre quién instala qué y dónde—. Para un lector occidental, la consecuencia práctica es que la dependencia de Qwen, Kimi o DeepSeek no desaparece, pero ahora vive sujeta a un registro ministerial que puede endurecerse sin cambiar la ley.
