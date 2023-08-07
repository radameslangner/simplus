const Unidade = require('../entity/Unidade')

class UnidadeDAO{

    async create(unidade, description, status) {
        
        try{
            await Unidade.create({unidade, description, status})
            return true
        }
        catch(error){
            return false
        }
}


    async update(id, unidade, description, status) {
        try{
            await Unidade.update({ unidade, description, status }, { where: { id: id } })
            return true
        }
        catch(error){
            return false
        }
    }


    async delete(id) {  //id de req.params.id
        try{
            await Unidade.destroy({ where: { id: id } })
            return true
        }
        catch(error){
            return false
        }
    }


    async getOne(id) {
        try{
            return await Unidade.findByPk(id)
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await Unidade.findAll()
        }
        catch(error){
            return null
        }
    }

}


module.exports = UnidadeDAO