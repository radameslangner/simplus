const Cfop = require('../entity/Cfop')

class CfopDAO{


    async getOne(id) {
        try{
            return await Cfop.findByPk(id)
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await Cfop.findAll()
        }
        catch(error){
            return null
        }
    }



}

module.exports = CfopDAO