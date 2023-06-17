const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'aba',
    projectName: 'boilerplate',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(c|sc|sa)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  });
};
