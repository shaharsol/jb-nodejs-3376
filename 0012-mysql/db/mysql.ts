import mysql from 'mysql2';
import { promisify } from 'util';
import config from 'config';

export const pool = mysql.createPool({
    connectionLimit: config.get<number>('mysql.connectionLimit'),
    host: config.get<string>('mysql.host'),
    user: config.get<string>('mysql.user'),
    password: config.get<string>('mysql.password'),
    database: config.get<string>('mysql.database'),
    port: config.get<number>('mysql.port')
});

const query = promisify(pool.query).bind(pool);
export default query;



