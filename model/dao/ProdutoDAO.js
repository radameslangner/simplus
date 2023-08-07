const Produto = require('../entity/Produto')
const Unidade = require('../entity/Unidade')

class ProdutoDAO{

    async create(ncm, cfop, csosn, descricao, custo, preco, unidadeId) {
        
        try{
            await Produto.create({ncm, cfop, csosn, descricao, custo, preco, unidadeId})
            return true
        }
        catch(error){
            return false
        }
}


    async update(id, ncm, cfop, csosn, descricao, custo, preco, status, unidadeId) {
        try{
            await Produto.update({ ncm, cfop, csosn, descricao, custo, preco, status, unidadeId }, { where: { id: id } })
            return true
        }
        catch(error){
            return false
        }
    }


    async delete(id) {  //id de req.params.id
        try{
            await Produto.destroy({ where: { id: id } })
            return true
        }
        catch(error){
            return false
        }
    }


    async getOne(id) {
        try{
            return await Produto.findOne({ where: { id: id}, include: [{model: Unidade}] })
        }
        catch(error){
            return null
        }
    }



    async getAll() {
        try{
            return await Produto.findAll( { include: { model: Unidade } } )
        }
        catch(error){
            return null
        }
    }

}


module.exports = ProdutoDAO