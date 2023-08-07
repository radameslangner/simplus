const { BOOLEAN } = require('sequelize')
const  Sequelize = require('sequelize')

class Ncms extends Sequelize.Model {

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
                                
                Codigo: 
                {
                     type: Sequelize.STRING,
                     allowNull: false,
                },

                Descricao: 
                {
                     type: Sequelize.TEXT
                },

                Data_Inicio: 
                {
                     type: Sequelize.STRING
                },          

                Data_Fim: 
                {
                     type: Sequelize.STRING
                },   

                Tipo_Ato: 
                {
                     type: Sequelize.STRING
                },      

                Numero_Ato: 
                {
                     type: Sequelize.STRING
                },      

                Ano_Ato: 
                {
                     type: Sequelize.STRING
                }

            },
            {
                sequelize,
                modelName: 'ncms',
                freezeTableName: true,
                timestamps: false,
                createdAt: false,
                updatedAt: false

            }

        )
    }
}

module.exports = Ncms