<template>
  <div
    :class="[
      'flex gap-3 p-4 rounded-xl border mb-4',
      typeStyles[type].container,
    ]"
  >
    <span class="text-xl shrink-0 mt-0.5">{{ icons[type] }}</span>
    <div class="text-sm leading-relaxed" :class="typeStyles[type].text">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'tip' | 'warning' | 'hot'
  }>(),
  { type: 'tip' }
)

const icons: Record<string, string> = {
  tip: '💡',
  warning: '⚠️',
  hot: '🔥',
}

const typeStyles: Record<string, { container: string; text: string }> = {
  tip: {
    container: 'bg-blue-50 border-blue-200',
    text: 'text-blue-800',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200',
    text: 'text-yellow-800',
  },
  hot: {
    container: 'bg-red-50 border-red-200',
    text: 'text-red-800',
  },
}
</script>
