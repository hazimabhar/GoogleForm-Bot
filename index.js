const puppeteer = require('puppeteer');
const faker = require('faker');

// Set the locale to Malay
faker.locale = 'ms_MY';


async function launchPuppeteer(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //change the url according to the form you want to submit
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSduKBn_YZN2rOROntHELoflob918hQ7lgWzbIPjbv3hwHeyaA/viewform?usp=sf_link')
    
    // Generate a random Malay name
    const randomMalayName = faker.name.findName();

    console.log(randomMalayName);
    // let username = faker.name.findName();

    await page.type('input[aria-labelledby="i1"]', 'Test')  
    await page.type('input[aria-labelledby="i5"]',  '@gmail.com');

    await page.click('div[class="uArJ5e UQuaGc Y5sE8d VkkpIf QvWxOd"]');

    // await page.waitForNavigation();

    await page.screenshot({
        path: 'screenshot.jpg',
      });

    await browser.close();
}

launchPuppeteer()