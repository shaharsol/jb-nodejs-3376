import mysql from 'mysql2';
import util from 'util';

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: 'mydb',
  port: 3310,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

const query = util.promisify(pool.query).bind(pool);

(async () => {
  try {
    const result2 = await query(`
      select * from users where id = ?;
    `, [
      1
    ])

    console.log(result2);
  } catch (e) {
    console.log(e);
  }
})();




