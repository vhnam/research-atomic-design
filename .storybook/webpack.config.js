const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('../config/paths');

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const webpackEnv = process.env.NODE_ENV;
const isEnvDevelopment = webpackEnv === 'development';
const isEnvProduction = webpackEnv === 'production';

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const publicPath = isEnvProduction ? paths.servedPath : isEnvDevelopment && '/';
const shouldUseRelativeAssetPaths = publicPath === './';

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    isEnvDevelopment && require.resolve('style-loader'),
    isEnvProduction && {
      loader: MiniCssExtractPlugin.loader,
      options: Object.assign(
        {},
        shouldUseRelativeAssetPaths ? { publicPath: '../../' } : undefined
      )
    },
    {
      loader: require.resolve('css-loader'),
      options: cssOptions
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009'
            },
            stage: 3
          })
        ],
        sourceMap: isEnvProduction && shouldUseSourceMap
      }
    }
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: isEnvProduction && shouldUseSourceMap
      }
    });
  }
  return loaders;
};

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        oneOf: [
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              },
              'sass-loader'
            )
          },
          {
            test: sassModuleRegex,
            use: getStyleLoaders(
              {
                importLoaders: 1,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent
              },
              'sass-loader'
            )
          }
        ]
      },
      {
        test: /\.stories\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre'
      }
    ]
  }
};
