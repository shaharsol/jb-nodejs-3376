import { DTO } from "./dto";

export interface Model {
    add(SymbolValue: DTO): Promise<DTO>;
}