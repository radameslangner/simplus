const  Sequelize = require('sequelize')

class CfopTipo extends Sequelize.Model {

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
                    
                    tipo: 
                    {
                        type: Sequelize.INTEGER
                    },

                    descricao: 
                    {
                        type: Sequelize.STRING
                    }, 
     
                    numero_operacoes: 
                    {
                        type: Sequelize.INTEGER
                    },
                
                },
                {
                    sequelize,
                    modelName: 'cfopTipo',

                    freezeTableName: true,
                    timestamps: false,
                    createdAt: false,
                    updatedAt: false
                }
    
            )
        }
    }
module.exports = CfopTipo

