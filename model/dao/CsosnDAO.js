const Csosn = require('../entity/Csosn')

class CsosnDAO{

    async getOne(id) {
        try{
            return await Csosn.findByPk(id)
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await Csosn.findAll()
        }
        catch(error){
            return null
        }
    }



}

module.exports = CsosnDAO