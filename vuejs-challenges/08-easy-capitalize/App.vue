<script setup>
import { ref } from 'vue'
import MyComponent from './MyComponent.vue'
const value = ref('')
</script>

<template>
  <MyComponent v-model.capitalize="value" />
</template>
