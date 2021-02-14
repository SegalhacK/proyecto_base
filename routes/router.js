const { Router } = require('express');
const router = Router();
const { Users } = require('../db'); // IMPORTAMOS LA BASE DE DATOS DESDE EL ARCHIVO JS

router.get('/', (req,res) => {
    res.render('index')
}),


// Export all this routes to be used outside
module.exports = router;