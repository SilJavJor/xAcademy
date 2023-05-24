const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const User = sequelize.define("Users", {
  userId: {
    type: DataTypes.INT,  // Integer // Identificador de un usario en particular
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

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = User;


// const { DataTypes } = require('sequelize');
// const sequelize = require('../database');
// const bcrypt = require('bcrypt');

// // Definición del modelo de User
// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// // Antes de guardar el usuario en la base de datos, hasheamos la contraseña
// User.beforeCreate(async (user, options) => {
//   const hashedPassword = await bcrypt.hash(user.password, 10);
//   user.password = hashedPassword;
// });

// module.exports = User;


// const { DataTypes } = require('sequelize');
// const sequelize = require('../database');
// const bcrypt = require('bcrypt');

// // Definición del modelo de User
// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   role: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });

// Antes de guardar el usuario en la base de datos, hasheamos la contraseña
// User.beforeCreate(async (user, options) => {
//   const hashedPassword = await bcrypt.hash(user.password, 10);
//   user.password = hashedPassword;
// });

// module.exports = User;


// const { DataTypes } = require('sequelize');
// const sequelize = require('../database');
// const bcrypt = require('bcrypt');

// // Definición del modelo de User
// const User = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   role: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastAccess: {
//     type: DataTypes.DATE,
//     allowNull: true
//   },
//   dateOfBirth: {
//     type: DataTypes.DATEONLY,
//     allowNull: true
//   }
// });

// // Antes de guardar el usuario en la base de datos, hasheamos la contraseña
// User.beforeCreate(async (user, options) => {
//   const hashedPassword = await bcrypt.hash(user.password, 10);
//   user.password = hashedPassword;
// });

// module.exports = User;

