import mysql from 'mysql2'
import config from 'config'
import { promisify } from 'util'

const connection = mysql.createConnection(config.get('mysql'))

const connect = promisify(connection.connect).bind(connection);
const query = promisify(connection.query).bind(connection);

(async () => {
    try {
        await connect()
        console.log('connected to DB')

        await query(`
            CREATE TABLE IF NOT EXISTS users (
                id int auto_increment,
                github_id varchar(255) not null,
                primary key(id)
            )
        `)
        console.log('created table users')

        await query(`
            CREATE TABLE IF NOT EXISTS users_symbols (
                id int auto_increment,
                user_id int not null,
                symbol varchar(3) not null,
                primary key(id),
                CONSTRAINT unique_user_id_symbol UNIQUE (user_id, symbol)
            )
        `)
        console.log('created table users_symbols')
        
        connection.end()

    } catch (e) {
        console.error(e)
    }
})()