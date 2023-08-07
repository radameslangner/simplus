const  Sequelize = require('sequelize')
const Usuario = require('./Usuario')
const Empresa = require('./Empresa')

class Empuser extends Sequelize.Model {

        static init(sequelize) {
            super.init(
                {
                    id: 
                    {
                        type: Sequelize.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },

                    empresaId: 
                    {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        unique: 'empresaUsuario',
                        references: 
                        {
                          model: Empresa, 
                          key: 'id'
                        }
                    },


                    usuarioId: 
                    {
                        type: Sequelize.INTEGER,
                        allowNull: false,
                        unique: 'empresaUsuario',

                        references: 
                        {
                          model: Usuario, 
                          key: 'id'
                        }
                    },                    

                    status: {
                        type: Sequelize.BOOLEAN,
                        defaultValue: true
                    }   
                                       
                },
                {
                    sequelize,
                    modelName: 'empuser',
                    freezeTableName: true
                }
            
                
                )
                
                Empuser.relations()

        }

        static relations() {

            Empresa.hasMany(Empuser)   
            Empuser.belongsTo(Empresa)

            Usuario.hasMany(Empuser)   
            Empuser.belongsTo(Usuario)

        }

}

module.exports = Empuser