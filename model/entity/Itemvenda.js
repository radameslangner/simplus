const  Sequelize = require('sequelize')
const Venda = require('./Venda')
const Empresa = require('./Empresa')
const Usuario = require('./Usuario')
const Produto = require('./Produto')

class Itemvenda extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },

                    csosn: Sequelize.INTEGER,

                    cfop: Sequelize.INTEGER,

                    quantidade: Sequelize.FLOAT,

                    total: Sequelize.FLOAT,

                    
                    status: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true
                    }
                },
                {
                    sequelize,
                    modelName: 'itemvenda',
                    freezeTableName: true
                }

            )

            Itemvenda.relations()
        }

        static relations(){
            
            Venda.hasOne(Itemvenda)
            Itemvenda.belongsTo(Venda)

            Empresa.hasOne(Itemvenda)
            Itemvenda.belongsTo(Empresa)

            Usuario.hasOne(Itemvenda)
            Itemvenda.belongsTo(Usuario)

            Produto.hasOne(Itemvenda)
            Itemvenda.belongsTo(Produto)

        }
}

module.exports = Itemvenda