---
title: "⚠️ Boletín IA+Salud — 7 nov: red-teaming dinámico descubre que el 94% de respuestas correctas de un LLM médico fallan bajo adversario, revisión de alucinaciones en radiología (firma española) y RAG en enfermería"
date: "2026-11-07"
summary: "Tres estudios de la semana: el 'benchmarking gap' cuantificado en Nature Health (MedQA >80% pero 94% de fallos bajo robustez dinámica), una revisión española de alucinaciones en radiología, y el mapa sistemático de RAG en enfermería."
reading_time: "9 min"
tags: [seguridad, red-teaming, alucinaciones, rag, enfermeria]
articles:
  - "Addressing benchmarking gaps in large language models for health and medicine with dynamic red-teaming | Pan J, Jian B, et al. | Nature health | 2026 | PMID 42978863 | 10.1038/s44360-026-00152-8 | investigación"
  - "Hallucinations in generative LLMs for radiology: a comprehensive review | Martín-Noguerol T, López-Úbeda P, Luna A | Current problems in diagnostic radiology | 2026 | PMID 42977577 | 10.1067/j.cpradiol.2026.10.014 | investigación"
  - "Applications, Technical Characteristics, and Evaluation Approaches of Retrieval-Augmented Generation in Nursing: Scoping Review | Chen M, Ma A, et al. | Journal of medical Internet research | 2026 | PMID 42986217 | 10.2196/98495 | rag"
---

## 1. DAS red-teaming: la brecha entre benchmark y realidad — 94% de las respuestas correctas fallan bajo estrés adversarial

