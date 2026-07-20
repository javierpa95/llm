---
title: "RAG anclado a guías, LLMs que reducen alertas falsas y planificación autónoma de radioterapia"
date: "2026-07-19"
summary: "Tres estudios que ilustran distintas facetas de la IA generativa en clínica: un sistema RAG que ancla decisiones oncológicas a guías NCCN, un híbrido LLM-DETERIO que reduce falsos positivos en alertas de deterioro, y un agente multi-LLM que planifica tratamientos de radioterapia de extremo a extremo sin intervención humana."
reading_time: "7 min"
tags: ["rag", "llm", "agentes-clinicos", "oncologia", "salud-digital"]
articles:
  - "Guideline-anchored retrieval-augmented generation outperforms baseline and literature-only configurations in gynecologic oncology decision support: A pre-integration benchmark | Dukes D, Yost C, Wang R, Diagne YF, Garr L, et al. | Gynecol Oncol | 2026 | 42462288 | 10.1016/j.ygyno.2026.07.005 | oncologia"
  - "DETERIO-LLM: enhancing traditional deterioration risk scores with clinical context and advanced reasoning | Ghanbari G, Ahn JC, Kim E, Laverde R, Pope Z, Nemati S | JAMIA Open | 2026 | 42466429 | 10.1093/jamiaopen/ooag123 | salud-digital"
  - "Autonomous radiotherapy planning via agentic orchestration using a multimodal TPS-integrated compound AI platform | Matthew Maniscalco A, Kyun Park Y, Domal SJ, Lin MH, Harabagiu S, et al. | Mach Learn Health | 2026 | 42466075 | 10.1088/3049-477X/ae7978 | general"
---

## RAG con guías, LLMs en urgencias y agentes de radioterapia: tres caras de la IA clínica

La semana cierra con tres publicaciones que merecen atención por abordar la integración de LLMs en flujos clínicos reales desde ángulos distintos. La primera evalúa si anclar un sistema RAG a guías clínicas mejora la calidad de las recomendaciones oncológicas. La segunda demuestra que un LLM bien diseñado puede reducir drásticamente la fatiga por alertas en urgencias hospitalarias. La tercera, quizá la más ambiciosa, presenta un sistema de agentes que planifica tratamientos de radioterapia de extremo a extremo sin intervención humana.

---

### 1. RAG anclado a guías NCCN supera a GPT-5 sin contexto clínico

**Dukes D, Yost C, Wang R, et al.** *Guideline-anchored retrieval-augmented generation outperforms baseline and literature-only configurations in gynecologic oncology decision support: A pre-integration benchmark.* Gynecologic Oncology, 2026.

**Contexto.** Los LLMs pueden generar recomendaciones oncológicas plausibles, pero sin acceso directo a guías de práctica clínica suelen producir salidas que divergen de los estándares de cuidado. Este estudio compara tres configuraciones: GPT-5 sin contexto (baseline), GPT-5 con RAG anclado a NCCN, y OpenEvidence (sistema clínico con acceso a literatura pero sin NCCN en el momento del estudio).

**Metodología.** 50 casos de oncología ginecológica enviados a tres configuraciones de LLM. Tres oncólogos ginecológicos independientes evaluaron las salidas mediante el modified Generative Performance Score (mGPS), que combina concordancia con guías y penalización por alucinaciones (rango -1 a +1). Se usaron tests de Wilcoxon y regresión logística de efectos mixtos.

**Hallazgos principales.**
- GPT-RAG obtuvo el mayor mGPS: **0,83** (DE 0,26), frente a 0,70 de OpenEvidence y 0,65 de GPT-5 baseline.
- La diferencia entre GPT-RAG y baseline fue estadísticamente significativa (P < ,001, r = 0,49).
- La diferencia entre GPT-RAG y OpenEvidence también fue significativa (P = ,008).
- El odds ratio para GPT-RAG fue **3,74** (IC 95%: 1,57–8,90) en el modelo de efectos mixtos.
- El acuerdo entre evaluadores (ICC) fue de 0,49 para mGPS y 0,70 para legibilidad y racionalidad.

