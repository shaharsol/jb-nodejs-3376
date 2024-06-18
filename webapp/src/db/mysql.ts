import mysql from 'mysql2';
import config from 'config';
import { promisify } from 'util';

const pool = mysql.createPool(config.get('mysql'));

const query = promisify(pool.query).bind(pool);

export default query;
