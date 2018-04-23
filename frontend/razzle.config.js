'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  modify(baseConfig, { target, dev }, webpack) {
    const config = Object.assign({}, baseConfig);

    config.resolve.extensions = config.resolve.extensions.concat(['.ts', '.tsx']);

    config.resolve.alias['sc'] = path.resolve(__dirname, 'src/styles');
    config.devtool = 'cheap-module-source-map';

    // Locate eslint-loader and remove it (we're using tslint instead)
    config.module.rules = config.module.rules.filter(
      rule =>
        !(
          Array.isArray(rule.use) &&
          rule.use.length > 0 &&
          rule.use[0].options &&
          'useEslintrc' in rule.use[0].options
        )
    );

    // Safely locate Babel-Loader in Razzle's webpack internals
    const babelLoaderIndex = config.module.rules.findIndex(
      rule => rule.use[1].options && rule.use[1].options.babelrc
    );

    // Get the correct `include` option, since that hasn't changed.
    // This tells Razzle which directories to transform.
    const babelLoader = config.module.rules[babelLoaderIndex];

    const { include } = babelLoader;

    const babelLoaderTwo = {
      loader: 'babel-loader',
    };

    // Declare our TypeScript loader configuration
    const tsLoader = {
      include,
      test: /\.tsx?$/,
      use: [
        babelLoaderTwo,
        {
          loader: 'ts-loader',
        },
      ],
    };

    const tslintLoader = {
      include,
      enforce: 'pre',
      test: /\.tsx?$/,
      loader: 'tslint-loader',
      options: {
        emitErrors: true,
        configFile: './tslint.json',
      },
    };

    config.module.rules.push(tslintLoader);

    // Fully replace babel-loader with ts-loader
    // config.module.rules[babelLoader] = tsLoader;

    // If you want to use Babel & Typescript together (e.g. if you
    // are migrating incrementally and still need some Babel transforms)
    // then do the following:
    //
    // - COMMENT out line 59
    // - UNCOMMENT line 68
    //

    config.module.rules.push(tsLoader);

    return config;
  },
};
