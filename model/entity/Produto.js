const  Sequelize = require('sequelize')
const Unidade = require('./Unidade')

class Produto extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },

                    ncm: {
                        type: Sequelize.STRING
                    },   

                    cfop: {
                        type: Sequelize.STRING
                    },   

                    csosn: {
                        type: Sequelize.STRING
                    },   

                    descricao: {
                        type: Sequelize.STRING,
                        unique: true
                    },                 

                    custo: {
                        type: Sequelize.FLOAT
                    },                    
                    
                    preco: {
                        type: Sequelize.FLOAT
                    },
                    
                    status: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true
                    }
                },
                {
                    sequelize,
                    modelName: 'produto',
                    freezeTableName: true
                }

            )

            Produto.relations()
        }

        static relations(){
            
            Unidade.hasOne(Produto)
            Produto.belongsTo(Unidade)

        }
}

module.exports = Produto