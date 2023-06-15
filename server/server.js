const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

connection.connect((err) => {
    if(err) {
        console.log(err.message)
    }
    console.log('db ' + connection.state)
})

//read
app.get('/players', (req, res) => {
    connection.query('SELECT * FROM squad', (err, result) => {
        if(err) {
            console.log(err)
        }else {
            res.send(result)
        }
    })
})



app.listen(process.env.PORT, () => console.log('app is running'));