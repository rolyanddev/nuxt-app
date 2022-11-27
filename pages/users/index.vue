<template>
  <h2 class="h1 text-center mb-8">Fake Users 🚀😎🎉</h2>
  <ul class="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
    <li
      :key="user.id"
      v-for="user of users"
      class="p-3 text-slate-900 text-center font-semibold cursor-pointer border-2 border-green-500 hover:bg-green-500 hover:text-white duration-300"
      @click="$router.push({ path: `/user/${user.id}` })"
    >
      {{ user.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { Users } from '@/interfaces/Users'

useHead({
  title: 'Users'
})

const { data: users } = await useFetch<Users>('/api/users')
</script>
