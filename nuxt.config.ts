// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icons",
    "@nuxtjs/google-fonts",
    "nuxt-medusa",
  ],
  css: ["~/assets/scss/main.scss"],
  googleFonts: {
    display: "swap",
    families: {
      "Nunito+Sans": [200, 300, 400, 500, 600, 700, 800],
    },
  },
  medusa: {
    baseUrl: process.env.MEDUSA_URL || "http://localhost:9000",
    global: true,
    server: false,
    debug: false,
    publishableKey: process.env.MEDUSA_PUBLISHABLE_KEY,
    auth: {
      type: "session",
      jwtTokenStorageKey: "medusa_auth_token",
      jwtTokenStorageMethod: "local",
    },
  },
  tailwindcss: {
    configPath: "tailwind.config",
    exposeConfig: true,
    config: {},
    viewer: true,
  },
  runtimeConfig: {
    public: {
      // API_URL: process.env.API_URL,
      // APP_ENV: process.env.APP_ENV || "development",
    },
  },
  app: {
    head: {
      link: [
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap",
        // },
      ],
      title: "HevenHome",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Heven",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "hevenhome.com",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://hevenhome.com",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Turning chaos into a safe Heven",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "",
        },
      ],
    },
  },
});
