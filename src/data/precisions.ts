export interface PrecisionSpec {
  id: string
  name: string
  bytesPerParam: number
  qualityVsFp16: number
  label: string
}

export const PRECISIONS: PrecisionSpec[] = [
  { id: 'fp32',  name: 'FP32',  bytesPerParam: 4,   qualityVsFp16: 100, label: '4B/param' },
  { id: 'fp16',  name: 'FP16',  bytesPerParam: 2,   qualityVsFp16: 100, label: '2B/param' },
  { id: 'int8',  name: 'INT8',  bytesPerParam: 1,   qualityVsFp16: 99,  label: '1B/param' },
  { id: 'int4',  name: 'INT4',  bytesPerParam: 0.5, qualityVsFp16: 95,  label: '0.5B/param' },
  { id: 'q4km',  name: 'Q4_K_M', bytesPerParam: 0.55, qualityVsFp16: 96, label: '~0.55B/param' },
]
