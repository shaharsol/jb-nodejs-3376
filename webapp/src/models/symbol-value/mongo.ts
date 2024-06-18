import { DTO } from "./dto";
import { Model } from "./model";
import mongoose from "../../db/mongo";

const symbolValueSchema = new mongoose.Schema({
    symbol: String,
    value: String,
    when: Date
});

const SymbolValue = mongoose.model<DTO>('symbol_values', symbolValueSchema);

class Mongo implements Model {
    async add(symbolValue: DTO): Promise<DTO> {
        const newSymbolValue = new SymbolValue(symbolValue)
        await newSymbolValue.save()
        return newSymbolValue
    }
}

const mongo = new Mongo();
export default mongo;