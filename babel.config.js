// eslint-disable-next-line func-names
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./src'],
          alias: {
            '@config/*': './src/config/*',
            '@features': './src/features',
            '@features/*': './src/features/*',
            '@forms': './src/forms',
            '@forms/*': './src/forms/*',
            '@languages': './src/languages',
            '@languages/*': './src/languages/*',
            '@router': './src/router',
            '@router/*': './src/router/*',
            '@storage': './src/storage',
            '@storage/*': './src/storage/*',
            '@theme': './src/theme',
            '@theme/*': './src/theme/*',
            '@ui': './src/ui',
            '@ui/*': './src/ui/*',
            '@assets': './src/ui/assets',
            '@assets/*': './src/assets/*',
            '@atoms': './src/ui/atoms',
            '@icons': './src/ui/icons',
            '@molecules': './src/ui/molecules',
            '@organisms': './src/ui/organisms',
            '@templates': './src/ui/templates',
            '@typography': './src/ui/typography',
          },
        },
      ],
    ],
  };
};
