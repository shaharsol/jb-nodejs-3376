import { Date, ObjectId } from "mongoose";

export default interface DTO {
    id: ObjectId,
    symbol: string,
    value: number,
    when: Date,
}
