import { ref, computed } from 'vue'
import type { ModelSpec, PrecisionSpec, GpuSpec } from '../data/types'
import { MODELS } from '../data/models'
import { GPUS } from '../data/gpus'
import { PRECISIONS } from '../data/precisions'

export function useSpeedCalculator() {
  const gpu = ref<GpuSpec>(GPUS[3])
  const model = ref<ModelSpec>(MODELS[2])
  const precision = ref<PrecisionSpec>(PRECISIONS[3])

  const weightGb = computed(() =>
    model.value.paramsExact * precision.value.bytesPerParam
  )

  const fitsOnGpu = computed(() => {
    // Rough check: weights + 1GB overhead + 0.5GB KV cache
    return weightGb.value + 1.5 <= gpu.value.vramGb
  })

  const theoreticalTps = computed(() => {
    if (!fitsOnGpu.value) return 0
    return Math.round(gpu.value.bandwidthGbs / weightGb.value * 10) / 10
  })

  const realTps = computed(() =>
    Math.round(theoreticalTps.value * 0.7 * 10) / 10
  )

  const time100 = computed(() => {
    if (realTps.value === 0) return Infinity
    return Math.round(100 / realTps.value * 100) / 100
  })

  const time500 = computed(() => {
    if (realTps.value === 0) return Infinity
    return Math.round(500 / realTps.value * 100) / 100
  })

  const memoryPercent = computed(() => 98)
  const computePercent = computed(() => 2)

  return {
    gpu, model, precision,
    weightGb, fitsOnGpu,
    theoreticalTps, realTps,
    time100, time500,
    memoryPercent, computePercent,
  }
}
