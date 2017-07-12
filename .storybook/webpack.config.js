const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.module.rules.push({
    test: /\.scss$/,
    include: path.resolve(__dirname, '../'),
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  });
  
  return config;
};
