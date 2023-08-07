const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')

const CfopGrupo = require('../model/entity/CfopGrupo')
const CfopGrupoDAO = require('../model/dao/CfopGrupoDAO')

const routes = express.Router()


routes.get('/cfopGrupo', autorizacao, async (req, res) => {
    
    let cfopgrupoDAO = new CfopGrupoDAO()
    let cfopgrupos = await cfopgrupoDAO.getAll()
    res.render("cfop/cfopGrupo", { user: req.session.user, cfopgrupos: cfopgrupos })  
})



module.exports = routes