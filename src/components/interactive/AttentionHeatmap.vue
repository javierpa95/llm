<template>
  <div class="card">
    <h3 class="text-lg font-semibold mb-4">Mapa de Atención 3D</h3>
    <p class="text-sm text-neutral-500 mb-3">
      Cada celda muestra cómo un token (fila) presta atención a otro (columna).
    </p>

    <div class="mb-3">
      <input
        v-model="text"
        placeholder="Escribe una frase..."
        class="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm"
      />
    </div>

    <div v-if="tokens.length <= 12" class="overflow-x-auto">
      <table class="text-xs">
        <thead>
          <tr>
            <th class="p-1"></th>
            <th v-for="(_, j) in tokens" :key="'h' + j" class="p-1 text-neutral-500 font-medium">{{ tokens[j] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(_, i) in tokens" :key="'r' + i">
            <td class="p-1 text-neutral-500 font-medium text-right">{{ tokens[i] }}</td>
            <td
              v-for="(_, j) in tokens"
              :key="'c' + i + '-' + j"
              class="p-0.5"
            >
              <div
                :style="{ backgroundColor: cellColor(matrix[i][j]) }"
                class="w-8 h-8 rounded cursor-help transition-colors hover:ring-2 hover:ring-primary-400"
                :title="tokens[i] + ' → ' + tokens[j] + ': ' + (matrix[i][j] * 100).toFixed(1) + '%'"
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="p-4 bg-yellow-50 text-yellow-700 rounded-lg text-sm">
      Demasiados tokens para mostrar el heatmap (máximo 12). Acorta la frase.
    </div>

    <div class="mt-3 flex items-center gap-3 text-xs text-neutral-500">
      <div class="flex items-center gap-1">
        <div class="w-3 h-3 rounded" style="background-color: #eff6ff"></div>
        <span>Baja</span>
      </div>
      <div class="flex items-center gap-1">
        <div class="w-3 h-3 rounded" style="background-color: #3b82f6"></div>
        <span>Media</span>
      </div>
      <div class="flex items-center gap-1">
        <div class="w-3 h-3 rounded" style="background-color: #dc2626"></div>
        <span>Alta</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const text = ref('El gato está sobre la mesa')

const tokens = computed(() => text.value.split(/\s+/).filter(Boolean))

const matrix = computed(() => {
  const n = tokens.value.length
  if (n === 0) return []
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => {
      if (j > i) return 0 // causal mask (can't see future)
      // Diagonal (self-attention) is strongest
      const selfAttn = i === j ? 0.4 + Math.random() * 0.2 : 0
      // Some tokens attend strongly to others
      const semanticScore = j <= i ? Math.random() * 0.3 : 0
      return Math.min(1, selfAttn + semanticScore)
    }).map(v => v / Math.max(0.01, Array.from({ length: n }, (_, k) =>
      k <= i ? 1 : 0
    ).reduce((a, b) => a + b, 0)))
  )
})

function cellColor(value: number): string {
  if (value > 0.6) return `rgba(220, 38, 38, ${Math.min(1, value)})`
  if (value > 0.3) return `rgba(59, 130, 246, ${value})`
  return `rgba(239, 246, 255, ${value * 2})`
}
</script>
