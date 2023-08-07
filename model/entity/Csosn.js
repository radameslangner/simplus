const  Sequelize = require('sequelize')

class Csosn extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: 
                    {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },

                    csosn: 
                    {
                        type: Sequelize.STRING,
                        unique: true
                    }, 
                    
                    descricao: 
                    {
                        type: Sequelize.STRING,
                        unique: true
                    }                
                    
                },
                {
                    sequelize,
                    modelName: 'csosn',
                    freezeTableName: true,
                    timestamps: false,
                    createdAt: false,
                    updatedAt: false
                }

            )
        }
}

module.exports = Csosn