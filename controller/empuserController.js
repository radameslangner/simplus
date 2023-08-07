const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const admin = require('../autorizacao/admin')
const routes = express.Router()

const Csosn = require('../model/entity/Csosn')
const CsosnDAO = require('../model/dao/CsosnDAO')

const Endereco = require('../model/entity/Endereco')
const EnderecoDAO = require('../model/dao/EnderecoDAO')

const Usuario = require('../model/entity/Usuario')
const UsuarioDAO = require('../model/dao/UsuarioDAO')

const Empresa = require('../model/entity/Empresa')
const EmpresaDAO = require('../model/dao/EmpresaDAO')

const Empuser = require('../model/entity/Empuser')
const EmpuserDAO = require('../model/dao/EmpuserDAO')


routes.get('/empresaUsuario/empresaUsuario', admin, async (req, res) => {

    let empuserDAO = new EmpuserDAO()
    let empusers = await empuserDAO.getAll()
    res.render('empresaUsuario/empresaUsuario', {msg: '', empusers: empusers, usuario: req.session.usuario})
  })




  routes.get('/empresaUsuario/nova', admin, async (req, res) => {

    let usuarioDAO = new UsuarioDAO()
    let usuarios = await usuarioDAO.getAll()

    let empresaDAO = new EmpresaDAO()
    let empresas = await empresaDAO.getAll()

    res.render('empresaUsuario/nova', {usuarios: usuarios, empresas: empresas, usuario: req.session.usuario, msg: '' })

})


routes.post('/empresaUsuario/save', admin, async (req, res) => {

    let usuarioDAO = new UsuarioDAO()
    let usuarios = await usuarioDAO.getAll()

    let empresaDAO = new EmpresaDAO()
    let empresas = await empresaDAO.getAll()

    let {empresaId, usuarioId} = req.body

 

    let empuserDAO = new EmpuserDAO()
    let empuser = await empuserDAO.create(empresaId, usuarioId)

    if (empuser) { res.render('empresaUsuario/empresaUsuario', {empresas: empresas, usuarios: usuarios, msg: 'Cadastro Realizado com Sucesso!!'}) }
    else { 
            
        res.render('empresaUsuario/empresaUsuario', {empresas: empresas, usuarios: usuarios, msg: 'Falha no Cadastro! Verifique combinacão de Empresa Usuário '})}
    

})  

routes.get('/empresaUsuario/edit/:id', admin, async (req, res) =>{

  let id = req.params.id

  let usuarioDAO = new UsuarioDAO()
  let usuarios = await usuarioDAO.getAll()

  let empresaDAO = new EmpresaDAO()
  let empresas = await empresaDAO.getAll()

  let empuserDAO = new EmpuserDAO()
  let empuser = await empuserDAO.getOne(id)

  res.render('empresaUsuario/edit', {empuser: empuser, usuarios: usuarios, empresas: empresas,  usuario: req.session.usuario, msg: ''})

})

routes.post('/empresaUsuario/edit', admin, async (req, res) => {
  let {id, empresaId, usuarioId} = req.body

  let empuserDAO = new EmpuserDAO()
  
  if (empuser  = await empuserDAO.update(id, empresaId, usuarioId) ) {
    let empusers = await empuserDAO.getAll()
    res.render('empresaUsuario/empresaUsuario', {empusers: empusers,  usuario: req.session.usuario, msg: 'Alteração realizada com sucesso!'}  )
  } else {
    let empusers = await empuserDAO.getAll()
    res.render('empresaUsuario/empresaUsuario', {empusers: empusers,  usuario: req.session.usuario, msg: 'Falha! Usuário já cadastrado para empresa!'}  )
  }
})

module.exports = routes