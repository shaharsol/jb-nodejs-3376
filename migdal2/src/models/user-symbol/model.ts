import { DTO } from "./dto";

export interface Model {
    add(symbol: DTO): Promise<DTO>
    getForUser(id: number): Promise<DTO[]>
    getUnique(): Promise<{symbol: string}[]>
}