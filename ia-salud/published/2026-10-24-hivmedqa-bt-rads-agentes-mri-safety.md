---
title: "🏥 Boletín IA+Salud — 24 oct: HIVMedQA pone a los LLMs a prueba en VIH, agentes autónomos puntúan BT-RADS en gliomas mejor que los radiólogos de guardia, y MRI safety con chatbots"
date: "2026-10-24"
summary: "Tres estudios de la semana: el primer benchmark clínico curado por médicos para LLMs en VIH, un sistema multi-agente que automatiza la estratificación BT-RADS en gliomas superando la evaluación inicial, y chatbots con internet recuperando condiciones de seguridad RM para implantes."
reading_time: "9 min"
tags: [salud-digital, benchmark, radiologia, agentes-clinicos, vih]
articles:
  - "Benchmarking large language models for HIV medical decision support | Cardenal-Antolin G, Fellay J, et al. | Communications medicine | 2026 | PMID 42918836 | 10.1038/s43856-026-01875-1 | modelos"
  - "Agentic Automation of BT-RADS Scoring Using an End-to-End System for Standardized Glioma Follow-up Assessment | Jabal MS, Zhang J, et al. | Radiology: Artificial Intelligence | 2026 | PMID 42905016 | 10.1148/ryai.260234 | agentes-clinicos"
  - "Accuracy of Large Language Model Chatbots in Retrieving MRI Safety Conditions for Medical Implants | Kerpel A, Tal S, et al. | J Magn Reson Imaging | 2026 | PMID 42908212 | 10.1002/jmri.70578 | salud-digital"
---

## 1. HIVMedQA: el primer benchmark clínico curado por médicos para LLMs en VIH

