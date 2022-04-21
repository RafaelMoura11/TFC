'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      home_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Teams',
          key: 'id',
        },
      },
      home_team_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      away_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Teams',
          key: 'id',
        },
      },
      away_team_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      in_progress: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Matches');
  }
};
