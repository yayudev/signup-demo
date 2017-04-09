require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['react-app'],
  plugins: ['styled-jsx/babel']
})
require('./server')
