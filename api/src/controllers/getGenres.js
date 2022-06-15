const { Genero } = require("../db");
const getGenres = async () => {
  return await Genero.findAll();
};
module.exports = getGenres;
