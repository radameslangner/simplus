const  Sequelize = require('sequelize')

class Unidade extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },

                    unidade: {
                        type: Sequelize.STRING,
                        unique: true
                    },
                    descricao: { 
                        type: Sequelize.STRING,
                        unique: true
                    },

                    status: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true
                    }
                },
                {
                    sequelize,
                    modelName: 'unidade',
                    freezeTableName: true
                }

            )
        }
}

module.exports = Unidade