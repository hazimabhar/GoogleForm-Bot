const puppeteer = require('puppeteer')

let page;

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
    page = await browser.newPage();
    //change the url according to the form you want to submit
    await page.goto('https://forms.gle/mXwTvt7zRJAebHCUA')
    await page.waitForNavigation(); // Wait for the page to load

    let name = getRandomName()

    //Question Type : Paragraph
    await page.type('textarea[aria-labelledby="i1"]', name)  

    //Question Type : Short Answer
    await page.type('input[aria-labelledby="i5"]', getUserEmail(name))

    // await page.click('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]')

    // await page.click(`div[aria-label="${getAnswer1()}"]`);

    // await page.click(`div[aria-label="${getAnswer2()}"]`);

    // await page.click(`div[aria-label="${getAnswer3()}"]`);

    // await page.click(`div[aria-label="${getAnswer4()}"]`);


      // Function to choose the rate for a question
    // const chooseRating = async (questionId, ratingValue) => {
    //   await page.evaluate((id, value) => {
    //     const radioElement = document.querySelector(`div[jsname="cnAzRb"] input[data-value="${value}"]`);
    //     if (radioElement) {
    //       radioElement.click();
    //     }
    //   }, questionId, ratingValue);
    // };
  
    // // Choose rates for both questions
    // await chooseRating('i1', '3'); // Choose rate 3 for Question 1
    // await chooseRating('i5', '4'); // Choose rate 4 for Question 2

    // await page.click('div[aria-labelledby="i1"] [aria-posinset="1"] ');

    // await page.click('div[aria-labelledby="i5"] [aria-posinset="5"] ');

    //Question Type : Linear Scale
    linearScale("i9", getAnswer1())
    linearScale("i13", getAnswer2())

    //Question Type : Multiple Choice Grid
    // const answers = [getAnswer3(), getAnswer4(), getAnswer5(), getAnswer6()];

    // for (const answer of answers) {
    //   await page.click(`div[aria-label="${answer}"]`);
    // }

    // multipleChoice(getAnswer11())

    // multipleChoice(getAnswer12())


        //Question Type : Paragraph
        await page.type('textarea[aria-labelledby="i63"]', 'No')  

    // await page.click('.Od2TWd[aria-posinset="5"]');

    // await page.click(`div[aria-label=test] div[data-value=${getAnswer1()}]`);

    // await page.click(`div[aria-label=row2] div[data-value=${getAnswer2()}]`);

    // await page.click(`div[aria-label=row3] div[data-value=${getAnswer3()}]`);

    // await page.click(`div[aria-label=row4] div[data-value=${getAnswer4()}]`);

    await page.click('div[class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]');

    await browser.close();
}

async function linearScale(questionId, scale) {

  await page.click(`div[aria-labelledby="${questionId}"] [aria-posinset="${scale}"]`);

}

async function multipleChoice(answer){
  await page.click(`div[id=${answer}]`);
}

function recursion(){
  process.setMaxListeners(20);
  console.time('HazimBot'); 
  for(let i =0; i< 10; i++){
    launchPuppeteer()
  }
  console.timeEnd('HazimBot');
  console.log('Memory Usage:', process.memoryUsage());
}

recursion();