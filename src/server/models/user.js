import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const User = sequelize.define('users', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   name: {
      type: Sequelize.STRING,
   },
   password: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   age: {
      type: Sequelize.INTEGER,
      allowNull: false,
   },
   introduction: {
      type: Sequelize.STRING,
   }   
},
{ timestamps: false }
);

export default User;