const puppeteer = require('puppeteer')

const getAnswerNaqib1 = require('./naqibakhmalgoogleform/1')
const getAnswerNaqib2 = require('./naqibakhmalgoogleform/2')
const getAnswerNaqib3 = require('./naqibakhmalgoogleform/3')
const getAnswerNaqib4 = require('./naqibakhmalgoogleform/4')
const getAnswerNaqib5 = require('./naqibakhmalgoogleform/5')
const getAnswerNaqib6 = require('./naqibakhmalgoogleform/6')
const getAnswerNaqib7 = require('./naqibakhmalgoogleform/7')
const getAnswerNaqib8 = require('./naqibakhmalgoogleform/8')
const getAnswerNaqib9 = require('./naqibakhmalgoogleform/9')
const getAnswerNaqib10 = require('./naqibakhmalgoogleform/10')
const getAnswerNaqib11 = require('./naqibakhmalgoogleform/11')
const getAnswerNaqib12 = require('./naqibakhmalgoogleform/12')
const getAnswerNaqib13 = require('./naqibakhmalgoogleform/13')
const getAnswerNaqib14 = require('./naqibakhmalgoogleform/14')
const getAnswerNaqib15 = require('./naqibakhmalgoogleform/15')
const getAnswerNaqib16 = require('./naqibakhmalgoogleform/16')
const getAnswerNaqib17 = require('./naqibakhmalgoogleform/17')
const getAnswerNaqib18 = require('./naqibakhmalgoogleform/18')
const getAnswerNaqib19 = require('./naqibakhmalgoogleform/19')
const getAnswerNaqib20 = require('./naqibakhmalgoogleform/20')
const getAnswerNaqib21 = require('./naqibakhmalgoogleform/21')
const getAnswerNaqib22 = require('./naqibakhmalgoogleform/22')
const getAnswerNaqib23 = require('./naqibakhmalgoogleform/23')
const getAnswerNaqib24 = require('./naqibakhmalgoogleform/24')
const getAnswerNaqib25 = require('./naqibakhmalgoogleform/25')
const getAnswerNaqib26 = require('./naqibakhmalgoogleform/26')

async function launchPuppeteer(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    //change the url according to the form you want to submit
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSfELn_QQww5hUOjiAJkKvEZMIvhpDQJlkSGy_sO2IQIy5rXBw/viewform')

    //googleform naqib
    //start
    await page.click('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]');
    await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' });

    const multipleChoiceAnswers =[ getAnswerNaqib1(), getAnswerNaqib2(), getAnswerNaqib3(), getAnswerNaqib4(), getAnswerNaqib5(), getAnswerNaqib6()]
    for (const answer of multipleChoiceAnswers) {
      await page.click(`div[id="${answer}"]`)
    }
    const buttons = await page.$$('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]');
    if (buttons.length >= 2) {
      await buttons[1].click(); // Click the second button
    } else {
      console.error('There are not enough buttons with the specified class.');
    }
    await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' });

    //Question Type : Multiple Choice Grid
    const multipleChoiceGridAnswers = [getAnswerNaqib7(), getAnswerNaqib8(), getAnswerNaqib9(), getAnswerNaqib10(), getAnswerNaqib11(), getAnswerNaqib12(), getAnswerNaqib13(), getAnswerNaqib14(), getAnswerNaqib15(), getAnswerNaqib16(), getAnswerNaqib17(), getAnswerNaqib18(), getAnswerNaqib19(), getAnswerNaqib20(), getAnswerNaqib21(), getAnswerNaqib22(), getAnswerNaqib23(), getAnswerNaqib24(), getAnswerNaqib25(), getAnswerNaqib26()];
    for (const answer of multipleChoiceGridAnswers) {
      await page.click(`div[aria-label="${answer}"]`)
    }
    await page.click('div[class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]');

    await browser.close();
}

async function recursion(){
  process.setMaxListeners(20);
  console.time('HazimBot'); 
  for(let i =0; i<15; i++){
    await launchPuppeteer()
  }
  console.timeEnd('HazimBot');
  console.log('Memory Usage:', process.memoryUsage());
}

recursion();