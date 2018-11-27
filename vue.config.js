const path = require('path')
function resolve (url) {
  return path.resolve(__dirname, url)
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('components', resolve('./src/components'))
      .set('styles', resolve('./src/assets/styles'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
      .set('utils', resolve('./src/utils'))    
  },

configureWebpack: config => {
  require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
  })
},



  devServer: {
    proxy: {
      '/Home': {
        target: 'http://touch.liqu.com',
        changeOrigin: true,
        // headers: {
        //   referer: 'http://m.maoyan.com',
        //   host: 'm.maoyan.com'
        // },
        // hostRewrite: 'm.maoyan.com'
      },

    }
  }
}