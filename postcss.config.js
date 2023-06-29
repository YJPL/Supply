module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env'),
    require('autoprefixer'),
    require('cssnano')({
        preset: 'default',
    }),
  ]
};