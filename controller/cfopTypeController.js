const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')

const Cfop = require('../model/entity/Cfop')
const CfopDAO = require('../model/dao/CfopDAO')

const routes = express.Router()


routes.get('/cfopTipo', autorizacao, async (req, res) => {
    
    let cfopTipoDAO = new CfopTipoDAO()
    let cfopTipos = await cfopTipoDAO.getAll()
    res.render("cfop/cfopTipo", { user: req.session.user, cfopTipos: cfopTipos })  
})



module.exports = routes