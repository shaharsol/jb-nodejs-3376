import mysql from 'mysql2';
import config from 'config'
import { promisify } from 'util';

const connection = mysql.createConnection(config.get('mysql'));

const connect = promisify(connection.connect).bind(connection);

(async() => {
    try {
        await connect();
        console.log('connected')
    
    } catch (err) {
        console.error(err)
    }
})();

