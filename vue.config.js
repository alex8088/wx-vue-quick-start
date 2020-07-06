module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  devServer: {
  }
}
