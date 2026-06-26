<template>
  <div class="mb-6">
    <div class="flex gap-1 border-b border-neutral-200 mb-4" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="active = tab.id"
        role="tab"
        :aria-selected="active === tab.id"
        :class="[
          'px-4 py-2 text-sm font-medium transition-colors rounded-t-lg border-b-2 -mb-px',
          active === tab.id
            ? tab.color + ' border-current bg-neutral-50'
            : 'text-neutral-500 hover:text-neutral-700 border-transparent',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <div v-if="active === 'beginner'" class="level-content">
      <slot name="beginner" />
    </div>
    <div v-else-if="active === 'deep'" class="level-content">
      <slot name="deep" />
    </div>
    <div v-else class="level-content">
      <slot name="advanced" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = [
  { id: 'beginner', label: '🟢 Para empezar', color: 'text-beginner' },
  { id: 'deep', label: '🟡 A fondo', color: 'text-deep' },
  { id: 'advanced', label: '🔬 Avanzado', color: 'text-advanced' },
]

const active = ref('beginner')
</script>
