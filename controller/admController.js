const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const admin = require('../autorizacao/admin')
const routes = express.Router()

const Usuario = require('../model/entity/Usuario')
const UsuarioDAO = require('../model/dao/UsuarioDAO')

const Csosn = require('../model/entity/Csosn')
const CsosnDAO = require('../model/dao/CsosnDAO')

const Empresa  = require('../model/entity/Empresa')
const EmpresaDAO = require('../model/dao/EmpresaDAO')

const Empuser = require('../model/entity/Empuser')
const EmpuserDAO = require('../model/dao/EmpuserDAO')

// const useradmin = req.session.usuario

routes.get('/', (req, res) => {
    res.render('login', {msg: ''})
})


routes.get('/index', autorizacao, async (req, res) => {
    let empresaDAO = new EmpresaDAO()
    let empresas = await empresaDAO.getAll()

    let empuserDAO = new EmpuserDAO()
    let empusers = await empuserDAO.getAll()
    res.render('index', {empresas: empresas, empusers: empusers, usuario: req.session.usuario, msg: ''})
})

routes.get('/admin', admin, (req, res) => {
    res.render('admin/admin', {usuario: req.session.usuario, msg: ''})
})



module.exports = routes