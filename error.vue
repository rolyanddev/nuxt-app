<template>
  <h1 class="h1">Error {{ error.statusCode }}, {{ error.message }} -_-</h1>
  <button @click="handleClearError">Ir al inicio</button>
</template>

<script setup lang="ts">
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>
