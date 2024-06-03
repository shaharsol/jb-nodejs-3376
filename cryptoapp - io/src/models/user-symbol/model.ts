import { DTO } from "./dto";

export interface Model {
    add(userSymbol: DTO): Promise<DTO>;
    getForUser(id: number): Promise<DTO[]>
    getUniqueSymbols(): Promise<{symbol:string}[]>
}