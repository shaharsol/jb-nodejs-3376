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
      insert into users (username, password, email, birthday)
      values (?, ?, ?, ?)
    `, ['shahar', 'password', 'shahar@johnbryce.co.il', '1975-07-18']);
    console.log("user inserted!");

  } catch (e) {
    console.log(e);
  }
})();



