import { DTO } from "./dto";
import { Model } from "./model";
import query from "../../db/mysql";
import { OkPacketParams } from "mysql2";

class MySQL implements Model {
    async add(userSymbol: DTO): Promise<DTO> {
        const { userId, symbol } = userSymbol;
        const result: OkPacketParams = await query (`
            INSERT INTO users_symbols
            (user_id, symbol)
            values
            (?, ?)
        `, [userId, symbol])
        
        return {
            id: result.insertId,
            ...userSymbol
        }
    }
}

const mysql = new MySQL();
export default mysql;