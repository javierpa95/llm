---
title: "Boletín IA Generativa en Salud — Semana del 26 julio – 1 agosto 2026"
date: "2026-08-02"
summary: "PHENO-RAG demuestra 86,5% de concordancia con decisiones clínicas reales en HCC; framework MedRaC corrige cálculos médicos de LLMs con RAG y código Python; propuesta HumanELY para estandarizar evaluación de LLMs en salud; ChatGPT-4o iguala a residentes de 5º en examen teórico de cirugía ortopédica pero falla con imágenes; agentes de IA en reumatología como evolución necesaria."
reading_time: "10 min"
tags: [LLM, RAG, agentes-clinicos, evaluacion-humana, educacion-medica, oncologia, reumatologia, calculos-medicos]
articles:
  - "PHENO-RAG: An artificial intelligence tool for guideline-informed management decisions in hepatocellular carcinoma | Celsa C, Giuffrè M, Di Maria G, et al. | JHEP Reports | 2026 | 41830877 | 10.1016/j.jhepr.2025.101715 | rag"
  - "From Scores to Steps: Diagnosing and Improving LLM Performance in Evidence-Based Medical Calculations | Wang B, Xia I, Zhang Y, et al. | EMNLP 2025 | 2025 | 41799784 | 10.18653/v1/2025.emnlp-main.548 | agentes-clinicos"
  - "Human evaluation of large language models in healthcare: gaps, challenges, and the need for standardization | Awasthi R, Bhattad A, Ramachandran SP, et al. | NPJ Health Systems | 2025 | 42527491 | 10.1038/s44401-025-00043-2 | herramientas"
  - "ChatGPT in a theoretical examination of Orthopaedic Surgery and Traumatology: clinical and educational value | Pujol O, Guzmán M, Álvaro C, et al. | Rev Esp Cir Ortop Traumatol | 2026 | 42017640 | 10.1016/j.recot.2025.10.001 | modelos"
  - "From chat to act: large language model agents and agentic AI as the next frontier of AI in rheumatology | Madrid-García A, Benavent D, Merino-Barbancho B | EULAR Rheumatology Open | 2025 | 42368619 | 10.1016/j.ero.2025.06.012 | agentes-clinicos"
---

# 🩺 IA Generativa en Salud — Semana 26 julio – 1 agosto 2026

Cinco artículos esta semana que dibujan un panorama claro: los LLMs empiezan a funcionar en contextos clínicos reales cuando se combinan con RAG y estructuración de datos, pero la evaluación humana y la estandarización siguen siendo el cuello de botella. Desde un sistema RAG que acierta el 86,5% de decisiones en cáncer de hígado hasta una propuesta para estandarizar cómo evaluamos estos sistemas.

---

## 1. 🏥 PHENO-RAG: RAG con guías clínicas para decisiones en carcinoma hepatocelular

**Autores:** Celsa C, Giuffrè M, Di Maria G, Gruttadauria S, Palazzo U, Miraglia R, Maruzzelli L, Pagano D, Cannella R, Midiri F, Ciccia R, Salvato M, Grova A, Rao S, Giusino G, Quartararo A, Cusimano G, Sparacino A, Gaudioso V, Genovese V, Montenegro R, La Mantia C, Mercurio F, Kresevic S, Ajcevic M, Cabibbo G, Cirrincione G, Cammà C

