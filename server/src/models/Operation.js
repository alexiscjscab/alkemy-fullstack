const {DataTypes} = require('sequelize');

// exportamos una funcion que define el modelo, luego le injectamos la conexion a sequelize

module.exports = (sequelize) => {
    sequelize.define('operation',{
       id:{
           type: DataTypes.UUID,
           primaryKey: true,
       },
       concept: {
           type: DataTypes.STRING,
           allowNull:false
       },
       amount:{
           type: DataTypes.INTEGER,
           allowNull: false
       },
       date: {
           type: DataTypes.DATE,
           allowNull:false
       },
       type: {
           type: DataTypes.STRING,
           allowNull: false
       }
    })
}