const { Videojuego, Genero } = require("../db");
const addVideoJuego = async ({
  nombre,
  descripcion,
  fech_lanzamiento,
  rating,
  plataformas,
  genero,
}) => {
  try {
    const newVideojuego = await Videojuego.create({
      nombre: nombre,
      descripcion: descripcion,
      fecha_lanzamiento: fech_lanzamiento,
      rating: rating,
      plataformas: plataformas,
    });
    const generoDB = await Genero.findAll({
      where: { name: genero },
    });
    await newVideojuego.addGenero(generoDB);
    return { Data: "Dato creado Exitosamente" };
  } catch (error) {
    return { Error: error };
  }
};
module.exports = { addVideoJuego };
