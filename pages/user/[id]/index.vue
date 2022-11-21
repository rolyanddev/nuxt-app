<template>
  <h2 class="text-blue-800 text-3xl font-semibold">Name: {{ user?.name }}</h2>
  <h2 class="text-blue-800 text-3xl font-semibold">Email: {{ user?.email }}</h2>
  <h2 class="text-blue-800 text-3xl font-semibold">
    Username: {{ user?.username }}
  </h2>
  <h2 class="text-blue-800 text-3xl font-semibold">
    Website: {{ user?.website }}
  </h2>
</template>

<script setup lang="ts">
import { User } from '~~/interfaces/Users'

const route = useRoute()

const uri = `https://jsonplaceholder.typicode.com/users/${route.params.id}`

definePageMeta({
  layout: 'users'
})

const { data: user } = await useFetch<User>(uri)

if (!user.value) {
  throw createError({
    statusCode: 404,
    message: 'Página de usuario not found'
  })
}
</script>
