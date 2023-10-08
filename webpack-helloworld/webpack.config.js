const path = require('path');
// importuję bibliotekę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuje odpowiedni plugin
module.exports = {
  entry: '../src/app.js',
  // definiuje plik wejściowy
  output: {
    path: path.resolve(__dirname, 'build'),
    // definiuje sciezke wyjsciowa
    filename: 'app.min.js',
    // definiuje nazwe pliku wyjsciowego
  },
  module: {
    rules: [],
    // obecnie brak dodatkowych ustawień
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../src/index.html',
      // wskazuje plik źródłowy
      filename: 'index.html',
      // okreslam nazwe dla pliku
    }),
  ],
};
// eksportuję ustawienia dla webpacka
