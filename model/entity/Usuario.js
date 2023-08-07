const  Sequelize = require('sequelize')

class Usuario extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: 
                    {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                    nome: 
                    {
                        type: Sequelize.STRING,
                        unique: true
                    },
                    email:
                    {
                        type:Sequelize.STRING,
                        unique: true
                    } ,
                    senha: Sequelize.STRING,
                    forgets: Sequelize.STRING
                },
                {
                    sequelize,
                    modelName: 'usuario',
                    freezeTableName: true
                }

            )
        }
}

module.exports = Usuario