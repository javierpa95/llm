---
title: "Boletín Semanal: IA Generativa en Salud — Del control antimicrobiano a los riesgos psicosociales de los chatbots"
date: "2026-08-23"
summary: "Cinco artículos que revelan el estado real de los LLMs en clínica: evaluación adversarial en estewardship antimicrobiano (GPT-5, Claude Sonnet 4.5, Gemini 2.5 Pro), clasificación ecográfica de nódulos tiroideos por 6 modelos multimodales, extracción de trauma con LLMs locales preservando privacidad, una revisión escópica de daños en salud mental de chatbots (N=3.137 artículos), y un framework multi-agente para evaluación de psicoterapia."
reading_time: "10 min"
tags: [llm, ia-salud, antimicrobianos, imagen-medica, salud-mental, privacidad, agentes-clinicos]
articles:
  - "Testing Knowledge Boundaries: Adversarial Evaluation of LLMs for Antimicrobial Stewardship | Abejez-Arrizabalaga Á, Pellejero-Sagastizabal G, Aznar-Gimeno R et al. | Clinical Microbiology and Infection | 2026 | PMID 42632419 | DOI 10.1016/j.cmi.2026.08.025 | agentes-clinicos"
  - "Comparative Performance of Multimodal Large Language Models in Grayscale Ultrasound-Based Classification of Thyroid Nodules | Chen Z, Wang Y, Chen F | Seminars in Ultrasound, CT, and MR | 2026 | PMID 42632527 | DOI 10.1053/j.sult.2026.08.002 | modelos"
  - "Testing the use of local large language models to extract trauma identification and contextualize posttraumatic stress symptoms from self-report | Rubin M, Stuart E, Santos E, Cordova M, Watters K | Journal of Behavioral Medicine | 2026 | PMID 42631898 | DOI 10.1007/s10865-026-00707-w | salud-digital"
  - "A scoping review on the mental health harms of LLM-based chatbots | Diel A, Torous J, Cuijpers P, Kleesiek J, Nensa F et al. | NPJ Digital Medicine | 2026 | PMID 42624944 | DOI 10.1038/s41746-026-03054-x | investigacion"
  - "Multiagent Large Language Model Framework for Psychotherapy Fidelity Assessment in Motivational Interviewing and Cognitive Behavioral Therapy Training | Kamaleddin MA, Mirjalili M, Barzegar R et al. | JMIR Medical Education | 2026 | PMID 42611045 | DOI 10.2196/92964 | agentes-clinicos"
---

# Boletín Semanal: IA Generativa en Salud
**23 de agosto de 2026**

Esta semana trae cinco artículos que pintan un panorama más honesto del estado de los LLMs en medicina: uno somete a siete modelos a escenarios clínicos con trampas deliberadas de fabricación y recomendaciones peligrosas; otro compara seis modelos multimodales en clasificación ecográfica de tiroides; un tercero demuestra que los LLMs locales pueden extraer traumatismos preservando la privacidad; una revisión escópica masiva cataloga los daños en salud mental de los chatbots; y un último propone un framework multi-agente para evaluar la fidelidad de psicoterapia.

---

## 1. Límites del conocimiento: evaluación adversarial de LLMs en estewardship antimicrobiano

