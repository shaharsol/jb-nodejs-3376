import { DTO } from "./dto";

export interface Model {
    add(symbol: DTO): Promise<DTO>
    getForUser(userId: number): Promise<DTO[]>
}