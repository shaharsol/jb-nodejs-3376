import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import { DTO } from "./dto";
import { Model } from "./model";

class MySql implements Model {
    async getForUser(userId: number): Promise<DTO[]> {
        const usersSymbols: DTO[] = await query(`
            SELECT id, user_id, symbol
            FROM   users_symbols
            WHERE  user_id = ?
        `, [userId])
        return usersSymbols
    }

    async add(dto: DTO): Promise<DTO> {
        const { userId, symbol } = dto
        const response: OkPacketParams = await query(`
            INSERT INTO users_symbols
            (user_id, symbol)
            VALUES
            (?, ?)
        `, [userId, symbol])

        const id = response.insertId

        return {
            id,
            ...dto
        }
    }
    
}

const mysql = new MySql()
export default mysql