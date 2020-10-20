const path = require("path");
const miniCss = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|eot|svg|jpg|png)(\?[\s\S]+)?$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.(|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
  ],
};
