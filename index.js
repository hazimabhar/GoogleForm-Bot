const puppeteer = require('puppeteer');

const getRandomName = require('./name/randomName')
const getUserEmail = require('./email/emailUser')

const getAnswer1 = require('./question/firstQuestion');
const getAnswer2 = require('./question/secondQuestion');
const getAnswer3 = require('./question/thirdQuestion');
const getAnswer4 = require('./question/fourthQuestion');

async function launchPuppeteer(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    //change the url according to the form you want to submit
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSduKBn_YZN2rOROntHELoflob918hQ7lgWzbIPjbv3hwHeyaA/viewform?usp=sf_link')

    let name = getRandomName()
    // const formattedEmail = name.toLowerCase().replace(/\s/g, '')

    await page.type('input[aria-labelledby="i1"]', name)  
    await page.type('input[aria-labelledby="i5"]', getUserEmail(name))

    await page.click('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]')

    await page.click(`div[id=${getAnswer1()}]`);

    await page.click(`div[id=${getAnswer2()}]`);

    await page.click(`div[id=${getAnswer3()}]`);

    await page.click(`div[id=${getAnswer4()}]`);

    await page.click('div[class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]');

    await browser.close();
}

function recursion(){
  process.setMaxListeners(20);
  console.time('HazimBot'); // Start the timer
  for(let i =0; i< 15; i++){
    launchPuppeteer()
  }
  console.timeEnd('HazimBot'); // End the timer and log the elapsed time
  console.log('Memory Usage:', process.memoryUsage());
}

recursion();