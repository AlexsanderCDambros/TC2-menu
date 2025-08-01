const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "tc2",
    projectName: "menu",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      path: path.resolve(__dirname, "dist"), // Garante a saída na pasta dist
      filename: "tc2-menu.js", // Nome do arquivo de saída
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { 
            from: "_headers", // Arquivo de headers na raiz do projeto
            to: ".", // Copia para a raiz da pasta de build
            noErrorOnMissing: true // Não falha se o arquivo não existir
          }
        ]
      })
    ],
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    }
  });
};
