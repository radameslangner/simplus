const CfopTipoTipo = require('../entity/CfopTipoTipo')

class CfopTipoDAO{


    async getOne(id) {
        try{
            return await CfopTipo.findByPk(id)
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await CfopTipo.findAll()
        }
        catch(error){
            return null
        }
    }



}

module.exports = CfopTipoDAO