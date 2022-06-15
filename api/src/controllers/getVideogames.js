const axios = require("axios");
require("dotenv").config();
const { API_Key } = process.env;
const videoGames = async () => {
  return await axios
    .get(`https://api.rawg.io/api/games?key=${API_Key}`)
    .then((res) =>{
      let arr =[]

      
      res.data.results.forEach(item=>{
        arr.push({
          id:item.id,
          nombre:item.name,
          fecha_lanzamiento:item.released,
          imagen:item.background_image,
          rating:item.rating,
          plataformas:item.platforms.map(items=>{
            let array=[];
            array.push(items.name)

          })
        })
      })
    })
    .catch(() => {
      return { Info: "No hay respuesta, problema en la API" };
    });
};

module.exports = videoGames;
