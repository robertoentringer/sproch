const path = require("path")

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.optimization.set("splitChunks", {
      minSize: 10000,
      maxSize: 10000
    })
    config.resolve.alias.set("audio", path.resolve(__dirname + "/src/assets/audio"))
    config.resolve.alias.set("img", path.resolve(__dirname + "/src/assets/img"))
  },
  devServer: {
    disableHostCheck: true
  }
}
