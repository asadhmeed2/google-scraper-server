import * as puppeteer from 'puppeteer'


const randomeIntFromInterval =(min: number, max: number) =>{
    const number = Math.floor(Math.random()* (max -min) +min)
    return number;
}

let sleep_for = async (page :puppeteer.Page,min:number,max:number) => {
    let sleep_duration = randomeIntFromInterval(min,max);
    console.log('oaitin for ',sleep_duration /1000, 'seconds');
    await page.waitForTimeout(sleep_duration);
}

let main_actual = async (text:string) => {
    try {

        const browser = await puppeteer.launch({headless:false});
        const page =await browser.newPage();
        const URL ="https://google.com/";
        await page.setViewport({
            width: 1450,
            height: 800,
            deviceScaleFactor:1
        });
        await page.goto(URL,{waitUntil:"networkidle2"});
        await sleep_for(page,1000,2000);
        const input =  await page.$("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input");
        if(input){
            await input.focus();
            await page.keyboard.type(text,{delay: 200});
            await page.keyboard.press('Enter');
            await page.waitForNavigation();

            let firstSearchResult = await page.$x('//div[@class="g"]')
            const secondSearchResult = await page.$x('//div[@class="g tF2Cxc"]')
            firstSearchResult=[...secondSearchResult]
            // firstSearchResult.map(async (elemen)=>{
            //    const value= await elemen.$$("a > h3 > span")
            //         console.log("///////////////////////////////////////////////////")
            //         console.log( Object.values(value[0]));
            //         console.log("///////////////////////////////////////////////////")
                
                
                
            // })
            let titles = await page.$$('.yuRUbf a h3 [dir="ltr"]');
            console.log(titles.length);
            
            // titles.map( (title)=>{
            //     console.log(title._context);
                
            // })

            // await page.$$eval('#search',(searchList)=>{
            //     console.log(searchList.length);
                
            //     if(searchList.length>0){    
            //         console.log("searchList");
            //     }
            // });
            // searchList.map(value=>{
            //     console.table(value);  
            // });

            
        }
    }catch{

    }
}

let main = async (text:string) => {
    await main_actual(text);
}

main("asaad")