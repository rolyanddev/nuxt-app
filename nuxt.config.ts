import { User, Users } from './interfaces/Users'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      titleTemplate: `%s - Nuxt App Example`,
      meta: [{ name: 'author', content: 'RolyDev' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone'
        }
      ]
    }
  },
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
