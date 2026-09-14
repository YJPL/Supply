module.exports = {
  plugins: [
  require('postcss-import'),
  require('postcss-nested').default, 
  require('postcss-preset-env'),
  require('autoprefixer')
  ]
};