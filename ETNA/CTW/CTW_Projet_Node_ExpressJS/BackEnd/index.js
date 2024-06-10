const express = require("express");
const port = process.env.PORT || 8000
const mysql = require('mysql');

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());


// app.get('/', (req, res) => {
    const connection = mysql.createConnection({
        host: '51.83.46.9',
        user: 'AlexVPS',
        password: 'FatimaLPB1605!',
        database: 'ECOM',
    });
    

    connection.connect((err) => {
        if (err){
            console.error("Erreur de connexion : "+err.stack)
            return;
        }
        console.log("Connexion à la db réussie")
    });
        
    // connection.query("SELECT * FROM user",(err, rows, fields) => {
    //     if (err) throw err;
    //     return res.status(200).json(rows)
    // }) 
// })

app.listen(port, () => {
   console.log("Serveur en ligne");
});





// Partie Register

// app.post('/register',(req, res) => {
//     const firstname = req.body.firstname;
//     const lastname = req.body.lastname ;
//     const email = req.body.email ;
//     const password = req.body.password

//     con.query ("INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?)", [firstname, lastname, email, password],
//         (err, result) => {
//             if(result){
//                 res.send(result);
//             }else{
//                 res.send ({message:"Les champs remplis sont incorrects!"})
//             }
//         }
//     )
// })


// // Partie Login

// app.post('/login',(req, res) => {
//     const email = req.body.email ;
//     const password = req.body.password

//     con.query ("SELECT * FROM users WHERE email = ? AND password = ?", [email, password],
//         (err, result) => {
//             if(result){
//                 req.setEncoding({err: err});
//             }else{
//                 if (result.lenght > 0){
//                     res.send(result);
//                 }else{
//                     res.send ({message:"Les champs remplis sont incorrects!"});
//                 }
//             }    
//         }
//     )
// })