'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caterer = sequelize.define('Caterer', {
    restaurant_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.BIGINT,
    password: DataTypes.STRING
  }, {});
  Caterer.associate = (models) => {
    // associations can be defined here
  };
  return Caterer;
};