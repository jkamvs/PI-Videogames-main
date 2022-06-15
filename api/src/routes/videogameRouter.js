const { Router } = require("express");
const getVideogamesId = require("../controllers/getVideogamesId");
const { addVideoJuego } = require("../controllers/postVideogame");

const route = Router();

route.get("/:id", async (req, res) => {
  if (req.params) {
    res.status(200).json(await getVideogamesId(req.params.id));
  } else {
    res.status(200).json({ Info: "Ingrese un Id por parametro" });
  }
});

route.post("/", async (req, res) => {
  const { nombre, descripcion, fech_lanzamiento, rating, plataformas, genero } =
    req.body;
  res.status(201).json(
    await addVideoJuego({
      nombre,
      descripcion,
      fech_lanzamiento,
      rating,
      plataformas,
      genero,
    })
  );
});

module.exports = route;
