<template>
  <nav>
    <ul>
      <li>
        <NuxtLink :to="{ path: '/' }">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'users' }">Users</NuxtLink>
      </li>
    </ul>
  </nav>
  <slot />
</template>
