import { ObjectId } from "mongoose";
import DTO from "./dto";

export default interface Model {
    getLatest(symbol: string): Promise<DTO>;
    add(symbolValue: DTO): Promise<DTO>;
}