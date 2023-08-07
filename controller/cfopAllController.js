const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')

const CfopAll = require('../model/entity/Cfop')
const CfopAllDAO = require('../model/dao/CfopDAO')

const routes = express.Router()


routes.get('/cfopAll', autorizacao, async (req, res) => {
    
    let cfopAllDAO = new CfopAllDAO()
    let cfopAlls = await cfopAllDAO.getAll()
    res.render("cfop/cfopAll", { user: req.session.user, cfopAlls: cfopAlls })  
})

module.exports = routes