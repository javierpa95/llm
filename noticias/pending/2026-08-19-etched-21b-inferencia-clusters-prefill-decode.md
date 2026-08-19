---
title: "Etched vale 21.000 M$ tras una ronda liderada por Jane Street: separa prefill y decode con un chip de bajo voltaje y memoria a escala de cluster"
date: 2026-08-19
source: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/18/etcheds-valuation-doubles-to-21b-in-a-month/"
category: "hardware"
summary: "El fabricante de ASICs de inferencia duplica su valoración a 21.000 M$ en un mes tras validar Jane Street sus 'frontier inference clusters': chip de prefill de bajo voltaje y memoria compartida de cluster para decode."
reading_time: "3 min"
tags: [etched, asic, inferencia, prefill, decode, memoria-cluster, jane-street, hardware]
---

**Etched**, el fabricante de ASICs especializados en inferencia, anunció una ronda de **700 M$ que duplica su valoración hasta los 21.000 M$** en apenas un mes (10.300 M$ en julio), liderada por **Jane Street**, que probó el hardware y ya tiene un rack propio en su datacenter. La compañía vende sistemas completos que llama "frontier inference clusters", su equivalente a las "AI factories" de Nvidia.

Lo técnicamente interesante: Etched ha separado las dos fases de la inferencia en componentes diseñados desde cero. Para la fase de **prefill** (procesar el prompt y su contexto, intensiva en cómputo), un chip de **bajo voltaje** que empaqueta más transistores sin los problemas térmicos típicos; para la fase de **decode** (generación de tokens, intensiva en memoria), una **memoria a escala de cluster** con un interconnect propio que permite a muchos chips compartir un pool de memoria común con baja latencia. El objetivo declarado: más velocidad y menor costo por token.

La ronda deja una lección de hardware: mientras Nvidia escala sus sistemas completos, el mercado de inferencia empieza a premiar arquitecturas que tratan prefill y decode como problemas distintos, con silicio y memoria dedicados a cada uno. Pendiente de verificar en benchmarks independientes si la promesa de precios se sostiene.