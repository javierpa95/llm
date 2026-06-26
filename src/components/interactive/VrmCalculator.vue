<template>
  <div class="card">
    <h3 class="text-lg font-semibold mb-4">Calculadora de VRAM</h3>

    <div class="space-y-4">
      <!-- Model selector -->
      <div>
        <label class="block text-sm font-medium text-neutral-700 mb-1">Modelo</label>
        <select v-model="vram.model.value" class="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option v-for="m in models" :key="m.id" :value="m">
            {{ m.name }} ({{ m.models.join(', ') }})
          </option>
        </select>
      </div>

      <!-- Precision selector -->
      <div>
        <label class="block text-sm font-medium text-neutral-700 mb-1">Precisión</label>
        <div class="grid grid-cols-5 gap-1">
          <button
            v-for="p in precisions"
            :key="p.id"
            @click="vram.precision.value = p"
            :class="[
              'px-2 py-1.5 text-xs font-medium rounded-lg border transition-colors',
              vram.precision.value.id === p.id
                ? 'bg-primary-500 text-white border-primary-500'
                : 'bg-white text-neutral-600 border-neutral-300 hover:border-primary-300',
            ]"
          >
            {{ p.name }}
          </button>
        </div>
      </div>

      <!-- Context tokens slider -->
      <div>
        <label class="block text-sm font-medium text-neutral-700 mb-1">
          Contexto: {{ vram.contextTokens.value.toLocaleString() }} tokens
        </label>
        <input
          type="range"
          min="1024"
          max="131072"
          step="1024"
          v-model.number="vram.contextTokens.value"
          class="w-full accent-primary-500"
        />
        <div class="flex justify-between text-xs text-neutral-400 mt-1">
          <span>1K</span>
          <span>128K</span>
        </div>
      </div>

      <!-- KV Cache precision -->
      <div class="flex items-center justify-between">
        <label class="text-sm font-medium text-neutral-700">KV Cache en FP16</label>
        <button
          @click="vram.kvCachePrecision.value = vram.kvCachePrecision.value === 'fp16' ? 'int8' : 'fp16'"
          :class="[
            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
            vram.kvCachePrecision.value === 'int8' ? 'bg-primary-500' : 'bg-neutral-300',
          ]"
        >
          <span
            :class="[
              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
              vram.kvCachePrecision.value === 'int8' ? 'translate-x-6' : 'translate-x-1',
            ]"
          />
        </button>
        <span class="text-xs text-neutral-500">{{ vram.kvCachePrecision.value === 'int8' ? 'INT8 (ahorro 2×)' : 'FP16' }}</span>
      </div>

      <!-- Results -->
      <div class="border-t border-neutral-200 pt-4 mt-4">
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center">
            <div class="text-xs text-neutral-500 mb-1">Pesos</div>
            <div class="text-2xl font-bold text-primary-600">{{ vram.weightsGb.value }} <span class="text-sm font-normal text-neutral-400">GB</span></div>
          </div>
          <div class="text-center">
            <div class="text-xs text-neutral-500 mb-1">KV Cache</div>
            <div class="text-2xl font-bold text-blue-600">{{ vram.kvCacheGb.value }} <span class="text-sm font-normal text-neutral-400">GB</span></div>
          </div>
          <div class="text-center">
            <div class="text-xs text-neutral-500 mb-1">Overhead</div>
            <div class="text-2xl font-bold text-neutral-500">{{ vram.overheadGb.value }} <span class="text-sm font-normal text-neutral-400">GB</span></div>
          </div>
        </div>

        <div class="mt-4 p-4 rounded-xl text-center" :class="totalClass">
          <div class="text-sm font-medium">VRAM Total Necesaria</div>
          <div class="text-3xl font-bold mt-1">{{ vram.totalGb.value }} GB</div>
        </div>
      </div>

      <!-- GPU compatibility -->
      <div class="border-t border-neutral-200 pt-4">
        <h4 class="text-sm font-medium text-neutral-700 mb-2">¿En qué GPU cabe?</h4>
        <div class="space-y-1">
          <div
            v-for="gpu in vram.compatibleGpus.value"
            :key="gpu.id"
            class="flex items-center justify-between px-3 py-2 rounded-lg text-sm"
            :class="statusClass(gpu.status)"
          >
            <div class="flex items-center gap-2">
              <span>{{ statusIcon(gpu.status) }}</span>
              <span>{{ gpu.name }}</span>
            </div>
            <div class="text-xs opacity-75">{{ gpu.vramGb }} GB</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVramCalculator } from '../../composables/useVramCalculator'
import { MODELS } from '../../data/models'
import { PRECISIONS } from '../../data/precisions'

const vram = useVramCalculator()
const models = MODELS
const precisions = PRECISIONS

const totalClass = computed(() => {
  const t = vram.totalGb.value
  const maxSingleGpu = 24 // RTX 4090
  if (t <= maxSingleGpu) return 'bg-green-50 text-green-700 border border-green-200'
  if (t <= 80) return 'bg-yellow-50 text-yellow-700 border border-yellow-200'
  return 'bg-red-50 text-red-700 border border-red-200'
})

function statusClass(status: 'ok' | 'tight' | 'no') {
  if (status === 'ok') return 'bg-green-50 text-green-700'
  if (status === 'tight') return 'bg-yellow-50 text-yellow-700'
  return 'bg-red-50 text-red-500 line-through'
}

function statusIcon(status: 'ok' | 'tight' | 'no') {
  if (status === 'ok') return '🟢'
  if (status === 'tight') return '🟡'
  return '🔴'
}
</script>
