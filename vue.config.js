const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  performance: {
    hints: false,
  },
  publicPath: process.env.NODE_ENV === "production" ? "/e-commerce" : "/",
};
