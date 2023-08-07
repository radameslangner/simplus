module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cfopgrupo', 
    [
      {
        "tipo" : 1000,
        "grupo" : 1100,
        "descricao" : "COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS",
        "numero_operacoes" : 17
      },
      {
        "tipo" : 1000,
        "grupo" : 1150,
        "descricao" : "TRANSFERÊNCIAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS",
        "numero_operacoes" : 4
      },
      {
        "tipo" : 1000,
        "grupo" : 1200,
        "descricao" : "DEVOLUÇÕES DE VENDAS DE PRODUÇÃO DO ESTABELECIMENTO, DE PRODUTOS DE TERCEIROS OU ANULAÇÕES DE VALORES",
        "numero_operacoes" : 12
      },
      {
        "tipo" : 1000,
        "grupo" : 1250,
        "descricao" : "COMPRAS DE ENERGIA ELÉTRICA",
        "numero_operacoes" : 7
      },
      {
        "tipo" : 1000,
        "grupo" : 1300,
        "descricao" : "AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO",
        "numero_operacoes" : 6
      },
      {
        "tipo" : 1000,
        "grupo" : 1350,
        "descricao" : "AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE",
        "numero_operacoes" : 7
      },
      {
        "tipo" : 1000,
        "grupo" : 1400,
        "descricao" : "ENTRADAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA",
        "numero_operacoes" : 10
      },
      {
        "tipo" : 1000,
        "grupo" : 1450,
        "descricao" : "SISTEMAS DE INTEGRAÇÃO",
        "numero_operacoes" : 2
      },
      {
        "tipo" : 1000,
        "grupo" : 1500,
        "descricao" : "ENTRADAS DE MERCADORIAS REMETIDAS PARA FORMAÇÃO DE LOTE OU COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES (NR AJUSTE SINIEF 092005)",
        "numero_operacoes" : 5
      },
      {
        "tipo" : 1000,
        "grupo" : 1550,
        "descricao" : "OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO",
        "numero_operacoes" : 7
      },
      {
        "tipo" : 1000,
        "grupo" : 1600,
        "descricao" : "CRÉDITOS E RESSARCIMENTOS DE ICMS",
        "numero_operacoes" : 5
      },
      {
        "tipo" : 1000,
        "grupo" : 1650,
        "descricao" : "ENTRADAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO, E LUBRIFICANTES (ACR AJUSTE SINIEF 92003 - A PARTIR 01.01.2004)",
        "numero_operacoes" : 10
      },
      {
        "tipo" : 1000,
        "grupo" : 1900,
        "descricao" : "OUTRAS ENTRADAS DE MERCADORIAS OU AQUISIÇÕES DE SERVIÇOS",
        "numero_operacoes" : 31
      },
      {
        "tipo" : 2000,
        "grupo" : 2100,
        "descricao" : "COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS (NR AJUSTE SINIEF 052005 (DECRETO 28.8682006)",
        "numero_operacoes" : 17
      },
      {
        "tipo" : 2000,
        "grupo" : 2150,
        "descricao" : "TRANSFERÊNCIAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS (NR AJUSTE SINIEF 052005) (DECRETO 28.8682006)",
        "numero_operacoes" : 4
      },
      {
        "tipo" : 2000,
        "grupo" : 2200,
        "descricao" : "DEVOLUÇÕES DE VENDAS DE PRODUÇÃO DO ESTABELECIMENTO OU DE TERCEIROS OU ANULAÇÕES DE VALORES",
        "numero_operacoes" : 12
      },
      {
        "tipo" : 2000,
        "grupo" : 2250,
        "descricao" : "COMPRAS DE ENERGIA ELÉTRICA",
        "numero_operacoes" : 7
      },
      {
        "tipo" : 2000,
        "grupo" : 2300,
        "descricao" : "AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO",
        "numero_operacoes" : 6
      },
      {
        "tipo" : 2000,
        "grupo" : 2350,
        "descricao" : "AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE",
        "numero_operacoes" : 6
      },
      {
        "tipo" : 2000,
        "grupo" : 2400,
        "descricao" : "ENTRADAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA",
        "numero_operacoes" : 10
      },
      {
        "tipo" : 2000,
        "grupo" : 2500,
        "descricao" : "ENTRADAS DE MERCADORIAS REMETIDAS PARA FORMAÇÃO DE LOTE OU COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES (NR AJUSTE SINIEF 092005)",
        "numero_operacoes" : 5
      },
      {
        "tipo" : 2000,
        "grupo" : 2550,
        "descricao" : "OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO",
        "numero_operacoes" : 7
      },
      {
        "tipo" : 2000,
        "grupo" : 2600,
        "descricao" : "CRÉDITOS E RESSARCIMENTOS DE ICMS",
        "numero_operacoes" : 1
      },
      {
        "tipo" : 2000,
        "grupo" : 2650,
        "descricao" : "ENTRADAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO, E LUBRIFICANTES (ACR AJUSTE SINIEF 92003)",
        "numero_operacoes" : 10
      },
      {
        "tipo" : 2000,
        "grupo" : 2900,
        "descricao" : "OUTRAS ENTRADAS DE MERCADORIAS OU AQUISIÇÕES DE SERVIÇOS",
        "numero_operacoes" : 30
      },
      {
        "tipo" : 3000,
        "grupo" : 3100,
        "descricao" : "COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU PRESTAÇÃO DE SERVIÇOS (NR AJUSTE SINIEF 052005) (DECRETO 28.8682006)",
        "numero_operacoes" : 6
      },
      {
        "tipo" : 3000,
        "grupo" : 3200,
        "descricao" : "DEVOLUÇÕES DE VENDAS DE PRODUÇÃO PRÓPRIA, DE TERCEIROS OU ANULAÇÕES DE VALORES",
        "numero_operacoes" : 6
      },
      {
        "tipo" : 3000,
        "grupo" : 3250,
        "descricao" : "COMPRAS DE ENERGIA ELÉTRICA",
        "numero_operacoes" : 2
      },
      {
        "tipo" : 3000,
        "grupo" : 3300,
        "descricao" : "AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO",
        "numero_operacoes" : 1
      },
      {
        "tipo" : 3000,
        "grupo" : 3350,
        "descricao" : "AQUISIÇÕES DE SERVIÇOS DE TRANSPORTE",
        "numero_operacoes" : 6
      },
      {
        "tipo" : 3000,
        "grupo" : 3500,
        "descricao" : "ENTRADAS DE MERCADORIAS REMETIDAS COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES",
        "numero_operacoes" : 1
      },
      {
        "tipo" : 3000,
        "grupo" : 3550,
        "descricao" : "OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO",
        "numero_operacoes" : 3
      },
      {
        "tipo" : 3000,
        "grupo" : 3650,
        "descricao" : "ENTRADAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO, E LUBRIFICANTES",
        "numero_operacoes" : 3
      },
      {
        "tipo" : 3000,
        "grupo" : 3900,
        "descricao" : "OUTRAS ENTRADAS DE MERCADORIAS OU AQUISIÇÕES DE SERVIÇOS",
        "numero_operacoes" : 2
      },
      {
        "tipo" : 5000,
        "grupo" : 5100,
        "descricao" : "VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS",
        "numero_operacoes" : 25
      },
      {
        "tipo" : 5000,
        "grupo" : 5150,
        "descricao" : "TRANSFERÊNCIAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS",
        "numero_operacoes" : 5
      },
      {
        "tipo" : 5000,
        "grupo" : 5200,
        "descricao" : "DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, PRODUÇÃO RURAL, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES (NR AJUSTE SINIEF 052005) (DECRETO 28.8682006)",
        "numero_operacoes" : 11
      },
      {
        "tipo" : 5000,
        "grupo" : 5250,
        "descricao" : "VENDAS DE ENERGIA ELÉTRICA",
        "numero_operacoes" : 8
      },
      {
        "tipo" : 5000,
        "grupo" : 5300,
        "descricao" : "PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO",
        "numero_operacoes" : 7
      },
      {
        "tipo" : 5000,
        "grupo" : 5350,
        "descricao" : "PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE",
        "numero_operacoes" : 9
      },
      {
        "tipo" : 5000,
        "grupo" : 5400,
        "descricao" : "SAÍDAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA",
        "numero_operacoes" : 12
      },
      {
        "tipo" : 5000,
        "grupo" : 5450,
        "descricao" : "SISTEMAS DE INTEGRAÇÃO",
        "numero_operacoes" : 1
      },
      {
        "tipo" : 5000,
        "grupo" : 5500,
        "descricao" : "REMESSAS PARA FORMAÇÃO DE LOTE E COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES (NR AJUSTE SINIEF 092005)",
        "numero_operacoes" : 5
      },
      {
        "tipo" : 5000,
        "grupo" : 5550,
        "descricao" : "OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO",
        "numero_operacoes" : 7
      },
      {
        "tipo" : 5000,
        "grupo" : 5600,
        "descricao" : "CRÉDITOS E RESSARCIMENTOS DE ICMS",
        "numero_operacoes" : 5
      },
      {
        "tipo" : 5000,
        "grupo" : 5650,
        "descricao" : "SAÍDAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO, E LUBRIFICANTES",
        "numero_operacoes" : 17
      },
      {
        "tipo" : 5000,
        "grupo" : 5900,
        "descricao" : "OUTRAS SAÍDAS DE MERCADORIAS OU PRESTAÇÕES DE SERVIÇOS",
        "numero_operacoes" : 34
      },
      {
        "tipo" : 6000,
        "grupo" : 6100,
        "descricao" : "VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS",
        "numero_operacoes" : 27
      },
      {
        "tipo" : 6000,
        "grupo" : 6150,
        "descricao" : "TRANSFERÊNCIAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS",
        "numero_operacoes" : 5
      },
      {
        "tipo" : 6000,
        "grupo" : 6200,
        "descricao" : "DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES",
        "numero_operacoes" : 11
      },
      {
        "tipo" : 6000,
        "grupo" : 6250,
        "descricao" : "VENDAS DE ENERGIA ELÉTRICA",
        "numero_operacoes" : 8
      },
      {
        "tipo" : 6000,
        "grupo" : 6300,
        "descricao" : "PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO",
        "numero_operacoes" : 7
      },
      {
        "tipo" : 6000,
        "grupo" : 6350,
        "descricao" : "PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE",
        "numero_operacoes" : 9
      },
      {
        "tipo" : 6000,
        "grupo" : 6400,
        "descricao" : "SAÍDAS DE MERCADORIAS SUJEITAS AO REGIME DE SUBSTITUIÇÃO TRIBUTÁRIA",
        "numero_operacoes" : 12
      },
      {
        "tipo" : 6000,
        "grupo" : 6500,
        "descricao" : "REMESSAS COM FIM ESPECÍFICO DE EXPORTAÇÃO E EVENTUAIS DEVOLUÇÕES",
        "numero_operacoes" : 5
      },
      {
        "tipo" : 6000,
        "grupo" : 6550,
        "descricao" : "OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO",
        "numero_operacoes" : 7
      },
      {
        "tipo" : 6000,
        "grupo" : 6600,
        "descricao" : "CRÉDITOS E RESSARCIMENTOS DE ICMS",
        "numero_operacoes" : 1
      },
      {
        "tipo" : 6000,
        "grupo" : 6650,
        "descricao" : "SAÍDAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO, E LUBRIFICANTE",
        "numero_operacoes" : 17
      },
      {
        "tipo" : 6000,
        "grupo" : 6900,
        "descricao" : "OUTRAS SAÍDAS DE MERCADORIAS OU PRESTAÇÕES DE SERVIÇOS",
        "numero_operacoes" : 31
      },
      {
        "tipo" : 7000,
        "grupo" : 7100,
        "descricao" : "VENDAS DE PRODUÇÃO PRÓPRIA OU DE TERCEIROS",
        "numero_operacoes" : 6
      },
      {
        "tipo" : 7000,
        "grupo" : 7200,
        "descricao" : "DEVOLUÇÕES DE COMPRAS PARA INDUSTRIALIZAÇÃO, COMERCIALIZAÇÃO OU ANULAÇÕES DE VALORES",
        "numero_operacoes" : 8
      },
      {
        "tipo" : 7000,
        "grupo" : 7250,
        "descricao" : "VENDAS DE ENERGIA ELÉTRICA",
        "numero_operacoes" : 1
      },
      {
        "tipo" : 7000,
        "grupo" : 7300,
        "descricao" : "PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO",
        "numero_operacoes" : 2
      },
      {
        "tipo" : 7000,
        "grupo" : 7500,
        "descricao" : "EXPORTAÇÃO DE MERCADORIAS RECEBIDAS COM FIM ESPECÍFICO DE EXPORTAÇÃO",
        "numero_operacoes" : 1
      },
      {
        "tipo" : 7000,
        "grupo" : 7550,
        "descricao" : "OPERAÇÕES COM BENS DE ATIVO IMOBILIZADO E MATERIAIS PARA USO OU CONSUMO",
        "numero_operacoes" : 3
      },
      {
        "tipo" : 7000,
        "grupo" : 7650,
        "descricao" : "SAÍDAS DE COMBUSTÍVEIS, DERIVADOS OU NÃO DE PETRÓLEO, E LUBRIFICANTES",
        "numero_operacoes" : 3
      },
      {
        "tipo" : 7000,
        "grupo" : 7900,
        "descricao" : "OUTRAS SAIDAS DE MERCADORIA OU PRESTAÇÕES DE SERVIÇOS",
        "numero_operacoes" : 2
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
