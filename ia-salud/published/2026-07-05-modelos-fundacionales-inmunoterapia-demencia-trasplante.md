---
title: "Modelos fundacionales y agentes clínicos: predicción de respuesta a inmunoterapia, cribado de demencia y atención post-trasplante"
date: "2026-07-05"
summary: "COMPASS, un modelo fundacional pan-cáncer, predice respuesta a inmunoterapia con un HR de 4,7 en supervivencia. Un modelo sobre imágenes de retina estratifica riesgo de demencia con AUROC 0,75. Y el primer agente LLM específico para pacientes trasplantados demuestra utilidad real en horario no laborable."
reading_time: "6 min"
tags: ["modelos-fundacionales", "inmunoterapia", "demencia", "agentes-clinicos", "trasplante"]
articles:
  - "Generalizable AI predicts immunotherapy outcomes across cancers and treatments | Shen W, Moon I, Nguyen TH, et al. | Nat Med | 2026 | 42399673 | 10.1038/s41591-026-04502-7 | oncologia"
  - "Explainable foundation model for dementia screening and risk stratification using retinal fundus images | Han C, Kim J, Lee H, et al. | NPJ Digit Med | 2026 | 42401717 | 10.1038/s41746-026-02968-w | salud-digital"
  - "Real-World Analysis of Organ Transplantation-Specific Agent Based on Large Language Model in Post-Transplant Self-Management During Off-Hours | Zeng C, Zhou X, Xu HY, et al. | Curr Med Sci | 2026 | 42384291 | 10.1007/s11596-026-00219-3 | salud-digital"
---

## Una semana de validaciones clínicas para la IA generativa

Mientras la conversación pública sobre IA en salud oscila entre el hype y el escepticismo, esta semana tres publicaciones aportan datos clínicos reales que merecen atención. La primera, en *Nature Medicine*, presenta un modelo fundacional pan-cáncer para predecir respuesta a inmunoterapia con una solidez metodológica poco habitual. La segunda explora si la inteligencia artificial sobre imágenes de fondo de ojo —una prueba ya estandarizada y de bajo coste— puede estratificar riesgo de demencia. La tercera describe el primer agente basado en LLM diseñado específicamente para pacientes trasplantados, con datos de uso real durante 20.176 interacciones.

---

### 1. COMPASS: un modelo fundacional que predice respuesta a inmunoterapia a través de cánceres y tratamientos

**Shen W, Moon I, Nguyen TH, et al.** *Generalizable AI predicts immunotherapy outcomes across cancers and treatments.* Nature Medicine, 2026.

**Contexto.** Los inhibidores de checkpoint inmunitario (ICIs) son un estándar en múltiples tumores, pero la mayoría de los pacientes no responden. Los biomarcadores existentes —PD-L1, carga mutacional, MSI— generalizan mal entre tipos tumorales y terapias. COMPASS aborda este problema con un modelo fundacional (*foundation model*) entrenado en transcriptomas completos de tumor.

**Metodología.** COMPASS es un *concept bottleneck transformer* que codifica la expresión génica a través de 44 conceptos inmunológicos biológicamente fundamentados: estados de células inmunes, interacciones del microambiente tumoral y vías de señalización. Se entrenó con 10.184 tumores de 33 tipos de cáncer. Se evaluó en 16 cohortes clínicas independientes que abarcan 7 tipos tumorales y 6 ICIs diferentes.

**Hallazgos principales.**
- Superó a 22 métodos existentes en rendimiento medio, con una mejora del **8,5% en precisión** y del **15,7% en el área bajo la curva precision-recall**.
- Generalizó a tipos tumorales y tratamientos no representados durante el ajuste fino (*fine-tuning*).
- En análisis de supervivencia, los pacientes clasificados como respondedores por COMPASS tuvieron una supervivencia global significativamente mayor: **HR = 4,7** (p < 0,0001).
- Los mapas de respuesta personalizados identificaron programas asociados con resistencia, como la señalización de TGFβ y exclusión endotelial, incluso en pacientes con microambiente inflamatorio que no respondían.

