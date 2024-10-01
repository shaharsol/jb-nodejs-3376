import { ObjectId } from "mongoose";

export interface DTO {
    _id?: ObjectId
    symbol: string;
    value: string;
    createdAt: Date;
}