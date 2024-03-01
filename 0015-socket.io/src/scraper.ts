import axios from "axios";
import cheerio from 'cheerio';

async function scrape (symbol) {
    const result = await axios(`https://www.google.com/finance/quote/${symbol}-USD`);
    const $ = cheerio.load(result.data);
    const value = $('.YMlKec.fxKbKc').text().replace(',','');
    console.log(`Scraped ${value} for ${symbol}`);
}

scrape('BTC')