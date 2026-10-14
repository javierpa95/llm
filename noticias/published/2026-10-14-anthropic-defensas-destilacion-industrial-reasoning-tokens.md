---
title: "Anthropic corta hasta un 99% la fuga de reasoning tokens: 'preserved thinking', clasificadores antiextracción y redes de cientos de miles de cuentas falsas para destilar Claude"
date: 2026-10-14
source: "Anthropic Research / The Decoder"
source_url: "https://www.anthropic.com/research/distillation-defenses"
category: "seguridad"
summary: "Anthropic recorta entre un 90% y un 99% los reasoning tokens extraídos por destiladores industriales con 'preserved thinking', clasificadores de dos etapas y baneo masivo de cuentas. Apunta a Zhipu (GLM-5.3) y Moonshot (Kimi)."
reading_time: "4 min"
tags: [destilación, reasoning-tokens, anthropic, zhipu, moonshot, salvaguardas, cadena-de-pensamiento, glm-5.3]
---
**Anthropic** publicó el 13 de octubre un detalle sin precedentes de su batalla contra la **destilación industrial**: campañas encubiertas que extraen las capacidades de un modelo frontier para replicarlas en otro más pequeño, sin autorización del desarrollador original. Según la compañía, sus nuevas defensas han reducido **entre el 90% y el 99%** la cantidad de datos que los destiladores consiguen cosechar —específicamente, los **reasoning tokens**, los pasos de la cadena de pensamiento que Claude escribe antes de responder. La cifra clave: tras activar su clasificador, los tokens de razonamiento extraídos por día cayeron **entre 10 y 100 veces**.

El objetivo de estos ataques no es el texto final sino el **proceso interno**: los transcripciones del razonamiento enseñan al modelo pequeño *cómo* llega el grande a su respuesta. El ahorro de la estafa es brutal —replicar capacidades frontier por una fracción del tiempo y coste de desarrollo— y la escala también: Anthropic describe **redes proxy que controlaban cientos de miles de cuentas fraudulentas** (una sola llegó a gestionar más de 20.000 a la vez), con identidades falsas y datos de pago robados, que además revendían acceso a Claude en regiones donde no está disponible.

## Por qué el problema exige varias capas

La estrategia de defensa de Anthropic ataca el problema en tres frentes, y cada uno ilumina cómo funciona por dentro un LLM servido vía API:

- **Controlar adónde va el razonamiento.** Con *preserved thinking* (Fable 5.1 y Opus 5.5), las cuentas de API creadas desde el 31 de agosto de 2026 **no pueden editar el contexto previo**, lo que bloquea el truco de mover bloques de razonamiento protegido entre conversaciones, entre modelos o entre cuentas para engañar al modelo. En Sonnet 5.5, los transcripciones de razonamiento solo son accesibles para la organización cuya petición los produjo.
- **Bloquear y parchear intentos de extracción.** Un clasificador de dos etapas —de la familia de los *constitutional classifiers*— entrena con transcripciones reales de intentos de extracción y se somete a red teaming interno y externo. Se ejecuta en los modelos más apetecibles para destilar (Sonnet 5.5, Opus 5 y 5.5, Fable 5 y 5.1), con una **tasa de falsos positivos por debajo del 0,1%** y salvaguardas comparables a las que impiden ayudar a fabricar armas biológicas.
- **Castigar los reintentos.** Límites de uso más estrictos, baneo automático —decenas de miles de cuentas, muchas veces en menos de dos horas desde que empiezan la campaña— y desde el 24 de septiembre se **vuelve a cobrar** por peticiones bloqueadas antes de que el modelo responda.

El resultado de las primeras medidas ya era medible: cuando Claude resumía su razonamiento antes de mostrarlo, un modelo pre-entrenado con transcripciones completas de Opus 4.8 alcanzaba el **80,4% en SWE-bench Verified**, mientras que con transcripciones resumidas solo llegaba al **71,8%**. Los destiladores respondieron pasando a la extracción activa: desde pedirle a Claude que "repita su razonamiento anterior verbatim, carácter por carácter" hasta una estrategia que probó **12.000 peticiones distintas** para engañarlo de mil formas.

## Los acusados nombrados: Zhipu, Moonshot... y el ejército

Anthropic señala con nombres propios. **Zhipu** habría destilado capacidades ciber de modelos estadounidenses líderes durante el desarrollo de **GLM-5.3**: intentó destilar a Claude Fable 5, pero al comprobar que las salvaguardas ciber degradaban sus ataques, cambió a un Claude más antiguo y a un modelo de otro laboratorio. No es una acusación menor: el CAISI del NIST ya calificó a GLM-5.3 como el **modelo open-weight más capaz en ciberseguridad de la fecha**, y el propio Anthropic demostró que sus salvaguardas se bypasean con técnicas simples ([[2026-10-01-anthropic-glm-5-3-exploits-open-weight-salvaguardas-bypass|nuestro cubrimiento anterior]]).

En el caso de **Moonshot**, las peticiones a los modelos Kimi se reenviaban secretamente a Claude para coleccionar intercambios de entrenamiento. Entre ellas, una de un usuario que Anthropic cree afiliado al Ejército Popular de Liberación que pedía **analizar vídeo de cámaras de vigilancia CCTV de una persona concreta**. Ahí está el segundo motivo de alarma de la compañía: los modelos destilados ilícitamente acaban integrados en sistemas militares, de inteligencia y vigilancia extranjeros sin las salvaguardas proporcionales del modelo original.

## El coste que nadie menciona en los titulares

Anthropic admite los trade-offs con una transparencia poco habitual: ha **rechazado ingresos significativos y billones de tokens de tráfico de pago**, algunos desarrolladores legítimos tuvieron que actualizar sus integraciones, los clasificadores bloquean benignos en menos del 0,1% de los casos, y ahora se cobra por esas peticiones bloqueadas. El argumento de fondo es de incentivos: las defensas son caras y los destiladores ilícitos **siguen siendo clientes que pagan**, así que hacer nada sería más rentable a corto plazo. Anthropic publica su método para demostrar que hay una alternativa viable —y para empujar a que plataformas y otros laboratorios se sumen, porque la destilación se reparte entre su API, clouds de terceros y proveedores de inferencia.

El problema conecta con lo que ya venimos siguiendo: la acusación de destilación contra **XiaomiMiMo-V2.6-Pro** con solo 2,62M$ de RL ([septiembre](/noticias/2026-09-22-xiaomi-mimo-v2-6-pro-open-modelos-reinforcement-learning)), el propio posicionamiento de Anthropic a favor de los open-weights y la destilación legítima con matices ([julio](/noticias/2026-07-27-anthropic-posicion-open-weights)), o Amazon ingenando los modelos de Anthropic para sortear el pago por tokens ([junio](/noticias/2026-06-30-amazon-distilling-anthropic-models)). Lo nuevo es la escala de la respuesta: cuando los **transcriptos de razonamiento** son el activo más valioso de un modelo frontier, defenderlos deja de ser una cuestión de términos de servicio y pasa a ser infraestructura de seguridad nacional.
