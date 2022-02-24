module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
          'module-resolver',
          {
              root: ['.'],
              extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.svg'],
              alias: {
                  '@components': './src/components',
                  '@screens': './src/screens',
                  '@images': './src/assets/images',
                  '@icons': './src/assets/icons',
                  '@fonts': './src/assets/fonts'
              },
          },
      ]
  ]
  };
};

