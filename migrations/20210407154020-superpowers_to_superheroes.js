'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('superpowers_to_superheroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      superheroId: {
        field: 'superhero_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'superheroes',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        unique: 'heroPowerUniq',
      },
      superpowerId: {
        field: 'superpower_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'superpowers',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        unique: 'heroPowerUniq',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('superpowers_to_superheroes');
  },
};