**Pan J, Jian B, et al.** (TU Munich + Oxford + TUM University Hospital) · *Nature Health* · 2026 · [PMID 42978863](https://pubmed.ncbi.nlm.nih.gov/42978863/) · [DOI](https://doi.org/10.1038/s44360-026-00152-8)

**Contexto.** La seguridad de los LLMs en salud se apoya en benchmarks estáticos que envejecen rápido y se pueden optimizar contra ellos. El gap entre "suspende MedQA" y "es seguro en una consulta" nunca se había cuantificado sistemáticamente.

**Metodología.** Framework **DAS** (Dynamic, Automatic, Systematic) de auditoría red-team: agentes adversariales autónomos **mutan casos de test de salud en tiempo real** a lo largo de 4 ejes críticos (robustez, privacidad, sesgo, alucinación), validados contra clínicos certificados. Aplicado a **15 LLMs state-of-the-art**.

**Hallazgos principales.**
- **MedQA accuracy mediana >80%**, pero **el 94% de las respuestas previamente correctas fallan** bajo testing dinámico de robustez
- La fragilidad se generaliza a HealthBench (dataset abierto realista): tasas de fallo **>70%** incluso en modelos top — señal de memorización superficial
- **Fugas de privacidad elicitadas en el 86%** de los escenarios
- Priming con sesgos cognitivos **alteró recomendaciones en el 81%** de los tests de equidad
- **Tasas de alucinación >74%** en modelos ampliamente usados

**Limitaciones.** Los ataques adversariales son por construcción más duros que el uso real; el framework muta casos sin garantía de plausibilidad clínica perfecta; 15 modelos es una foto del estado del arte actual.

**Comentario crítico.** Este paper cuantifica con rigor lo que sospechábamos: **los benchmarks estáticos miden memorización, no seguridad**. Un modelo con >80% en MedQA que pierde el 94% de sus aciertos ante variaciones adversariales no es un 80% fiable — es un sistema que no entiende, y en salud eso es la diferencia entre "herramienta prometedora" y "riesgo regulatorio". La parte más relevante para despliegues: las fugas de privacidad (86% de escenarios) son el talón de Aquiles de los asistentes de salud consumer, y conectan directamente con la agenda GDPR/MDR/AI Act que cualquier producto de salud digital en Europa necesita cerrar antes de tocar un paciente real. El red-teaming dinámico continuo debería ser requisito de release, no exercise de marketing.

## 2. Alucinaciones en LLMs radiológicos: una revisión comprehensiva desde Jaén

**Martín-Noguerol T, López-Úbeda P, Luna A** (HT Medica, Jaén, España) · *Current Problems in Diagnostic Radiology* · 2026 · [PMID 42977577](https://pubmed.ncbi.nlm.nih.gov/42977577/) · [DOI](https://doi.org/10.1067/j.cpradiol.2026.10.014)

**Contexto.** Las alucinaciones son el evento de seguridad emergente número uno en radiología con IA generativa: errores interpretativos sutiles que se propagan rápido a decisiones clínicas.

**Metodología.** Revisión comprehensiva que mapea las vías que producen alucinaciones en LLMs generativos aplicados a radiología, y las estrategias preventivas: desde la arquitectura del modelo hasta la gobernanza legal.

**Hallazgos principales.** Los autores organizan el riesgo en 4 vías: **arquitectura del modelo** (probabilística por diseño, no alineada con la fiabilidad factual que exige el diagnóstico), **calidad de datos**, **opacidad de la caja negra** y **automation bias** (el sesgo del radiólogo que confía demasiado en la máquina). Las estrategias preventivas propuestas: salvaguardas legales y de gobernanza, curación rigurosa de datos, frameworks de explicabilidad y simulación, y supervisión humana estructurada.

**Limitaciones.** Es una revisión narrativa sin evaluación cuantitativa de las estrategias propuestas; el campo evoluciona más rápido que la literatura.

**Comentario crítico.** Doble motivo para leerla: es **grupa de investigación española** (HT Medica, Jaén) publicando en radiología de IA, y su tesis central conecta con el estudio de Nature Health de esta misma semana — la arquitectura probabilística del LLM es estructuralmente incompatible con la fiabilidad factual que exige el diagnóstico por imagen, y por eso la mitigación no es "mejores modelos" sino **supervisión humana estructurada + gobernanza**. Para el proyecto Endocrinotech es la referencia perfecta cuando toque justificar ante clínicos por qué el humano firma siempre: no es desconfianza hacia la IA, es que la arquitectura estadística no puede garantizar lo que un informe radiológico garantiza.

## 3. RAG en enfermería: 28 estudios, 4 escenarios de aplicación y un ecosistema aún sin validar en el mundo real

**Chen M, Ma A, et al.** (Henan Medical University) · *Journal of Medical Internet Research* · 2026 · [PMID 42986217](https://pubmed.ncbi.nlm.nih.gov/42986217/) · [DOI](https://doi.org/10.2196/98495)

**Contexto.** Los LLMs prometen en enfermería, pero sufren alucinaciones, knowledge gaps y retraso en la evidencia. RAG promete mitigarlo — pero la evidencia estaba fragmentada.

**Metodología.** Revisión de alcance (scoping review) siguiendo PRISMA-ScR sobre 9 bases de datos (PubMed, Embase, Web of Science, Cochrane, Scopus, CNKI, VIP, Wanfang, Sinomed) desde el inicio hasta septiembre de 2026. **28 estudios (2024-2026)**.

**Hallazgos principales.**
- 4 escenarios dominantes: **educación de pacientes (n=9), informática enfermera (n=8), apoyo a la decisión clínica (n=7), educación enfermera (n=4)**
- Bases LLM: serie GPT, LLaMA, ChatGLM, Doubao; knowledge bases: literatura, guías clínicas, recursos institucionales, datos clínicos
- Predomina la recuperación densa, con hibridación, knowledge graphs y re-ranking en una minoría
- **Solo 4 de 28 estudios se hicieron en entornos clínicos reales**; el resto, simulados
- Las evaluaciones de generación proliferan (27/28), pero las de **recuperación, seguridad, fiabilidad e implementación son raras**

**Limitaciones.** Scoping review — no evalúa calidad metodológica de los primarios; sesgo de publicación probable; el corte temporal (sept 2026) deja fuera la última oleada de papers.

**Comentario crítico.** El dato que importa: **solo 4 de 28 estudios en el mundo real**. Es exactamente el patrón del boletín de hoy — mucha demo, poca implementación — y el agujero de evaluación es inquietante: casi nadie evalúa la calidad de la *recuperación* (qué documentos se trajeron), que es donde RAG falla en silencio. Para el ecosistema Endocrinotech: cuando toque diseñar un pipeline RAG clínico, la lección operativa es medir retrieval y seguridad desde el día 1, no solo el output generado. Y la enfermería —el colectivo más numeroso del sistema sanitario y el más desatendido por las herramientas de IA— sigue siendo el territorio de oportunidad más grande y menos competido.
