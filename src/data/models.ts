export interface ModelSpec {
  id: string
  name: string
  paramsBillions: number
  paramsExact: number
  dModel?: number
  nLayers?: number
  nHeads?: number
  dFf?: number
  arch: 'dense' | 'moe'
  activeParamsBillions?: number
  models: string[]
}

export const MODELS: ModelSpec[] = [
  { id: '1b',   name: '1.3B',   paramsBillions: 1.3,  paramsExact: 1.3,
    dModel: 2048, nLayers: 22, nHeads: 16, arch: 'dense',
    models: ['TinyLLaMA', 'Phi-3'] },
  { id: '3b',   name: '3B',     paramsBillions: 3,    paramsExact: 3,
    dModel: 3072, nLayers: 28, nHeads: 24, arch: 'dense',
    models: ['LLaMA 3.2 3B', 'Gemma 2'] },
  { id: '7b',   name: '7B',     paramsBillions: 7,    paramsExact: 6.7,
    dModel: 4096, nLayers: 32, nHeads: 32, dFf: 11008, arch: 'dense',
    models: ['LLaMA 3.1 8B', 'Mistral 7B', 'Qwen 2.5 7B'] },
  { id: '13b',  name: '13B',    paramsBillions: 13,   paramsExact: 12.9,
    dModel: 5120, nLayers: 40, nHeads: 40, arch: 'dense',
    models: ['LLaMA 2 13B'] },
  { id: '34b',  name: '34B',    paramsBillions: 34,   paramsExact: 34,
    dModel: 6144, nLayers: 56, nHeads: 48, arch: 'dense',
    models: ['Yi-34B', 'CodeLLaMA 34B'] },
  { id: '70b',  name: '70B',    paramsBillions: 70,   paramsExact: 70.6,
    dModel: 8192, nLayers: 80, nHeads: 64, dFf: 22016, arch: 'dense',
    models: ['LLaMA 3 70B', 'Qwen 72B'] },
  { id: '405b', name: '405B',   paramsBillions: 405,  paramsExact: 405,
    arch: 'dense', models: ['LLaMA 3.1 405B'] },
  { id: '671b', name: '671B MoE', paramsBillions: 671, paramsExact: 671,
    activeParamsBillions: 37, arch: 'moe',
    models: ['DeepSeek V3', 'DeepSeek R1'] },
]
