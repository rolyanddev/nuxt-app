<template>
  <nav>
    <ul>
      <li>
        <NuxtLink :to="{ path: '/' }">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'about' }">About</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'users' }">Users</NuxtLink>
      </li>
    </ul>
  </nav>
  <slot />
</template>

<style>
.router-link-exact-active {
  @apply text-green-600;
}
</style>
