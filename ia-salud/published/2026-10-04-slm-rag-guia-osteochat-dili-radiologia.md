---
title: "Boletín Semanal IA Generativa en Salud — Semana del 28 de septiembre al 4 de octubre de 2026"
date: "2026-10-04"
summary: "Cinco artículos de esta semana dibujan un mapa honesto del campo: los modelos pequeños son viables en memoria pero la evidencia de seguridad es casi inexistente, RAG con guías clínicas sigue siendo lo que de verdad sube el listón, y un meta-análisis recuerda que la IA generativa aún no iguala a los expertos en diagnóstico."
reading_time: "10 min"
tags: [llm, modelos-pequenos, rag, chatbots, radiologia, seguridad, salud-digital]
categories: [modelos, investigación, rag, salud-digital]
articles:
  - "Small language models in clinical medicine: a systematic review of performance, safety, and deployment feasibility | Gorenshtein A, Omar M, Barash Y, Kruskal JB, Ahmed M, Brook OR, Illigens B, Nadkarni GN, Klang E | J Am Med Inform Assoc | 2026 | PMID 42821352 | DOI 10.1093/jamia/ocag164 | modelos"
  - "Generative AI versus physicians in diagnostic radiology: a systematic review and meta-analysis | Takita H, Kabata D, Walston SL, Mitsuyama Y, Tatekawa H, Saito K, Miki Y, Ueda D | Jpn J Radiol | 2026 | PMID 42828690 | DOI 10.1007/s11604-026-02090-7 | investigación"
  - "Guideline-grounded large language models for extracting genome-informed clinical recommendations from electronic health records | Xin Y, Davis KW, Su WC, Yan C, Derr T, Wagholikar KB, Maripuri DP, Weng C, Ta C, Kullo IJ, Kiryluk K, Rosenthal EA, Cimino JJ, Murphy S, Wei WQ | J Am Med Inform Assoc | 2026 | PMID 42820348 | DOI 10.1093/jamia/ocag171 | rag"
  - "OsteoCHAT: real-world patient evaluation and benchmarking of a guideline-grounded osteoporosis chatbot | Schulz N, Gehlen M, Mahn K, Bühring B, Hoff P, Seifert O, Wiebe E, Rashid A, Kuhn S, Buttgereit F, Pfeil A, Oelzner P, Lange U, Knitza J, Klemm P | Osteoporosis International | 2026 | PMID 42828563 | DOI 10.1007/s00198-026-08247-4 | salud-digital"
  - "Multicenter Evaluation of Large Language Models Versus Hepatologists for Prognostic Prediction in Drug-Induced Liver Injury | Fu H, Du Y, Zhao G, Xiao Y, Song S, Zang X, Zhou T, Zhuang Y, Mo R, Lai R, Xie Q | Liver International | 2026 | PMID 42757445 | DOI 10.1111/liv.70879 | modelos"
---

# Boletín Semanal: IA Generativa en Salud
**28 de septiembre – 4 de octubre de 2026**

La semana cierra un ciclo interesante. Tras semanas dominadas por agentes clínicos y ensayos randomizados, esta entrega es más "infraestructural": qué modelos pequeños necesitamos realmente, qué pasa cuando la IA generativa se mide contra radiólogos de verdad, qué aporta el RAG con guías clínicas, cómo reaccionan los pacientes a un chatbot de osteoporosis real, y si un LLM puede predecir mortalidad como un hepatólogo senior. El hilo común: **el terreno se está asentando, y las respuestas no siempre son cómodas**.

---

## 1. 📦 Modelos pequeños en medicina: viables en memoria, invisibles en seguridad

