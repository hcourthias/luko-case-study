/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigation': './src/navigation',
            '@locales': './src/locales',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@constants': './src/constants',
            '@theme': './src/theme',
            '@store': './src/store',
            '@models': './src/models',
          },
        },
      ],
    ],
  }
}
