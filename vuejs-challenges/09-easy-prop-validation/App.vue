<script setup>
defineProps({
  type: {
    type: String,
    default: 'default',
    validator(value) {
      return ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(value)
    },
  },
})
</script>

<template>
  <button type="ghost">
    Button
  </button>
</template>
