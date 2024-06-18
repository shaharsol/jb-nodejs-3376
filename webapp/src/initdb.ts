import mysql from 'mysql2';
import config from 'config'
import { promisify } from 'util';

const connection = mysql.createConnection(config.get('mysql'));

const connect = promisify(connection.connect).bind(connection);
const query = promisify(connection.query).bind(connection);

(async() => {
    try {
        await connect();
        console.log('connected')

        await query(`
            CREATE TABLE IF NOT EXISTS users (
                id int auto_increment,
                github_id varchar(255) not null,
                primary key (id)
            ) 
        `)
        console.log('created users table')
    
    } catch (err) {
        console.error(err)
    }
})();

