var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_LOCATION: '"http://scam-alert.dev/api"',
  BROADCAST_ENDPOINT: '"http://scam-alert.dev/broadcasting/auth"',
  PUSHER_KEY: '"51f837d442b94707e039"',
  PUSHER_CLUSTER: '"eu"'
})
