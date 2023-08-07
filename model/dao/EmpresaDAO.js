// const { Model } = require('sequelize/types')
const Empresa = require('../entity/Empresa')
const Endereco = require('../entity/Endereco')
const Csosn = require('../entity/Csosn')


class EmpresaDAO{

    async create(razao, fantasia, cnpj, ie, csosnId, enderecoId ) {
    try{
        await Empresa.create({razao, fantasia, cnpj, ie, csosnId, enderecoId})
        return true
    }
    catch(error){
        return false
    }
}



async update(id, razao, fantasia, cnpj, ie, status, csosnId) {
    try{
        await Empresa.update({ razao, fantasia, cnpj, ie, status, csosnId}, { where: { id: id } })
        return true
    }
    catch(error){
        return false
    }
}


async delete(id) {  //id de req.params.id
    try{
        await Empresa.destroy({ where: { id: id } })
        return true
    }
    catch(error){
        return false
    }
}


async getOne(id) {
    try{
        return await Empresa.findOne( {where: {id: id}, include: [ {model: Csosn}, {model: Endereco} ] } )
    }
    catch(error){
        return null
    }
}



async getAll() {
    try{
            return await Empresa.findAll( { include: [ {model: Csosn}, {model: Endereco} ] })
    }
    catch(error){
        return null
    }
}


}


module.exports = EmpresaDAO