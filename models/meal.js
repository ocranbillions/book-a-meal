'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  }, {});
  Meal.associate = (models) => {
    // associations can be defined here
    Meal.belongsTo(models.Caterer);
  };
  return Meal;
};
