const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      host: "0.0.0.0",
      port: 3000,
      client: {
        webSocketURL: {
          hostname: "0.0.0.0",
        },
      },
    },
  },
});
