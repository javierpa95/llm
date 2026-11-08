---
title: "🧠 Boletín IA+Salud — 31 oct: SCT desmonta el razonamiento clínico de los LLMs (o3: 67,8%, debajo de residentes), Qwen3 detecta errores en informes radiológicos mejor que 3 radiólogos y 70× más rápido, y LLMs para consentimientos informados"
date: "2026-10-31"
summary: "Tres estudios de la semana: script concordance testing como la prueba que los LLMs suspenden, una evaluación multicéntrica real de QA de informes radiológicos con 95.582 informes, y un mapa del uso de LLMs en consentimiento informado."
reading_time: "9 min"
tags: [salud-digital, razonamiento-clinico, radiologia, consentimiento, benchmark]
articles:
  - "Assessment of Large Language Models in Clinical Reasoning: A Novel Benchmarking Study | McCoy LG, Swamy R, et al. | NEJM AI | 2025 | PMID 42932606 | 10.1056/AIdbp2500120 | investigación"
  - "Large Language Model-Assisted Radiology Report Quality Assurance: Real-World Multicenter Evaluation | Wang L, Zhang Y, et al. | Journal of medical Internet research | 2026 | PMID 42954415 | 10.2196/106250 | salud-digital"
  - "Large Language Models in Informed Consent - Opportunities, Evidence, and Challenges | Goel R, Mustafa S, Baker TJ, Bierer BE | NEJM AI | 2026 | PMID 42932616 | 10.1056/AIra2600073 | salud-digital"
---

## 1. Script Concordance Testing: la prueba que los LLMs suspenden (y por qué los modelos "reasoning" son los peores)

