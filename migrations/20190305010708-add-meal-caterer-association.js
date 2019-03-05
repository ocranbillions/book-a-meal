'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Meals', // name of Source model
      'CatererId', // name of the key we\'re adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Caterers', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn(
      'Meals', // name of Source model
      'CatererId' // key we want to remove
    );
  }
};
