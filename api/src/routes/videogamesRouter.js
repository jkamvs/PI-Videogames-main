const { Router } = require("express");
const videoGames = require("../controllers/getVideogames");
const getVideogamesName = require("../controllers/getVideogamesName");


const route = Router();

route.get('/', async (req, res) => {
    const { name } = req.query;
    if (name) {
        res.status(200).json(await getVideogamesName(name))
    } else {
        res.status(200).json(await videoGames())
    }
})

module.exports = route;