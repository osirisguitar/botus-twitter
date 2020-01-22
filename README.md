# botus-twitter
Twitter bot for @botustrump.

## Do it with Docker
1. Build docker file from source or get image here: https://hub.docker.com/repository/docker/osirisguitar/botus-twitter
2. Create a volume for /app/data
3. Put a file called tweets.txt containing one tweet per line in /app/data
4. Put meaningful values in environment variables:

* CONSUMER_KEY - from your Twitter app (yes, you need to make one)
* CONSUMER_SECRET - from your Twitter app
* ACCESS_TOKEN - from your Twitter app
* ACCESS_TOKEN_SECRET - from your Twitter app
* CRON - cron run pattern (i.e. `* */4 * * *` for every fourth hour)

5. Profit
