import { ref, computed } from 'vue'
import type { ModelSpec, PrecisionSpec, GpuSpec } from '../data/types'
import { MODELS } from '../data/models'
import { GPUS } from '../data/gpus'
import { PRECISIONS } from '../data/precisions'

export function useVramCalculator() {
  const model = ref<ModelSpec>(MODELS[2])
  const precision = ref<PrecisionSpec>(PRECISIONS[3])
  const contextTokens = ref(4096)
  const kvCachePrecision = ref<'fp16' | 'int8'>('fp16')

  const weightsGb = computed(() =>
    Math.round(model.value.paramsExact * precision.value.bytesPerParam * 100) / 100
  )

  const kvCacheGb = computed(() => {
    const layers = model.value.nLayers || 32
    const heads = model.value.nHeads || 32
    const dHead = 128
    const bytes = kvCachePrecision.value === 'fp16' ? 2 : 1
    const sizePerToken = 2 * layers * heads * dHead * bytes
    const gb = (sizePerToken * contextTokens.value) / (1024 ** 3)
    return Math.round(gb * 100) / 100
  })

  const overheadGb = computed(() => Math.round((weightsGb.value * 0.05) * 100) / 100)

  const totalGb = computed(() =>
    Math.round((weightsGb.value + kvCacheGb.value + overheadGb.value) * 100) / 100
  )

  const compatibleGpus = computed(() =>
    GPUS.map(gpu => ({
      ...gpu,
      status: totalGb.value > gpu.vramGb ? 'no' as const
        : totalGb.value > gpu.vramGb * 0.7 ? 'tight' as const
        : 'ok' as const,
    }))
  )

  const fittingGpus = computed(() =>
    compatibleGpus.value.filter(g => g.status !== 'no')
  )

  const kvcBitsPerToken = computed(() => {
    const layers = model.value.nLayers || 32
    const heads = model.value.nHeads || 32
    const bytes = kvCachePrecision.value === 'fp16' ? 2 : 1
    const sizePerToken = 2 * layers * heads * 128 * bytes
    return sizePerToken
  })

  return {
    model, precision, contextTokens, kvCachePrecision,
    weightsGb, kvCacheGb, overheadGb, totalGb,
    compatibleGpus, fittingGpus, kvcBitsPerToken,
  }
}
