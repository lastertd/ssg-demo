// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  imports:{
    dirs:['./packages/utils']
  },
  pages:true,
  ssr:true,


})
