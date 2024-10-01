import { DTO } from "./dto";

export interface Model {
    add(symbolValue: DTO): Promise<DTO>
}