const puppeteer = require('puppeteer')

const getAnswerNaqib1 = require('./membernaqibgoogleform/1')
const getAnswerNaqib2 = require('./membernaqibgoogleform/2')
const getAnswerNaqib3 = require('./membernaqibgoogleform/3')
const getAnswerNaqib4 = require('./membernaqibgoogleform/4')
const getAnswerNaqib5 = require('./membernaqibgoogleform/5')
const getAnswerNaqib6 = require('./membernaqibgoogleform/6')
const getAnswerNaqib7 = require('./membernaqibgoogleform/7')
const getAnswerNaqib8 = require('./membernaqibgoogleform/8')
const getAnswerNaqib9 = require('./membernaqibgoogleform/9')
const getAnswerNaqib10 = require('./membernaqibgoogleform/10')
const getAnswerNaqib11 = require('./membernaqibgoogleform/11')
const getAnswerNaqib12 = require('./membernaqibgoogleform/12')
const getAnswerNaqib13 = require('./membernaqibgoogleform/13')
const getAnswerNaqib14 = require('./membernaqibgoogleform/14')
const getAnswerNaqib15 = require('./membernaqibgoogleform/15')
const getAnswerNaqib16 = require('./membernaqibgoogleform/16')
const getAnswerNaqib17 = require('./membernaqibgoogleform/17')
const getAnswerNaqib18 = require('./membernaqibgoogleform/18')
const getAnswerNaqib19 = require('./membernaqibgoogleform/19')
const getAnswerNaqib20 = require('./membernaqibgoogleform/20')
const getAnswerNaqib21 = require('./membernaqibgoogleform/21')
const getAnswerNaqib22 = require('./membernaqibgoogleform/22')
const getAnswerNaqib23 = require('./membernaqibgoogleform/23')
const getAnswerNaqib24 = require('./membernaqibgoogleform/24')
const getAnswerNaqib25 = require('./membernaqibgoogleform/25')
const getAnswerNaqib26 = require('./membernaqibgoogleform/26')
const getAnswerNaqib27 = require('./membernaqibgoogleform/27')
const getAnswerNaqib28 = require('./membernaqibgoogleform/28')
const getAnswerNaqib29 = require('./membernaqibgoogleform/29')

async function launchPuppeteer(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    //change the url according to the form you want to submit
    await page.goto('https://forms.office.com/pages/responsepage.aspx?id=ZVI5lrgq70S_-yqEle8az3ceTvM3w7BItqZxkmYJayBUQkZRRU5YRTVITVFHOFFYQ01KOEg1RElZNC4u')

    //googleform membernaqib
    //start
    //Question Type : Multiple Choice Grid
    const multipleChoiceGridAnswers = [getAnswerNaqib1(), getAnswerNaqib2(), getAnswerNaqib3(), getAnswerNaqib4(), getAnswerNaqib5(), getAnswerNaqib6(), getAnswerNaqib7(), getAnswerNaqib8(), getAnswerNaqib9(), getAnswerNaqib10(), getAnswerNaqib11(), getAnswerNaqib12(), getAnswerNaqib13(), getAnswerNaqib14(), getAnswerNaqib15(), getAnswerNaqib16()];
    for (const answer of multipleChoiceGridAnswers) {
      await page.click(`input[aria-label="${answer}"]`)
    }
    await page.click('button[aria-label="Next"]');

    //Question Type : Multiple Choice 
    const multipleChoiceAnswers =[ getAnswerNaqib17(), getAnswerNaqib18(), getAnswerNaqib19(), getAnswerNaqib20(), getAnswerNaqib21(), getAnswerNaqib22(), getAnswerNaqib23()]
    for (const answer of multipleChoiceAnswers) {
      await page.click(`label[aria-label="${answer}"]`)
    }
    await page.click('button[data-automation-id="submitButton"]');

    // const multipleChoiceGridAnswers2 = [getAnswerNaqib5(), getAnswerNaqib6(), getAnswerNaqib7(), getAnswerNaqib8()];
    // for (const answer of multipleChoiceGridAnswers2) {
    //   await page.click(`input[aria-label="${answer}"]`)
    // }
    // await page.click('button[aria-label="Next"]');

    // const multipleChoiceGridAnswers3 = [getAnswerNaqib9(), getAnswerNaqib10(), getAnswerNaqib11()];
    // for (const answer of multipleChoiceGridAnswers3) {
    //   await page.click(`input[aria-label="${answer}"]`)
    // }
    // await page.click('button[aria-label="Next"]');

    // const multipleChoiceGridAnswers4 = [getAnswerNaqib12(), getAnswerNaqib13(), getAnswerNaqib14(), getAnswerNaqib15()];
    // for (const answer of multipleChoiceGridAnswers4) {
    //   await page.click(`input[aria-label="${answer}"]`)
    // }
    // await page.click('button[aria-label="Next"]');

    // const multipleChoiceGridAnswers5 = [getAnswerNaqib16(), getAnswerNaqib17(), getAnswerNaqib18(), getAnswerNaqib19()];
    // for (const answer of multipleChoiceGridAnswers5) {
    //   await page.click(`input[aria-label="${answer}"]`)
    // }
    // await page.click('button[aria-label="Next"]');

    // //Question Type : Multiple Choice 
    // const multipleChoiceAnswers =[ getAnswerNaqib20(), getAnswerNaqib21(), getAnswerNaqib22(), getAnswerNaqib23(), getAnswerNaqib24(), getAnswerNaqib25(), getAnswerNaqib26(), getAnswerNaqib27(), getAnswerNaqib28(), getAnswerNaqib29()]
    // for (const answer of multipleChoiceAnswers) {
    //   await page.click(`label[aria-label="${answer}"]`)
    // }
    // await page.click('button[data-automation-id="submitButton"]');

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