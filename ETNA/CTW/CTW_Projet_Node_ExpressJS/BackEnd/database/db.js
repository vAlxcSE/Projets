// import connection from "../index";

// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// app.use(core());

// // Register

// app.post("/register", (req, res) => {
//     const sql = "INSERT INTO user ('firstname', 'lastname', 'email', 'password')";
//     const values = [
//         req.body.firstname, 
//         req.body.lastname, 
//         req.body.email, 
//         req.body.password
//     ];

//     db.query(sql, [values], (err, result) => {

//         if (err) {
//             return res.json("Error");
//         }
//         return res.json(data);
        
//     })
// })


// // Login