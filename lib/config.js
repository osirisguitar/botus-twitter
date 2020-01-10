const conf = require('../config.json')

module.exports = {
  consumer_key: conf.CONSUMER_KEY,
  consumer_secret: conf.CONSUMER_SECRET,
  access_token: conf.ACCESS_TOKEN,
  access_token_secret: conf.ACCESS_TOKEN_SECRET
}
