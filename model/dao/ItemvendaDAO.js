
const Empresa = require('../entity/Empresa')
const Endereco = require('../entity/Endereco')
const Usuario = require('../entity/Usuario')
const Produto = require('../entity/Produto')
const Unidade = require('../entity/Unidade')
const Csosn = require('../entity/Csosn')

const Itemvenda = require('../entity/Itemvenda')


class ItemvendaDAO{

    async create(csosn, cfop, quantidade, total, vendaId, empresaId, usuarioId, produtoId ) {
    try{
        await Itemvenda.create({csosn, cfop, quantidade, total, vendaId, empresaId, usuarioId, produtoId})
        return true
    }
    catch(error){
        return false
    }
}




async delete(id) {  //id de req.params.id
    try{
        await Itemvenda.destroy({ where: { id: id } })
        return true
    }
    catch(error){
        return false
    }
}


async getOne(id) {
    try{
        return await Itemvenda.findOne( {where: {id: id}, include: [ {model: Empresa}, {model: Usuario}, {model: Produto} ]} )
    }
    catch(error){
        return null
    }
}



async getAll(id) {
    try{
            return await Itemvenda.findAll( {where: {vendaId: id}, include: [ {model: Empresa}, {model: Usuario}, {model: Produto, include: [ {model: Unidade}] } ] })
    }
    catch(error){
        return null
    }
}


}


module.exports = ItemvendaDAO