const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/videogames', require('./videogamesRouter'))
router.use('/videogame', require('./videogameRouter'))
router.use('/genres', require('./genresRouter'))
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
