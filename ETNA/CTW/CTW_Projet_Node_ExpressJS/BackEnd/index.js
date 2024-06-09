const express = require("express");
const port = process.env.PORT || 8000
const jwt = require('jsonwebtoken')
const mysql = require('mysql');

const app = express();

// const users = require('./routes/users')
// app.use("/users", users)

app.get('/', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'myuser',
        password: 'mypassword',
        database: 'ECOM',
    });

    connection.connect((err) => {
        if (err){
            console.error("Erreur de connexion : "+err.stack)
            return;
        }
        console.log("Connexion à la db réussie")
    });
        
    connection.query("SELECT * FROM users",(err, rows, fields) => {
        if (err) throw err;
        return res.status(200).json(rows)
    }) 
})

app.listen(port, () => {
   console.log("Serveur en ligne");
});