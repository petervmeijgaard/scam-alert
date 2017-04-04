var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_LOCATION: '"http://scam-alert.dev/api"',
  BROADCAST_ENDPOINT: '"http://scam-alert.dev/broadcasting/auth"',
  PUSHER_KEY: '"e18392ce280e8663564b"',
  PUSHER_CLUSTER: '"eu"'
})
