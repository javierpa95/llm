---
title: "Boletín IA Generativa en Salud — Semana del 19–25 julio 2025"
date: "2026-07-26"
summary: "Ensayo randomizado sobre LLM en perioperatorio, RAG para clasificación de ictus desde historias clínicas, comparativa de 8 IAs en farmacia clínica, sistema RAG en medicina nuclear japonés y encuesta a 929 médicos británicos sobre percepción de IA generativa."
reading_time: "8 min"
tags: [LLM, RAG, farmacia-clinica, perioperatorio, ictus, medicina-nuclear, percepcion-medicos]
articles:
  - "Clinical and economic impact of a large language model in perioperative medicine | Ke YH, Yang Ong BS, et al. | NPJ Digit Med | 2025 | 40691284 | 10.1038/s41746-025-01858-x | agentes-clinicos"
  - "Accuracy of Large Language Models to Identify Stroke Subtypes Within Unstructured EHR Data | Owens D, Nguyen DQ, et al. | Stroke | 2025 | 40709446 | 10.1161/STROKEAHA.125.051993 | rag"
  - "Comparative Analysis of Generative AI Systems in Solving Clinical Pharmacy Problems | Li L, Du P, et al. | JMIR Med Inform | 2025 | 40705654 | 10.2196/76128 | modelos"
  - "Evaluation of a RAG System Using a Japanese Nuclear Medicine Manual | Fukui Y, Kawata Y, et al. | Radiol Phys Technol | 2025 | 40683982 | 10.1007/s12194-025-00941-y | rag"
  - "Exploring doctors' perspectives on generative-AI and diagnostic-decision-support systems | Esnaashari S, Hashem Y, et al. | BMJ Health Care Inform | 2025 | 40707049 | 10.1136/bmjhci-2024-101371 | industria"
---

# 🩺 IA Generativa en Salud — Semana 19–25 julio 2025

Cinco artículos que merecen atención esta semana: un ensayo randomizado real sobre LLM en perioperatorio, una aplicación de RAG con datos clínicos reales de ictus, la comparativa más amplia publicada de IAs en farmacia clínica, un sistema RAG documentado para medicina nuclear y una encuesta relevante sobre percepción médica.

---

## 1. 🔬 Ensayo randomizado: impacto clínico y económico de un LLM en perioperatorio

**Autores:** Ke YH, Yang Ong BS, Jin L, Sim JXL, Chan CH, Soh CR, Wong DJN, Liu N, Sng BL, Ting DSW, Yeo SQ, Ong MEH, Abdullah HR