**Limitaciones.** El modelo requiere transcriptoma completo (RNA-seq), que no está disponible en la práctica clínica rutinaria. La validación es retrospectiva en su mayoría. El rendimiento varía entre cohortes, con algunas mostrando AUC modestas. No se evaluó prospectivamente en un ensayo clínico.

**Comentario crítico.** COMPASS es metodológicamente sólido: comparación exhaustiva contra 22 métodos, tamaño muestral grande para los estándares del campo, y análisis de supervivencia convincente. La arquitectura de *concept bottleneck* (conceptos biológicos intermedios) es un acierto porque permite interpretabilidad. Pero el requisito de RNA-seq completo limita la traslación inmediata a la clínica. **Para creérselo con cautela**: los resultados son robustos, pero el salto a la práctica requerirá simplificación del input o validación prospectiva.

---

### 2. Un modelo fundacional sobre imágenes de retina para cribado y estratificación de riesgo de demencia

**Han C, Kim J, Lee H, et al.** *Explainable foundation model for dementia screening and risk stratification using retinal fundus images.* NPJ Digital Medicine, 2026.

**Contexto.** La demencia es un desafío creciente de salud global, y la identificación temprana es clave para la intervención. La retina comparte origen embrionario y características vasculares con el tejido cerebral, lo que la convierte en una ventana potencial al sistema nervioso central. Este estudio evalúa si modelos fundacionales de visión profunda pueden detectar demencia y predecir su incidencia futura a partir de fotografías rutinarias de fondo de ojo.

**Metodología.** Datos de revisión de salud de más de 36.000 individuos coreanos. Se definió demencia mediante diagnóstico clínico con medicación relevante. Se evaluaron cinco modelos fundacionales de visión (*vision foundation models*) con múltiples estrategias de ajuste fino. El mejor modelo se probó en detección transversal y predicción longitudinal de incidencia.

**Hallazgos principales.**
- El mejor modelo (RETFound-MAE con ajuste fino parcial) alcanzó un **AUROC de 0,750** para detección de demencia y un **índice C de 0,812** para predicción de incidencia futura.
- Las predicciones del modelo se mantuvieron como factores de riesgo independientes tras ajuste multivariable (**OR ajustado = 1,155**; **HR ajustado = 1,045**).
- Los mapas de saliencia cuantitativa señalaron regiones biológicamente plausibles: principalmente el disco óptico y áreas peripapilares adyacentes.
- El gradiente de riesgo era dosis-dependiente: a mayor puntuación de riesgo del modelo, mayor probabilidad de desarrollar demencia.

**Limitaciones.** Muestra monocéntrica y étnicamente homogénea (coreanos). La definición de demencia se basó en diagnóstico clínico más prescripción, no en evaluación neuropsicológica estandarizada. El AUROC de 0,750 es moderado para un biomarcador de cribado. No se comparó con otros biomarcadores establecidos (amiloide PET, RM volumétrica).

**Comentario crítico.** El valor de este estudio no está tanto en el rendimiento diagnóstico actual (modesto) como en la direccionalidad: usar una prueba no invasiva, barata y ya estandarizada (fotografía de fondo de ojo) para estratificación de riesgo de demencia es una idea con potencial de escalabilidad enorme. Pero el AUROC de 0,750 no es suficiente para uso clínico independiente. **Para coger con pinzas como herramienta diagnóstica**, pero **para seguir con interés como estrategia de cribado poblacional** si se combina con otros factores de riesgo.

---

### 3. Doctor Xiao Yi: el primer agente LLM específico para pacientes trasplantados en horario no laborable

**Zeng C, Zhou X, Xu HY, et al.** *Real-World Analysis of Organ Transplantation-Specific Agent Based on Large Language Model in Post-Transplant Self-Management During Off-Hours: A Mixed-Methods Study.* Current Medical Science, 2026.

**Contexto.** Los pacientes trasplantados tienen necesidades médicas complejas que no desaparecen fuera del horario laboral. Sin embargo, el soporte médico durante la noche y fines de semana es limitado. Los LLM generales no son adecuados para este contexto por el riesgo de alucinaciones en decisiones críticas. Este estudio construyó y evaluó un agente especializado (Doctor Xiao Yi) basado en una arquitectura de *dual-source knowledge base + GraphRAG + multi-agent framework*.

