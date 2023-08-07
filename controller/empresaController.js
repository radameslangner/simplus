const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const admin = require('../autorizacao/admin')
const routes = express.Router()

const Csosn = require('../model/entity/Csosn')
const CsosnDAO = require('../model/dao/CsosnDAO')

const Endereco = require('../model/entity/Endereco')
const EnderecoDAO = require('../model/dao/EnderecoDAO')

const Empresa = require('../model/entity/Empresa')
const EmpresaDAO = require('../model/dao/EmpresaDAO')


const { Sequelise, sequelize} = require('../models')

const { Transaction, where } = require('sequelize')

const { Op } = require("sequelize");


routes.get('/empresa', admin, async (req, res) => {

  let empresaDAO = new EmpresaDAO()
  let empresas = await empresaDAO.getAll()
  res.render('empresa/empresa', {msg: '', empresas: empresas, usuario: req.session.usuario})
})


routes.get('/empresa/edit/:id', admin, async (req, res) => {

  let id = req.params.id

  let csosnDAO = new CsosnDAO()
  let csosns = await csosnDAO.getAll()

  let enderecoDAO = new EnderecoDAO()
  let enderecos = await enderecoDAO.getAll()
    
  let empresaDAO = new EmpresaDAO()
  let empresa = await empresaDAO.getOne(id)

  res.render('empresa/edit', {csosns: csosns, enderecos: enderecos, empresa: empresa, usuario: req.session.usuario})

})


routes.post('/empresa/edit', admin, async (req, res) => {

  let { id, razao, fantasia, cnpj, ie, status, enderecoId, csosnId, logradouro, numero, bairro, municipio, cep  } = req.body
  
  parseInt(id)
  parseInt(cnpj)
  parseInt(ie)
  parseInt(csosnId)
  parseInt(enderecoId)
  parseInt(status)
  
  console.log("enderecoId: ", enderecoId)
 
 
       
    //  let empresaDAO = new EmpresaDAO()
    //  let empresa = await empresaDAO.update(id, razao, fantasia, cnpj, ie, status, csosnId )
    
     const t = await sequelize.transaction();

     try {  
         
       await Empresa.update( {   
           razao: razao,
           fantasia: fantasia,
           cnpj: cnpj,
           ie: ie,
           status: status,
           csosnId: csosnId  
         }, { where: { id: id} },{transaction: t})

      await Endereco.update( {
          logradouro: logradouro, 
          numero: numero, 
          bairro: bairro, 
          municipio, municipio,
          cep: cep,
        }, { where: {id: enderecoId} }, {transaction: t})         
     
          await t.commit()
     
      let empresaDAO = new EmpresaDAO()
      let empresas = await empresaDAO.getAll()
      
      res.render('empresa/empresa', {empresas: empresas, msg: 'Empresa Alterada com Sucesso!', usuario: req.session.usuario })
     
       } catch (error) {

         await t.rollback()

        let empresaDAO = new EmpresaDAO()
        let empresas = await empresaDAO.getAll() 
        
        res.render('empresa/empresa', {empresas: empresas, msg: 'Dados não consistem, Verifique unicidade dos campos.', usuario: req.session.usuario })
             
       } // Fim catch






    // if (empresa) {

    //   let empresaDAO = new EmpresaDAO()
    //   let empresas = await empresaDAO.getAll()
      
    //   res.render('empresa/empresa', {empresas: empresas, msg: 'Empresa Alterada com Sucesso!', usuario: req.session.usuario })
    // }
    //   else {

    //     let empresaDAO = new EmpresaDAO()
    //     let empresas = await empresaDAO.getAll() 
        
    //     res.render('empresa/empresa', {empresas: empresas, msg: 'Dados não consistem, Verifique unicidade dos campos.', usuario: req.session.usuario })
    //   }

   
        
     


})

routes.get('/empresa/nova', admin, async (req, res) => {

    let csosnDAO = new CsosnDAO()
    let csosns = await csosnDAO.getAll()
    
  res.render('empresa/nova', {msg: '', csosns: csosns, usuario: req.session.usuario})
})




routes.post('/empresa/save', admin, async (req, res) => {

  let {logradouro, numero, bairro, municipio, cep, razao, fantasia, cnpj, ie, csosnId} = req.body

  parseInt(cnpj)
  parseInt(ie)
  parseInt(csosnId)

  const t = await sequelize.transaction();

try {  

  let enderecoempresa = await Endereco.create( {
      logradouro: logradouro, 
      numero: numero, 
      bairro: bairro, 
      municipio, municipio,
      cep: cep
    },{transaction: t})

  await Empresa.create( {
      razao: razao,
      fantasia: fantasia,
      cnpj: cnpj,
      ie: ie,
      enderecoId: enderecoempresa.id,
      csosnId: csosnId
    },{transaction: t})

     await t.commit()

     let empresaDAO = new EmpresaDAO()
     let empresas = await empresaDAO.getAll()
     
     res.render('empresa/empresa', {empresas: empresas, msg: 'Empresa Cadastrada com Sucesso!', usuario: req.session.usuario })

    //  let csosnDAO = new CsosnDAO()
    //  let csosns = await csosnDAO.getAll()

    //  res.render('empresa/empresa', {msg: 'Empresa Cadastrada com Sucesso!', csosns: csosns, usuario: req.session.usuario })

  } catch (error) {
        await t.rollback()

        let empresaDAO = new EmpresaDAO()
        let empresas = await empresaDAO.getAll() 

        let csosnDAO = new CsosnDAO()
        let csosns = await csosnDAO.getAll()
        
        res.render('empresa/nova', {empresas: empresas, csosns: csosns, msg: 'Dados não consistem, Verifique unicidade dos campos.', usuario: req.session.usuario })

        // let csosnDAO = new CsosnDAO()
        // let csosns = await csosnDAO.getAll()
   
        // res.render('empresa/empresa', {msg: 'Dados não consistem, Verifique unicidade dos campos.', csosns: csosns, usuario: req.session.usuario })
        
      }
      

}) // Fim rota empresa/empresa



module.exports = routes