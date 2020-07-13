const path = require('path')

module.exports = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias.set('audio', path.resolve(__dirname + '/src/assets/audio'))
    config.resolve.alias.set('img', path.resolve(__dirname + '/src/assets/img'))
  },
  devServer: {
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/scss/_variables.scss";
        @import "@/scss/_mixins.scss";
        `
      }
    }
  }
}