**Autores:** Abejez-Arrizabalaga Á, Pellejero-Sagastizabal G, Aznar-Gimeno R, Franco B, Letona-Giménez S, Morte-Romea E et al. (15 autores)  
**Journal:** Clinical Microbiology and Infection, 2026  
**PMID:** [42632419](https://pubmed.ncbi.nlm.nih.gov/42632419) | **DOI:** [10.1016/j.cmi.2026.08.025](https://doi.org/10.1016/j.cmi.2026.08.025)

### Contexto
El estewardship antimicrobiano (AMS) es una de las áreas donde los errores clínicos tienen consecuencias directas: resistencia antimicrobiana, mortalidad, costes sanitarios. Los LLMs se están planteando como soporte para AMS, pero ¿qué pasa cuando se les pone deliberadamente en situaciones diseñadas para provocar fallos? Este estudio es el primero en evaluar sistemáticamente los modos de fallo usando trampas adversariales.

### Metodología
- **7 modelos evaluados:** GPT-5, Claude Sonnet 4.5, Gemini 2.5 Pro, Grok 4, Llama-3.3-70b-instruct, Qwen 2.5-72b-instruct, DeepSeek-chat-v3.1
- **30 escenarios clínicos** mapeados a marcos de competencia ESCMID de AMS
- Escenarios incluían **trampas deliberadas** de fabricación y recomendaciones peligrosas
- **6 expertos en AMS** de Países Bajos y España evaluaron a ciegas con puntuaciones 0-5
- Se compararon prompts estándar vs. incentivizadores

### Hallazgos principales
- **4 modelos comerciales superaron 3.9/5.0** en puntuación de contenido: Claude Sonnet 4.5 (4.06), Gemini 2.5 Pro (3.96), Grok 4 (3.96), GPT-5 (3.94)
- **Modelos open-source significativamente más bajos** (2.94-3.57)
- **Ningún modelo logró más del 63% de respuestas libres de fabricación o peligro**
- **Flags de peligro: 6.7%-16.7%** entre todos los modelos, sin diferencia significativa entre comerciales y open-source
- **La fabricación no perjudicó la utilidad clínica** en escenarios sin trampas (p>0.20)
- **Prompts incentivizadores mejoraron +0.48 puntos** la puntuación (p=0.006)

### Limitaciones
- Evaluación cross-sectional, no longitudinal
- Los escenarios son viñetas, no pacientes reales
- La heterogeneidad de evaluadores (Países Bajos vs. España) introduce variabilidad cultural
- No se evaluó la precisión factual de las respuestas, solo la calidad percibida por expertos

### Comentario crítico
Este es probablemente el artículo más honesto que hemos cubierto en este boletín. El dato duro es demoledor: **ningún modelo supera el 63% de respuestas sin fabricación ni peligro**. Pero hay matices importantes: la fabricación no siempre degrada la utilidad clínica, y los flags de peligro se concentran en modos de fallo identificables. Los autores concluyen con una recomendación pragmática: los LLMs son útiles para AMS **con supervisión moderada**, particularmente en preparación de documentación y educación de residentes. La pregunta relevante no es "¿son seguros?" sino "¿para qué tareas son seguros con supervisión?". **Relevancia para endocrinología:** alta — la prescripción de antimicrobianos en pacientes con diabetes inmunocomprometidos es exactamente el tipo de escenario donde un LLM mal supervisado puede causar daño.

---

## 2. Seis LLMs multimodales contra el cáncer de tiroides: quién acierta más

**Autores:** Chen Z, Wang Y, Chen F  
**Journal:** Seminars in Ultrasound, CT, and MR, 2026  
**PMID:** [42632527](https://pubmed.ncbi.nlm.nih.gov/42632527) | **DOI:** [10.1053/j.sult.2026.08.002](https://doi.org/10.1053/j.sult.2026.08.002)

### Contexto
La clasificación ecográfica de nódulos tiroideos sigue el sistema TI-RADS, pero la variabilidad inter-observador es significativa. Los modelos multimodales (que procesan imagen + texto) se están explorando para asistir esta clasificación, pero no existía una comparación directa entre los principales modelos disponibles públicamente.

### Metodología
- **Estudio prospectivo transversal** con 178 pacientes y 239 nódulos tiroideos
- Imágenes ecográficas en escala de grises (maximal transversal y longitudinal)
- **6 modelos evaluados:** ChatGPT-5.4, Gemini 3.1 Pro, Claude Opus 4.6, Qwen3.6-Plus, Kimi K2.5, ERNIE 5.0
- **Mismo workflow de entrada de imagen** y prompt estandarizado para todos
- Sin fine-tuning ni reentrenamiento específico
- Validación contra histopatología post-operatoria

### Hallazgos principales
- **Todos los 6 LLMs distinguieron significativamente** benignos de malignos (P ≤ 0.001)
- **Gemini 3.1 Pro: mejor rendimiento** — kappa 0.580, AUC 77.1% (IC 71.5%-82.7%)
- **ChatGPT-5.4 y Qwen3.6-Plus:** AUC 73.5% cada uno
- **Kimi K2.5:** AUC 71.3%
- **Claude Opus 4.6:** AUC 65.7%
- **ERNIE 5.0:** AUC 59.9%
- **El radiólogo senior superó a los 6 LLMs** en rendimiento diagnóstico

### Limitaciones
- Solo imágenes en escala de grises (sin elastografía ni Doppler color)
- Prompt estandarizado pero no optimizado por modelo
- Muestra de un solo centro
- Los LLMs no recibieron información clínica complementaria (niveles de TSH, nódulos palpables, etc.)
- Los puntos de corte óptimos de los LLMs no se compararon con TI-RADS formal

### Comentario crítico
El resultado más relevante es que **ningún LLM supera al radiólogo senior**, pero el mejor (Gemini 3.1 Pro) alcanza un AUC del 77% — razonable para una herramienta de cribado sin ningún entrenamiento específico. La variabilidad entre modelos es enorme: hay 17 puntos de AUC entre el mejor y el peor. Esto sugiere que la selección del modelo importa mucho más que el prompt. La limitación más importante es que los modelos solo ven imágenes en escala de grises — en la práctica clínica, la información de elastografía y Doppler es crucial para la estratificación TI-RADS. **Relevancia para endocrinología:** directa — la clasificación de nódulos tiroideos es una de las tareas más comunes en endocrinología, y un AUC del 77% con cero entrenamiento es un punto de partida interesante para sistemas de apoyo a decisión.

---

## 3. LLMs locales para extraer trauma y contextualizar TEPT desde autorreportes

**Autores:** Rubin M, Stuart E, Santos E, Cordova M, Watters K  
**Journal:** Journal of Behavioral Medicine, 2026  
**PMID:** [42631898](https://pubmed.ncbi.nlm.nih.gov/42631898) | **DOI:** [10.1007/s10865-026-00707-w](https://doi.org/10.1007/s10865-026-00707-w)

### Contexto
La evaluación del TEPT requiere contextualizar los síntomas con el traumatismo índice específico, pero los cuestionarios estándar (como el LEC) no vinculan síntomas a traumatismos concretos. Los autorreportes libres contienen esta información, pero analizarlos manualmente no escala. El problema de privacidad es central: enviar narrativas de trauma a APIs externas (OpenAI, Anthropic) plantea riesgos éticos y regulatorios.

### Metodología
- **N=109 participantes** reclutados vía Prolific
- Completaron LEC extendido con hasta 3 descripciones libres de trauma + PCL-5 (TEPT)
- **LLM local** (sin conexión a internet) procesó las narrativas para extraer tipos de trauma
- Comparación con categorizaciones de **2 psicólogos clínicos expertos**
- Análisis de clústeres basado en features derivadas del LLM

### Hallazgos principales
- **Alta especificidad (>85%)** para la mayoría de tipos de trauma
- **Buena concordancia para experiencias prevalentes:** asalto sexual κ = 0.68-0.74
- **Concordancia variable** según tipo de trauma (menor para experiencias menos frecuentes)
- **Análisis de clústeres reveló diferencias significativas** en puntuaciones PCL-5 totales entre clústeres (p = .04)
- El LLM demostró que puede extraer features clínicamente relevantes de descripciones breves

### Limitaciones
- Muestra reclutada vía Prolific (sesgo demográfico: mayorías jóvenes, universitarios)
- Comparación con solo 2 psicólogos
- La concordancia fue moderada en algunos tipos de trauma
- No se evaluó la precisión diagnóstica completa del pipeline LLM → clasificación TEPT
- El estudio no testea el workflow clínico completo (solo un eslabón de la cadena)

### Comentario crítico
El dato más novedoso aquí es la demostración de que **LLMs locales funcionan** para esta tarea. La privacidad no es un feature accesorio en salud mental — es un requisito ético fundamental. Un LLM que procese narrativas de trauma sin enviar datos a servidores externos abre la puerta a herramientas de cribado TEPT escalables. La concordancia κ de 0.68-0.74 para asalto sexual es respetable, pero la variabilidad en otros tipos de trauma sugiere que el modelo necesita más entrenamiento o fine-tuning para experiencias menos frecuentes. **Relevancia clínica:** el framework es prometedor pero preliminary — falta demostrar que la extracción LLM → clasificación TEPT produce mejores resultados que el screening estándar en un ensayo clínico real.

---

## 4. Daños en salud mental de los chatbots basados en LLMs: revisión escópica

**Autores:** Diel A, Torous J, Cuijpers P, Kleesiek J, Nensa F et al. (11 autores)  
**Journal:** NPJ Digital Medicine, 2026  
**PMID:** [42624944](https://pubmed.ncbi.nlm.nih.gov/42624944) | **DOI:** [10.1038/s41746-026-03054-x](https://doi.org/10.1038/s41746-026-03054-x)

### Contexto
Los chatbots basados en LLMs se están usando masivamente, incluyendo para apoyo emocional y salud mental. Pero ¿qué evidencia existe sobre sus daños? Esta revisión escópica es la primera en sintetizar sistemáticamente la literatura sobre daños potenciales, cubriendo desde alucinaciones hasta psicosis inducida.

### Metodología
- **Búsqueda PRISMA** en 5 bases de datos: ACM, IEEE, PubMed, Science.gov, Google Scholar
- **N=3.137 artículos identificados**, **N=119 incluidos**
- Criterios: (1) enfoque en chatbots basados en LLMs, (2) enfoque en daños a salud mental
- Clasificación en 5 categorías de daño

### Hallazgos principales (5 categorías de daño)

**1. Limitaciones del chatbot (alucinaciones, sesgo, lisonjería):**
- Las alucinaciones generan información falsa presentada con confianza
- La sycophancy (lisonjería) valida creencias erróneas
- Los sesgos pueden discriminar en recomendaciones

**2. Respuestas inadecuadas a consultas de salud mental (viñetas):**
- Los chatbots responden de forma inadecuada comparada con estándares clínicos
- Falta de protocolos de seguridad para riesgo suicida y psicosis

**3. Sobredependencia cognitiva:**
- Asociada con **disminución del rendimiento cognitivo y académico**
- Los usuarios delegan tareas cognitivas que deberían resolver internamente

**4. Uso problemático:**
- Síntomas de **dependencia emocional y social**
- Síntomas de abstinencia cuando se interrumpe el uso
- Correlación con síntomas de salud mental preexistentes

**5. Psicosis por IA:**
- Múltiples vínculos propuestos entre **creencias delirantes y uso de chatbots**
- Riesgo de que los chatbots **refuercen y validen creencias delirantes**

### Limitaciones
- Revisión escópica, no meta-análisis (no cuantificó tamaños de efecto)
- Muchos artículos incluidos son conceptuales o de viñetas, no ensayos clínicos
- La categorización en 5 tipos de daño es una simplificación
- Falta evidencia longitudinal sobre uso prolongado
- Sesgo de publicación: los daños se estudian más que las ausencias de daño

### Comentario crítico
Esta revisión es necesaria y oportuna. El dato más preocupante es la categorización de **5 tipos de daño documentados**, incluyendo psicosis — algo que parecía teórico hace dos años y ahora tiene evidencia emergente. El problema central es que los chatbots están desplegados masivamente mientras la evidencia de seguridad es fragmentaria. La categoría de "sobredependencia cognitiva" es particularmente relevante para la práctica clínica: si los médicos delegan el razonamiento diagnóstico en LLMs, ¿degradamos la competencia clínica a largo plazo? **Relevancia para endocrinología:** alta — los pacientes con enfermedades crónicas (diabetes, tiroides) son usuarios frecuentes de chatbots de salud, y la información errónea sobre insulinoterapia o manejo de crisis tiroideas puede ser letal.

---

## 5. Framework multi-agente LLM para evaluar la fidelidad de psicoterapia

**Autores:** Kamaleddin MA, Mirjalili M, Barzegar R, Le NT, Cote Z et al. (16 autores)  
**Journal:** JMIR Medical Education, 2026  
**PMID:** [42611045](https://pubmed.ncbi.nlm.nih.gov/42611045) | **DOI:** [10.2196/92964](https://doi.org/10.2196/92964)

### Contexto
El entrenamiento en entrevista motivacional (MI) y terapia cognitivo-conductual (TCC) requiere evaluación de fidelidad: ¿el terapeuta aplicó las técnicas correctamente? La evaluación manual es lenta, costosa y variable entre evaluadores. Los LLMs podrían automatizar esta evaluación, pero nadie había testeado un sistema multi-agente completo para esta tarea.

### Metodología
- **Framework multi-agente** con 4 roles: Student, Patient, Evaluator, Feedback
- El Student agent conducta encuentros sintéticos MI o TCC con Patient agents
- El Evaluator agent puntúa transcripciones usando formularios validados de MI y TCC
- **133 perfiles de Patient para MI** y **102 para TCC**
- Perfiles Student escalonados: novice, intermediate, expert (vía prompt engineering)
- Validación externa con **133 transcripciones AnnoMI anotadas** (high/low quality)
- **16 evaluadores humanos independientes** por modalidad como benchmark

### Hallazgos principales
- Discriminación interna entre niveles Student (novice < intermediate < expert) fue significativa
- Concordancia razonable con el benchmark humano pragmático
- El framework pudo generar encuentros clínicos creíbles y evaluarlos con coherencia
- La evaluación automatizada mostró sensibilidad a las diferencias en calidad de las técnicas terapéuticas

### Limitaciones
- Evaluación basada en simulación, no en terapia real con pacientes
- Los Patient agents son profile-driven, no capturan la complejidad real de la interacción terapéutica
- La validación externa usa etiquetas coarse (high/low), no evaluación granular
- No se comparó directamente con la evaluación de expertos certificados
- Los 16 evaluadores humanos son un benchmark pragmático, no un gold standard

### Comentario crítico
El concepto es elegante: un framework donde diferentes agentes LLM simulan roles clínicos y evalúan la fidelidad de la intervención. La arquitectura multi-agente es más realista que un solo LLM actuando como evaluador. Sin embargo, la limitación fundamental es que **simular terapia no es terapia** — la alianza terapéutica, las microexpresiones, el timing emocional son elementales en MI y TCC y no se capturan en transcripciones de texto. El valor real está en la escalabilidad: si el framework funciona como herramienta de práctica para residentes (no como evaluación final), podría democratizar el acceso a formación en técnicas psicoterapéuticas. **Relevancia clínica:** indirecta pero significativa — la formación en MI y TCC es esencial para el manejo de pacientes crónicos (diabetes tipo 2, obesidad, adherencia a tratamientos).

---

## Tendencia de la semana

La adversarialidad como metodología está ganando terreno. Tanto el estudio de AMS (artículo 1) como la revisión de daños (artículo 4) comparten una filosofía: no basta con demostrar que los LLMs funcionan en condiciones ideales — hay que testearlos en las condiciones peores posibles. El dato más duro de la semana es que **ninguno de los 7 modelos evaluados supera el 63% de respuestas libres de fabricación o peligro** en escenarios de estewardship antimicrobiano. Mientras tanto, el artículo sobre LLMs locales para trauma (artículo 3) recuerda que la privacidad no es opcional en salud mental. Y la revisión de daños (artículo 4) con 119 artículos incluidos es el recordatorio más completo de que los chatbots no son inofensivos por ser "solo texto".
