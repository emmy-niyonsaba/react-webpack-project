const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // Entry point of the application
  // This is where Webpack starts bundling. It will follow the import statements from this file to include all necessary modules.
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // cleans dist folder on rebuild
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,   // .js or .jsx files
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // import without specifying extension
  },
  plugins: [
    new HtmlWebpackPlugin({

      // Generates an index.html file with the <script> injected.
      // Uses the specified template as a base.
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    hot: true,
    open: true,
  },
};