**Journal:** JHEP Reports: Innovation in Hepatology · abril 2026 · **PMID:** [41830877](https://pubmed.ncbi.nlm.nih.gov/41830877) · **DOI:** [10.1016/j.jhepr.2025.101715](https://doi.org/10.1016/j.jhepr.2025.101715)

### Contexto

El manejo del carcinoma hepatocelular (HCC) es complejo: múltiples opciones de tratamiento, enfermedad hepática crónica subyacente, y necesidad de discusión multidisciplinaria (MDT). Aunque el MDT mejora resultados, es resource-intensive. PHENO-RAG es un framework que combina extracción automática de datos clínicos de notas reales con decisiones de tratamiento basadas en guías internacionales, usando LLMs con RAG.

### Metodología

- **Datos:** 489 informes clínicos de 424 pacientes en un centro terciario (septiembre 2020 – noviembre 2024)
- **Modelos:** 8 LLMs autoalojados: Llama-3-8B/70B, GPT-oss-20B/120B, Qwen-3-8B/80B, Falcon-7B/40B
- **Diseño:** 2 estudios de abalación — (1) extracción de conceptos clínicos (REGEX puro, LLM puro, híbrido REGEX+LLM), (2) generación de decisiones en 6 configuraciones (zero-shot/few-shot, notas estructuradas/no estructuradas, con/sin RAG)
- **Outcome principal:** Exact-match contra decisiones clínicas reales para asignación de tratamiento, complejidad clínica y recomendación de MDT

### Hallazgos principales

- **Extracción de conceptos:** GPT-oss-120B + REGEX alcanzó F1 mediano de **0,92** (IC 95%: 0,85–0,95) y ICC de **0,93** para parámetros numéricos
- **Asignación de tratamiento:** 86,5% de exact-match con la configuración más fuerte (few-shot + RAG en notas estructuradas)
- **Complejidad clínica:** 88,6% de exact-match
- **Recomendación MDT:** 66,9% — la tarea más difícil
- **Factor clave:** El rendimiento dependía más de la **estructuración de datos, ejemplos few-shot y RAG** que del modelo en sí
- **Baseline sin RAG:** Rendimiento sustancialmente inferior

### Limitaciones

- Estudio retrospectivo en un solo centro de referencia
- Gold standard son decisiones de un centro, no consenso internacional
- La recomendación de MDT solo alcanza 66,9% — insuficiente para automatización
- Modelos autoalojados (GPT-oss, Llama) vs. modelos proprietarios (GPT-4o no evaluado)

### Comentario crítico

Este es uno de los papers más sólidos que he visto sobre RAG en oncología. La arquitectura PHENO-RAG es inteligente: separa la extracción de datos (REGEX+LLM) de la toma de decisiones (LLM+RAG), y demuestra que **la estructuración de datos importa más que el modelo**. El 86,5% de concordancia con decisiones reales es impresionante, pero el dato más honesto es el 66,9% en MDT — los autores reconocen que esta tarea debe ser "priorizada, no automatizada". El uso de 8 modelos autoalojados es relevante para centros con restricciones de privacidad (sin envío de datos a APIs externas). **Veredicto: arquitectura replicable, resultados prometedores, honestidad sobre limitaciones. Un paper de referencia para RAG clínico en oncología.**

---

## 2. 🧮 MedRaC: framework agéntico con RAG + Python para cálculos médicos

**Autores:** Wang B, Xia I, Zhang Y, Wang J, Ouyang F, Han S, Cohan A, Yu H, Yao Z

**Journal:** Proceedings of EMNLP 2025 · noviembre 2025 · **PMID:** [41799784](https://pubmed.ncbi.nlm.nih.gov/41799784) · **DOI:** [10.18653/v1/2025.emnlp-main.548](https://doi.org/10.18653/v1/2025.emnlp-main.548)

### Contexto

Los LLMs sacan buenas notas en benchmarks médicos, pero **¿realmente hacen cálculos clínicos correctos?** Los benchmarks existentes solo evaluan la respuesta final con tolerancia numérica amplia, ocultando fallos sistemáticos que podrían causar errores clínicos graves. Este paper propone evaluar los cálculos paso a paso.

### Metodología

- **Dataset:** MedCalc-Bench reestructurado y limpiado
- **Evaluación paso a paso:** 3 componentes evaluados independientemente — selección de fórmula, extracción de entidades, computación aritmética
- **Framework propuesto:** MedRaC (Medicine Retrieval-augmented Calculation) — pipeline agéntico modular que combina RAG + ejecución de código Python
- **Sin fine-tuning:** El framework funciona con cualquier LLM sin entrenamiento adicional

### Hallazgos principales

- **Degradación al evaluar paso a paso:** GPT-4o cae de 62,7% (evaluación estándar) a **43,6%** (evaluación granular) — errores que antes se ocultaban
- **Mejora con MedRaC:** Precisión de los LLMs mejora de 16,35% hasta **53,19%** con RAG + ejecución Python
- **Error analysis framework:** Análisis automático de fallos que se alinea con juicio de expertos (evaluación humana confirmada)
- **Errores más comunes:** Selección incorrecta de fórmula (el más frecuente), extracción errónea de entidades, errores aritméticos

### Limitaciones

- Solo evaluado en MedCalc-Bench (un solo dataset)
- La mejora absoluta (hasta 53,19%) sigue siendo baja para uso clínico real
- No se evaluó en entorno clínico real, solo en benchmarks
- El framework agéntico añade latencia y complejidad de implementación

### Comentario crítico

El hallazgo más importante de este paper es la **caída de 19 puntos porcentuales** al evaluar paso a paso. Esto significa que benchmarks médicos estándar están sobreestimando el rendimiento de los LLMs en cálculos — un problema grave si estos sistemas se usan para dosis de medicamentos o puntuaciones de riesgo. La solución MedRaC (RAG + código Python) es elegante: en lugar de confiar en que el LLM "piense" bien, le da herramientas externas para ejecutar cálculos verificables. La idea de usar código ejecutable como verificación es transferible a muchos otros contextos clínicos. **Veredicto: paper de NLP con implicaciones clínicas directas. La metodología de evaluación paso a paso debería ser estándar para cualquier benchmark médico.**

---

## 3. 🔍 HumanELY: propuesta para estandarizar la evaluación humana de LLMs en salud

**Autores:** Awasthi R, Bhattad A, Ramachandran SP, Mishra S, Khanna AK, Cywinski JB, Maheshwari K, Mahapatra D, DiRosa I, Cohen A, Arshad H, Atreja A, Alshukaili A, Vohra A, Singh N, Papay FA, Atreja A, Kashyap R, Mathur P

**Journal:** NPJ Health Systems · 3 noviembre 2025 · **PMID:** [42527491](https://pubmed.ncbi.nlm.nih.gov/42527491) · **DOI:** [10.1038/s44401-025-00043-2](https://doi.org/10.1038/s44401-025-00043-2)

### Contexto

Las publicaciones sobre LLMs en salud se multiplican, pero **la evaluación humana — gold standard para calidad — carece de estandarización**. Cada estudio usa métricas diferentes, metodologías distintas y reporta resultados de forma inconsistente. Esto hace imposible comparar estudios o establecer estándares de calidad.

### Metodología

- **Revisión sistemática** de estudios que incluyen evaluación humana de LLMs en salud
- **Análisis de métricas:** Identificación de las métricas utilizadas y su variabilidad entre estudios
- **Propuesta:** Framework HumanELY + aplicación web interactiva open-source para facilitar evaluación humana estandarizada

### Hallazgos principales

- **Falta de estandarización:** Cada estudio usa diferentes métricas, escalas y protocolos
- **Variabilidad enorme:** No hay consenso sobre qué evaluar ni cómo evaluarlo
- **Propuesta concreta:** HumanELY (https://www.brainxai.com/humanely) como herramienta para evaluaciones consistentes, reproducibles y medibles
- **Objetivo:** Proporcionar una oportunidad para evaluaciones comprehensivas y comparables entre estudios

### Limitaciones

- Es una propuesta, no un estudio con resultados empíricos
- La herramienta necesita validación y adopción por la comunidad
- No resuelve el problema de quién evalúa (expertos vs. no expertos)
- NPJ Health Systems como revista es relativamente nueva

### Comentario crítico

Este paper aborda un problema real y urgente: **tenemos cientos de estudios sobre LLMs en salud que no se pueden comparar entre sí porque cada uno inventa sus propias métricas**. La propuesta HumanELY es práctica — una herramienta web open-source que alinea a investigadores en cómo evaluar. El problema de fondo es que la comunidad está_publicando a velocidad de LLM pero evaluando con la rigurosidad de un hackathon. La herramienta es un primer paso, pero la verdadera solución requiere que revistas como Lancet Digital Health o NPJ Digital Medicine exijan uso de métricas estandarizadas como requisito de publicación. **Veredicto: paper conceptual pero necesario. La herramienta HumanELY merece seguimiento — si se adopta, podría elevar significativamente la calidad de la evidencia en el campo.**

---

## 4. 📚 ChatGPT-4o en examen de cirugía ortopédica: iguala a residentes de 5º, pero falla con imágenes

**Autores:** Pujol O, Guzmán M, Álvaro C, Leal J, Minguell J, Joshi N

**Journal:** Revista Española de Cirugía Ortopédica y Traumatología · 2026 · **PMID:** [42017640](https://pubmed.ncbi.nlm.nih.gov/42017640) · **DOI:** [10.1016/j.recot.2025.10.001](https://doi.org/10.1016/j.recot.2025.10.001)

### Contexto

¿Puede ChatGPT responder preguntas de un examen teórico de cirugía ortopédica y traumatología al nivel de los residentes? Este estudio lo evalúa directamente usando un examen real administrado en 2024 a residentes de un hospital terciario español.

### Metodología

- **Examen real:** 48 preguntas de opción múltiple (10 con imágenes) de un examen teórico de 2024
- **Modelo evaluado:** ChatGPT-4o
- **Comparación:** Respuestas del chatbot vs. residentes de diferentes años de formación
- **Evaluación:** Tasa de acierto por tema, por tipo de pregunta (con/sin imagen)

### Hallazgos principales

- **ChatGPT-4o:** 34/48 correctas (**71%**)
- **Media de residentes:** 67% — ChatGPT supera la media
- **Residentes de 5º:** 70% — ChatGPT iguala al grupo más experimentado
- **Preguntas con imágenes:** Solo **30%** de acierto — rendimiento notablemente inferior
- **Error rate total:** 29,2% — significativo para uso clínico

### Limitaciones

- Solo 48 preguntas de un solo examen
- No se evaluó razonamiento clínico complejo (solo conocimiento teórico)
- ChatGPT-4o no recibe feedback en tiempo real
- No se comparó con otros LLMs (solo un modelo)
- El examen es teórico, no refleja práctica clínica real

### Comentario crítico

El dato del 71% frente al 67% de la media de residentes suena impresionante, pero hay que matizar: ChatGPT **iguala a los residentes de 5º** (70%) en conocimiento teórico, pero **falla estrepitosamente con imágenes** (30%). Esto es coherente con lo que sabemos sobre las limitaciones de GPT-4o en procesamiento visual médico. El 29,2% de errores no es trivial — en cirugía ortopédica, una decisión incorrecta puede significar una fractura malDiagnosticada. El estudio es útil como "reality check": el LLM sabe mucho, pero la parte visual y el razonamiento clínico complejo siguen siendo su talón de Aquiles. **Veredicto: buen dato para contextualizar capacidades y limitaciones. El 71% es impresionante teóricamente, pero el 30% en imágenes recuerda que un LLM no reemplaza a un radiólogo.**

---

## 5. 🤖 De chat a acción: agentes de IA como siguiente frontera en reumatología

**Autores:** Madrid-García A, Benavent D, Merino-Barbancho B

**Journal:** EULAR Rheumatology Open · octubre 2025 · **PMID:** [42368619](https://pubmed.ncbi.nlm.nih.gov/42368619) · **DOI:** [10.1016/j.ero.2025.06.012](https://doi.org/10.1016/j.ero.2025.06.012)

### Contexto

Los LLMs están llegando a reumatología, pero su conocimiento estático y riesgo de alucinaciones limitan su potencial. RAG mitiga parte del problema, pero la atención reumatológica compleja requiere acceso a datos en tiempo real, razonamiento multi-paso y uso de herramientas externas — capacidades que exceden los LLMs estándar.

### Metodología

- **Análisis de viewpoint** (no empírico)
- Evaluación de capacidades de sistemas de IA agéntica
- Enfoque en fundamentos técnicos, casos de uso actuales en salud y relevancia para reumatología

### Hallazgos principales

- **Agentic AI = LLM + planificación + memoria + herramientas externas**
- **Aplicaciones potenciales en reumatología:**
  - Planificación de tratamientos personalizados
  - Síntesis automatizada de literatura
  - Soporte a decisiones clínicas
- **Capacidades clave:** Acceso a datos en tiempo real, razonamiento multi-paso, interacción con sistemas externos (EMR, bases de datos, guías)
- **Conclusión:** Los agentes de IA son una **evolución necesaria** para atender la complejidad del cuidado reumatológico

### Limitaciones

- Es un paper de viewpoint, no un estudio empírico
- No hay resultados de implementación real
- Desafíos regulatorios, éticos y técnicos sin resolver
- No se comparó con LLMs estándar en tareas reales

### Comentario crítico

Este paper es una hoja de ruta conceptual, no evidencia clínica. Pero la argumentación es sólida: la reumatología es un campo donde el contexto del paciente (comorbilidades, medicación, historia longitudinal) es crítico, y un LLM estático no puede acceder a ello. La idea de agentes que combinan planificación + memoria + herramientas es el camino natural — y EULAR Rheumatology Open como plataforma de publicación le da relevancia en la comunidad reumatológica europea. La limitación principal es que es puramente teórico: no hay implementación, no hay validación, no hay datos. Pero como marco conceptual para orientar investigación futura, es útil. **Veredicto: paper de posicionamiento, no de evidencia. La dirección es correcta (agentes > chatbots), pero necesitamos estudios de implementación, no más viewpoint papers.**

---

## 📌 Resumen ejecutivo

| Artículo | Tipo | Hallazgo clave | Nivel de evidencia |
|----------|------|----------------|-------------------|
| PHENO-RAG (HCC) | Retrospectivo, 8 modelos, 489 pacientes | 86,5% concordancia con decisiones reales en asignación de tratamiento | 🟡 Medio |
| MedRaC (cálculos médicos) | Benchmark reestructurado + framework agéntico | GPT-4o cae de 62,7% a 43,6% con evaluación paso a paso; MedRaC mejora hasta 53,19% | 🟡 Medio |
| HumanELY (evaluación) | Revisión + propuesta de framework | Falta total de estandarización en evaluación de LLMs en salud | 🔵 Propuesta |
| ChatGPT en OST | Comparativo con residentes | 71% vs 67% media residentes; 30% en preguntas con imágenes | 🟡 Medio |
| Agentes en reumatología | Viewpoint paper | Agentes de IA son evolución necesaria de LLMs estándar | 🔵 Opinión |

**Tendencia de la semana:** El patrón que emerge es consistente: **los LLMs funcionan mejor cuando no tienen que "pensar solos"**. PHENO-RAG demuestra que estructurar datos + RAG supera al modelo puro. MedRaC muestra que ejecutar código Python es mejor que confiar en el razonamiento del LLM para cálculos. Y el paper de reumatología argumenta que los agentes con herramientas externas son la evolución necesaria. La tendencia clara es hacia **sistemas híbridos** donde el LLM actúa como orquestador, no como cerebro único. El dato más preocupante sigue siendo la falta de estandarización en evaluación — no sabemos realmente cuánto funcionan estos sistemas porque cada estudio usa sus propias métricas.
