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
    async getLatest(symbol: string): Promise<DTO> {
        const latest = await SymbolValue.find({ symbol }).sort({when: -1}).limit(1);
        return latest[0]
    }
    async add(symbolValue: DTO): Promise<DTO> {
        const newSymbolValue = new SymbolValue(symbolValue)
        await newSymbolValue.save()
        return newSymbolValue
    }
}

const mongo = new Mongo();
export default mongo;