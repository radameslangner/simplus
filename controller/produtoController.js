const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')

const Produto = require('../model/entity/Produto')
const ProdutoDAO = require('../model/dao/ProdutoDAO')

const Cfop = require('../model/entity/Cfop')
const CfopDAO = require('../model/dao/CfopDAO')

const Csosn = require('../model/entity/Csosn')
const CsosnDAO = require('../model/dao/CsosnDAO')

const Unidade = require('../model/entity/Unidade')
const UnidadeDAO = require('../model/dao/UnidadeDAO')


const routes = express.Router()


routes.get('/produto', autorizacao, async (req, res) => {

    let unidadeDAO = new UnidadeDAO()
    let unidades = unidadeDAO.getAll()

    let produtoDAO = new ProdutoDAO()
    let produtos = await produtoDAO.getAll()
        

    res.render("produto/produto", { usuario: req.session.usuario, produtos: produtos, unidades: unidades })
})


routes.get('/produto/novo', autorizacao, async (req, res) => {


    let unidadeDAO = new UnidadeDAO()
    let unidades = await unidadeDAO.getAll()

    let cfopDAO = new CfopDAO()
    let cfops = await cfopDAO.getAll()

    let csosnDAO = new CsosnDAO()
    let csosns = await csosnDAO.getAll()

    res.render("produto/novo", { usuario: req.session.usuario, unidades: unidades, cfops: cfops, csosns: csosns })
})


routes.post('/produto/save', autorizacao, async (req, res) => {
    let { ncm, cfop, csosn, descricao, custo, preco, unidadeId } = req.body
    
        let produtoDAO = new ProdutoDAO()

        if (await produtoDAO.create(ncm, cfop, csosn, descricao, custo, preco, unidadeId )) {
            res.redirect('/produto')
        }
        else {res.render('erro', {msg: 'Falha na tentativa de cadastro de Produto.'})}
})



routes.get('/produto/edit/:id', autorizacao, async (req, res) => {

    let id = req.params.id
    
    let produtoDAO = new ProdutoDAO()
    let produto = await produtoDAO.getOne(id)

    let cfopDAO = new CfopDAO()
    let cfops = await cfopDAO.getAll()

    let csosnDAO = new CsosnDAO()
    let csosns = await csosnDAO.getAll()

    let unidadeDAO = new UnidadeDAO()
    let unidades = await unidadeDAO.getAll()

    if (produto) {
        res.render('produto/edit', {produto: produto, cfops: cfops, csosns: csosns, unidades: unidades, usuario: req.session.usuario})
    }
    else res.render('erro', { msg: 'Falha na tentativa de busca dos dados da Unidade.' })
})


routes.post('/produto/edit', autorizacao, async (req, res) => {
    let {id, ncm, cfop, csosn, descricao, custo, preco, status, unidadeId } = req.body

    let produtoDAO = new ProdutoDAO()
    if ( await produtoDAO.update(id, ncm, cfop, csosn, descricao, custo, preco, status, unidadeId)){
   
        res.redirect('/produto')
    }
    else {res.render('erro', {msg: 'Falha na tentativa de edição da Unidade.'})}
})


routes.get('/produto/excluir/:id', async (req,res) => {
    let id = req.params.id
    let produtoDAO = new ProdutoDAO()
    if (await produtoDAO.delete(id)){
        res.redirect('/produto')
    }
    else {res.render('erro', {msg: 'Falha na tentativa de excluir Unidade.'})}
})



module.exports = routes