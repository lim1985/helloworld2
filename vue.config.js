const path = require("path");
//全局文件路径
// const glob = require("glob-all");
//用于生产环境去除多余的css
// const PurgecssPlugin = require("purgecss-webpack-plugin");
//压缩代码并去掉console
const TerserPlugin = require("terser-webpack-plugin");
//代码打包zip
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
//
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // baseUrl从 Vue CLI 3.3 起已弃用，请使用publicPath
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
  // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
  // publicPath:process.env.NODE_ENV === "production" ? "./" : "/",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  // 默认值'dist'
  outputDir: "dist",
  // 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
  // 默认值''
  assetsDir: "",
  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // 默认值'index.html'
  indexPath: "index.html",
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
  filenameHashing: false,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: process.env.NODE_ENV !== "production",

  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  //打包配置开始
  //  configureWebpack: config => {
  //   const plugins = [];
  //  // 启用代码压缩
  //   plugins.push(
  //     new TerserPlugin({
  //       terserOptions: {
  //         compress: {
  //           warnings: false,
  //           drop_console: true,
  //           drop_debugger: false,
  //           pure_funcs: ["console.log"] //移除console
  //         }
  //       },
  //       sourceMap: false,
  //       parallel: true
  //     })
  //   ),
  //    // 代码压缩打包
  //     // plugins.push(
  //     //   new CompressionWebpackPlugin({
  //     //     filename: "[path].gz[query]",
  //     //     algorithm: "gzip",
  //     //     test: productionGzipExtensions,
  //     //     threshold: 10240,
  //     //     minRatio: 0.8
  //     //   })
  //     // );
  //     plugins.push(
  //       new BundleAnalyzerPlugin()
  //     );
  //   config.plugins = [...config.plugins, ...plugins];
  // },
  configureWebpack: {
    // performance: {
    //   hints:false
    // }
    // // 或者
    // // 警告 webpack 的性能提示
    // performance: {
    //   hints:'warning',
    //   //入口起点的最大体积
    //   maxEntrypointSize: 50000000,
    //   //生成文件的最大体积
    //   maxAssetSize: 30000000,
    //   //只给出 js 文件的性能提示
    //   assetFilter: function(assetFilename) {
    //     return assetFilename.endsWith('.js');
    //   }
    // }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("@api", resolve("src/api"))
      .set("@assets", resolve("src/assets"))
      .set("@comp", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@layout", resolve("src/layout"))
      .set("@static", resolve("src/static"));
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /* less 变量覆盖，用于自定义 ant design 主题 */
          /*
          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px',
          */
        },
        javascriptEnabled: true
      }
    }
  },
  // 所有 webpack-dev-server 的选项都支持。
  devServer: {
    host: "172.20.8.28",
    port: 8080, // 端口号
    https: false,
    open: true, //配置自动启动浏览器

    // 配置多个代理
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 本地模拟数据服务器
        changeOrigin: true,
        pathRewrite: {
          "^/api": "" // 去掉接口地址中的api字符串
        }
      },
      "/foo": {
        target: "http://localhost:8080", // 本地模拟数据服务器
        changeOrigin: true,
        pathRewrite: {
          "^/foo": "" // 去掉接口地址中的foo字符串
        }
      }
    }
  }
};
