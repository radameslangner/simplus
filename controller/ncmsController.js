const express = require('express')


const autorizacao = require('../autorizacao/autorizacao')

const NcmsDAO = require('../model/dao/NcmsDAO')
const Ncms = require('../model/entity/Ncms')

const routes = express.Router()

/*
routes.get('/ncms', async (req, res) => {

    let ncmsDAO = new NcmsDAO()
    let ncmses = await ncmsDAO.getAll()

    console.log('ncmsDAO: ', ncmsDAO)
    console.log('ncmses: ', ncmses)

    return res.json(ncmses)
        
    //return res.json({texto: "texto json"})
    
})
*/ 

routes.get('/consultancms', (req, res) => {

    res.render("ncms/ncms", { user: req.session.user })
})


routes.get('/ncms', async (req, res) => {

    let descricao = req.query.descricao

    console.log('req params: ', req.query.descricao)

    let ncmsDAO = new NcmsDAO()
    let ncmses = await ncmsDAO.getByDescricao(descricao)

    console.log('ncmsDAO: ', ncmsDAO)
    console.log('ncms: ', ncmses)

    return res.json(ncmses)
    
    
})


module.exports = routes