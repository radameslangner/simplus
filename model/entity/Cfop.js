const  Sequelize = require('sequelize')

class Cfop extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: 
                    {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                        allowNull: false,
                    },
                    
                    cfop: 
                    {
                        type: Sequelize.INTEGER
                    },

                    sentido: 
                    {
                        type: Sequelize.STRING
                    },

                    descricao: 
                    {
                        type: Sequelize.STRING
                    }, 
     
                    tipo: 
                    {
                        type: Sequelize.INTEGER
                    },
                    grupo: 
                    {
                        type: Sequelize.INTEGER
                    },                    
                    descricao_simples: 
                    {
                        type: Sequelize.TEXT
                    },   
                    descricao_aplicacao: 
                    {
                        type: Sequelize.TEXT
                    },      
                    vigencia_inicial: 
                    {
                        type: Sequelize.DATEONLY
                    },        
                    vigencia_inicio: 
                    {
                        type: Sequelize.DATEONLY
                    },             
                    vigencia_final: 
                    {
                        type: Sequelize.DATEONLY
                    },   
                    valido_nfe: {
                        type: Sequelize.BOOLEAN
                    },                    
                    valido_serv_comunicacao: {
                        type: Sequelize.BOOLEAN
                    },
                    valido_transp_icms: {
                        type: Sequelize.BOOLEAN
                    },
                    valido_devolucao: {
                        type: Sequelize.BOOLEAN
                    },
                    valido_retorno: {
                        type: Sequelize.BOOLEAN
                    },
                    valido_anulacao_valor: {
                        type: Sequelize.BOOLEAN
                    },    
                    valido_remessa: {
                        type: Sequelize.BOOLEAN
                    },   
                    valido_nfce: {
                        type: Sequelize.BOOLEAN
                    },            
                    valido_cte: {
                        type: Sequelize.BOOLEAN
                    },        
                    valido_cte_os: {
                        type: Sequelize.BOOLEAN
                    },         
                    valido_combustivel: {
                        type: Sequelize.BOOLEAN
                    },   
                    transp_comb_obrigatorio: {
                        type: Sequelize.BOOLEAN
                    },                                                                                                      
                
                },
                {
                    sequelize,
                    modelName: 'cfop',

                    freezeTableName: true,
                    timestamps: false,
                    createdAt: false,
                    updatedAt: false
                }
    
            )
        }
    }
module.exports = Cfop

