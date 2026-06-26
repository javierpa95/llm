<template>
  <div class="card">
    <h3 class="text-lg font-semibold mb-4">Calculadora de Velocidad</h3>

    <div class="space-y-4">
      <!-- Model -->
      <div>
        <label class="block text-sm font-medium text-neutral-700 mb-1">Modelo</label>
        <select v-model="speed.model.value" class="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm">
          <option v-for="m in models" :key="m.id" :value="m">{{ m.name }}</option>
        </select>
      </div>

      <!-- GPU -->
      <div>
        <label class="block text-sm font-medium text-neutral-700 mb-1">GPU</label>
        <select v-model="speed.gpu.value" class="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm">
          <option v-for="g in gpus" :key="g.id" :value="g">{{ g.name }} ({{ g.bandwidthGbs }} GB/s)</option>
        </select>
      </div>

      <!-- Precision -->
      <div>
        <label class="block text-sm font-medium text-neutral-700 mb-1">Precisión</label>
        <div class="grid grid-cols-5 gap-1">
          <button
            v-for="p in precisions"
            :key="p.id"
            @click="speed.precision.value = p"
            :class="[
              'px-2 py-1.5 text-xs font-medium rounded-lg border transition-colors',
              speed.precision.value.id === p.id
                ? 'bg-primary-500 text-white border-primary-500'
                : 'bg-white text-neutral-600 border-neutral-300',
            ]"
          >
            {{ p.name }}
          </button>
        </div>
      </div>

      <!-- Results -->
      <div v-if="speed.fitsOnGpu.value" class="border-t border-neutral-200 pt-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="text-center p-4 bg-blue-50 rounded-xl">
            <div class="text-xs text-neutral-500 mb-1">Teórica</div>
            <div class="text-3xl font-bold text-blue-600">{{ speed.theoreticalTps.value }}</div>
            <div class="text-xs text-neutral-500">tokens/s</div>
          </div>
          <div class="text-center p-4 bg-primary-50 rounded-xl">
            <div class="text-xs text-neutral-500 mb-1">Real (~70%)</div>
            <div class="text-3xl font-bold text-primary-600">{{ speed.realTps.value }}</div>
            <div class="text-xs text-neutral-500">tokens/s</div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-3">
          <div class="text-center p-3 bg-neutral-50 rounded-lg">
            <div class="text-xs text-neutral-500">100 tokens</div>
            <div class="text-lg font-semibold text-neutral-800">{{ speed.time100.value < 1 ? (speed.time100.value * 1000).toFixed(0) + ' ms' : speed.time100.value.toFixed(1) + ' s' }}</div>
          </div>
          <div class="text-center p-3 bg-neutral-50 rounded-lg">
            <div class="text-xs text-neutral-500">500 tokens</div>
            <div class="text-lg font-semibold text-neutral-800">{{ speed.time500.value.toFixed(1) }} s</div>
          </div>
        </div>

        <div class="mt-4 p-4 bg-neutral-50 rounded-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium text-neutral-700">¿Cuello de botella?</span>
          </div>
          <div class="space-y-2">
            <div>
              <div class="flex justify-between text-xs text-neutral-500 mb-1">
                <span>Mover datos (VRAM → Núcleos)</span>
                <span>{{ speed.memoryPercent.value }}%</span>
              </div>
              <div class="w-full bg-neutral-200 rounded-full h-2">
                <div class="bg-blue-500 h-2 rounded-full" :style="{ width: speed.memoryPercent.value + '%' }"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs text-neutral-500 mb-1">
                <span>Calcular (matemáticas)</span>
                <span>{{ speed.computePercent.value }}%</span>
              </div>
              <div class="w-full bg-neutral-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full" :style="{ width: speed.computePercent.value + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="border-t border-neutral-200 pt-4">
        <div class="p-4 bg-red-50 text-red-700 rounded-xl text-center text-sm">
          ❌ {{ speed.model.value.name }} en {{ speed.precision.value.name }}
          ({{ speed.weightGb.value.toFixed(1) }} GB) no cabe en
          {{ speed.gpu.value.name }} ({{ speed.gpu.value.vramGb }} GB).
          <br />Selecciona otro modelo, otra precisión o una GPU con más VRAM.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSpeedCalculator } from '../../composables/useSpeedCalculator'
import { MODELS } from '../../data/models'
import { GPUS } from '../../data/gpus'
import { PRECISIONS } from '../../data/precisions'

const speed = useSpeedCalculator()
const models = MODELS
const gpus = GPUS
const precisions = PRECISIONS
</script>
