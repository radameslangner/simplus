const Ncms = require('../entity/Ncms')
const { Op } = require("sequelize");
class NcmsDAO{

    async getAll() {
        try{
            return await Ncms.findAll()
        }
        catch(error){
            return null
        }
    }

    //description: { $like: '%boat%'  }

    async getByDescricao(descricao) {
        try{
            return await Ncms.findAll(
                {
                    where: { 
                        Descricao: {
                            [Op.like]: "%" + descricao + "%"
                        }
                    }
                }
            )
        }
        catch(error){
            return null
        }
    }


}

module.exports = NcmsDAO