**Autores:** Gorenshtein A, Omar M, Barash Y, Kruskal JB, Ahmed M, Brook OR, Illigens B, Nadkarni GN, Klang E (BRIDGE GenAI Lab, Beth Israel Deaconess / Harvard Medical School; Icahn at Mount Sinai)
**Journal:** Journal of the American Medical Informatics Association, 1 octubre 2026 (online ahead of print)
**DOI:** [10.1093/jamia/ocag164](https://doi.org/10.1093/jamia/ocag164) | **PMID:** [42821352](https://pubmed.ncbi.nlm.nih.gov/42821352/)

### ¿Qué problema resuelve?
Los LLMs de frontera son caros, dependen de APIs externas y son difíciles de defender bajo GDPR. Los *small language models* (SLMs, ≤4 mil millones de parámetros) prometen operar en hardware local, pero ¿existe evidencia clínica real de que funcionan? ¿Y qué sabemos de su seguridad?

### Metodología
- Revisión sistemática PRISMA 2020, protocolo PROSPERO (CRD420261331444)
- Búsqueda en 5 bases de datos hasta el 10 de febrero de 2026; dos revisores independientes (Cohen κ = 0,93)
- Definieron un **Relative Task Score (RTS)**: la mejor puntuación del SLM dividida por un comparador de referencia jerarquizado
- 11 estudios elegibles (7 revisados por pares, 4 preprints/informes técnicos)

### Hallazgos principales
- RTS entre **0,30 y 2,36** — es decir, desde el 30% hasta el doble del rendimiento del comparador: los resultados son heterogéneos y no se pueden agrupar
- **Alucinaciones evaluadas en solo 6 de 11 estudios**; métricas de calibración o incertidumbre epistémica: **0 de 11**; tiempo de inferencia en hardware real: **2 de 11**
- Estimación de memoria: un modelo de 4B parámetros requiere **~9,3 GB** con contexto de 2.048 tokens → viable en una sola GPU
- Conclusión de los autores: la viabilidad de memoria es real, pero la evidencia es **demasiado pequeña y heterogénea** para comparar con modelos grandes, y las propiedades de seguridad (incluida robustez adversarial) **no se miden**

### Limitaciones
- Solo 11 estudios, ninguno reporta calibración formal ni robustez adversarial
- Sin meta-análisis posible por heterogeneidad extrema
- "Viabilidad en memoria" ≠ despliegue clínico real — nadie ha demostrado latencia ni throughput en flujo asistencial

### 💬 Comentario crítico
Este es el tipo de revisión que hace un servicio impopular: **desmonta la narrativa de que los modelos pequeños son la solución "barata y local" sin decir que sean inútiles**. El dato que más pesa no es el RTS — es el "0 de 11" de calibración. Un modelo pequeño que no sabe cuándo no sabe no sirve para decisión clínica, por muy barato que sea. Para cualquier hospital europeo que quiera desplegar IA sin enviar datos a la nube, este artículo marca lo mínimo exigible: medir calibración, robustez adversarial y tiempos de inferencia end-to-end. La puerta sigue abierta, pero hay mucho trabajo por hacer antes de cruzarla.

---

## 2. 🩻 Meta-análisis: la IA generativa de diagnóstico sigue por debajo de los radiólogos expertos

**Autores:** Takita H, Kabata D, Walston SL, Mitsuyama Y, Tatekawa H, Saito K, Miki Y, Ueda D (Osaka Metropolitan University, Kobe University, DFKI, Kyoto University)
**Journal:** Japanese Journal of Radiology, 3 octubre 2026 (online ahead of print)
**DOI:** [10.1007/s11604-026-02090-7](https://doi.org/10.1007/s11604-026-02090-7) | **PMID:** [42828690](https://pubmed.ncbi.nlm.nih.gov/42828690/)

### ¿Qué problema resuelve?
Hay decenas de estudios que comparan LLMs con médicos en radiología, pero con diseños, puntos de finales y comparadores dispares. ¿Cuál es la distancia *real* entre la IA generativa y los humanos cuando se sintetiza todo con metodología rigurosa?

### Metodología
- Meta-análisis de precisión diagnóstica, registrado en PROSPERO (CRD420251040000), guía PRISMA-DTA
- Búsqueda en Medline, Scopus, Web of Science, Cochrane Central y medRxiv (junio 2018 – marzo 2025)
- 48 estudios incluidos; evaluación de riesgo de sesgo con **PROBAST+AI**
- Meta-regresión multinivel de efectos aleatorios con inferencia robusta agrupada por estudio

### Hallazgos principales
- **Precisión agrupada de la IA generativa: 42,9% (IC 95% 35,8–50,1%)** en tareas de texto libre y **58,1% (IC 95% 50,0–66,2%)** en tareas de opción múltiple
- **Los médicos expertos superaron a la IA en +13,0 puntos porcentuales** (IC 95% 0,9–25,2; P = 0,038)
- Entrada solo texto mejor que solo imagen (diferencia de −25,9 pp a favor del texto, P = 0,001) y que texto+imagen (−10,6 pp, P = 0,046)
- Los autores advierten: la diferencia puede reflejar **dificultad de tarea y contenido informacional**, no la modalidad en sí

### Limitaciones
- Estudios muy heterogéneos en tareas y descriptores de referencia
- Ventana de búsqueda hasta marzo 2025 — modelos de frontera posteriores (GPT-5, Gemini 2.5) no están incluidos
- La "precisión" no es comparable entre tareas de texto libre y de opción múltiple

### 💬 Comentario crítico
Aunque la prensa técnica insiste en que "la IA iguala a los médicos", este meta-análisis pone números sobrios: **42,9% en texto libre es malo, y +13 pp de ventaja humana es estadísticamente significativa**. Pero hay una lectura más fina que los titulares no capturan: cuando la entrada es texto (la modalidad nativa del LLM), el déficit se reduce. La imagen sigue siendo territorio de modelos especializados, no de LLMs de propósito general. El matiz importante: no le pediríamos a un radiólogo interpretar una radiografía de texto libre sin contexto clínico; tampoco deberíamos pedirle al LLM lo mismo. La pregunta útil no es "¿igualan a los humanos?" sino "**¿en qué tareas de apoyo concretas reducen carga de trabajo sin reducir calidad?**" — y esa respuesta está en el trabajo asistivo, no en la competencia cara a cara.

---

## 3. 📚 RAG con guías clínicas: de F1 de 0,50 a 0,81 — y con un modelo pequeño

**Autores:** Xin Y, Davis KW, Su WC, Yan C, Derr T, Wagholikar KB, Maripuri DP, Weng C, Ta C, Kullo IJ, Kiryluk K, Rosenthal EA, Cimino JJ, Murphy S, Wei WQ (Vanderbilt University Medical Center, Mass General, CHOP, Columbia, UW, UAB — red eMERGE)
**Journal:** Journal of the American Medical Informatics Association, 1 octubre 2026 (online ahead of print)
**DOI:** [10.1093/jamia/ocag171](https://doi.org/10.1093/jamia/ocag171) | **PMID:** [42820348](https://pubmed.ncbi.nlm.nih.gov/42820348/)

### ¿Qué problema resuelve?
La medicina de precisión genera *genome-informed risk assessments* (GIRAs) que quedan enterrados en notas libres del EHR. Evaluarlos a escala requiere revisión manual de historia clínica. ¿Pueden los LLMs extraer estas recomendaciones de forma fiable — y cuánto aporta anclarlos a la guía clínica?

### Metodología
- Pipeline LLM para identificar recomendaciones clínicas asociadas a informes GIRA en el estudio eMERGE
- Tres modelos evaluados: **GPT-4o, LLaMA-3.3-70B y LLaMA-3.1-8B**
- Tres estrategias comparadas: prompting base, prompting *guideline-aware* y **RAG**
- Validación contra revisión manual de historias clínicas (18 participantes; 34 documentos)

### Hallazgos principales
- Prompting base: **F1 = 0,50–0,54** (limitado)
- Añadir conocimiento de guía: mejora de **+0,14 a +0,31 F1** según modelo
- **Mejor resultado: LLaMA-3.1-8B (8B parámetros) con RAG → F1 = 0,81**
- El modelo *pequeño* con grounding superó al prompting base de los modelos grandes

### Limitaciones
- Muestra de validación muy pequeña (34 documentos)
- Un solo contexto de estudio (eMERGE, salud genómica) — generalización no demostrada
- No midieron alucinaciones ni robustez, solo F1 de extracción

### 💬 Comentario crítico
Este artículo es el argumento más limpio de la semana para la tesis "**el grounding importa más que el tamaño del modelo**". Un LLaMA-3.1-8B con RAG sobre guías clínicas bate al GPT-4o con prompting base en extracción de recomendaciones genómicas. No es la primera vez que lo vemos, pero el diseño es especialmente persuasivo porque compara las tres estrategias sobre la misma tarea con el mismo gold standard. Para equipos que despliegan en hospitales: **si tu problema es extraer información clínica estructurada, el RAG con la guía correcta es la primera palanca, no el fine-tuning ni el modelo más grande**. La limitación de 34 documentos es seria — pero la dirección del efecto es inequívoca.

---

## 4. 🦴 OsteoCHAT: un chatbot de guía clínica que los pacientes aceptan — pero en el que confían a medias

**Autores:** Schulz N, Gehlen M, Mahn K, Bühring B, Hoff P, Seifert O, Wiebe E, Rashid A, Kuhn S, Buttgereit F, Pfeil A, Oelzner P, Lange U, Knitza J, Klemm P (7 centros alemanes; Justus-Liebig-Universität Giessen, Charité Berlin, Universitätsklinikum Jena, entre otros)
**Journal:** Osteoporosis International, 3 octubre 2026 (online ahead of print)
**DOI:** [10.1007/s00198-026-08247-4](https://doi.org/10.1007/s00198-026-08247-4) | **PMID:** [42828563](https://pubmed.ncbi.nlm.nih.gov/42828563/)

### ¿Qué problema resuelve?
Los pacientes con osteoporosis tienen necesidades informativas que la asistencia rutinaria no cubre de forma consistente. ¿Puede un chatbot *guideline-grounded* (basado en la guía alemana de osteoporosis) ofrecer soporte educativo escalable con calidad comparable a los LLMs genéricos?

### Metodología
- Sistema conversacional RAG basado en la guía alemana actual de osteoporosis
- Evaluación **multicéntrico real-world en 7 centros de Alemania**
- 1.075 interacciones pregunta-respuesta registradas; 389 respuestas valoradas individualmente
- Benchmarking ciego contra 3 LLMs genéricos (Gemini, ChatGPT, Meta AI) con 10 preguntas frecuentes derivadas de la guía BfO como gold standard
- 5 expertos clínicos valoraron en 5 dominios (0–3 puntos cada uno)

### Hallazgos principales
- **379 de 389 respuestas (97,4%) recibieron feedback positivo** en tiempo real
- 84,3% entendió las respuestas con facilidad; 79,8% las valoró como fáciles de usar; 77,2% percibió ahorro de tiempo; 78,7% lo consideró un complemento útil
- **Confianza (trust): solo 64,7% de acuerdo** — la métrica más baja de todas
- Benchmarking de expertos: medianas de **14/15 para Gemini, ChatGPT y OsteoCHAT**; 13/15 para Meta AI — es decir, el chatbot de guía igualó a los genéricos
- **Debilidades identificadas por los expertos en todos los sistemas**: indicación de tratamiento farmacológico y comunicación de efectos adversos y eventos raros de seguridad

### Limitaciones
- Sin control aleatorizado ni comparación con asistencia convencional prospectiva
- Participantes alemanes, con un solo chatbot y una sola guía
- La "calidad de respuesta" se mide sobre preguntas predefinidas, no sobre casos clínicos ambiguos
- Conflicto de interés parcial declarado (un autor emplead@ de centro de telemedicina)

### 💬 Comentario crítico
Este artículo es particularmente relevante para la endocrinología: la osteoporosis es una enfermedad crónica con autogestión, adherencia y seguridad farmacológica — exactamente el terreno donde los chatbots de paciente tienen más que ganar... y más que perder. El patrón es revelador: **aceptabilidad alta, comprensión alta, confianza a medias, y los mismos agujeros de seguridad en todos los sistemas** (los genéricos incluidos). Es decir, el problema no es que el chatbot de guía sea peor que GPT — es que *ninguno* de los sistemas sabe comunicar bien cuándo no dar un consejo. El hecho de que OsteoCHAT igualara en puntuación a Gemini y ChatGPT valida el enfoque RAG con guía; el 64,7% de confianza nos dice que la batalla de adopción no se gana en el laboratorio.

---

## 5. 🧪 LLMs vs. hepatólogos en pronóstico de hepatotoxicidad: cerca en AUROC, lejos en exactitud

**Autores:** Fu H, Du Y, Zhao G, Xiao Y, Song S, Zang X, Zhou T, Zhuang Y, Mo R, Lai R, Xie Q (Ruijin Hospital, Shanghai Jiao Tong University; Ruijin North Hospital; Wuxi Xinrui Hospital)
**Journal:** Liver International, vol. 46, nº 10, octubre 2026
**DOI:** [10.1111/liv.70879](https://doi.org/10.1111/liv.70879) | **PMID:** [42757445](https://pubmed.ncbi.nlm.nih.gov/42757445/) | **PMCID:** PMC13586842

### ¿Qué problema resuelve?
La hepatotoxicidad por fármacos (DILI) puede progresar a cronicidad o muerte. Los LLMs de frontera podrían ayudar en la predicción de resultados, pero su utilidad relativa frente a hepatólogos de distintos niveles de experiencia no estaba clara.

### Metodología
- **943 pacientes con DILI de 3 centros** (cohortes interna y externa)
- Resultados a 12 meses de seguimiento: recuperación, cronicidad a 6/12 meses y muerte
- Modelos comparados: **Gemini-2.5 Pro, GPT-5.1, DeepSeek-3.2**, hepatólogos junior/medio/senior, y reglas clásicas (Ley de Hy, nHy's Law, MELD)
- Se aplicaron **"LLM-Rules"** (VOTACIÓN, OR, AND) para estabilizar predicciones multi-modelo

### Hallazgos principales
- **Cronicidad a 6 meses:** el hepatólogo senior logró el mejor AUROC (0,61; exactitud 70%). Gemini-2.5 Pro (0,60) y GPT-5.1 (0,59) **superaron a hepatólogos junior y medio**
- Gemini-2.5 Pro mostró la mayor concordancia con el senior (κ = 0,43)
- **Mortalidad global:** el senior alcanzó AUROC 0,87 (exactitud 83%); **GPT-5.1 y Gemini-2.5 Pro lograron 0,86**, superando al hepatólogo junior y a las reglas de Hy's Law
- **Pero:** todos los LLMs mostraron exactitud y especificidad **inferiores** a los hepatólogos
- Las reglas de consenso multi-LLM (OR mejora sensibilidad, AND mejora especificidad) fueron **estables entre cohortes**

### Limitaciones
- Un solo país y un solo dominio clínico (hepatología china); los datos de entrenamiento de los modelos no son locales
- Cohortes de 943 pacientes: suficiente para AUROC, pero los eventos de cronicidad son de baja frecuencia
- Sin evaluación clínica prospectiva ni impacto en decisiones reales de tratamiento

### 💬 Comentario crítico
Este estudio tiene un rasgo que lo distingue de la mayoría de comparaciones LLM-vs-médico: **usa los modelos más recientes disponibles (GPT-5.1, Gemini-2.5 Pro) en una tarea de pronóstico con seguimiento real, no en un examen**. El hallazgo central es doble y hay que leerlo entero: los LLMs **se acercan al experto senior en discriminación (AUROC)** pero **pierden en exactitud y especificidad** — y exactamente ahí es donde importa clínicamente. Un AUROC de 0,86 que luego falla por especificidad no se puede usar para decidir si dar corticoides o no. La idea de "LLM-Rules" (votación multi-modelo) es pragmática y coincide con la dirección del campo: **consenso entre modelos independientes > un solo modelo mágico**. Pero el título debería leerse así: los LLMs son buenos complementos para hepatólogos, no sustitutos — y el artículo lo dice explícitamente.

---

## 📎 Menciones de la semana (verificadas en PubMed)

- **Triaje LLM de barreras a la adherencia al VIH** — Ma Y, Achiche S, Lessard D, et al. *JAMIA Open*, 26 sep 2026. Flan-T5 fine-tuned detectó barreras de adherencia ART con Macro-F1 0,83 (test) / 0,71 (externo) y superó a los modelos clínicos preentrenados (P < 0,001). Detalle notable: **GPT-4.1 consumió ~30× más energía que Flan-T5-xl** para la misma tarea. PMID [42801061](https://pubmed.ncbi.nlm.nih.gov/42801061/) | DOI [10.1093/jamiaopen/ooag169](https://doi.org/10.1093/jamiaopen/ooag169) — *herramientas*
- **Prompting jerárquico con LLMs de razonamiento para extraer evidencia de miocarditis por inmunoterapia** — Hsu E, Lu SC, Ebrahimi S, et al. (MD Anderson). *Eur Heart J Digit Health*, 15 sep 2026. F1 de 0,6332 vs 0,4933 de investigadores en formación (P < 0,001), 72 h → 37 min por 1.000 notas, **2,04 USD por 1.000 notas**. PMID [42787614](https://pubmed.ncbi.nlm.nih.gov/42787614/) | DOI [10.1093/ehjdh/ztag145](https://doi.org/10.1093/ehjdh/ztag145) — *herramientas*
- **Chatbot híbrido para autogestión de trasplantados hepáticos** — Cheng SM, Shieh WY, Wu YC, et al. *Appl Nurs Res*, oct 2026. Arquitectura híbrida: respuestas validadas de base predefinida + ChatGPT-4o-mini solo para consultas no cubiertas. CVI 0,88, ICC 0,976, satisfacción 4,71/5. PMID [42785829](https://pubmed.ncbi.nlm.nih.gov/42785829/) | DOI [10.1016/j.apnr.2026.152136](https://doi.org/10.1016/j.apnr.2026.152136) — *salud-digital*

---

## 🔑 Tendencias de la semana

| Tendencia | Señal |
|-----------|-------|
| **Grounding > tamaño** | LLaMA-3.1-8B + RAG (F1 0,81) supera al prompting base de GPT-4o — la guía clínica ancla importa más que los parámetros |
| **Modelos pequeños: memoria sí, seguridad no** | 9,3 GB para 4B parámetros es viable, pero 0 de 11 estudios miden calibración — el despliegue local sigue sin evidencia de seguridad |
| **El techo experto sigue alto** | Meta-análisis de radiología: +13 pp a favor de los radiólogos sobre IA generativa en tareas diagnósticas |
| **Confianza del paciente es la asignatura pendiente** | OsteoCHAT: 97,4% feedback positivo pero solo 64,7% de confianza — aceptar ≠ confiar |
| **Ensembles multi-LLM como estabilizador** | Votación, OR y AND entre modelos mejoran sensibilidad/especificidad con estabilidad entre cohortes |

---

## 📊 Números de la semana

- **0 de 11** — estudios de SLMs clínicos que midieron calibración o incertidumbre epistémica
- **9,3 GB** — memoria necesaria para un modelo de 4B parámetros con contexto de 2.048 tokens
- **42,9%** — precisión agrupada de la IA generativa en tareas diagnósticas de radiología con texto libre
- **+13,0 pp** — ventaja de los radiólogos expertos sobre la IA generativa (P = 0,038)
- **0,50 → 0,81** — salto de F1 al añadir RAG con guía clínica en extracción de recomendaciones genómicas
- **1.075** interacciones reales de OsteoCHAT en 7 centros alemanes
- **64,7%** — los pacientes que confiaron en OsteoCHAT (vs. 97,4% de feedback positivo)
- **943** pacientes con DILI en 3 centros para comparar GPT-5.1/Gemini-2.5 Pro con hepatólogos
- **2,04 USD** — coste de extracción estructurada por 1.000 notas con LLM de razonamiento

---

*Próxima edición: 11 de octubre de 2026*
