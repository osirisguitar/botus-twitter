const fs = require('fs').promises
const twit = require('twit')
const config = require('./config')

const twitterer = new twit(config)

const sendTweet = async (status) => {
  return new Promise((resolve, reject) => {
    twitterer.post('statuses/update', { status: status }, (err, data, response) => {
      if (err) {
        console.error('Error tweeting', err)
        return reject(err)
      }

      return resolve(data)
    })
  })
}

const updateTweetedFile = async (tweet) => {
  let tweeted 
  try {
    tweeted = JSON.parse(await fs.readFile(__dirname + '/../data/tweeted.json', 'utf8'))
  } catch (err) {
    console.error('Problem with the tweeted file', err)
    tweeted = []
  }

  tweeted.push({
    text: tweet,
    timestamp: Date.now()
  })

  await fs.writeFile(__dirname + '/../data/tweeted.json', JSON.stringify(tweeted, null, 2), 'utf8')
}

const makeRandomTweet = async () => {
  let tweets = await fs.readFile(__dirname + '/../data/tweets.txt', 'utf8')
  tweets = tweets.split('\n')
  const randomTweetNumber = Math.floor(Math.random() * tweets.length)
  const randomTweet = tweets[randomTweetNumber]

  const response = await sendTweet(randomTweet)

  tweets.splice(randomTweetNumber, 1)

  await fs.writeFile(__dirname + '/../data/tweets.txt', tweets.join('\n'), 'utf8')

  updateTweetedFile(randomTweet)

  return response
}

module.exports = {
  makeRandomTweet
}
