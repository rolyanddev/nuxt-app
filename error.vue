<template>
  <NuxtLayout>
    <h1 class="h1 text-center mb-4">
      Error {{ error.statusCode }}, {{ error.message }}
    </h1>
    <button
      class="bg-slate-900 text-white py-2 px-4 block mx-auto"
      @click="handleClearError"
    >
      Go to {{ params.id ? 'users' : 'home' }}
    </button>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { NuxtError } from '#app'
const { error } = defineProps<{ error: Partial<NuxtError> }>()
const { params } = useRoute()

const handleClearError = () =>
  clearError({ redirect: params.id ? '/users' : '/' })
</script>
