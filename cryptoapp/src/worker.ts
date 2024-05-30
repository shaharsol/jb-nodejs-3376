import config from 'config';
import mysql from 'mysql2';
import { promisify } from 'util';
import getModel from './models/user-symbol/factory';
import axios from 'axios';
import cheerio from 'cheerio';

const connection = mysql.createConnection(config.get('mysql'));

const connect = promisify(connection.connect).bind(connection);
const query = promisify(connection.query).bind(connection);

async function scrape(symbol: string) {
    const response = await axios(`https://www.google.com/finance/quote/${symbol}-USD`)
    const html = response.data;
    const $ = cheerio.load(html);
    const scrapedString = $('.YMlKec.fxKbKc').text()
    console.log(scrapedString)
}

async function work() {
    try {
        // await connect();
        // console.log('connected to MySQL');

        // const uniqueSymbols = await getModel().getUniqueSymbols();
        // console.log(uniqueSymbols)

        await scrape('BTC')

        // connection.end()

    } catch (err) {
        console.error(err)
    }
}

work();