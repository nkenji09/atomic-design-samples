const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@atoms": path.resolve(__dirname, "../src/components/atoms"),
      "@molecules": path.resolve(__dirname, "../src/components/molecules"),
      "@organisms": path.resolve(__dirname, "../src/components/organisms"),
      "@templates": path.resolve(__dirname, "../src/components/templates"),
    };
    return config;
  },
};
