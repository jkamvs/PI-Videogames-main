const axios = require("axios");
require("dotenv").config();
const { API_Key } = process.env;
const getVideogamesName = async (name) => {
  return await axios
    .get(`https://api.rawg.io/api/games?search=${name}&key=${API_Key}`)
    .then((res) => res.data)
    .catch(() => {
      return { Info: "No hay respuesta, problema en la API" };
    });
};

module.exports = getVideogamesName;
