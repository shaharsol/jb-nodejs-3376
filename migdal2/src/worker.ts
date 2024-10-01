import config from 'config'
import getModel from './models/user-symbol/factory'
import axios from 'axios'
import * as cheerio from 'cheerio';

async function scrapeSymbolValue(symbol: string): Promise<string> {
    const url = `https://www.google.com/finance/quote/${symbol}-USD`
    const response = await axios<string>(url)
    const html = response.data

    const $ = cheerio.load(html)
    const value = $('.YMlKec.fxKbKc').html()

    console.log(`value of ${symbol} is ${value}`)
    
    // return Promise.resolve('')
    return ''

}

async function work() {

    const symbols = await getModel().getUnique()
    console.log(`worker will scrape`, symbols)
    Promise.allSettled(symbols.map(({symbol}) => scrapeSymbolValue(symbol)))

    setTimeout(work, config.get<number>('worker.interval'))
}

work()