const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(4000000000000).maxAssetSize(4000000000000);
  },
  publicPath: process.env.NODE_ENV === "production" ? "/e-commerce" : "/",
};
