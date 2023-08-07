const Endereco = require('../entity/Endereco')


class EnderecoDAO{

    async create(logradouro, numero, bairro, municipio, cep) {
    try{
        await Endereco.create({logradouro, numero, bairro, municipio, cep})
        return true
    }
    catch(error){
        return false
    }
}



async update(id, logradouro, numero, bairro, municipio, cep) {
    try{
        await Endereco.update({ logradouro, numero, bairro, municipio, cep }, { where: { id: id} })
        return true
    }
    catch(error){
        return false
    }
}


async delete(id) {  //id de req.params.id
    try{
        await Endereco.destroy({ where: { id: id } })
        return true
    }
    catch(error){
        return false
    }
}


async getOne(id) {
    try{
        return await Endereco.findByPk(id)
    }
    catch(error){
        return null
    }
}



async getAll() {
    try{
        return await Endereco.findAll()
    }
    catch(error){
        return null
    }
}

async countAll(){

    try {
        const {count , row } =  await Endereco.findAndCountAll({
            where: { id }
        })
        return count
    }
    catch(error){
    return null 
    }
}


}

module.exports = EnderecoDAO