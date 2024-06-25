import { DTO } from "./dto";
import { Model } from "./model";
import query from "../../db/mysql";
import { OkPacketParams } from "mysql2";

class MySQL implements Model {
    async signup(user: DTO): Promise<DTO> {
        const { githubId } = user;
        const result: OkPacketParams = await query (`
            INSERT INTO users
            (github_id)
            values
            (?)
        `, [githubId])
        
        return {
            id: result.insertId,
            ...user
        }
    }
    async login(user: DTO): Promise<DTO> {
        const { githubId } = user;
        const record = await query(`
            SELECT  id, github_id
            FROM    users
            WHERE   github_id = ?
        `, [githubId])
        return record[0];
    }
}

const mysql = new MySQL();
export default mysql;