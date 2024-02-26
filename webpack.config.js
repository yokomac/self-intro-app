// webpack.config.js
const path = require('path');

module.exports = {
  target: 'node',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }], // Node.js向けにトランスパイル
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  externals: {
    express: 'commonjs express', // expressを外部モジュールとして扱う
  },
};
