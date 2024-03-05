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

(async () => {
  try {
    await connect();
    console.log("Connected!");
  } catch (e) {
    console.log(e);
  }
})();