**McCoy LG, Swamy R, et al.** (Harvard, MIT, Beth Israel) · *NEJM AI* · 2025 · [PMID 42932606](https://pubmed.ncbi.nlm.nih.gov/42932606/) · [DOI](https://doi.org/10.1056/AIdbp2500120)

**Contexto.** Los benchmarks médicos estándar (exámenes tipo test tipo USMLE/MDQA) miden conocimiento acumulado, no cómo un clínico **ajusta** su juicio cuando aparece información nueva — que es lo que pasa en toda consulta real.

**Metodología.** Los autores importaron del mundo de la educación médica el **script concordance testing (SCT)**: viñetas clínicas donde se presenta una situación y luego datos nuevos, preguntando cómo cambia la probabilidad de un diagnóstico o opción terapéutica. Benchmark público de **750 preguntas SCT** de 10 datasets internacionales, con panel de expertos como referencia. Compararon 10 LLMs state-of-the-art contra **1.070 estudiantes de medicina, 193 residentes y 300 médicos atendentes**.

**Hallazgos principales.**
- Los LLMs rinden **marcadamente por debajo** de lo que muestran en benchmarks tipo test
- El mejor: **OpenAI o3 con 67,8% ± 1,2**; GPT-4o: 63,9% ± 1,3
- Los modelos optimizados para razonamiento rinden PEOR: o1-preview 58,2%, **DeepSeek R1 55,5%**, y Gemini 2.5 Pro el peor con 52,1%
- Igualan o superan a estudiantes, pero **no alcanzan a residentes senior ni médicos atendentes**
- Patrón sistemático de **sobreconfianza**: los modelos reasoning abusan de las respuestas extremas (+2/-2) y casi nunca eligen "no cambia nada" (0) — la optimización chain-of-thought podría estar **obstaculizando** el razonamiento clínico flexible bajo incertidumbre

**Limitaciones.** El SCT mide una faceta del razonamiento clínico (ajuste probabilístico), no toda la práctica; el panel de expertos define la "respuesta correcta" con sus propios sesgos.

**Comentario crítico.** Este es el estudio que debería calmar el hype de "los LLMs ya aprueban el MIR". Aprobar un examen no es razonar: el SCT mide exactamente la habilidad que un clínico usa cientos de veces al día — cambiar de opinión cuando el dato nuevo lo merece — y ahí los LLMs no solo fallan, sino que **los modelos con más razonamiento explícito fallan más**. La hipótesis de los autores es inquietante: entrenar para cadenas de pensamiento confiantes puede estar matando la duda metódica que define la buena medicina. La sobreconfianza sistemática (jamás decir "0 = no cambia") es exactamente lo contrario del espíritu del consentimiento y del criterio clínico.

## 2. QA de informes radiológicos en el mundo real: Qwen3 detecta errores mejor que 3 radiólogos y 12× más rápido

**Wang L, Zhang Y, et al.** (Kunming Medical University + Cambridge + Stanford) · *Journal of Medical Internet Research* · 2026 · [PMID 42954415](https://pubmed.ncbi.nlm.nih.gov/42954415/) · [DOI](https://doi.org/10.2196/106250)

**Contexto.** El informe radiológico es el registro clínico definitivo del diagnóstico por imagen, y los errores sutiles de texto se propagan a decisiones clínicas. La revisión manual no escala.

**Metodología.** Evaluación retrospectiva multicéntrica real (no simulada): informes de 3 modalidades (RX, TC, RM) y 5 regiones anatómicas del centro 1 (marzo-mayo 2025), con taxonomía de errores anotada por clínicos. **5 LLMs (Qwen3, GPT-5.4 Pro, Gemini 3.1 Pro, Llama 4, DeepSeek-V3.1)** evaluados en 10.000 informes aleatorios; el mejor se probó sobre la cohorte completa (**95.582 informes**) y en comparación a ciegas con 3 radiólogos (3-10 años de experiencia) en un challenge set enriquecido con errores.

**Hallazgos principales.**
- El **4,6% (4.431/95.582)** de los informes contenía al menos un error textual interno confirmado
- **Qwen3** (modelo open-weight): sensibilidad 0,99, especificidad 0,99, F1 0,94
- En el challenge set, su recall exacto por instancia de error **superó al de los radiólogos: 0,96 vs 0,45-0,67** (p<0.001)
- Tiempo medio por informe: **5,80 s vs 55,80-67,80 s** de los radiólogos (~12× más rápido)
- Explicaciones valoradas con Likert 4,57/5; rendimiento estable en el centro 2 (balanced accuracy 0,94)

**Limitaciones.** Solo revisión textual (no imágenes); errores factuales mejor detectados que interpretativos; 2 centros en China — generalización pendiente.

**Comentario crítico.** Que un modelo abierto chino de peso público le gane a GPT-5.4 Pro y Gemini 3.1 Pro en una tarea clínica real, multicéntrica y con 95 mil informes es la señal más fuerte hasta ahora de que **el state-of-the-art clínico ya no vive solo en los labs cerrados**. Y el patrón de uso es el correcto: no reemplazar al radiólogo, sino insertar el LLM como control de calidad previo a la firma — una tarea de bajo riesgo relativo y altísimo volumen donde 12× la velocidad humana cambia la viabilidad del QA sistemático. Para hospitales con presupuestos limitados, Qwen3 corriendo on-premise es hoy una alternativa técnica real, no un plan B.

## 3. LLMs en el consentimiento informado: siete dominios de aplicación, cero evidencia de impacto en decisiones reales

**Goel R, Mustafa S, Baker TJ, Bierer BE** (Harvard Medical School, Brigham and Women's) · *NEJM AI* · 2026 · [PMID 42932616](https://pubmed.ncbi.nlm.nih.gov/42932616/) · [DOI](https://doi.org/10.1056/AIra2600073)

**Contexto.** Los formularios de consentimiento informado (ICF) son largos, cognitivamente demandantes y escritos a niveles de lectura inalcanzables para la mayoría de participantes — un problema de justicia sanitaria que la IA generativa promete resolver.

**Metodología.** Revisión narrativa que mapea el paisaje emergente de LLMs para ICFs en **7 dominios**: generación de glosarios, reescritura en lenguaje claro, generación de ayudas visuales, accesibilidad y formato, traducción, validación de comprensión (teach-back) y consentimiento conversacional interactivo.

**Hallazgos principales.** El mapeo identifica aplicaciones activas en los 7 dominios, con evidencia temprana de mejora de legibilidad y accesibilidad, pero **sin estudios que midan impacto real en la calidad de las decisiones de los participantes** — la métrica que importa éticamente.

**Limitaciones.** Es una revisión narrativa, no sistemática; el campo se mueve más rápido que la evidencia; la mayoría de herramientas no están validadas en poblaciones vulnerables.

**Comentario crítico.** El consentimiento informado es territorio delicado para la IA: es el documento que encarna la autonomía del paciente, y delegarlo a un generador estadístico tiene riesgos que van más allá de la precisión factual (subtlidad en la presentación de riesgos, optimización de la legibilidad a costa del matiz). El artículo es honesto al señalarlo como mapa de oportunidades — no como evidencia. Para Endocrinotech y cualquier proyecto salud digital: LLM para **borradores** de materiales de consentimiento con revisión humana obligatoria sí; consentimiento conversacional autónomo, todavía no.
