import mysql from 'mysql2';
console.log({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    port: process.env.DB_PORT as unknown as number,
})
const connection = mysql.createConnection({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    port: process.env.DB_PORT as unknown as number,
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});
