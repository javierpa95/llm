---
title: "Amazon ingenia sus modelos de Anthropic para sortear el pago por tokens"
date: 2026-06-30
source: "The Decoder"
source_url: "https://the-decoder.com/amazon-engineers-are-reportedly-distilling-anthropic-models-to-cut-costs-before-new-token-based-pricing-kicks-in/"
category: "industria"
summary: "Ingenieros de Amazon están destilando los modelos Claude de Anthropic para uso interno. La renegociación del contrato los pasará de pagar por horas de cómputo a pagar por tokens, lo que dispararía los costes."
reading_time: "3 min"
tags: [anthropic, amazon, distillation, costes, claude, aws]
---

Ingenieros de Amazon han comenzado a **destilar los modelos de Anthropic** para crear versiones más pequeñas y baratas para uso interno, según un informe de [The Information](https://www.theinformation.com/articles/amazon-anthropic-deal). La destilación permite que un modelo pequeño aprenda de las salidas de uno más grande, conservando gran parte de su capacidad a una fracción del coste computacional.

El movimiento responde a la **renegociación de la alianza estratégica** entre Amazon y Anthropic. A partir del año que viene, Amazon pagará por los modelos de Anthropic en función de los tokens procesados en lugar de las horas de cómputo, lo que podría disparar los costes internos. Un portavoz de Amazon aseguró que los cambios no incrementarán los gastos, mientras que Anthropic señala que sus precios ya son competitivos respecto al rendimiento que ofrecen sus modelos.

Amazon tiene **derechos contractuales para usar los modelos de Anthropic en procesos de destilación**, según una fuente familiarizada con el acuerdo, similar al [acuerdo de Apple con Google Gemini](https://the-decoder.com/apple-gets-full-gemini-access-and-uses-distillation-to-build-lightweight-on-device-ai/). Sin embargo, el servicio de destilación que Amazon ofrece en Bedrock solo soporta sus propios modelos Nova y los de Meta (Llama), no los de Anthropic.

Paralelamente, Amazon explora alternativas como **OpenAI y sus propios modelos Nova**. La compañía ha invertido hasta **$25 mil millones adicionales en Anthropic** y hasta **$50 mil millones en OpenAI** este mismo año.

## Contexto: la destilación como campo de batalla

El movimiento de Amazon no es un caso aislado. La destilación se está convirtiendo en una **fricción creciente en la industria**:

- **Meta** ha limitado el uso interno de Claude Code y Codex para evitar que las salidas de estos modelos terminen en sus datos de entrenamiento. Un memo interno alerta de "escaladas serias" si los outputs de modelos rivales se filtraran en el training data de Meta. La compañía desarrolla su propio asistente de código, MetaCode, para reducir la dependencia externa.
- **Anthropic** acusó recientemente a Alibaba del mayor ataque de destilación conocido hasta la fecha.
- **xAI** (Elon Musk) admitió en abril que había destilado parcialmente modelos de OpenAI.
- Los términos de servicio de OpenAI, Anthropic y Google prohíben explícitamente usar outputs para construir sistemas competidores.

La destilación permite **democratizar el acceso a capacidades de frontera** reduciendo drásticamente los costes de inferencia, pero también tensiona las relaciones entre los grandes laboratorios que invierten miles de millones en entrenar sus modelos.
