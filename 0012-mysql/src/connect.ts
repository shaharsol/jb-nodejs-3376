import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'mydb',
  port: 3306
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
