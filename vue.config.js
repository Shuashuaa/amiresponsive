//vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    iconPaths: {
      faviconSVG: null,
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: null,
      maskIcon: null,
      msTileImage: null,
    },
  },
})