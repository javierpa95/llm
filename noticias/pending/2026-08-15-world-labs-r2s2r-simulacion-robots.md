---
title: "World Labs presenta R2S2R: un motor que convierte una tarea real de robot en miles de variaciones simuladas para entrenar"
date: 2026-08-15
source: "The Decoder"
source_url: "https://the-decoder.com/world-labs-turns-one-real-world-robot-task-into-thousands-of-simulated-variations-for-training/"
category: "investigación"
summary: "El motor Real-to-Sim-to-Real de World Labs reconstruye tareas robóticas reales como mundos virtuales físicamente fieles y genera miles de variaciones para entrenar modelos de control que luego corren horas en hardware real."
reading_time: "3 min"
tags: [world-labs, robotica, simulacion, world-models, entrenamiento]
---

World Labs, la startup fundada por la pionera de IA Fei-Fei Li, ha presentado un **motor de simulación que entrena sistemas de control robótico íntegramente en entornos virtuales** — y los modelos resultantes corren después durante horas en hardware real. El sistema, llamado **Real-to-Sim-to-Real (R2S2R)**, convierte tareas robóticas reales en simulaciones para entrenar y evaluar modelos de control, eliminando la costosa experimentación con hardware físico. La tecnología procede de **SceniX**, startup adquirida por World Labs en julio.

El argumento de World Labs es que el cuello de botella en el despliegue de robots no es la arquitectura del modelo, sino el **volumen de experiencia** que un robot necesita para operar de forma fiable: los datos del mundo real son caros y difíciles de controlar, y los vídeos online no cubren sistemáticamente la gama completa de objetos, condiciones físicas y estados de fallo. El motor captura robots, sensores, entorno y demostraciones de tareas, y los reconstruye como un mundo virtual interactivo que no solo *parece* el original, sino que se comporta físicamente igual, combinando **world models generativos** con simulación robótica orientada a tareas.

De una única tarea real, el sistema genera **miles de variaciones** cambiando iluminación, posición y número de objetos, entorno, propiedades físicas como la fricción y el ángulo de cámara. Para verificar la precisión, ejecuta la misma secuencia de acciones en simulación y en realidad en paralelo y compara observaciones y resultados. En las pruebas, los modelos entrenados en simulación se transfirieron a robots reales —incluida la plataforma open-source **ALOHA** de Stanford— y **corrieron una hora en cuatro plataformas robóticas distintas sin intervención humana**, desde enrollar un cable de alimentación alrededor de una nevera hasta separar objetos finos de un montón denso.

