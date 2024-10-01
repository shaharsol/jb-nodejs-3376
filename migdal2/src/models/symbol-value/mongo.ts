import db from "../../db/mongo";
import { DTO } from "./dto";
import { Model } from "./model";

const { Schema, model } = db;

const SymbolValueSchema = new Schema({
    symbol: String,
    value: String,
    createdAt: Date
})

const SymbolValue = model<DTO>('symbol_values', SymbolValueSchema)

class Mongo implements Model {
    async getLatest(symbol: string): Promise<DTO> {
        const latest = await SymbolValue.find({ symbol }).sort({createdAt: -1}).limit(1)
        return latest[0]
    }

    async add(symbolValue: DTO): Promise<DTO> {
        const newSymbolValue = new SymbolValue(symbolValue)
        await newSymbolValue.save()
        console.log('in mongo')
        return newSymbolValue
    }
}

const mongo = new Mongo()
export default mongo;