const  Sequelize = require('sequelize')
const Empresa = require('./Empresa')
const Usuario = require('./Usuario')

class Venda extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
      

                    total: {
                        type: Sequelize.FLOAT
                    },                    

                    
                    status: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true
                    }
                },
                {
                    sequelize,
                    modelName: 'venda',
                    freezeTableName: true
                }

            )

            Venda.relations()
        }

        static relations(){
            
            Usuario.hasOne(Venda)
            Venda.belongsTo(Usuario)

            Empresa.hasMany(Venda)
            Venda.belongsTo(Empresa)

        }
}

module.exports = Venda