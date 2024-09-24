import config from 'config'
import getModel from './models/user-symbol/factory'

async function scrapeSymbolValue(symbol: string): Promise<string> {

}

async function work() {

    const symbols = await getModel().getUnique()
    Promise.allSettled(symbols.map(({symbol}) => scrapeSymbolValue(symbol)))

    setTimeout(work, config.get<number>('worker.interval'))
}

work()