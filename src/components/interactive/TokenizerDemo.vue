<template>
  <div class="card">
    <h3 class="text-lg font-semibold mb-4">Tokenizador en vivo</h3>

    <div>
      <textarea
        v-model="text"
        placeholder="Escribe aquí para ver cómo se tokeniza..."
        class="w-full h-24 rounded-lg border border-neutral-300 px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      ></textarea>
    </div>

    <div class="mt-3 flex flex-wrap gap-1">
      <span
        v-for="(token, i) in tokens"
        :key="i"
        :style="{ backgroundColor: tokenColor(i) }"
        class="px-2 py-0.5 rounded text-xs font-mono text-white cursor-help"
        :title="'ID: ' + token.id"
      >
        {{ token.text }}
      </span>
    </div>

    <div class="mt-3 flex gap-4 text-xs text-neutral-500">
      <span>{{ tokens.length }} tokens</span>
      <span>{{ text.length }} caracteres</span>
      <span>Ratio: {{ text.length > 0 ? (tokens.length / text.length).toFixed(2) : 0 }} tok/char</span>
      <span v-if="text.length > 0">Coste estimado: ${{ (tokens.length * 0.000015).toFixed(6) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const text = ref('El gato está sobre la mesa')

// Simple BPE-like simulation: split by spaces and punctuation
const tokens = computed(() => {
  if (!text.value.trim()) return []
  // Simulate BPE subword splitting
  const words = text.value.split(/(\s+|[.,!?;:])/).filter(Boolean)
  const result: { text: string; id: number }[] = []
  let idCounter = 100

  for (const word of words) {
    if (/^\s+$/.test(word)) {
      // Keep whitespace as tokens
      result.push({ text: word.replace(' ', '·').replace('\n', '↵'), id: idCounter++ })
    } else if (/^[.,!?;:]$/.test(word)) {
      result.push({ text: word, id: idCounter++ })
    } else if (word.length > 4) {
      // Split long words into subwords
      const parts = word.match(/.{1,3}/g) || [word]
      parts.forEach((p, i) => {
        result.push({ text: i === 0 ? p : '##' + p, id: idCounter++ })
      })
    } else {
      result.push({ text: word, id: idCounter++ })
    }
  }
  return result
})

const colors = [
  '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
  '#ec4899', '#f43f5e', '#ef4444', '#f97316',
  '#eab308', '#22c55e', '#14b8a6', '#06b6d4',
  '#3b82f6', '#2563eb', '#7c3aed', '#9333ea',
]

function tokenColor(index: number): string {
  return colors[index % colors.length]
}
</script>
