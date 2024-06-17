const express = require("express");
const port = process.env.PORT || 8000
const mysql = require('mysql');

const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

    
const connection = mysql.createConnection({
    host: '51.83.46.9',
    user: 'AlexVPS',
    password: 'FatimaLPB1605!',
    database: 'ECOM',
    port : 3306
    })
    
    connection.connect((err) => {
        if (err){
            console.error("Erreur de connexion : "+err.stack)
            return;
        }
        console.log("Connexion à la db réussie")  
    });


// Register
app.post("/register", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    try {
        const passHash = await bcrypt.hash(password, 10);

        const query = "INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
        connection.query(query, [firstname, lastname, email, passHash], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Erreur lors de l'enregistrement de l'utilisateur." });
            }
            res.status(201).json({ message: "Utilisateur enregistré avec succès." });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors du hachage du mot de passe." });
    }
});


// Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    if (!email || !password) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    const query = "SELECT * FROM user WHERE email = ?";
    connection.query(query, email, async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Erreur lors de la connexion." });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: "Identifiants invalides." });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: "Identifiants invalides." });
        }

        res.status(200).json({ message: "Succès" });
    });
});

// CRUD USERS

app.get('/users', (req, res) => {
 const q = "SELECT * FROM user" 
 db.query(q, (err,data) => {
     if (err) return res.json(err);
         return res.json(data);
     })
})

app.post('/users', (req, res) => {
    const q = "INSERT INTO user (`firstname, lastname, email, password`) VALUES ()" 
    db.query(q, (err,data) => {
        if (err) return res.json(err);
            return res.json(data);
        })
   })

// CRUD PRODUCT

app.get('/products', (req, res) => {
    const q = 
   })

app.listen(port, () => {
   console.log("Serveur en ligne");
});