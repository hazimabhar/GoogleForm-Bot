const puppeteer = require('puppeteer')

// const getRandomName = require('./name/randomName')
// const getUserEmail = require('./email/emailUser')

// const getAnswer1 = require('./question/firstQuestion')
// const getAnswer2 = require('./question/secondQuestion')
// const getAnswer3 = require('./question/thirdQuestion')
// const getAnswer4 = require('./question/fourthQuestion')
// const getAnswer5 = require('./question/fifthQuestion')
// const getAnswer6 = require('./question/sixthQuestion')
// const getAnswer7 = require('./question/seventhQuestion')  
// const getAnswer8 = require('./question/eighthQuestion')
// const getAnswer9 = require('./question/ninthQuestion')
// const getAnswer10 = require('./question/tenthQuestion')
// const getAnswer11 = require('./question/eleventhQuestion')
// const getAnswer12 = require('./question/twelfthQuestion')

const getAnswerFaiz1 = require('./memberfaizgoogleform/1')
const getAnswerFaiz2 = require('./memberfaizgoogleform/2')
const getAnswerFaiz3 = require('./memberfaizgoogleform/3')
const getAnswerFaiz4 = require('./memberfaizgoogleform/4')
const getAnswerFaiz5 = require('./memberfaizgoogleform/5')
// const getAnswerFaiz6 = require('./memberfaizgoogleform/6')
const getAnswerFaiz7 = require('./memberfaizgoogleform/7')
const getAnswerFaiz8 = require('./memberfaizgoogleform/8')

const getAnswerFaiz9 = require('./memberfaizgoogleform/9')
const getAnswerFaiz10 = require('./memberfaizgoogleform/10')
const getAnswerFaiz11 = require('./memberfaizgoogleform/11')
const getAnswerFaiz12 = require('./memberfaizgoogleform/12')
const getAnswerFaiz13 = require('./memberfaizgoogleform/13')
const getAnswerFaiz14 = require('./memberfaizgoogleform/14')
const getAnswerFaiz15 = require('./memberfaizgoogleform/15')
const getAnswerFaiz16 = require('./memberfaizgoogleform/16')
const getAnswerFaiz17 = require('./memberfaizgoogleform/17')
const getAnswerFaiz18 = require('./memberfaizgoogleform/18')
const getAnswerFaiz19 = require('./memberfaizgoogleform/19')
const getAnswerFaiz20 = require('./memberfaizgoogleform/20')
const getAnswerFaiz21 = require('./memberfaizgoogleform/21')
const getAnswerFaiz22 = require('./memberfaizgoogleform/22')
const getAnswerFaiz23 = require('./memberfaizgoogleform/23')
const getAnswerFaiz24 = require('./memberfaizgoogleform/24')

// const getAnswerFaiz25 = require('./memberfaizgoogleform/25')
// const getAnswerFaiz26 = require('./memberfaizgoogleform/26')
// const getAnswerFaiz27 = require('./memberfaizgoogleform/27')



