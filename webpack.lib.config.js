const path = require("path");

module.exports = {
  entry: "./src/lib/index.tsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "lib.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "myPeerConflictTest",
      type: "umd",
    },
  },
  externals: {
    react: "react",
  },
};
