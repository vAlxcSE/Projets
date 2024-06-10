const express = require('express')
const cors = require('cors');
const router = express.Router()

router.get('/',(req, res) => {
    res.status(200).json({msg:"Tous les users"})
})

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

router.get('/:id',(req, res) => {
    const id =req.params.id
    res.status(200).json({
        id: id
    })
})

router.get('/:id/:status',(req, res) => {
    const id =req.params.id
    const status =req.params.status 
    res.status(200).json({
        id: id,
        status : status,
    })
})

module.exports = router;

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));