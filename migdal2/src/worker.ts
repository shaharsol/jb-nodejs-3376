import config from 'config'
import getUserSymbolModel from './models/user-symbol/factory'
import getSymbolValueModel from './models/symbol-value/factory'
import axios from 'axios'
import * as cheerio from 'cheerio';

async function scrapeSymbolValue(symbol: string): Promise<void> {
    const url = `https://www.google.com/finance/quote/${symbol}-USD`
    const response = await axios<string>(url)
    const html = response.data

    const $ = cheerio.load(html)
    const value = $('.YMlKec.fxKbKc').html()

    console.log(`value of ${symbol} is ${value}`)
    
    const createdAt = new Date()
    await getSymbolValueModel().add({
        symbol,
        value,
        createdAt
    })
    console.log(`saved ${symbol} record in mongo`)

}

async function work() {

    const symbols = await getUserSymbolModel().getUnique()
    console.log(`worker will scrape`, symbols)
    Promise.allSettled(symbols.map(({symbol}) => scrapeSymbolValue(symbol)))

    setTimeout(work, config.get<number>('worker.interval'))
}

work()