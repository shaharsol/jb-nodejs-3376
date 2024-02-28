import mysql from 'mysql2';
import util from 'util';

const pool = mysql.createPool({
  host: "localhost",
  user: "username",
  password: "password",
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

const query = util.promisify(pool.query).bind(pool);

(async () => {
  try {
    const result2 = await pool.execute(`
      select * from users where id = ?;
    `, [
      6
    ])

    console.log(result2);
  } catch (e) {
    console.log(e);
  }
})();