**Limitaciones.** Casos desidentificados pero no prospectivos. OpenEvidence ya integró NCCN tras el estudio (abril 2026), lo que dificulta la comparación actual. No se evaluó impacto en resultados de pacientes. Muestra de 50 casos, razonable pero no amplia.

**Comentario crítico.** El diseño comparativo es limpio y la conclusión es clara: el acceso directo a guías clínicas marca una diferencia real en la calidad de las recomendaciones. Para **creérselo con cautela**: el mGPS es un proxy razonable de calidad, pero no sustituye la validación clínica prospectiva. La integración posterior de NCCN en OpenEvidence refuerza externamente la premisa. Es un resultado relevante para quien diseñe sistemas RAG en oncología.

---

### 2. DETERIO-LLM: híbrido de LLM y modelo estructurado para reducir alertas falsas

**Ghanbari G, Ahn JC, Kim E, et al.** *DETERIO-LLM: enhancing traditional deterioration risk scores with clinical context and advanced reasoning.* JAMIA Open, 2026.

**Contexto.** Los sistemas de alerta temprana de deterioro clínico generan una proporción elevada de falsos positivos, lo que provoca fatiga por alertas y missed detections. DETERIO-LLM combina un modelo de deep learning estructurado (DETERIO) con un LLM que analiza notas clínicas narrativas para reclasificar alertas en zona de incertidumbre.

**Metodología.** Estudio retrospectivo con 1.000 pacientes ingresados (prevalencia de deterioro: 4,6%). El sistema selectively activa el LLM solo para alertas con puntuación en rango de incertidumbre (2,5–3,5). Se evaluó sensibilidad, valor predictivo positivo (VPP) y F1, comparando con eCART y otros modelos.

**Hallazgos principales.**
- VPP de **30,6%** y F1 de **37,3%**, superando a eCART.
- Reducción del **46,5%** en falsos positivos dentro del rango de incertidumbre.
- La sensibilidad se mantuvo comparable a los comparadores.
- El análisis selectivo del LLM se ejecuta solo cuando aporta información diferencial, optimizando coste computacional.

**Limitaciones.** Estudio unicéntrico retrospectivo. Cohorte de 1.000 pacientes con baja prevalencia de deterioro (4,6%). No se validó prospectivamente ni se evaluó impacto en desenlaces de pacientes. El conflicto de interés del autor principal (fundador de startup de analítica predictiva) requiere escrutinio.

**Comentario crítico.** La idea de usar un LLM como "reclasificador selectivo" de alertas borderline es elegante y práctica. La reducción del 46,5% en falsos positivos es clínicamente relevante si se replica prospectivamente. Para **coger con pinzas**: es un estudio unicéntrico retrospectivo con conflicto de interés declarado. La métrica de VPP del 30,6% sigue siendo modesta en términos absolutos, aunque supera a los comparadores. La dirección es prometedora; la validación externa es imprescindible.

---

### 3. Agentes de LLM planifican tratamientos de radioterapia de extremo a extremo

**Matthew Maniscalco A, Kyun Park Y, Domal SJ, et al.** *Autonomous radiotherapy planning via agentic orchestration using a multimodal TPS-integrated compound AI platform.* Machine Learning: Health, 2026.

**Contexto.** La planificación de radioterapia es un proceso iterativo de días que requiere optimización multi-objetivo y experiencia clínica. Los intentos previos de automatización con LLMs se limitaban a aspectos aislados del workflow. Este estudio presenta un sistema de agentes compuesto que orquesta la planificación completa, desde la directiva del médico hasta el plan entregable.

**Metodología.** Siete agentes especializados navegan el landscape de optimización mediante razonamiento clínico estructurado, analizando DVH y patrones de dosis, formulando estrategias de compromiso y ejecutando modificaciones en un TPS comercial. Un modelo de predicción de dosis 3D condicionado a la directiva aporta valores DVH iniciales. Un sistema RAG codifica conocimiento institucional. Se evaluaron 60 casos retrospectivos (cerebro, pulmón, próstata), con 10 planes IMRT y 10 VMAT por sitio.

