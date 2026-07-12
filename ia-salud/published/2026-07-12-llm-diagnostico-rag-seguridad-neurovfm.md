---
title: "LLMs para diagnóstico bayesiano, RAG en seguridad farmacológica y NeuroVFM: modelos fundacionales que aprenden del sistema sanitario"
date: "2026-07-12"
summary: "Tres estudios publicados esta semana exploran aplicaciones clínicas de la IA generativa desde ángulos distintos: GPT-5 genera likelihood ratios diagnósticos con bajo sesgo medio (aunque con dispersión amplia); un sistema RAG sobre prospectos de medicamentos iguala casi a farmacéuticos clínicos en educación al paciente; y NeuroVFM, un modelo fundacional entrenado con 5,24 millones de volúmenes clínicos, establece un nuevo paradigma de aprendizaje desde el sistema sanitario."
reading_time: "7 min"
tags: ["llm-diagnostico", "rag", "seguridad-farmacologica", "modelos-fundacionales", "neuroimagen"]
articles:
  - "Large language models generate diagnostic likelihood ratios with low mean bias but wide dispersion | Chong P, He S, Samadian K, et al. | Sci Rep | 2026 | 42436230 | 10.1038/s41598-026-61766-2 | nlp-clinico"
  - "Retrieval-augmented generation for medication safety: A case study using drug package inserts | Sun Y, Wang W, Cheng W, et al. | Int J Med Inform | 2026 | 42435614 | 10.1016/j.ijmedinf.2026.106599 | salud-digital"
  - "Health system learning enables generalist neuroimaging models | Kondepudi A, Rao A, Zhao C, et al. | Nat Med | 2026 | 42432292 | 10.1038/s41591-026-04497-1 | radiologia"
---

## LLMs en diagnóstico, seguridad farmacológica y modelos que aprenden de la práctica clínica real

Esta semana, tres publicaciones abordan preguntas distintas pero complementarias sobre el papel de los modelos generativos en medicina. La primera examina si los LLMs pueden generar _likelihood ratios_ (LRs) para diagnóstico bayesiano —una pregunta con implicaciones directas para la toma de decisiones clínicas. La segunda explora si la recuperación aumentada (RAG) sobre prospectos de medicamentos puede generar materiales de educación al paciente de calidad comparable a la de farmacéuticos clínicos. La tercera, publicada en _Nature Medicine_, presenta NeuroVFM, un modelo fundacional de neuroimagen entrenado no con datos curados de internet, sino directamente desde el flujo de trabajo clínico de un sistema sanitario.

---

### 1. GPT-5 genera _likelihood ratios_ diagnósticos con bajo sesgo pero dispersión preocupante

**Chong P, He S, Samadian K, Mohamed A, Peng B, Chua E, Rohlfsen C, Locke BW.** *Large language models generate diagnostic likelihood ratios with low mean bias but wide dispersion.* Scientific Reports, 2026.

**Contexto.** El razonamiento bayesiano es fundamental en medicina: la probabilidad preprueba de una enfermedad se actualiza mediante _likelihood ratios_ (LRs) para obtener una probabilidad posprueba. Sin embargo, los LRs empíricos son escasos porque los estudios de precisión diagnóstica son costosos y dependientes del contexto. Si un LLM pudiera generar LRs fiables, podría facilitar la toma de decisiones en la cabecera del paciente. Este estudio evalúa hasta qué punto es posible.

**Metodología.** Se compararon los LRs generados por tres modelos de OpenAI (GPT-4o, o3 y GPT-5) con todos los LRs publicados en el repositorio TheNNT.com, una base de datos curada de _numbers needed to treat_ y LRs basados en la literatura. Se utilizó un _few-shot prompt_ para elicitar LRs numéricos (LR+ y LR−) para 30 condiciones clínicas. El acuerdo se evaluó mediante análisis de Bland-Altman, midiendo sesgo medio y límites de acuerdo multiplicativos.

**Hallazgos principales.**
- Se compilaron **700 LRs** en 30 condiciones. La mayoría correspondía a signos o síntomas (59%), elementos de la historia clínica (19%) o resultados de pruebas diagnósticas (16%).
- Los tres modelos mostraron un **sesgo medio despreciable** —es decir, en promedio, los LRs generados coincidían con los valores publicados.
- GPT-5 fue el modelo con mejor rendimiento: presentó los **límites de acuerdo más estrechos** (relación 0,26×–3,70×), frente a o3 y GPT-4o.
- A pesar del bajo sesgo medio, la **dispersión fue amplia** en los tres modelos: un LR publicado de 5,0 podría ser generado por GPT-5 como ~1,3 (0,26×) o ~18,5 (3,70×).

**Limitaciones.** El estudio solo evaluó LRs del repositorio TheNNT.com, que no cubre todas las condiciones clínicas ni todos los contextos. Los _prompts_ fueron diseñados para elicitar valores numéricos en un formato específico, lo que puede no reflejar el uso clínico real. No se evaluaron LRs para hallazgos no estudiados previamente en la literatura. El estudio no incluyó validación prospectiva ni comparación con LRs generados por clínicos.

