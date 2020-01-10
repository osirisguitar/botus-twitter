const twit = require('twit')
const config = require('./lib/config')

const twitterer = new twit(config)

twitterer.post('statuses/update', { status: 'bot\'s are gonna bot' }, (err, data, response) => {
  console.log(data)
})
