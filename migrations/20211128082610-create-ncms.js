'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ncms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Codigo: {
        type: Sequelize.STRING
      },
      Descricao: {
        type: Sequelize.TEXT
      },
      Data_Inicio: {
        type: Sequelize.STRING
      },
      Data_Fim: {
        type: Sequelize.STRING
      },
      Tipo_Ato: {
        type: Sequelize.STRING
      },
      Numero_Ato: {
        type: Sequelize.STRING
      },
      Ano_Ato: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ncms');
  }
};