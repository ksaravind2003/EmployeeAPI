'user strict';

const mysql = require('mysql');

//AWS mysql db connection
const dbConn = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

dbConn.connect(function (err) {
    console.log(`${process.env.user}`)
    if (err) { 
        console.log(err)
        throw err 
    }
    console.log("Database Connected!");
});

module.exports = dbConn;