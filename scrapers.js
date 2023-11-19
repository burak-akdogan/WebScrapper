const puppeteer = require ('puppeteer');

async function scrapeProduct(url){
    const browser= await puppeteer.launch();
    const page= await browser.newPage();
    await page.goto(url);
    //img
    const[el]= await page.$x('//*[@id="contentRoot"]/section[1]/div[2]/div[1]/div/article[2]/div/a/div/div/img');
    const src = await el.getProperty('src');
    const imgURL = await src.jsonValue();
    //title
    const[el2]= await page.$x('//*[@id="contentRoot"]/section[1]/div[2]/div[1]/div/article[2]/div/div/div[1]/a/h2/span');
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();
// article 2
 //img2  
 const[el3]= await page.$x('//*[@id="contentRoot"]/section[1]/div[2]/div[1]/div/article[3]/div/a/div/div/img');
 const src2 = await el3.getProperty('src');
 const imgURL2 = await src2.jsonValue();
 //title2
 const[el4]= await page.$x('//*[@id="contentRoot"]/section[1]/div[2]/div[1]/div/article[3]/div/div/div[1]/a/h2/span');
 const txt2 = await el4.getProperty('textContent');
 const title2 = await txt2.jsonValue();

    console.log({imgURL, title});
    console.log({imgURL2, title2});
    browser.close();
}

scrapeProduct('https://www.theblock.co/')



