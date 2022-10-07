const { configure, presets } = require("eslint-kit");

module.exports = configure({
  root: __dirname,
  presets: [
    presets.node(),
    presets.typescript(),
    presets.react(),
    presets.nextJs(),
    presets.prettier({ plugins: ["prettier-plugin-tailwindcss"] }),
    presets.imports(),
  ],
});
