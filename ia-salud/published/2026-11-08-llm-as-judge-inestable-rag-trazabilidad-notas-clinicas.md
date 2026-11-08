---
title: "LLM-as-judge inestable, RAG con referencias auténticas y conclusiones inseguras, y minería de notas clínicas a escala: boletín semanal IA+Salud"
date: "2026-11-08"
summary: "Cinco estudios de la semana: los LLM evaluadores fallan al cambiar de tarea clínica, el RAG con PMIDs auténticos no garantiza respuestas seguras, ChatGPT-4o se queda corto en endocarditis frente al especialista, y los LLM extraen barreras terapéuticas reales de 13.000 notas cardiológicas."
reading_time: "9 min"
tags: [llm-salud, rag, llm-as-judge, triaje, diabetes, endocarditis, prevencion-cardiovascular]
articles:
  - "Large language models are unstable as autonomous medical evaluators across clinical tasks | Carvalho E Silva M et al. (Univ. São Paulo) | J Am Med Inform Assoc | 2026 | 42995166 | 10.1093/jamia/ocag190 | investigación"
  - "Authentic Sources, Potentially Unsafe Conclusions: Evidence Traceability Does Not Ensure Clinical Reliability in RAG for Perioperative IBD | Hu W et al. (Wenzhou Medical Univ.) | J Multidiscip Healthc | 2026 | 42992190 | 10.2147/JMDH.S640102 | rag"
  - "A prospective cohort study on the performance of chat-bot AI in infective endocarditis management compared to infectious diseases consultation | Denti L et al. (GOM Niguarda, Milán) | Eur J Clin Microbiol Infect Dis | 2026 | 42998224 | 10.1007/s10096-026-05626-x | agentes-clinicos"
  - "AI-Identified Reasons for Nonescalation of Lipid-Lowering Therapy for Secondary Prevention | Somani S et al. (Stanford) | JAMA Cardiol | 2026 | 42998242 | 10.1001/jamacardio.2026.5230 | salud-digital"
  - "Can Retrieval-Augmented Generation Improve the Potential of the LLMs in Diabetes Health Management? | Guo S et al. (Huazhong Univ.) | J Med Syst | 2026 | 42986508 | 10.1007/s10916-026-02485-z | rag"
---

# Boletín IA Generativa en Salud — 8 de noviembre de 2026

Semana con un hilo conductor claro: **la validación de un LLM no transfiere entre tareas**. El estudio estrella sobre LLM-as-judge (JAMIA) y el estudio de RAG con referencias auténticas pero conclusiones inseguras (JMDH) llegan a la misma conclusión por caminos distintos: evalúa cada caso de uso de forma específica, o asume que no sabes cómo se comportará tu modelo.

---

## 1. Los LLM como jueces médicos autónomos: inestables entre tareas clínicas

