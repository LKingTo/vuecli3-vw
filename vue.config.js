module.exports = {
  lintOnSave: false,
  /** 设置scss全局变量 start **/
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['src/assets/scss/common.scss']
        })
        .end()
    })
  }
  /** 设置scss全局变量 end **/
}