**Journal:** NPJ Digital Medicine · 21 julio 2025 · **PMID:** [40691284](https://pubmed.ncbi.nlm.nih.gov/40691284) · **DOI:** [10.1038/s41746-025-01858-x](https://doi.org/10.1038/s41746-025-01858-x)

### Contexto

La evaluación preoperatoria es crítica pero consume mucho tiempo. Los médicos residentes suelen documentar de forma incompleta y con adherencia irregular a guías. PEACH (PErioperative AI CHatbot) es un sistema de apoyo a decisiones basado en LLM diseñado para asistir en esta tarea.

### Metodología

Ensayo clínico randomizado crossover en Singapur General Hospital. Médicos residentes realizaron evaluaciones preoperatorias con y sin asistencia de PEACH en orden aleatorizado. Se midió tiempo de documentación, calidad (listas de problemas, adherencia a guías), aceptación y modelado económico.

### Hallazgos principales

- **Tiempo total:** No hubo reducción significativa global.
- **Subgrupo pacientes moderados:** Ahorro de 5,77 min (p = 0,010).
- **Subgrupo médicos con más experiencia:** Ahorro de 4,6 min (p = 0,040).
- **Calidad:** Mejora en inclusión de listas de problemas (p = 0,05).
- **Aceptación:** Evaluadores prefirieron documentación con PEACH en 57,1% de los casos.
- **Ahorro proyectado:** SGD 197.501/año (≈USD 146.297) para la institución.

### Limitaciones

- Muestra de residentes en un solo centro de alto rendimiento.
- No se evaluó impacto en resultados de pacientes.
- El tiempo global no se redujo: el beneficio depende del perfil de caso y del usuario.

### Comentario crítico

Este es uno de los primeros ECA sobre LLM en contexto clínico real, y eso tiene peso. El resultado más interesante es que **el beneficio no es universal**: solo se materializa en pacientes de complejidad moderada y en médicos más experimentados. Esto encaja con la intuición de que un LLM bien integrado acelera a quien ya sabe qué buscar, pero no compensa inexperiencia. El modelado económico es prometedor pero asume adopción completa, lo cual es poco realista a corto plazo. NPJ Digital Medicine como revista de publicación le da credibilidad. **Veredicto: utilidad real pero acotada; no es un reemplazo, es un acelerador para médicos competentes.**

---

## 2. 🧠 RAG para clasificar subtipos de ictus desde historias clínicas no estructuradas

**Autores:** Owens D, Nguyen DQ, Dohopolski M, Rousseau JF, Peterson ED, Navar AM

**Journal:** Stroke · 25 julio 2025 · **PMID:** [40709446](https://pubmed.ncbi.nlm.nih.gov/40709446) · **DOI:** [10.1161/STROKEAHA.125.051993](https://doi.org/10.1161/STROKEAHA.125.051993)

### Contexto

Los códigos ICD-10 sirven para vigilancia epidemiológica de ictus, pero clasificar subtipos exactos (trombótico, cardioembólico, criptogénico, etc.) requiere revisión manual de la documentación clínica. Un sistema automatizado que lea notas no estructuradas tendría impacto real en investigación y calidad asistencial.

### Metodología

Implementaron un framework RAG con GPT-4o para clasificar tipo de ictus (isquémico vs hemorrágico) y subtipos isquémicos. Gold standard: registro Get With The Guidelines-Stroke de la AHA. Datos de UT Southwestern (n=2047) para desarrollo, Parkland Health (n=2076) para validación externa. Tres estrategias de prompting: zero-shot chain-of-thought, expert-guided e instruction-based.

### Hallazgos principales

- **Clasificación tipo de ictus:** 98% de exactitud (IC 95%: 0,97-0,99). Sensibilidad 0,98, especificidad 0,97.
- **Subtipos isquémicos — sensibilidad:** desde 0,40 (criptogénico) hasta 0,95 (oclusión de pequeño vaso).
- **Subtipos isquémicos — especificidad:** desde 0,94 (aterosclerosis de gran vaso) hasta 0,98 (cardioembólico).
- **Consistencia:** >99% de acuerdo entre consultas repetidas.
- **Prompting:** El zero-shot chain-of-thought (mínimo input humano) funcionó igual que estrategias más complejas.

### Limitaciones

- El rendimiento cae drásticamente para subtipos raros (criptogénico: sensibilidad 40%).
- Validación retrospectiva en solo dos centros.
- Los subtipos menos frecuentes tienen menos datos de entrenamiento en el gold standard.

### Comentario crítico

El 98% de exactitud para clasificar isquémico vs hemorrágico es impresionante, pero **la trampa está en los subtipos**: un criptogénico clasificado como cardioembólico tiene implicaciones clínicas directas (anticoagulación vs no). La sensibilidad del 40% para criptogénico hace que el sistema no sea fiable para esta categoría. El hallazgo más práctico es que **zero-shot chain-of-thought funciona igual que estrategias más elaboradas**, lo cual simplifica enormemente la implementación. Stroke es revista de referencia en neurología vascular, y el diseño con validación externa le da solidez. **Veredicto: prometedor para triaje y research, pero no para decisión clínica individual en subtipos raros.**

---

## 3. 💊 Comparativa de 8 sistemas de IA generativa en farmacia clínica

**Autores:** Li L, Du P, Huang X, Zhao H, Ni M, Yan M, Wang A

**Journal:** JMIR Medical Informatics · 24 julio 2025 · **PMID:** [40705654](https://pubmed.ncbi.nlm.nih.gov/40705654) · **DOI:** [10.2196/76128](https://doi.org/10.2196/76128)

### Contexto

La farmacia clínica abarca consulta, educación al paciente, revisión de prescripciones y análisis de casos. Se compararon 8 sistemas (ERNIE Bot, Doubao, Kimi, Qwen, GPT-4o, Gemini-1.5-Pro, Claude-3.5-Sonnet, DeepSeek-R1) en 4 escenarios clínicos con 48 preguntas validadas.

### Metodología

48 preguntas clínicas validadas, muestreo estratificado de fuentes reales (hospitales, bancos de casos, bases de entrenamiento). Doble ciego: 6 farmacéuticos clínicos con ≥5 años de experiencia evaluaron respuestas en 6 dimensiones (precisión, rigor, aplicabilidad, coherencia lógica, concisión, universalidad) con escala 0-10. ANOVA unidireccional con post-hoc Tukey HSD. ICC para concordancia entre evaluadores.

### Hallazgos principales

- **Mejor rendimiento:** DeepSeek-R1 (consulta: 9,4; análisis de casos: 9,3), significativamente superior (P<,05).
- **Peor rendimiento:** ERNIE Bot (análisis de casos: 6,8; P<,001 vs DeepSeek-R1).
- **Errores críticos:** 75% de modelos omitieron contraindicaciones importantes (ej: etambutol en neuritis óptica).
- **Problema de localización:** 90% recomendó macrólidos para neumonía por Mycoplasma resistente (contexto chino de alta resistencia).
- **Razonamiento complejo:** Solo Claude-3.5-Sonnet detectó una contradicción de género (hiperplasia prostática en paciente femenina).
- **Concordancia entre evaluadores:** ICC más bajo para concisión en análisis de casos (0,70).

### Limitaciones

- Solo 48 preguntas, todas en chino (generalización incierta).
- Un solo día de testing (posible variabilidad temporal del modelo).
- Solo farmacéuticos chinos como evaluadores.

### Comentario crítico

Esta es la comparativa más amplia publicada esta semana y tiene un hallazgo inquietante: **el 75% de los modelos omitió contraindicaciones clínicas**. Esto no es un error menor — etambutol puede causar ceguera. El hecho de que solo DeepSeek-R1 se alineara con guías actualizadas de AAP para doxiciclina pediátrica sugiere que los modelos chinos están mejor calibrados para el contexto sanitario local, pero **ningún modelo es fiable para decisión clínica autónoma**. El ICC bajo para concisión refleja que farmacéuticos expertos no se ponen de acuerdo sobre qué es una "buena" respuesta en escenarios complejos. **Veredicto: DeepSeek-R1 lidera, pero el 75% de omisiones de contraindicaciones es un dealbreaker para uso autónomo. Sirve como segunda opinión, nunca como primera.**

---

## 4. 🏥 Sistema RAG para manuales de medicina nuclear institucionales

**Autores:** Fukui Y, Kawata Y, Kobashi K, Nagatani Y, Iguchi H

**Journal:** Radiological Physics and Technology · 19 julio 2025 · **PMID:** [40683982](https://pubmed.ncbi.nlm.nih.gov/40683982) · **DOI:** [10.1007/s12194-025-00941-y](https://doi.org/10.1007/s12194-025-00941-y)

### Contexto

Los protocolos de medicina nuclear varían entre instituciones y se actualizan frecuentemente. Un LLM genérico no conoce los procedimientos internos de un hospital específico. Se desarrolló un RAG usando 40 manuales internos de un hospital japonés.

### Metodología

40 manuales de exámenes de medicina nuclear, segmentados e indexados con estrategia híbrida: búsqueda densa por vectores (text-embedding-3-small) + búsqueda sparse por palabras clave (BM25). Generación con GPT-3.5 y GPT-4o. Evaluación por 3 técnicos radiológicos certificados (escala Likert de 4 puntos). Evaluación automatizada con métricas RAGAS (corrección factual, recall de contexto).

### Hallazgos principales

- **Mejor combinación:** GPT-4o + recuperación híbrida (densa + sparse).
- **Métricas automáticas:** ROUGE y distancia de Levenshtein no se alinean con juicio humano. RAGAS muestra ranking consistente aunque correlación modesta con scores manuales.
- **Evaluación experta:** GPT-4o con recuperación híbrida alcanzó el mayor rendimiento.

### Limitaciones

- Solo un hospital japonés (protocolos muy específicos).
- Evaluación por solo 3 expertos.
- No se comparó con respuestas sin RAG (no hay baseline de "sin retrieval").

### Comentario crítico

El hallazgo más interesante no es el rendimiento del RAG sino la **crítica a las métricas de evaluación**: ROUGE y Levenshtein no sirven para evaluar calidad clínica, mientras que RAGAS es más útil pero aún imperfecto. Esto tiene implicaciones para todo el campo de RAG en salud. La estrategia híbrida (dense + sparse) es una buena práctica documentada. La limitación principal es que no hay baseline sin RAG — no sabemos cuánto mejora respecto a un LLM "puro". **Veredicto: buen paper de ingeniería, pero más relevante por la metodología de evaluación que por los resultados clínicos. La lección clave: las métricas estándar de NLP no valen para medicina.**

---

## 5. 📊 Encuesta a 929 médicos británicos sobre percepción de IA generativa

**Autores:** Esnaashari S, Hashem Y, Francis J, Morgan D, Poletaev A, Bright J

**Journal:** BMJ Health Care Informatics · 23 julio 2025 · **PMID:** [40707049](https://pubmed.ncbi.nlm.nih.gov/40707049) · **DOI:** [10.1136/bmjhci-2024-101371](https://doi.org/10.1136/bmjhci-2024-101371)

### Contexto

A pesar del creciente interés en IA médica, faltan estudios con muestras representativas sobre cómo los médicos perciben y usan estos sistemas. El Alan Turing Institute realizó una encuesta a médicos del registro médico británico.

### Metodología

Encuesta transversal entre diciembre 2023 y enero 2024. 929 médicos del registro médico del Reino Unido. Preguntas sobre comprensión, uso, percepción y formación en sistemas de IA.

### Hallazgos principales

- **Uso actual:** 29% usó algún tipo de IA en los últimos 12 meses (16% SDD, 16% IA generativa).
- **Productividad:** 62% de usuarios de IA generativa reportan aumento de productividad.
- **Calidad clínica:** 62% de usuarios de SDD reportan mejora en decisiones clínicas.
- **Optimismo:** 52% optimista sobre integración de IA (63% entre usuarios).
- **Preocupación laboral:** Solo 15% preocupado por su puesto de trabajo.
- **Formación:** Solo 12% considera que tiene formación suficiente sobre responsabilidades profesionales al usar IA (8% entre usuarios de IA generativa).

### Limitaciones

- Encuesta de percepción, no de rendimiento.
- Muestra posible sesgada ( médicos interesados en IA más propensos a responder).
- Contexto británico (generalización incierta).

### Comentario crítico

El dato más revelador es el **déficit de formación**: solo el 8% de usuarios de IA generativa se siente preparado para entender sus responsabilidades profesionales. Esto es un riesgo regulatorio enorme. El 29% de uso reportado es significativamente más alto que en estudios previos (10-15%), lo que sugiere adopción acelerada. El dato de que solo 15% se preocupa por su puesto de trabajo contradice la narrativa mediática de "la IA reemplazará a los médicos". **Veredicto: la adopción crece, pero la formación no la acompaña. BMJ Health Care Informatics es publicación peer-reviewed relevante. La brecha entre uso y formación es el hallazgo más preocupante del artículo.**

---

## 📌 Resumen ejecutivo

| Artículo | Tipo | Hallazgo clave | Nivel de evidencia |
|----------|------|----------------|-------------------|
| PEACH (perioperatorio) | ECA randomizado crossover | Ahorro 5,77 min en casos moderados, no significativo globalmente | 🟢 Alto |
| Stroke RAG (GPT-4o) | Estudio retrospectivo con validación externa | 98% exactitud tipo ictus, 40% sensibilidad criptogénico | 🟡 Medio |
| Farmacia clínica (8 IAs) | Comparativa cuantitativa | DeepSeek-R1 mejor, pero 75% omite contraindicaciones | 🟡 Medio |
| RAG medicina nuclear | Estudio de validación | GPT-4o + híbrida mejor, métricas estándar no sirven | 🟡 Medio |
| Percepción médicos UK | Encuesta transversal | 29% usa IA, pero solo 8% se siente formado | 🟡 Medio |

**Tendencia de la semana:** La evidencia de ECA sobre LLMs en contexto clínico real está empezando a llegar, y los resultados son moderadamente positivos pero acotados. El patrón recurrente es que **los LLMs ayudan, pero no sustituyen formación, supervisión ni contexto clínico**. La RAG sigue siendo la arquitectura más prometedora para aplicaciones clínicas específicas. La preocupación más urgente no es técnica sino formativa: los médicos están usando IA sin entender sus responsabilidades.
