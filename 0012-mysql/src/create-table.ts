import mysql from 'mysql2';
import util from 'util';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'mydb',
  port: 3310
});

const connect = util.promisify(connection.connect).bind(connection);
const query = util.promisify(connection.query).bind(connection);
(async () => {
  try {
    await connect();
    console.log("Connected!");

    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id int auto_increment,
        username varchar(255) not null,
        password varchar(255) not null,
        email varchar(255) not null,
        birthday date not null,
        primary key (id)
      )    
    `);
    console.log("created table users!");

  } catch (e) {
    console.log(e);
  }
})();