**Comentario crítico.** El hallazgo de un sesgo medio bajo es prometedor, pero la dispersión amplia es un obstáculo serio para el uso clínico individual. Que GPT-5 genere un LR de 1,3 o de 18,5 para el mismo hallazgo es la diferencia entre descartar prácticamente una enfermedad y confirmarla con alta probabilidad. **Para coger con pinzas**: útil como herramienta de apoyo si se enmarcan los resultados con intervalos de incertidumbre, pero no intercambiable con LRs derivados de estudios de precisión diagnóstica. Un médico no debería tomar decisiones basadas en el LR puntual generado por un LLM sin verificar el rango de plausibilidad.

---

### 2. RAG sobre prospectos de medicamentos: ¿puede un LLM educar a pacientes tan bien como un farmacéutico?

**Sun Y, Wang W, Cheng W, Li R, Liu X, Pei Q, Tang J, Yang G.** *Retrieval-augmented generation for medication safety: A case study using drug package inserts.* International Journal of Medical Informatics, 2026.

**Contexto.** La educación al paciente sobre medicamentos es una tarea clave de los farmacéuticos clínicos, pero consume tiempo y recursos. Los LLMs podrían escalar esta labor, pero alucinan. La recuperación aumentada (RAG) es la estrategia más común para mitigar alucinaciones, pero su eficacia en seguridad farmacológica no se había evaluado con rigor.

**Metodología.** Dos farmacéuticos clínicos seniors seleccionaron 70 medicamentos y definieron ítems clave de seguridad que debía cubrir todo material educativo (indicación, posología, efectos adversos, interacciones, contraindicaciones, etc.). Desarrollaron una ontología que mapeaba estos ítems a secciones de los prospectos oficiales. Usando esta ontología, GPT-4o con RAG, OAGLLM (otro sistema RAG) y los propios farmacéuticos generaron materiales educativos de forma independiente. Siete farmacéuticos clínicos colegiados evaluaron los materiales de forma cegada usando una escala Likert de 5 puntos en seis dimensiones (Cobertura, Relevancia, Precisión, Peligrosidad, Gravedad del Daño y una variante del Test de Turing). Adicionalmente, cuatro modelos jueces (DeepSeek-V3, DeepSeek-R1, Qwen-Plus, Claude Sonnet 4.5) evaluaron los mismos materiales con los mismos criterios para medir la fiabilidad de la evaluación automatizada.

**Hallazgos principales.**
- Los farmacéuticos humanos obtuvieron la puntuación global más alta: **0,89 ± 0,16**.
- GPT-4o con RAG le siguió de cerca: **0,86 ± 0,20**.
- OAGLLM obtuvo **0,84 ± 0,17**.
- En las subescalas, los humanos fueron superiores en Cobertura, Relevancia y Precisión. GPT-4o destacó por obtener la **puntuación más baja en Peligrosidad** (es decir, generó menos contenido potencialmente dañino que los propios farmacéuticos).
- Los cuatro modelos jueces mostraron solo un **acuerdo justo** con los evaluadores humanos (κ = 0,21–0,24) y una correlación baja-moderada (ρ = 0,40–0,53).

**Limitaciones.** La evaluación se realizó sobre 70 medicamentos, una muestra limitada. La ontología fue desarrollada por dos farmacéuticos del mismo equipo, lo que introduce sesgo. La evaluación fue transversal, no se midió el impacto real en la comprensión o adherencia del paciente. La concordancia baja entre modelos jueces y humanos indica que la evaluación automatizada de calidad de materiales educativos aún no es fiable.

**Comentario crítico.** Este es uno de los estudios más rigurosos hasta la fecha sobre RAG aplicado a seguridad farmacológica. La brecha entre GPT-4o RAG y humanos es pequeña (0,86 vs. 0,89), y el hecho de que GPT-4o generara menos contenido peligroso es un hallazgo tranquilizador, aunque contraintuitivo. La limitación principal no está en los LLMs, sino en la evaluación: si ni siquiera modelos avanzados como Claude Sonnet 4.5 o DeepSeek-R1 pueden replicar el juicio de un farmacéutico, habrá que mantener la supervisión humana. **Para creérselo con cautela**: la brecha se estrecha, pero la supervisión de un farmacéutico clínico sigue siendo necesaria antes de usar estos materiales con pacientes reales.

---

### 3. NeuroVFM: un modelo fundacional de neuroimagen entrenado con 5,24 millones de volúmenes clínicos

**Kondepudi A, Rao A, Zhao C, Lyu Y, Harake S, Banerjee S, Ogle J, Joshi R, Meissner AK, Hou X, Jiang C, Chowdury A, Srinivasan A, Athey B, Gulani V, Pandey A, Lee H, Hollon T.** *Health system learning enables generalist neuroimaging models.* Nature Medicine, 2026.

