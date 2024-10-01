import db from "../../db/mongo";
import { DTO } from "./dto";
import { Model } from "./model";

const { Schema, model} = db;

const SymbolValueSchema = new Schema({
    symbol: String,
    value: String,
    createdAt: Date
})

const SymbolValue = model<DTO>('symbol_values', SymbolValueSchema)

class Mongo implements Model {
    async add(symbolValue: DTO): Promise<DTO> {
        const newSymbolValue = new SymbolValue(symbolValue)
        await newSymbolValue.save()
        console.log('in mongo')
        return newSymbolValue
    }
}

const mongo = new Mongo()
export default mongo;