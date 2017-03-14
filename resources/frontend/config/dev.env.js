var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_LOCATION: '"http://scam-alert.dev/api"',
  BROADCAST_ENDPOINT: '"http://scam-alert.dev/broadcasting/auth"',
  PUSHER_KEY: '"fd4763d84705c3a5f30e"',
  PUSHER_CLUSTER: '"eu"'
})
