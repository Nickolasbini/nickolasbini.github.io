const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.VUE_APP_PRODUCTION === 'production' ? '/nickolasbini.github.io/' : '/',
  transpileDependencies: true
})
