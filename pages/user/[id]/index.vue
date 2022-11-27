<template>
  <h2 class="text-slate-900 text-2xl font-semibold">Name: {{ user?.name }}</h2>
  <h2 class="text-slate-900 text-2xl font-semibold">
    Email: {{ user?.email }}
  </h2>
  <h2 class="text-slate-900 text-2xl font-semibold">
    Username: {{ user?.username }}
  </h2>
  <h2 class="text-slate-900 text-2xl font-semibold">
    Website: {{ user?.website }}
  </h2>
</template>

<script setup lang="ts">
import { User } from '@/interfaces/Users'

const { params } = useRoute()

useHead({
  title: `User by id: ${params.id}`
})

const { data: user, error } = await useFetch<User>(`/api/users/${params.id}`)

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `User not found by userId: ${params.id}`
  })
}
</script>
