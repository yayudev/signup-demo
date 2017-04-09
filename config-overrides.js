function babelLoader (conf) {
  return conf.loader === 'babel'
}

module.exports = function override (config, env) {
  const babelrc = config.module.loaders.find(babelLoader).query

  // Register styled-jsx babel plugin
  babelrc.plugins = ['styled-jsx/babel'].concat(babelrc.plugins || [])

  return config
}
