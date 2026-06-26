<template>
  <div class="card h-[400px] relative overflow-hidden">
    <h3 class="text-lg font-semibold mb-2">Espacio Semántico 3D</h3>
    <p class="text-sm text-neutral-500 mb-3">
      Palabras con significado similar aparecen cerca.
      Gira y haz zoom con el ratón. Añade palabras separadas por coma.
    </p>

    <div class="mb-3 flex gap-2">
      <input
        v-model="userWords"
        placeholder="ej: rey, hombre, mujer, reina, gato, perro"
        class="flex-1 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm"
        @keyup.enter="updateWords"
      />
      <button
        @click="updateWords"
        class="px-3 py-1.5 bg-primary-500 text-white text-sm rounded-lg hover:bg-primary-600 transition-colors shrink-0"
      >
        Render
      </button>
    </div>

    <div class="w-full h-[280px] rounded-xl overflow-hidden bg-slate-900" ref="canvasContainer">
      <TresCanvas v-if="mounted" clear-color="#1e293b">
        <TresPerspectiveCamera :position="[5, 5, 5]" />
        <OrbitControls v-if="mounted" />

        <TresAmbientLight :intensity="0.6" />
        <TresDirectionalLight :position="[5, 5, 5]" :intensity="1.2" />

        <!-- Grid helper lines -->
        <TresGridHelper :args="[10, 10]" />

        <!-- Word spheres -->
        <TresGroup v-for="(word, i) in displayedWords" :key="word.text">
          <TresMesh :position="word.pos">
            <TresSphereGeometry :args="[0.15, 12, 12]" />
            <TresMeshStandardMaterial :color="word.color" />
          </TresMesh>
        </TresGroup>
      </TresCanvas>

      <div v-if="!mounted" class="flex items-center justify-center h-[280px] text-slate-400 text-sm">
        Cargando escena 3D...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'

const mounted = ref(false)
const userWords = ref('rey, hombre, mujer, reina, gato, perro, felino, canino, casa, hogar')
const displayedWords = ref<{ text: string; pos: [number, number, number]; color: string }[]>([])

const colorPalette = [
  '#6366f1', '#8b5cf6', '#a855f7', '#ec4899',
  '#f43f5e', '#f97316', '#eab308', '#22c55e',
  '#14b8a6', '#06b6d4', '#3b82f6', '#7c3aed',
]

// Predefined semantic positions for common words
const semanticMap: Record<string, [number, number, number]> = {
  rey: [0.5, 0, 0.5], reina: [0.3, 0, 0.3],
  hombre: [-0.5, 0, 0.5], mujer: [-0.3, 0, 0.3],
  niño: [-0.2, 0, 0.2], niña: [0, 0, 0.1],
  gato: [2, 0.2, 1], perro: [1.8, 0, 0.8],
  felino: [2.2, -0.1, 0.5], canino: [2, -0.2, 0.2],
  mascota: [1.5, 0, 0.5],
  casa: [-1, 0, -1], hogar: [-0.8, 0, -1.2],
  coche: [-2, 0, -1], auto: [-2.2, 0, -0.8],
  avión: [-1.5, 0.5, -2], barco: [-1.3, -0.3, -2],
  correr: [0.5, 0.5, -1.5], saltar: [0.8, 0.3, -1.3],
  nadar: [0.3, 0.7, -1.7],
  grande: [-0.5, 0.8, 0], pequeño: [-0.7, 0.6, 0.2],
  rápido: [0.2, 0.9, -0.5], lento: [0, 0.7, -0.3],
  rojo: [-1.5, 0.8, 1.5], azul: [-1.3, 0.6, 1.3],
  comer: [0, -0.3, 1.5], beber: [0.2, -0.5, 1.3],
  dormir: [-0.3, -0.2, 1.7],
  sol: [0, 1, 2], luna: [0.3, 0.8, 2.2],
  amor: [1, 0.5, -0.5], odio: [1.2, 0.3, -0.3],
}

function updateWords() {
  const words = userWords.value.split(',').map(w => w.trim().toLowerCase()).filter(Boolean)
  if (words.length === 0) return

  displayedWords.value = words.map((word, i) => ({
    text: word,
    pos: semanticMap[word] || [
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 1.5,
      (Math.random() - 0.5) * 6,
    ],
    color: colorPalette[i % colorPalette.length],
  }))
}

onMounted(() => {
  mounted.value = true
  updateWords()
})
</script>
