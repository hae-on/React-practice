const path = require("path");

module.exports = {
  mode: "development",
  entry: "./source/index.js",
  output: {
    path: path.resolve(__dirname, "publlic"),
    filename: "index_bundle.js",
  },
};
