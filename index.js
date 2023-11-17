const puppeteer = require('puppeteer')

const getRandomName = require('./name/randomName')
const getUserEmail = require('./email/emailUser')

const getAnswer1 = require('./question/firstQuestion')
const getAnswer2 = require('./question/secondQuestion')
const getAnswer3 = require('./question/thirdQuestion')
const getAnswer4 = require('./question/fourthQuestion')
const getAnswer5 = require('./question/fifthQuestion')
const getAnswer6 = require('./question/sixthQuestion')
const getAnswer7 = require('./question/seventhQuestion')  
const getAnswer8 = require('./question/eighthQuestion')
const getAnswer9 = require('./question/ninthQuestion')
const getAnswer10 = require('./question/tenthQuestion')
const getAnswer11 = require('./question/eleventhQuestion')
const getAnswer12 = require('./question/twelfthQuestion')

async function launchPuppeteer(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    //change the url according to the form you want to submit
    await page.goto('https://forms.gle/mXwTvt7zRJAebHCUA')

    let name = getRandomName()

    //Question Type : Paragraph
    await page.type('textarea[aria-labelledby="i1"]', name)  

    //Question Type : Short Answer
    await page.type('input[aria-labelledby="i5"]', getUserEmail(name))

    //Question Type : Linear Scale
    await linearScale(page, "i9", getAnswer1());
    await linearScale(page, "i13", getAnswer2());

    //Question Type : Multiple Choice Grid
    const multipleChoiceGridAnswers = [getAnswer3(), getAnswer4(), getAnswer5(), getAnswer6(), getAnswer7(), getAnswer8(), getAnswer9(), getAnswer10()];
    for (const answer of multipleChoiceGridAnswers) {
      await page.click(`div[aria-label="${answer}"]`)
    }

    //Question Type : Multiple Choice 
    const multipleChoiceAnswers =[ getAnswer11(), getAnswer12()]
    for (const answer of multipleChoiceAnswers) {
      await page.click(`div[id="${answer}"]`)
    }

    //Question Type : Paragraph
    await page.type('textarea[aria-labelledby="i63"]', 'No')  

    await page.click('div[class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]');

    await browser.close();
}

async function linearScale(page, questionId, getAnswer) {
  await page.click(`div[aria-labelledby="${questionId}"] [aria-posinset="${getAnswer}"]`);
}

function recursion(){
  process.setMaxListeners(20);
  console.time('HazimBot'); 
  for(let i =0; i< 15; i++){
     launchPuppeteer()
  }
  console.timeEnd('HazimBot');
  console.log('Memory Usage:', process.memoryUsage());
}

recursion();