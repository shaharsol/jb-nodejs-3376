import mongoose from "../../db/mongo";
import { DTO } from "./dto";
import { Model } from "./model";

const schema = new mongoose.Schema({
    symbol: String,
    value: String,
    when: Date,
})

const SymbolValue = mongoose.model<DTO>('SymbolValue', schema);


class Mongo implements Model {
    async add(symbolValue: DTO): Promise<DTO> {
        const newSymbolValue = new SymbolValue(symbolValue);
        await newSymbolValue.save();
        return newSymbolValue;
    }
}

const mongo = new Mongo();
export default mongo;