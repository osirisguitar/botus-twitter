const fs = require('fs').promises

const cronline = process.env.CRON + ' ' + 'node /app/index\n'
console.log('line', cronline)

const createCrontab = async () => {
  await fs.writeFile('/etc/crontabs/root', cronline, 'utf8')
  console.log('file written')
}

createCrontab()