**Cardenal-Antolín G, Fellay J, et al.** · *Communications medicine* (Nature) · 2026 · [PMID 42918836](https://pubmed.ncbi.nlm.nih.gov/42918836/) · [DOI](https://doi.org/10.1038/s43856-026-01875-1)

**Contexto.** El manejo del VIH es un caso de uso perfecto para apoyo decisional: terapias que evolucionan rápido, comorbilidades, adherencia complicada. Pero hasta ahora no existía un benchmark riguroso y curado clínicamente para evaluar LLMs en este dominio.

**Metodología.** El equipo (ETH Zurich + Hospital Universitario de Zurich) construyó **HIVMedQA**: preguntas abiertas médico-quirúrgicas curadas por clínicos, que abarcan conocimiento básico, razonamiento clínico, viñetas complejas de pacientes y **escenarios modificados con sesgos cognitivos**. Evaluaron 7 LLMs generales y 3 médicos, con un framework extendido de LLM-as-a-judge que mide comprensión, razonamiento, recall de conocimiento, sesgo, daño potencial y precisión factual — más evaluación adicional por médicos con experiencia en VIH.

**Hallazgos principales.**
- **Gemini 2.5 Pro** logró las puntuaciones globales más altas, seguido de Claude 3.5 Sonnet y **MedGemma-27B**
- El recall de conocimiento es consistentemente más fuerte que la comprensión de preguntas o el razonamiento clínico
- Los LLMs médicos **no superan de forma consistente** a los generales, y el tamaño del modelo no predice el rendimiento
- Varios modelos son **sensibles a prompts con sesgos cognitivos** — un riesgo directo de seguridad
- El LLM-as-a-judge alinea mejor con la evaluación de clínicos que las métricas léxicas

**Limitaciones.** Benchmark de preguntas abiertas, no pacientes reales; el juez LLM tiene sus propios sesgos; la cohorte de médicos evaluadores es pequeña.

**Comentario crítico.** Es el patrón que se repite en toda la literatura de octubre-noviembre: los LLMs saben *recordar* pero fallan en *razonar bajo incertidumbre*, y la robustez ante sesgos es la asignatura pendiente. Que MedGemma-27B (27B) compita de tú a tú con modelos gigantes es la buena noticia para despliegues on-premise — la mala es que ninguno está listo para uso clínico sin supervisión, y los propios autores lo dicen explícitamente.

## 2. Agentes LLM que puntúan BT-RADS en gliomas: 76% de precisión vs 57,5% de la evaluación inicial

**Jabal MS, Zhang J, et al.** (Duke University) · *Radiology: Artificial Intelligence* · 2026 · [PMID 42905016](https://pubmed.ncbi.nlm.nih.gov/42905016/) · [DOI](https://doi.org/10.1148/ryai.260234)

**Contexto.** BT-RADS es el estándar de estratificación de respuesta al tratamiento en MRI de seguimiento de gliomas difusos, pero requiere integrar tendencias de imagen, efectos de medicación y timing de radioterapia — una carga cognitiva que en la práctica se traduce en inconsistencias.

**Metodología.** Sistema end-to-end multi-agente sobre **509 MRI consecutivas** de glioma post-tratamiento (2017-2021, un solo centro, evaluación retrospectiva). Un **agente extractor** identifica variables clínicas de las notas clínicas usando gpt-oss-20b (open-weight); un **agente scorer** aplica la lógica de decisión BT-RADS integrándolas con volumetría cuantitativa. Se comparó contra la evaluación inicial, con anotación experta como referencia.

**Hallazgos principales.**
- Precisión del sistema: **76,0% (374/492)** vs **57,5% (283/492)** de las evaluaciones iniciales — diferencia absoluta de **+18,5 puntos** (p<0.001)
- Cohen κ contra el estándar de referencia: **0,71**
- Sensibilidad alta en categorías dependientes de contexto (BT-1b: 100%, BT-1a: 92,7%) y moderada en las dependientes de umbral (BT-3c: 74,8%)
- VPP del BT-4 (progresión): **92,9%**

**Limitaciones.** Un solo centro, retrospectivo; gpt-oss-20b requiere infraestructura de inferencia propia; el estándar de referencia es anotación experta, no outcomes.

**Comentario crítico.** Aquí hay dos historias en una. La obvia: la automatización agéntica de un reporting estándar supera a la evaluación humana de primera pasada — el caso de uso ideal para IA (tarea estructurada, criterios explícitos, alto volumen). La interesante para el ecosistema abierto: el agente extractor corre sobre **gpt-oss-20b, un modelo open-weight**, y los autores lo señalan como preservador de privacidad de datos. Es exactamente el patrón de despliegue que los hospitales europeos necesitan para cumplir GDPR: modelos estrechos en local, sin sacar el paciente del perímetro.

## 3. Chatbots con internet para consultar seguridad RM de implantes: hasta 94-98% de precisión, pero con errores que obligan a verificar

**Kerpel A, Tal S, et al.** (Chaim Sheba Medical Center, Israel) · *Journal of Magnetic Resonance Imaging* · 2026 · [PMID 42908212](https://pubmed.ncbi.nlm.nih.gov/42908212/) · [DOI](https://doi.org/10.1002/jmri.70578)

**Contexto.** Recuperar las condiciones de seguridad RM de un implante concreto es lento y complejo — y un error aquí puede ser letal (implantes ferromagnéticos en un campo magnético de 3T).

**Metodología.** Evaluación prospectiva con 50 configuraciones de dispositivos y pilotaje retrospectivo con 20 pacientes. Se pidió a **ChatGPT-5.0, Gemini 2.5 Pro y Claude Sonnet 4.5**, con acceso a internet, 8 parámetros por dispositivo (etiqueta de seguridad RM, campos permitidos, regiones, límites de RF, gradiente espacial máximo...). Tres expertos independientes puntuaron 1.200 outputs contra la documentación del fabricante.

**Hallazgos principales.**
- Precisión a nivel de parámetro: **ChatGPT 0,94** (IC 95%: 0,89-0,98) > Gemini 0,79 ≈ Claude 0,78
- En el pilotaje clínico con la versión más nueva (ChatGPT-5.6): **0,98** (IC 95%: 0,94-1,00)
- Incluso el mejor chatbot cometió errores — los autores exigen verificación directa contra documentación vigente del fabricante antes de uso clínico

**Limitaciones.** Cohorte pequeña (50 configuraciones); los chatbots evolucionan tan rápido que el benchmark caduca en meses; el "acceso a internet" depende de qué fuentes consulte el modelo, que no son auditables.

**Comentario crítico.** El resultado es sorprendentemente bueno — 98% en el pilotaje real — pero la conclusión operativa es la contraria al hype: con un 2-6% de parámetros erróneos en un dominio donde un solo error puede matar, **el chatbot es un asistente de búsqueda, no una fuente**. Es el mismo patrón de la semana pasada con RAG en diabetes: la ganancia es real, pero nunca sustituye la verificación primaria. Para un servicio de RM, el flujo sensato es chatbot para pre-llenar la consulta y técnico/radiólogo para firmar la decisión.
