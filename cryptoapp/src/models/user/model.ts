import { DTO } from "./dto";

export interface Model {
    login(githubId: string): Promise<DTO>;
    signup(githubId: string): Promise<DTO>
}