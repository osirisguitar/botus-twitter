const randomTweetService = require('./lib/randomTweetService')

const tweet = async () => {
  const response = await randomTweetService.makeRandomTweet()
  console.log('Tweeted', response)
}

tweet()
