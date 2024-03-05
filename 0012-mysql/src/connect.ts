import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'mydb',
  port: 3310
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