**Hallazgos principales.**
- Los planes de IA alcanzaron **89,8% ± 9,4%** de criterios dosimétricos cumplidos, frente a **85,2% ± 10,8%** de los planes de referencia clínica (P < ,001).
- En IMRT, los planes de IA mejoraron en 25 de 30 casos sin empeorar ninguno (94,1% ± 6,7% vs. 84,3% ± 11,8%, P < ,001).
- En VMAT, no hubo diferencia significativa (85,6% vs. 86,1%, P = ,770).
- Cada iteración completó en **20,2 ± 12,7 minutos**, de los cuales 5,2 ± 1,7 min fueron razonamiento del agente (114.429 ± 11.798 tokens).

**Limitaciones.** Estudio retrospectivo unicéntrico. No se evaluó toxicidad ni resultados de pacientes. Los 60 casos, aunque variados en sitio y técnica, no representan toda la diversidad clínica. La complejidad computacional (114k tokens por iteración) plantea cuestiones de coste y escalabilidad. No se comparó con planificadores humanos expertos en tiempo real.

**Comentario crítico.** Este es un resultado técnico impresionante: un sistema de agentes que planifica radioterapia de extremo a extremo y supera los planes clínicos de referencia en IMRT es un hito. Para **creérselo como prueba de concepto**, pero con pinzas grandes: es retrospectivo, unicéntrico, y la métrica (criterios dosimétricos) no captura toxicidad ni calidad de vida. La viabilidad de despliegue real dependerá de coste, latencia y supervisión regulatoria. Dicho esto, la dirección es clara: los agentes de LLM están alcanzando un nivel de razonamiento clínico estructurado que merece escrutinio serio.

---

## Takeaway clínico de la semana

Tres lecciones para el clínico:

1. **El RAG sin guías es RAG incompleto.** La diferencia entre GPT-5 baseline (mGPS 0,65) y GPT-RAG (mGPS 0,83) no es solo técnica: es la diferencia entre una recomendación plausible y una recomendación concordante con el estándar de cuidado. Si implementa RAG en oncología, ancle a guías clínicas, no solo a literatura.

2. **Los LLMs pueden ser selectivos, no solo generadores.** DETERIO-LLM demuestra que el valor de un LLM en clínica no está en generar texto, sino en reclasificar decisiones borderline usando contexto narrativo. La selective activation es un patrón de diseño que reducirá costes y mejorará la precisión de los sistemas de alerta.

3. **La planificación autónoma es viable, pero la supervisión es innegociable.** El sistema de agentes de radioterapia funciona, pero la latencia (20 min por iteración), el coste (114k tokens) y la ausencia de validación clínica son barreras reales. El futuro no es reemplazar al planificador, sino darle un asistente que elimine las iteraciones más tediosas.

---

## Referencias

1. Dukes D, Yost C, Wang R, et al. Guideline-anchored retrieval-augmented generation outperforms baseline and literature-only configurations in gynecologic oncology decision support: A pre-integration benchmark. *Gynecol Oncol*. 2026;211:224-230. PMID: [42462288](https://pubmed.ncbi.nlm.nih.gov/42462288) — DOI: 10.1016/j.ygyno.2026.07.005
2. Ghanbari G, Ahn JC, Kim E, et al. DETERIO-LLM: enhancing traditional deterioration risk scores with clinical context and advanced reasoning. *JAMIA Open*. 2026;9(4):ooag123. PMID: [42466429](https://pubmed.ncbi.nlm.nih.gov/42466429) — DOI: 10.1093/jamiaopen/ooag123
3. Matthew Maniscalco A, Kyun Park Y, Domal SJ, et al. Autonomous radiotherapy planning via agentic orchestration using a multimodal TPS-integrated compound AI platform. *Mach Learn Health*. 2026;2(2):025005. PMID: [42466075](https://pubmed.ncbi.nlm.nih.gov/42466075) — DOI: 10.1088/3049-477X/ae7978
