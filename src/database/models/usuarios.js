'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuarios.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    senha: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid:true, 
    modelName: 'Usuarios'
  });
  return Usuarios;
};