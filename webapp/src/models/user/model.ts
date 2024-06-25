import { DTO } from "./dto";

export interface Model {
    signup(user: DTO): Promise<DTO>
    login(user: DTO): Promise<DTO>
}