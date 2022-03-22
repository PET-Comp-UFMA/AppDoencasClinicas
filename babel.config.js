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
                  'src/components': 'src/components',
                  'src/screens': 'src/screens',
                  'src/assets/images': 'src/assets/images',
                  'src/assets/icons': 'src/assets/icons',
                  'src/assets/fonts': 'src/assets/fonts'
              },
          },
      ]
  ]
  };
};