**Metodología.** Estudio de métodos mixtos con 20.176 registros reales de interacciones (junio-diciembre 2025) y una encuesta transversal a 152 pacientes trasplantados. Se comparó el agente especializado con un agente hospitalario general (Nan Xiao Yi). Se analizaron patrones de uso, tipos de preguntas y factores que influyen en el comportamiento del paciente.

**Hallazgos principales.**
- El agente especializado se mantuvo activo durante horario no laborable, con un pico de uso a las **4:00 AM** (p < 0,001 frente al agente general).
- Mientras el agente general gestionaba tareas administrativas (citas), el especializado proporcionaba soporte clínico real: dieta, síntomas, medicación.
- El **60,5%** del uso en horario no laborable se debió a que los pacientes no querían molestar al médico.
- **63,8%** de los pacientes trasplantados se mostraron satisfechos con las respuestas del agente especializado.
- **48%** informó que tomaría decisiones sobre acudir al hospital basándose en las sugerencias del agente.
- La arquitectura combinaba una base de conocimiento dual (general + específica de trasplante), GraphRAG para recuperación estructurada y un marco multi-agente para orquestación de tareas.

**Limitaciones.** Estudio unicéntrico en un hospital chino. La satisfacción y la intención de uso no equivalen a seguridad clínica: el 48% que dijo que actuaría según las sugerencias del agente es un dato que invita a la reflexión, no necesariamente tranquilizador. No se evaluaron desenlaces clínicos adversos. La arquitectura no se compara con alternativas (RAG simple, fine-tuning, etc.).

**Comentario crítico.** Este es uno de los primeros estudios que reporta datos de uso real de un agente LLM en pacientes — no solo en médicos o en entornos simulados. El hallazgo del pico de uso a las 4 AM es elocuente: hay una necesidad no cubierta. Sin embargo, la ausencia de evaluación de seguridad clínica y de comparación con estándares de cuidado es una limitación importante. **Para coger con pinzas como evidencia de eficacia**, pero **para tomar en serio como señal de demanda y viabilidad técnica**. La arquitectura GraphRAG + multi-agente es técnicamente interesante.

---

## Takeaway clínico de la semana

Tres direcciones emergentes convergen esta semana: los modelos fundacionales empiezan a ofrecer predicciones con valor clínico accionable (COMPASS con HR 4,7 para supervivencia); la IA sobre imágenes de rutina promete cribado poblacional de enfermedades neurodegenerativas; y los agentes LLM específicos por patología están cubriendo agujeros reales en la atención continuada. El hilo común: la validación clínica —todavía incipiente, pero cada vez más rigurosa— está reemplazando a las demostraciones de concepto. Para el clínico, la recomendación práctica es empezar a familiarizarse con la interpretación de estudios de IA con el mismo escepticismo metodológico que aplicaría a cualquier otro artículo de medicina basada en evidencia.

---

## Referencias

1. Shen W, Moon I, Nguyen TH, et al. Generalizable AI predicts immunotherapy outcomes across cancers and treatments. *Nat Med*. 2026. PMID: [42399673](https://pubmed.ncbi.nlm.nih.gov/42399673) — DOI: 10.1038/s41591-026-04502-7
2. Han C, Kim J, Lee H, et al. Explainable foundation model for dementia screening and risk stratification using retinal fundus images. *NPJ Digit Med*. 2026. PMID: [42401717](https://pubmed.ncbi.nlm.nih.gov/42401717) — DOI: 10.1038/s41746-026-02968-w
3. Zeng C, Zhou X, Xu HY, et al. Real-World Analysis of Organ Transplantation-Specific Agent Based on Large Language Model in Post-Transplant Self-Management During Off-Hours. *Curr Med Sci*. 2026. PMID: [42384291](https://pubmed.ncbi.nlm.nih.gov/42384291) — DOI: 10.1007/s11596-026-00219-3