**Contexto.** Los modelos de frontera (GPT-4o, Gemini, Claude) se entrenan con datos públicos de internet. Pero la neuroimagen está infrarrepresentada en el dominio público porque las resonancias magnéticas (RM) y tomografías computarizadas (TC) craneales contienen rasgos faciales identificables, lo que impide su compartición abierta. Esto limita el rendimiento de los modelos generalistas en tareas de neuroimagen clínica. Este estudio propone un paradigma alternativo: aprender directamente de los datos no curados generados durante la atención clínica rutinaria, al que denominan _health system learning_.

**Metodología.** Los autores entrenaron NeuroVFM, un modelo fundacional visual (_visual foundation model_), con **5,24 millones de volúmenes clínicos de RM y TC** procedentes del sistema sanitario de la Universidad de Michigan. La arquitectura es un _scalable volumetric predictive architecture_ que aprende representaciones auto-supervisadas de anatomía y patología cerebral. El modelo se evaluó en múltiples tareas clínicas: diagnóstico radiológico (clasificación de hallazgos), generación de informes de radiología, y triaje clínico. Se comparó con modelos de frontera generalistas y con modelos específicos de neuroimagen.

**Hallazgos principales.**
- NeuroVFM **superó a los modelos de frontera** (incluyendo GPT-4o y modelos de visión-lenguaje comerciales) en todas las tareas de neuroimagen evaluadas.
- El modelo **comparte un espacio latente neuroanatómico** unificado para RM y TC, lo que permite representaciones consistentes entre modalidades.
- En generación de informes de radiología, emparejado con modelos de lenguaje _open-source_, NeuroVFM superó a los modelos de frontera en **precisión, triaje clínico y preferencia por radiólogos expertos**.
- El modelo **redujo significativamente las alucinaciones** y los errores críticos en los informes generados, ofreciendo un soporte a la decisión clínica más seguro.
- Los experimentos demostraron que la escala importa: el rendimiento mejoró monótonamente con el volumen de datos de entrenamiento.

**Limitaciones.** El modelo se entrenó con datos de un solo sistema sanitario (Michigan), lo que puede limitar la generalizabilidad a otras poblaciones, protocolos de adquisición y equipos. La evaluación se centró en tareas de neuroimagen; no está claro cómo se comportaría en otras modalidades (radiografía de tórax, mamografía, etc.). La arquitectura volumétrica completa requiere recursos computacionales sustanciales para inferencia. No se evaluó el impacto clínico real (cambios en decisiones terapéuticas, tiempo de diagnóstico, desenlaces de pacientes).

**Comentario crítico.** Este es un estudio importante que articula un principio —_health system learning_— con el potencial de cambiar cómo se construyen modelos clínicos. La mayoría de los modelos fundacionales en medicina se entrenan con datos curados, etiquetados y desidentificados, un proceso costoso y lento. NeuroVFM demuestra que el aprendizaje directo desde el flujo clínico no curado es viable y produce modelos superiores a los entrenados con datos públicos. La reducción de alucinaciones y errores críticos merece atención. **Para creérselo**: el diseño es sólido, la escala es impresionante (5,24M volúmenes), y la publicación en _Nature Medicine_ implica revisión por pares rigurosa. La limitación principal es la monocentricidad y la ausencia de validación prospectiva. Si los resultados se replican en otros sistemas sanitarios, estaremos ante un cambio de paradigma en IA clínica.

---

## Takeaway clínico de la semana

Tres lecciones para el clínico esta semana:

1. **Los LLMs no son calculadoras de probabilidad.** Pueden generar _likelihood ratios_ con sesgo bajo, pero la dispersión es demasiado amplia para tomar decisiones individuales. Si usa un LLM para diagnóstico, pida rangos, no valores puntuales.

2. **La RAG funciona, pero necesita supervisión.** El sistema RAG sobre prospectos generó materiales educativos casi indistinguibles de los de farmacéuticos clínicos. Sin embargo, la evaluación automatizada (LLM-as-judge) no es fiable. La supervisión humana sigue siendo el estándar.

3. **El futuro es aprender del sistema sanitario.** NeuroVFM demuestra que los modelos entrenados directamente con datos clínicos no curados superan a los modelos generalistas. Para el endocrinólogo, la pregunta es cuándo veremos un equivalente para imágenes de tiroides, retinografías en diabetes o datos de monitorización continua de glucosa.

---

## Referencias

1. Chong P, He S, Samadian K, et al. Large language models generate diagnostic likelihood ratios with low mean bias but wide dispersion. *Sci Rep*. 2026. PMID: [42436230](https://pubmed.ncbi.nlm.nih.gov/42436230) — DOI: 10.1038/s41598-026-61766-2
2. Sun Y, Wang W, Cheng W, et al. Retrieval-augmented generation for medication safety: A case study using drug package inserts. *Int J Med Inform*. 2026;220:106599. PMID: [42435614](https://pubmed.ncbi.nlm.nih.gov/42435614) — DOI: 10.1016/j.ijmedinf.2026.106599
3. Kondepudi A, Rao A, Zhao C, et al. Health system learning enables generalist neuroimaging models. *Nat Med*. 2026. PMID: [42432292](https://pubmed.ncbi.nlm.nih.gov/42432292) — DOI: 10.1038/s41591-026-04497-1
