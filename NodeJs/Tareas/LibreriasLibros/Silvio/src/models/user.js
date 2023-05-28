const { DataTypes } = require("sequelize");
// const { sequelize } = require("../config/dbConfig");
const sequelize = require('../database');
const bcrypt = require('bcrypt');

// Definición del modelo de Usuario
const User = sequelize.define("User", {
  userId: {
    type: DataTypes.INT,
    allowNull: false,
  },

  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  fisrtName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  dateOfbirth: {
    type: datatypes.DATEONLY,
    allownull: true
 },

 email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {isEmail: true, },
  },

  role: {
    type: datatypes.STRING,
    allownull: false
  },

  creationDate: {
    type: datatypes.DATE,
    allownull: true
  },

  lastAccess: {
     type: datatypes.DATE,
     allownull: true
   }
});

// Antes de guardar el usuario en la base de datos, hasheamos la contraseña
User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
});

//module.exports = URLSearchParams;
module.exports = User;
