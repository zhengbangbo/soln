<script setup lang="ts">
import { inject } from 'vue'

// Add a piece of code to make the `count` value get injected into the child component.
const count = inject('count')
</script>

<template>
  {{ count }}
</template>
