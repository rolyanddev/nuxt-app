<template>
  <h2 class="h1">Fake Users 🚀😎</h2>
  <ul>
    <li
      :key="user.id"
      v-for="user of users"
      class="m-4"
      @click="$router.push({ path: `/user/${user.id}` })"
    >
      <p class="p-2 cursor-pointer inline-block border-2 border-green-600">
        {{ user.name }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Users } from '~~/interfaces/Users'

definePageMeta({
  layout: 'users'
})

const { data: users } = await useFetch<Users>(
  'https://jsonplaceholder.typicode.com/users'
)
</script>
