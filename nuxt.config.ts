import { User, Users } from './interfaces/Users'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) {
        return
      }
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data: Users = await res.json()
      data.forEach(user => {
        nitroConfig.prerender?.routes?.push('/user/' + user.id)
      })
    }
  }
})
