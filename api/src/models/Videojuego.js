const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videojuego', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING

    },
    fecha_lanzamiento: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.STRING,
    },
    plataformas: {
      type: DataTypes.STRING,
    },
  },
    { timestamps: false });
};
