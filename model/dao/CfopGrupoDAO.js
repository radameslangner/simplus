const CfopGrupo = require('../entity/CfopGrupo')

class CfopGrupoDAO{


    async getOne(id) {
        try{
            return await CfopGrupo.findByPk(id)
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await CfopGrupo.findAll()
        }
        catch(error){
            return null
        }
    }



}

module.exports = CfopGrupoDAO