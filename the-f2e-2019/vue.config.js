const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  publicPath: 'the-f2e-2019/',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    https: true,
    // proxy: {},
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@modules', resolve('node_modules'))
      .set('@routes', resolve('src/router/routes.js'))
      .set('@assets', resolve('src/assets'))
      .set('@catalog', resolve('src/catalog'))
      .set('@week-1', resolve('src/week-1'));
    // .set('layout', resolve('src/layout'))
    // .set('base', resolve('src/base'))
    // .set('static', resolve('src/static'));
  },
  productionSourceMap: !1,
  crossorigin: 'use-credentials',
  configureWebpack(...allin) {
    // console.log(allin[0].module.rules);
    // console.log(`BACKEND: ${process.env.BACKEND}`);
    console.log(`allin: ${allin.join(' ')}`);
    // process.exit();
  },
  css: {
    modules: true,
  },
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/index/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index'],
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   subpage: 'src/subpage/main.js',
  // },
};

// const getLanIP = (defaultIP = '127.0.0.1') => {
//   return require('json-query')('[**][address~/^192\.168\./].address', {
//     data: require('os').networkInterfaces(),
//     allowRegexp: 'enable',
//   }).value || defaultIP;
// };
