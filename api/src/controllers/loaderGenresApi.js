const axios = require("axios");
const { Genero } = require("../db");
require("dotenv").config();
const { API_Key } = process.env;
const apiGenres = async () => {
    return await axios
        .get(`https://api.rawg.io/api/genres?key=${API_Key}`)
        .then((res) => res.data.results)
        .catch(() => {
            return { Info: "No hay respuesta, problema en la API" };
        });
};
const loaderGenres = async () => {
    try {
        const genres = await apiGenres();
        const genresDB = await Genero.findAll();
        if (genresDB.length === 0) {
            genres.forEach(async (item) => {
                const jane = await Genero.build({ name: item.name });
                jane.save();
            });
            console.log({ Info: "Genero cargado" });
            return;
        } else {
            console.log({ Info: "Db llena" });
            return;
        }
    } catch (error) {
        console.log({ Info: error });
        return;
    }
};

module.exports = loaderGenres;
