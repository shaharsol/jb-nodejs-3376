import { DTO } from "./dto";
import { Model } from "./model";
import query from '../../db/mysql';
import { OkPacketParams } from "mysql2";

class MySQL implements Model {
    async login(githubId: string): Promise<DTO> {
        const result = await query(`
            SELECT  id,
                    github_id
            FROM    users
            WHERE   github_id = ?
        `, [githubId]);
        return result[0];
    }
    async signup(githubId: string): Promise<DTO> {
        const result: OkPacketParams = await query(`
            INSERT INTO users
            (github_id)
            VALUES
            (?)
        `, [githubId]);

        return {
            id: result.insertId,
            githubId
        }
    }
}

const mysql = new MySQL();
export default mysql;