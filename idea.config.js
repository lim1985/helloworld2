"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  context: path.resolve(__dirname, "./"),
  resolve: {
     extensions: ['.js', '.vue', '.json'],
    alias: {
      'config': resolve("config"),
      "@": resolve("src"),
      "@views": resolve("src/views"),
      "@api": resolve("src/api"),
      "@tool": resolve("src/tool"),
      "@comp": resolve("src/components"),
      "@core": resolve("src/core"),
      "@utils": resolve("src/utils"),
      "@entry": resolve("src/entry"),
      "@router": resolve("src/router"),
      "@store": resolve("src/store")
    }
  }
};
