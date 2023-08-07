const bcrypt = require('bcryptjs')
const criptograf = require('../../public/js/utils/cripograf')
const compare = require('../../public/js/utils/compare')
const Usuario = require('../entity/Usuario')


class UsuarioDAO{

    async create(nome, email, senha, forgets) {
    senha = criptograf(senha)
    try{
        await Usuario.create({nome, email, senha, forgets})
        return true
    }
    catch(error){
        return false
    }
}


async resetPasswd(id, senha) {
    senha = criptograf(senha)
    try{
        await Usuario.update({ senha }, { where: { id: id } })
        return true
    }
    catch(error){
        return false
    }
}


    async getByLogin(email, senha) {
        try{
            let usuario = await Usuario.findOne({ where: { email: email } })
            if(usuario)
                if (compare(senha, usuario.senha)) {
                    return usuario
                } else return null
        }
        catch(error){
            return null
        }
    }  


    async checkForgets(email, forgets) {
        try{
            let usuario = await Usuario.findOne({ where: { email: email } })
            if(usuario)
                if (compare(forgets, usuario.forgets)) {
                    return usuario
                } else return null
        }
        catch(error){
            return null
        }
    }  


    async update(id, nome, email) {
        try{
            await Usuario.update({ nome, email }, { where: { id: id } })
            return true
        }
        catch(error){
            return false
        }
    }

    async updateForgets(email, forgets) {
        try{
            await Usuario.update({forgets}, { where: { email: email } })
            return true
        }
        catch(error){
            return false
        }
        
    }



    async delete(id) {  //id de req.params.id
        try{
            await Usuario.destroy({ where: { id: id } })
            return true
        }
        catch(error){
            return false
        }
    }

    async getOne(id) {
        try{
            return await Usuario.findByPk(id)
        }
        catch(error){
            return null
        }
    }

async getByMail(email) {
    try{
        if (await Usuario.findOne({ where: {email: email} })) {
            return true
        } else return false
    }
    catch(error){
        return false
    }  
}

    async getAll() {
        try{
            return await Usuario.findAll()
        }
        catch(error){
            return null
        }
    }


}




module.exports = UsuarioDAO