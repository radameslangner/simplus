const Empresa = require('../entity/Empresa')
const Endereco = require('../entity/Endereco')
const Usuario = require('../entity/Usuario')

const Venda = require('../entity/Venda')

class VendaDAO{

    async create(total, usuarioId, empresaId) {
        
        try{
            await Venda.create({total, usuarioId, empresaId})
            return true
        }
        catch(error){
            return false
        }
}



    async delete(id) {  //id de req.params.id
        try{
            await Venda.destroy({ where: { id: id } })
            return true
        }
        catch(error){
            return false
        }
    }


    async getOne(id) {
        try{
            return await Venda.findOne({ where: { id: id}, include: [{model: Usuario}, {model: Empresa, include: [ {model: Endereco} ] }] })
        }
        catch(error){
            return null
        }
    }


}


module.exports = VendaDAO