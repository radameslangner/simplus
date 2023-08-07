const Csosn = require('../entity/Csosn')
const Empresa = require('../entity/Empresa')
const Empuser = require('../entity/Empuser')
const Usuario = require('../entity/Usuario')


class EmpuserDAO{

    async create(empresaId, usuarioId) {
        parseInt(empresaId)
        parseInt(usuarioId)
    try{
        await Empuser.create({empresaId, usuarioId})
        return true
    }
    catch(error){
        return false
    }
}



async update(id, empresaId, usuarioId) {
    try{
        await Empuser.update({ empresaId, usuarioId }, { where: { id: id } })
        return true
    }
    catch(error){
        return false
    }
}


async delete(id) {  //id de req.params.id
    try{
        await Empuser.destroy({ where: { id: id } })
        return true
    }
    catch(error){
        return false
    }
}


async getOne(id) {
    try{
        return await Empuser.findByPk(id)
    }
    catch(error){
        return null
    }
}



async getAll() {
    try{
        return await Empuser.findAll({include: [ {model: Empresa}, {model: Usuario} ] })
    }
    catch(error){
        return null
    }
}


}


module.exports = EmpuserDAO