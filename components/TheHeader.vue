<template>
  <header
    class="bg-slate-900 px-8 min-h-[5rem] flex items-center justify-between"
  >
    <NuxtLink :to="{ path: '/' }">
      <img
        width="50"
        height="50"
        alt="nuxt-icon"
        src="@/assets/nuxt-icon.svg"
      />
    </NuxtLink>
    <nav class="flex gap-8">
      <NuxtLink
        :to="{ path: '/' }"
        active-class="text-green-400"
        class="text-white text-lg font-semibold"
      >
        Home
      </NuxtLink>
      <NuxtLink
        :to="{ name: 'users' }"
        active-class="text-green-500"
        class="text-white text-lg font-semibold"
      >
        Users
      </NuxtLink>
    </nav>
  </header>
</template>
