import { getModel } from "./models/symbol-value/factory";

(async() => {
    const symbolValue = {
        symbol: 'BTC',
        value: '60000',
        when: new Date()
    }
    const result = await getModel().add(symbolValue)
    console.log(result)
})