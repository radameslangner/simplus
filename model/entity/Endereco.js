const  Sequelize = require('sequelize')

class Endereco extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: 
                    {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },
                        logradouro: Sequelize.STRING,
                        numero: Sequelize.STRING,
                        bairro: Sequelize.STRING,
                        municipio: Sequelize.STRING,
                        cep: Sequelize.STRING
                    },
                    
                    {
                    sequelize,
                    modelName: 'endereco',
                    freezeTableName: true
                    }

            )
        }
}

module.exports = Endereco