module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cfoptipo', 

    [
      {
        "tipo" : 1000,
        "descricao" : "ENTRADA E\/OU AQUISIÇÕES DE SERVIÇOS DO ESTADO",
        "numero_operacoes" : 123
      },
      {
        "tipo" : 2000,
        "descricao" : "ENTRADA E\/OU AQUISIÇÕES DE SERVIÇOS DE OUTROS ESTADOS",
        "numero_operacoes" : 115
      },
      {
        "tipo" : 3000,
        "descricao" : "ENTRADA E\/OU AQUISIÇÕES DE SERVIÇOS DO EXTERIOR",
        "numero_operacoes" : 30
      },
      {
        "tipo" : 5000,
        "descricao" : "SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA O ESTADO",
        "numero_operacoes" : 146
      },
      {
        "tipo" : 6000,
        "descricao" : "SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA OUTROS ESTADOS",
        "numero_operacoes" : 140
      },
      {
        "tipo" : 7000,
        "descricao" : "SAÍDAS OU PRESTAÇÕES DE SERVIÇOS PARA O EXTERIOR",
        "numero_operacoes" : 26
      }
    ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
