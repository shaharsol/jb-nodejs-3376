import Model from './model';
import mongoose from '../../db/mongo';
import DTO from './dto';

const symbolValueSchema = new mongoose.Schema<DTO>({
     
    symbol: String,
    value: String,
    when: Date,
});

const SymbolValueModel = mongoose.model<DTO>('SymbolValue', symbolValueSchema)

class SymbolValue implements Model {
    async getLatest(symbol: string): Promise<DTO> {
        return SymbolValueModel.findOne({symbol}).sort({when: -1}).limit(1)
    }
    async add(symbolValue: DTO): Promise<DTO> {
        const newSymbolValue = new SymbolValueModel(symbolValue);
        await newSymbolValue.save();
        return newSymbolValue;
    }
    
}

const symbolValue = new SymbolValue();
export default symbolValue;

