module.exports = {
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    // open: true,
    // host: "localhost",
    // port: '8080',
    // https: false,
    // hotOnly: false,
    proxy: {
      '/Api': {
        target: 'http://175.6.23.25:8079/',
        changeOrigin: true,
        pathRewrite: {
          '^/Api': '',
        },
      },
    },
  },
};
