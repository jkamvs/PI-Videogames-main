const { Router } = require("express");
const getGenres = require("../controllers/getGenres");
const route = Router();

route.get('/', async (req, res) => {
    res.status(200).json(await getGenres())
})


module.exports = route;