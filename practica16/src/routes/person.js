let express = require ('express');  
let router = express.Router();

//instalacion del "router" al que asociaremos 

//las rutas de la aplicacion
router.get('/person', (req, res)=>{
    res.send('You have requested a person!');
})

module.exports = router;