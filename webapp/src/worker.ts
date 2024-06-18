import { getModel as getSymbolValueModel } from "./models/symbol-value/factory";
import { getModel as getUserSymbolModel } from "./models/user-symbol/factory";
import config from 'config';
import cheerio from "cheerio";
import axios from "axios";


// (async() => {
//     const symbolValue = {
//         symbol: 'BTC',
//         value: '60000',
//         when: new Date()
//     }
//     const result = await getModel().add(symbolValue)
//     console.log(result)
// })()
async function scrape(symbol: string) {

    const response = await axios(`https://www.google.com/finance/quote/${symbol}-USD`)
    const html = response.data;

    const $ = cheerio.load(html);
    const value = $('.YMlKec.fxKbKc').html()
    const symbolValue = {
        symbol,
        value,
        when: new Date()
    }
    await getSymbolValueModel().add(symbolValue)
    console.log('saved symbol value in mongo', symbolValue)

}
async function work() {

    const symbolsToScrape = await getUserSymbolModel().getDistinctSymbols()
    const result = await Promise.allSettled(symbolsToScrape.map(({symbol}) => scrape(symbol)))
    console.log('will scrape', symbolsToScrape)

    setTimeout(work, config.get('worker.interval'))

}

work()
