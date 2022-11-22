const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1738',
    database: 'csc317db',
    queueLimit: 0,
    connectionLimit: 20,
    waitForConnections: true
})

const promisePool = pool.promise();

module.exports = promisePool;