**Large language models are unstable as autonomous medical evaluators across clinical tasks**
**Autores:** Carvalho E Silva M, Carvalho E Silva F, de Paula Gomes Nunes de Castro R, Gonçalves A, Figueiredo Delgado A (Universidade de São Paulo y Hospital Unimed de Rondonópolis, Brasil)
**Journal:** *Journal of the American Medical Informatics Association*, 6 nov 2026 (online ahead of print)
**PMID:** [42995166](https://pubmed.ncbi.nlm.nih.gov/42995166/) · **DOI:** [10.1093/jamia/ocag190](https://doi.org/10.1093/jamia/ocag190)

**Contexto.** El patrón "LLM-as-judge" (usar un LLM para evaluar automáticamente textos médicos) se está popularizando porque es barato y escala. El problema: casi todos los estudios lo validan contra humanos *en una sola tarea* y asumen que el resultado se transfiere.

**Metodología.** 10 LLM (3 open-source servidos en local de 7-27B parámetros y 7 por API: Claude, GPT, DeepSeek) como jueces autónomos en 3 tareas estructuralmente distintas con referencia humana: calidad de respuesta en LiveQA-Med (n=300), evaluación de investigación en PubMedQA (n=300) y triaje Emergency Severity Index en MIMIC-IV-Ext (n=256). Cada caso puntuado 3 veces por modelo a temperatura cero: **25.680 juicios**. Análisis con bootstrap por clúster, κ de Cohen ponderado cuadrático y corrección FDR.

**Hallazgos principales.**
- **Ningún modelo quedó en el top 3 en las 3 tareas**; todos se movieron ≥3 posiciones de ranking entre al menos un par de tareas.
- Lo grave: en triaje ESI, los casos de **nivel 1 (resucitación) fueron infratriados en el 89,1% de las evaluaciones**, en los 10 modelos (rango 70,2%–96,9%).
- El mejor acuerdo en triaje apenas alcanzó el rango inter-observador humano (Claude Opus, κ=0,60 [0,54–0,66]).
- Los modelos locales sin coste por consulta dominaron la frontera de Pareto en tareas de texto, pero solo en el extremo de baja concordancia en triaje.

**Limitaciones.** Solo 3 tareas; triaje con MIMIC-IV (datos retrospectivos de un solo sistema, no triaje en vivo); "infratriar" medido contra etiquetas de referencia que también tienen su propia variabilidad.

**Comentario crítico.** Es el estudio que debería leer todo equipo que monte un pipeline de evaluación con LLMs. El dato del 89,1% de infratriaje en nivel 1 no es un fallo marginal de un modelo malo: es sistemático en los 10, incluidos los "frontier". La lección operativa es doble: (a) la validación en una tarea no autoriza el despliegue en otra, y (b) en el extremo de mayor gravedad la supervisión humana no es opcional. Que los modelos locales ganen en texto pero pierdan en triaje también desmonta el mantra de "un modelo 8B ya vale para todo clínico".

---

## 2. RAG con referencias auténticas… y conclusiones inseguras

**Authentic Sources, Potentially Unsafe Conclusions: Evidence Traceability Does Not Ensure Clinical Reliability in Retrieval-Augmented Generation for Perioperative IBD**
**Autores:** Hu W, Cai Y, Sun L, Huang B (First Affiliated Hospital of Wenzhou Medical University, China)
**Journal:** *Journal of Multidisciplinary Healthcare*, 1 nov 2026;19:640102
**PMID:** [42992190](https://pubmed.ncbi.nlm.nih.gov/42992190/) · **PMCID:** PMC13738261 · **DOI:** [10.2147/JMDH.S640102](https://doi.org/10.2147/JMDH.S640102)

**Contexto.** El argumento de venta del RAG médico es "reduce alucinaciones porque cita fuentes reales". Este estudio pregunta lo incómodo: ¿una cita auténtica garantiza que la respuesta sea clínicamente correcta y segura?

**Metodología.** Base de conocimiento perioperatoria de EII a texto completo, desplegada localmente, y un benchmark de 50 preguntas de alta dificultad. Dos modelos de 8B (Qwen3-VL-8B y DeepSeek-R1-Distill-Llama-8B) evaluados con y sin RAG en condiciones igualadas. Tres médicos puntuaron a ciegas la precisión clínica, seguridad del paciente y fidelidad al contexto. La trazabilidad se verificó objetivamente contrastando todos los PMID recuperados contra PubMed (236 verificaciones, 187 únicos).

**Hallazgos principales.**
- **Todos los PMID citados existían en PubMed**: la capa de recuperación era genuinamente auténtica.
- El RAG mejoró la precisión de Qwen3 (Δ=+0,44, p<0,001) pero **no** la de DeepSeek (Δ=+0,21, p=0,09); la interacción modelo×recuperación no fue significativa.
- **La seguridad del paciente no mostró beneficio fiable del RAG**.
- Peor aún: en Qwen3, la fidelidad al contexto **disminuyó** con RAG (Δ=−0,24, p<0,001).
- Confiabilidad inter-observador excelente (ICC 0,86–0,93), lo que da solidez a las puntuaciones.

**Limitaciones.** Benchmark de solo 50 preguntas y 2 modelos pequeños de 8B; dominio estrecho (EII perioperatoria); puntuación por médicos, que es subjetiva aunque bien protocolizada.

**Comentario crítico.** Este es probablemente el hallazgo más importante de la semana para quien construye RAG clínico: **la trazabilidad de las citas y la fiabilidad clínica son cosas distintas y hay que evaluarlas por separado**. Un informe con referencias PubMed reales que llega a una conclusión incorrecta o insegura es *más* peligroso que una alucinación evidente, porque la cita auténtica transmite falsa confianza. El descenso de fidelidad con RAG (el modelo ignora parcialmente lo recuperado) es un detalle técnico valioso que confirma que "enchufar contexto" no es trivial. El diseño local (modelos 8B on-premise) además responde al requisito RGPD que tanto nos ocupa en Europa.

---

## 3. ChatGPT-4o frente al especialista en enfermedades infecciosas: endocarditis

**A prospective cohort study on the performance of chat-bot artificial intelligence in infective endocarditis management compared to infectious diseases consultation**
**Autores:** Denti L, Rezzonico LF, Oltolini C, et al. (23 autores; Grande Ospedale Metropolitano Niguarda, Milán, y centros italianos)
**Journal:** *European Journal of Clinical Microbiology & Infectious Diseases*, 7 nov 2026 (online ahead of print)
**PMID:** [42998224](https://pubmed.ncbi.nlm.nih.gov/42998224/) · **DOI:** [10.1007/s10096-026-05626-x](https://doi.org/10.1007/s10096-026-05626-x)

**Contexto.** La endocarditis infecciosa es una de las enfermedades donde la gestión multidisciplinar (cardiología, cirugía, infecciosos, microbiología) marca la diferencia en mortalidad. ¿Puede un LLM guiado por guías ESC sustituir o apoyar esa consulta?

**Metodología.** Estudio prospectivo unicéntrico de 8 meses. A 50 pacientes adultos con endocarditis se les pasó el caso clínico completo a ChatGPT-4o (con guías ESC y criterios Duke-ISCVID como conocimiento externo) pidiendo un plan de manejo: diagnóstico, trabajo diagnóstico, antimicrobianos y seguimiento. Las recomendaciones del modelo y las de los especialistas locales en infecciosos fueron puntuadas a ciegas por 3 infecciosos independientes con sistema estandarizado; comparación con McNemar-Bowker.

**Hallazgos principales.**
- En **diagnóstico inicial**: ≥90% de coincidencia con los especialistas y acuerdo inter-evaluador óptimo. Ahí el modelo brilla.
- En **trabajo diagnóstico**: inadecuación baja (0–12%), pero significativamente menos apropiado que el especialista por falta de especificidad en casi la mitad de los casos.
- En **antibioterapia**: solo 34–66% de esquemas óptimos frente a 72–86% de los especialistas, con casos valorados como dañinos en hasta el 14% de las evaluaciones (vs. 0–2% de los especialistas).
- Seguimiento: apropiado en 53–82%.

**Limitaciones.** Unicéntrico y con 50 pacientes; ChatGPT-4o no es el modelo más reciente; la evaluación ciega por infecciosos tiene componente subjetivo y el acuerdo entre evaluadores fue moderado-bajo en antibioticoterapia; el modelo recibía el caso ya construido, no la historia real desordenada.

**Comentario crítico.** El patrón es repetido en la literatura: los LLM diagnostican bien cuando el caso está bien formulado, pero fallan en la *gestión* — decidir qué antibiótico, a qué dosis, con qué ajuste renal y qué vigilancia. Un 0–14% de recomendaciones valoradas como dañinas en una enfermedad con mortalidad del 20–30% a un año es exactamente por qué la conclusión de los autores ("no debe emplearse de forma independiente") es la correcta. Como herramienta de *segunda opinión estructurada* para el especialista tiene valor; como consulta autónoma, no.

---

## 4. LLM minando notas clínicas: por qué no se intensifica la terapia lipidica

**AI-Identified Reasons for Nonescalation of Lipid-Lowering Therapy for Secondary Prevention**
**Autores:** Somani S, Kim DD, Ramaraju V, et al. (Stanford University)
**Journal:** *JAMA Cardiology*, 7 nov 2026 (online ahead of print)
**PMID:** [42998242](https://pubmed.ncbi.nlm.nih.gov/42998242/) · **DOI:** [10.1001/jamacardio.2026.5230](https://doi.org/10.1001/jamacardio.2026.5230)

**Contexto.** En prevención secundaria cardiovascular, las guías piden LDL-C <70 mg/dL, pero en la práctica la terapia hipolipemiante se intensifica mucho menos de lo debido. Las razones están enterradas en texto libre de las notas clínicas — invisible para los estudios que solo usan datos codificados.

**Metodología.** Cohorte retrospectiva (ene 2019–may 2025) en un gran sistema integrado del norte de California: 28.113 pacientes con eventos ASCVD. De ellos, 13.810 (49,1%; edad media 70,9 años) con LDL-C ≥70 mg/dL en la última visita. Un LLM de última generación extrajo de las notas: documentación del objetivo de LDL-C, ajuste terapéutico y razones de no intensificación, validado contra anotación clínica humana en conjuntos de desarrollo y test separados.

**Hallazgos principales.**
- Concordancia modelo-anotador estadísticamente indistinguible de la inter-anotador humano; micro-F1 de 0,80 a 0,98.
- Estrategia "treat-to-target" documentada solo en el **28,1%** de las notas relevantes.
- **88,7% de las notas con LDL-C por encima de objetivo NO intensificaron el tratamiento.**
- Razones extraídas (sobre 4.788 notas con razón explícita, 40,4%): efectos adversos referidos por el paciente (12,6%), LDL-C "cerca" del objetivo (6,9%), preferencia del paciente (6,8%), preferencia por cambios de estilo de vida (6,1%), y aplazamiento a repetir analítica (4,6%).

**Limitaciones.** Retrospectivo, un solo sistema de salud estadounidense (la cultura de documentación no es exportable tal cual); el LLM extrae lo que está *escrito* — el motivo real del clínico puede no estar documentado; sin intervención, solo diagnóstico del problema.

**Comentario crítico.** Este es el uso de la IA generativa que más me convence: no decidir por nadie, sino **hacer visible a escala lo que antes era invisible**. El 88,7% de no intensificación es cifra de inercia terapéutica brutal, y el desglose de causas (efectos adversos y preferencias del paciente por encima de la inercia pura) cambia el diseño de la intervención: no basta un recordatorio al médico si el problema es una mialgia no resuelta o un paciente que no quiere estatinas. Es exactamente el tipo de "evidencia del mundo real generada por IA desplegada" que los sistemas de salud empiezan a reclamar. La validación contra doble anotación humana con F1 comparables es metodológicamente seria.

---

## 5. ¿Mejora el RAG la gestión educativa de la diabetes?

**Can Retrieval-Augmented Generation Improve the Potential of the LLMs in Diabetes Health Management? An Assessment Based on Health Management Tasks and Question Complexity**
**Autores:** Guo S, Chen K, Wu H, Ye Q (Huazhong University of Science and Technology, Tongji Medical College)
**Journal:** *Journal of Medical Systems*, 5 nov 2026;50(1):159
**PMID:** [42986508](https://pubmed.ncbi.nlm.nih.gov/42986508/) · **DOI:** [10.1007/s10916-026-02485-z](https://doi.org/10.1007/s10916-026-02485-z)

**Contexto.** Tras el diagnóstico llega lo largo: educación, dieta, medicación, monitorización y complicaciones. ¿Ayuda el RAG a un LLM a responder mejor preguntas de manejo post-diagnóstico de diabetes, o su valor depende del tipo de pregunta?

**Metodología.** Crearon **DiabMedQA**, un dataset que cruza 3 niveles de complejidad de pregunta con 4 tareas de manejo (incluida consejo dietético). Compararon LLMs estándar frente a LLMs con recuperación (RA-LLMs), evaluando con BERTScore semántico y evaluación humana por 5 clínicos. Aprobado por el IRB de Tongji Hospital.

**Hallazgos principales.**
- Los RA-LLMs lograron mayor similitud semántica y fueron preferidos por los clínicos frente a los LLMs base.
- Qwen2.5-14B fue el mejor: su BERTScore mejoró **+10,56% de media** con RAG.
- Pero las ganancias fueron **significativamente menores a mayor complejidad** de la pregunta: en complejidad alta, solo 1 de los 4 modelos mejoró significativamente.
- En consejo dietético, el BERTScore del RA-LLM quedó por debajo de 0,8 — la tarea más débil de todas.

**Limitaciones.** BERTScore mide similitud semántica con una referencia, no corrección clínica real (una respuesta plausible y bien redactada puede puntuar alto sin ser lo más correcto); dataset propio sin comparación con benchmarks externos; modelos de la familia Qwen, no los frontier.

**Comentario crítico.** Relevantísimo para el mundo endocrino y para cualquier proyecto de educación terapéutica con chatbots. La lectura fina no es "RAG funciona" sino: **RAG ayuda donde la respuesta es recuperable de una guía, y se desinfla justo donde el conocimiento clínico requiere integrar contexto individual** — la dieta es el ejemplo perfecto, porque depende de comorbilidades, cultura alimentaria y situación personal que ninguna base de conocimiento indexada cubre. Coincide con los estudios 1 y 2 de este boletín: el rendimiento es específico de la tarea. Y una nota crítica al diseño: apoyarse en BERTScore como métrica principal en dominio médico es arriesgado; los 5 clínicos evaluando dan más confianza que el embedding.

---

## Síntesis de la semana

Los tres estudios de evaluación (1, 2, 5) apuntan a lo mismo desde ángulos distintos: **no existe la transferencia de validación entre tareas clínicas**. Un LLM validado como evaluador en PubMedQA no lo es en triaje; un RAG con citas auténticas no es un RAG seguro; un RA-LLM brillante en educación dietética básica se queda corto en preguntas complejas. La respuesta operativa es aburrida pero es la única: benchmarks específicos por caso de uso, referencias humanas, y supervisión en el extremo de alto riesgo (triaje nivel 1, antibioticoterapia).

Y la promesa real de la semana no está en diagnosticar (ahí el LLM ya está casi resuelto en casos formulados), sino en los dos usos que asoman en JAMA Cardiol: **minar texto clínico a escala** para hacer visibles brechas de cuidado que llevan décadas ocultas en notas de texto libre.

*[Boletín generado a partir de búsquedas en PubMed del 1 al 8 de noviembre de 2026. Todos los PMIDs y DOIs verificados contra los abstracts originales.]*