async function launchPuppeteer(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    //change the url according to the form you want to submit
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSfDrYHaMkw-Iyaav1XcHhdZMbuSytRGpJIMCQuCCLwSihtHBQ/viewform')

    //googleform memberfaiz
    //start

    const multipleChoiceAnswers =[ getAnswerFaiz1(), getAnswerFaiz2(), getAnswerFaiz3(), getAnswerFaiz4(), getAnswerFaiz5()]
    for (const answer of multipleChoiceAnswers) {
      await page.click(`div[id="${answer}"]`)
    }
    let age = Math.floor(Math.random() * 45) + 25
    await page.type('input[aria-labelledby="i72"]', age.toString())
    await page.type('input[aria-labelledby="i76"]', getAnswerFaiz7())
    await page.click(`div[id="${getAnswerFaiz8()}"]`)
    await page.click('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]');
    await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' });

    const multipleChoiceAnswers2 =[ getAnswerFaiz9(), getAnswerFaiz10(), getAnswerFaiz11(), getAnswerFaiz12(), getAnswerFaiz13(), getAnswerFaiz14()]
    for (const answer of multipleChoiceAnswers2) {
      await page.click(`div[id="${answer}"]`)
    }
    const buttons = await page.$$('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]');
    if (buttons.length >= 2) {
      await buttons[1].click(); // Click the second button
    } else {
      console.error('There are not enough buttons with the specified class.');
    }
    await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' });

    const multipleChoiceAnswers3 =[ getAnswerFaiz15(), getAnswerFaiz16(), getAnswerFaiz17(), getAnswerFaiz18()]
    for (const answer of multipleChoiceAnswers3) {
      await page.click(`div[id="${answer}"]`)
    }
    const buttons2 = await page.$$('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]');
    if (buttons2.length >= 2) {
      await buttons2[1].click(); // Click the second button
    } else {
      console.error('There are not enough buttons with the specified class.');
    }
    await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' });

    const multipleChoiceAnswers4 =[ getAnswerFaiz19(), getAnswerFaiz20(), getAnswerFaiz21(), getAnswerFaiz22(), getAnswerFaiz23(), getAnswerFaiz24()]
    for (const answer of multipleChoiceAnswers4) {
      await page.click(`div[id="${answer}"]`)
    }
    const buttons3 = await page.$$('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]');
    if (buttons3.length >= 2) {
      await buttons3[1].click(); // Click the second button
    } else {
      console.error('There are not enough buttons with the specified class.');
    }
    await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' });
    
    await page.click('div[class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]');

    // await page.click('div[class="e19J0b CeoRYc"]');
    // await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' });
   
    // //Question Type : Multiple Choice 
    // const multipleChoiceAnswers =[ getAnswerFaiz1(), getAnswerFaiz2(), getAnswerFaiz3(), getAnswerFaiz4(), getAnswerFaiz5(), getAnswerFaiz6(), getAnswerFaiz7(), getAnswerFaiz8()]
    // for (const answer of multipleChoiceAnswers) {
    //   await page.click(`div[id="${answer}"]`)
    // }
    // const buttons = await page.$$('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]');
    // if (buttons.length >= 2) {
    //   await buttons[1].click(); // Click the second button
    // } else {
    //   console.error('There are not enough buttons with the specified class.');
    // }
    // await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' });
    
    // const multipleChoiceAnswers2 =[ getAnswerFaiz9(), getAnswerFaiz10(), getAnswerFaiz11(), getAnswerFaiz12(), getAnswerFaiz13(), getAnswerFaiz14(), getAnswerFaiz15(), getAnswerFaiz16(),getAnswerFaiz17(), getAnswerFaiz18(), getAnswerFaiz19(), getAnswerFaiz20(), getAnswerFaiz21(), getAnswerFaiz22(), getAnswerFaiz23()]
    // for (const answer of multipleChoiceAnswers2) {
    //   await page.click(`div[id="${answer}"]`)
    // }
    // const buttons2 = await page.$$('div[class="uArJ5e UQuaGc YhQJj zo8FOc ctEux"]');
    // if (buttons2.length >= 2) {
    //   await buttons2[1].click(); // Click the second button
    // } else {
    //   console.error('There are not enough buttons with the specified class.');
    // }
    // await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' });

    // const multipleChoiceAnswers3 =[ getAnswerFaiz24(), getAnswerFaiz25(), getAnswerFaiz26(), getAnswerFaiz27()]
    // for (const answer of multipleChoiceAnswers3) {
    //   await page.click(`div[id="${answer}"]`)
    // }
    // await page.click('div[class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]');


    // let name = getRandomName()

    // //Question Type : Paragraph
    // await page.type('textarea[aria-labelledby="i1"]', name)  

    // //Question Type : Short Answer
    // await page.type('input[aria-labelledby="i5"]', getUserEmail(name))

    // //Question Type : Linear Scale
    // await linearScale(page, "i9", getAnswer1());
    // await linearScale(page, "i13", getAnswer2());

    // //Question Type : Multiple Choice Grid
    // const multipleChoiceGridAnswers = [getAnswer3(), getAnswer4(), getAnswer5(), getAnswer6(), getAnswer7(), getAnswer8(), getAnswer9(), getAnswer10()];
    // for (const answer of multipleChoiceGridAnswers) {
    //   await page.click(`div[aria-label="${answer}"]`)
    // }

    // //Question Type : Multiple Choice 
    // const multipleChoiceAnswers =[ getAnswer11(), getAnswer12()]
    // for (const answer of multipleChoiceAnswers) {
    //   await page.click(`div[id="${answer}"]`)
    // }

    // //Question Type : Paragraph+
    // await page.type('textarea[aria-labelledby="i63"]', 'No')  

    // await page.click('div[class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]');

    await browser.close();
}

// async function linearScale(page, questionId, getAnswer) {
//   await page.click(`div[aria-labelledby="${questionId}"] [aria-posinset="${getAnswer}"]`);
// }

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