export interface GpuSpec {
  id: string
  name: string
  vramGb: number
  bandwidthGbs: number
  busBits: number
  memoryType: string
  tflops: number
  price: number
  category: 'consumer' | 'pro' | 'datacenter' | 'apple' | 'cpu'
}

export const GPUS: GpuSpec[] = [
  { id: 'rtx4060',     name: 'RTX 4060',      vramGb: 8,   busBits: 128,
    bandwidthGbs: 272,  memoryType: 'GDDR6',   tflops: 15,  price: 300,
    category: 'consumer' },
  { id: 'rtx4070',     name: 'RTX 4070',      vramGb: 12,  busBits: 192,
    bandwidthGbs: 504,  memoryType: 'GDDR6X',  tflops: 29,  price: 550,
    category: 'consumer' },
  { id: 'rtx4080',     name: 'RTX 4080',      vramGb: 16,  busBits: 256,
    bandwidthGbs: 716,  memoryType: 'GDDR6X',  tflops: 49,  price: 1200,
    category: 'consumer' },
  { id: 'rtx4090',     name: 'RTX 4090',      vramGb: 24,  busBits: 384,
    bandwidthGbs: 1008, memoryType: 'GDDR6X',  tflops: 82,  price: 1600,
    category: 'consumer' },
  { id: 'rtx3090',     name: 'RTX 3090',      vramGb: 24,  busBits: 384,
    bandwidthGbs: 936,  memoryType: 'GDDR6X',  tflops: 36,  price: 1000,
    category: 'consumer' },
  { id: 'a100',        name: 'A100 80GB',     vramGb: 80,  busBits: 5120,
    bandwidthGbs: 2039, memoryType: 'HBM2e',   tflops: 312, price: 15000,
    category: 'datacenter' },
  { id: 'h100',        name: 'H100 80GB',     vramGb: 80,  busBits: 5120,
    bandwidthGbs: 3352, memoryType: 'HBM3',    tflops: 990, price: 30000,
    category: 'datacenter' },
  { id: 'm2ultra',     name: 'M2 Ultra',      vramGb: 192, busBits: 1024,
    bandwidthGbs: 800,  memoryType: 'Unified', tflops: 27,  price: 5000,
    category: 'apple' },
  { id: 'ddr5',        name: 'DDR5-4800',     vramGb: 64,  busBits: 64,
    bandwidthGbs: 38.4, memoryType: 'DDR5',    tflops: 0.5, price: 100,
    category: 'cpu' },
]
