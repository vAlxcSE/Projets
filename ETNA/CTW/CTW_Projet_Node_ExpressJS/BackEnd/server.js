const mysql = require("mysql")
const express = require("express");
const port = process.env.PORT || 8000
const jwt = require('jsonwebtoken')

const app = express();

// const users = require('./routes/users')
// app.use("/users", users)

app.get('/', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Api_node',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    })
    
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

// app.get('/jwt', (req, res) => {
//     const createTokenFromJson = (jsonData, secretkey, option = {}) => {
//         try {
//             const token = jwt.sign(jsonData, secretkey, option)
//             return token
//         } catch(error) {
//             console.log("Error : ", error.message)
//             return null
//         }

//     const jsonData = { email :"", password :""}
//     const token = createTokenFromJson(jsonData)

//     res.json({ token : true })
// })


app.listen(port, () => {
   console.log("Serveur en ligne");
})