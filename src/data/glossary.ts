export interface GlossaryTerm {
  term: string
  short: string
  long: string
  category: 'concepto' | 'hardware' | 'arquitectura' | 'entrenamiento'
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Parámetro',
    short: 'Un número que el modelo aprendió durante el entrenamiento.',
    long: 'Cada parámetro es un peso sináptico que se ajusta durante el entrenamiento para minimizar el error de predicción. En un modelo de 7B hay aproximadamente 7 mil millones de parámetros, organizados en matrices de pesos.',
    category: 'concepto',
  },
  {
    term: 'd_model',
    short: 'Dimensión oculta del modelo (ej: 4096 para 7B).',
    long: 'Es el tamaño del vector que representa cada token en las capas internas del Transformer. Modelos más grandes tienen d_model mayor (8192 para 70B). Determina la capacidad de representación del modelo.',
    category: 'arquitectura',
  },
  {
    term: 'n_layers',
    short: 'Número de bloques Transformer apilados (32-80).',
    long: 'Cada capa contiene atención + feed-forward. Más capas permiten mayor profundidad de razonamiento, pero aumentan el coste computacional linealmente.',
    category: 'arquitectura',
  },
  {
    term: 'n_heads',
    short: 'Número de cabezas de atención paralelas (32 para 7B).',
    long: 'Cada cabeza aprende un tipo diferente de relación entre tokens: sintáctica, semántica, posicional, etc. Más cabezas permiten capturar más tipos de relaciones simultáneamente.',
    category: 'arquitectura',
  },
  {
    term: 'd_head',
    short: 'd_model / n_heads (128 en modelos modernos).',
    long: 'Dimensión de cada cabeza de atención. En modelos estilo LLaMA siempre es 128, independientemente del tamaño total. Esto permite escalar n_heads sin cambiar la semántica de cada cabeza.',
    category: 'arquitectura',
  },
  {
    term: 'Contexto',
    short: 'Ventana máxima de tokens que el modelo puede procesar.',
    long: 'El contexto limita cuánto texto "recuerda" el modelo al generar. Contextos más largos requieren más VRAM para la KV Cache. Modelos modernos soportan 32k-128k tokens, pero el coste en VRAM es significativo.',
    category: 'concepto',
  },
  {
    term: 'KV Cache',
    short: 'Memoria que evita recalcular atención en cada paso.',
    long: 'Durante el bucle autoregresivo, las matrices K y V de tokens ya procesados se guardan en VRAM para no recalcularlas. Ahorra ~98% del cómputo pero consume VRAM proporcional al contexto.',
    category: 'arquitectura',
  },
  {
    term: 'Prefill',
    short: 'Procesamiento del prompt completo (rápido, paralelo).',
    long: 'Fase inicial donde todos los tokens del prompt se procesan simultáneamente. La atención puede ver todos los tokens a la vez. Produce el primer token de salida.',
    category: 'concepto',
  },
  {
    term: 'Decode',
    short: 'Generación de tokens uno a uno (lento, serial).',
    long: 'Fase donde cada nuevo token se genera individualmente, con atención solo al token nuevo contra la KV Cache existente. Es el cuello de botella de la inferencia.',
    category: 'concepto',
  },
  {
    term: 'Ancho de banda (BW)',
    short: 'Velocidad a la que la VRAM alimenta a los núcleos.',
    long: 'Es el factor limitante en inferencia de LLMs. Se mide en GB/s y se calcula como Bus × Frecuencia × Transferencias/ciclo. Determina directamente los tokens/s que puede generar el modelo.',
    category: 'hardware',
  },
  {
    term: 'Bus de memoria',
    short: 'Autopista de bits entre VRAM y GPU.',
    long: 'Conexión física entre los chips de memoria y el núcleo GPU. Cuanto más ancho (128, 256, 384, 512 bits), más datos pueden viajar simultáneamente. HBM usa 5120 bits mediante stacks apilados.',
    category: 'hardware',
  },
  {
    term: 'Tensor Core',
    short: 'Unidad especializada en multiplicación de matrices.',
    long: 'Realiza operaciones matriciales 4×4×4 en un solo ciclo (vs 16 operaciones individuales). Esencial para LLMs porque ~90% del tiempo se va en matmuls de las proyecciones.',
    category: 'hardware',
  },
  {
    term: 'Cuantización',
    short: 'Reducir precisión de los números para que pesen menos.',
    long: 'Técnica que mapea pesos de FP32/FP16 a formatos INT8 o INT4 usando un factor de escala. Reduce el tamaño del modelo 2-8× con pérdida mínima de calidad (1-3%).',
    category: 'entrenamiento',
  },
  {
    term: 'Perplejidad',
    short: 'Métrica de calidad: menor = mejor predicción.',
    long: 'Mide cuán "sorprendido" está el modelo por el texto. Una perplejidad de 10 significa que el modelo tiene tanta incertidumbre como si tuviera que elegir entre 10 opciones equiprobables.',
    category: 'entrenamiento',
  },
  {
    term: 'Alucinación',
    short: 'Decir algo falso con confianza (es estadística, no mentira).',
    long: 'Ocurre porque el modelo maximiza P(token | contexto) no la veracidad. Si una secuencia de palabras es estadísticamente plausible según el entrenamiento, el modelo la generará aunque sea falsa.',
    category: 'entrenamiento',
  },
  {
    term: 'MoE (Mixture of Experts)',
    short: 'Arquitectura con múltiples FFN "expertos" y una puerta de selección.',
    long: 'Cada token activa solo unos pocos expertos (2-8 de 64-256). Permite tener parámetros totales enormes (671B) con coste por token mucho menor (~37B activos) porque el resto de expertos están "dormidos".',
    category: 'arquitectura',
  },
  {
    term: 'GQA (Grouped Query Attention)',
    short: 'Varias queries comparten un par K,V para ahorrar memoria.',
    long: 'En lugar de tener K,V por cada cabeza (MHA), grupos de 4-8 queries comparten el mismo par. Reduce la KV Cache 4-8× sin pérdida significativa de calidad. Usado en LLaMA 2/3 y Mistral.',
    category: 'arquitectura',
  },
  {
    term: 'RoPE',
    short: 'Codificación posicional rotatoria.',
    long: 'Aplica una rotación a los vectores de embedding basada en la posición del token. Permite que el modelo sepa el orden de las palabras sin tokens posicionales. Además permite extrapolación a contextos más largos.',
    category: 'arquitectura',
  },
  {
    term: 'SwiGLU',
    short: 'Activación del Feed-Forward (SiLU × Gate).',
    long: 'Función de activación usada en LLaMA y modelos modernos. La entrada pasa por dos proyecciones (up y gate), se aplica SiLU a gate, y se multiplican. Requiere 3 matrices de peso en lugar de 2.',
    category: 'arquitectura',
  },
  {
    term: 'Speculative Decoding',
    short: 'Usar un modelo pequeño para adivinar tokens antes que el grande.',
    long: 'Técnica de aceleración: un draft model (pequeño y rápido) genera K tokens especulativos, el modelo grande los verifica en un solo forward pass paralelo. Si se aceptan, se ahorran K-1 forward passes.',
    category: 'entrenamiento',
  },
]
