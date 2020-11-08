const axios = require('axios');
const {CronJob} = require('cron');

const checkUrl = async (url) => {
  try {
    await axios.get(url);
    console.log(`[${new Date().toISOString()}] OK ${url}`);
  } catch (e) {
    console.log('error', JSON.stringify(e));
  }
}

const job = new CronJob('*/5 * * * * *', () => {
  checkUrl('https://wp.optimize.id/index.php');
  checkUrl('https://optimize.id');
});

job.start();