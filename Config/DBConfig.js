'user strict';

const mysql = require('mysql');

//AWS mysql db connection
const dbConn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port:'3306'
});

dbConn.connect(function (err) {
    console.log(`Initializing DB connection ...,`)  
    if (err) { 
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log("Database Connected!");
});

module.exports = dbConn;