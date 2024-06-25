import config from 'config';
import mysql from 'mysql2';
import { promisify } from 'util';

export const pool = mysql.createPool(config.get('mysql'));

const query = promisify(pool.query).bind(pool);

export default query;
