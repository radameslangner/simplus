const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')

const Unidade = require('../model/entity/Unidade')
const UnidadeyDAO = require('../model/dao/UnidadeDAO')

const routes = express.Router()


routes.get('/unidade', autorizacao, async (req, res) => {
    
    let unidadeDAO = new UnidadeDAO()
    let unities = await unidadeDAO.getAll()
    res.render("unidade/unidade", { user: req.session.user, unities: unities })  
})



routes.get('/unidade/novo', autorizacao, (req, res) => {

    res.render("unidade/novo", { user: req.session.user })
})


routes.post('/unidade/save', autorizacao, async (req, res) => {
    let {unidade, description} = req.body
    
    let unidadeDAO = new UnidadeDAO()

        if (await unidadeDAO.create(unidade, description )) {
            res.redirect('/unidade')
        }
        else {res.render('erro', {msg: 'Falha na tentativa de cadastro do nova Unidade.'})}
})



routes.get('/unidade/edit/:id', autorizacao, async (req, res) => {
    let id = req.params.id
    let unidadeDAO = new UnidadeDAO()
    let unidade = await unidadeDAO.getOne(id)

    if (unidade) {
        res.render('unidade/edit', {unidade: unidade, user: req.session.user})
    }
    else res.render('erro', { msg: 'Falha na tentativa de busca dos dados da Unidade.' })
})


routes.post('/unidade/edit', autorizacao, async (req, res) => {
    let {id, unidade, description, status} = req.body

    let unidadeDAO = new UnidadeDAO()
    if ( await unidadeDAO.update(id, unidade, description, status)){
   
        res.redirect('/unidade')
    }
    else {res.render('erro', {msg: 'Falha na tentativa de edição da Unidade.'})}
})


routes.get('/unidade/excluir/:id', async (req,res) => {
    let id = req.params.id
    let unidadeDAO = new UnidadeDAO()
    if (await unidadeDAO.delete(id)){
        res.redirect('/unidade')
    }
    else {res.render('erro', {msg: 'Falha na tentativa de excluir Unidade.'})}
})



module.exports = routes