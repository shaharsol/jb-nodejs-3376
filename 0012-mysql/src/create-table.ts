import mysql from 'mysql2';
import util from 'util';

const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: 'mydb',
});

const connect = util.promisify(connection.connect).bind(connection);
const query = util.promisify(connection.query).bind(connection);
(async () => {
  try {
    await connect();
    console.log("Connected!");

    await query(`
      CREATE TABLE users (
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
