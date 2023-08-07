const express = require('express')
const autorizacao = require('../autorizacao/autorizacao')
const sendMailForgets = require('../public/js/utils/sendMailForgets')
const criptograf = require('../public/js/utils/cripograf')
const compare = require('../public/js/utils/compare')
const codeRandomString = require('../public/js/utils/codeRandomString')
// const UsuarioDAO = require('../model/dao/UsuarioDAO')
const bcrypt = require('bcryptjs')
const routes = express.Router()
const nodemailer = require('nodemailer')

const Usuario = require('../model/entity/Usuario')
const UsuarioDAO = require('../model/dao/UsuarioDAO')

const Empresa = require('../model/entity/Empresa')
const EmpresaDAO = require('../model/dao/EmpresaDAO')

const Empuser = require('../model/entity/Empuser')
const EmpuserDAO = require('../model/dao/EmpuserDAO')

const Venda = require('../model/entity/Venda')
const VendaDAO = require('../model/dao/VendaDAO')

//Rotas do usuário.

routes.post('/login', async (req, res) => {
    let { email, senha } = req.body

    let empresaDAO = new EmpresaDAO()
    let empresas = await empresaDAO.getAll()

    let empuserDAO = new EmpuserDAO()
    let empusers = await empuserDAO.getAll()

    let usuarioDAO = new UsuarioDAO()
    let usuario = await usuarioDAO.getByLogin(email, senha)
    if (usuario) {
        req.session.usuario = usuario
        if (usuario.nome == "admin") {
            res.render('admin/admin', {empusers: empusers, empresas: empresas, usuario: usuario})
        } else if (usuario.nome !== "admin")
        res.render('index', {empusers: empusers, empresas: empresas, usuario: usuario})
    }
    else
        res.render('login', { msg: 'Usuário ou senha inválidos.' })
})


routes.get('/logout', (req, res) => {
    req.session.usuario = undefined
    req.session.empresa = undefined
    res.redirect("/")
})



routes.get('/usuario/new', (req, res) => {
    res.render("usuario/usuario")
})


routes.post('/usuario/save', async (req, res) => {
    let { nome, email, senha, confirmaSenha } = req.body
    let forgets = ''
    let usuarioDAO = new UsuarioDAO()
    if (senha != '' && senha == confirmaSenha) {
        if (await usuarioDAO.getByMail(email)) {
            res.render('erro', {msg: 'e-mail já cadastrado!'})
        } else 
        if (await usuarioDAO.create(nome, email, senha, forgets)) {
            res.render('login', {msg: 'Usuário cadastrado, realize o login!'})
        }
        else {res.render('erro', {msg: 'Falha na tentativa de cadastro do novo usuário.'})}
    } else {res.render('erro', {msg: 'Senha e confirma senha devem ser iguais!'})}
})


routes.post('/usuario/recoveryPasswd', autorizacao, async (req, res) => {
    let {id, email, novaSenha, confirmaSenha} = req.body
    let usuarioDAO = new UsuarioDAO()
    if (novaSenha != '' && novaSenha == confirmaSenha){
    if (await usuarioDAO.resetPasswd(id, novaSenha)) {
        res.redirect('/index')
    }
    else {
        res.render('erro', {msg: 'Falha na tentativa de atualizar cadastro de usuario!'})
    }
} else res.render('erro', {msg: 'Nova Senha deve ser igual a confirmar senha!'}) 
})



routes.get('/usuario/excluir/:id', autorizacao, async (req, res) => {
    let usuarioDAO = new UsuarioDAO()
    if (await usuarioDAO.delete(req.params.id))
        res.render('usuario/usuario')
    else
        res.render('erro', { msg: 'Falha na tentativa de alteração dos dados de um usuário.' })
})



routes.get('/usuario/edit/:id', autorizacao, async (req, res) => {
    let usuarioDAO = new UsuarioDAO()
    let usuario = await usuarioDAO.getOne(req.params.id)
    if (usuario) {
        res.render('usuario/edit', {usuario: usuario })
    } else
    res.render('erro', { msg: 'Falha na tentativa de alteração dos dados de um usuário.' })
    
})


routes.post('/usuario/update', autorizacao, async (req, res) => {
    let { id, nome, email, senhaAtual, senhaBanco} = req.body
      
    if (compare(senhaAtual, senhaBanco)) {
            let usuarioDAO = new UsuarioDAO()
            if (await usuarioDAO.update(id, nome, email )) {
                res.redirect('/index')
            } res.render('erro', {msg: 'Falha na tentativa de atualizar cadastro de usuario!'})
    } else res.render('erro', {msg: 'Senha Atual Incorreta!'})
})


routes.get('/usuario/updatePassWord/:id', autorizacao, async (req, res) => {
    let usuarioDAO = new UsuarioDAO()
    let usuario = await usuarioDAO.getOne(req.params.id)
    if (usuario) {
        res.render('usuario/updatePassWord', {usuario: usuario})
    } else
        res.render('erro', { msg: 'Falha na tentativa de alteração da senha do um usuário.' })
})


routes.post('/usuario/resetPasswd', async (req, res) => {
    let { id, nome, email, novaSenha, confirmaSenha, senhaAtual, senhaBanco} = req.body
      
    if (compare(senhaAtual, senhaBanco)) {
        let senha = novaSenha
        if ( novaSenha != '' && novaSenha == confirmaSenha) {
            let usuarioDAO = new UsuarioDAO()
            if (await usuarioDAO.resetPasswd(id, senha )) {
                res.redirect('/index')
            }
            else {
                res.render('erro', {msg: 'Falha na tentativa de atualizar cadastro de usuario!'})
            }
        } else res.render('erro', {msg: 'Nova Senha deve ser igual a confirmar senha!'}) 
    } else res.render('erro', {msg: 'Senha Atual Incorreta!'})

})

routes.get('/usuario/forgets', (req, res) => {
    res.render('usuario/forgets')
})


routes.post('/usuario/sendMail', async (req, res) => {
    let {email} = req.body
    let forgets = codeRandomString()
    let usuarioDAO = new UsuarioDAO() 
    if (await usuarioDAO.updateForgets(email, criptograf(forgets))) {
        sendMailForgets(email, forgets)  
        res.render('usuario/checkCodeForgets')
    } else res.render('erro', {msg: 'Falha na tentativa de recuperar senha do usuario!'})
       

}) 


routes.post('/usuario/openSessionForgets', async  (req, res) => {
    let {email, forgets} = req.body
    forgets = forgets.toUpperCase()
    console.log(forgets)
    let usuarioDAO = new UsuarioDAO()
    let usuario = await usuarioDAO.checkForgets(email, forgets) 
    if (usuario) {
        req.session.usuario = usuario
        res.render('usuario/definePassword', {usuario: req.session.usuario})
    } else 
        res.render('login', {msg: "Código de recuperação ou e-mail inválido."})
})


routes.post('/empresaUsuario/select', autorizacao, async (req, res) =>{

    let {id} = req.body

    let empresaDAO = new EmpresaDAO()
    let empresa = await empresaDAO.getOne(id)

    
    req.session.empresa = empresa
    console.log("Rota select Empresa: ", empresa)
    
    // let venda = {}
    // req.session.venda = venda
    // console.log("Venda: ", venda)

    // let item = new ItemDAO()
    // req.session.item = item

    res.render('venda/venda', {empresa: req.session.empresa, usuario: req.session.usuario, msg: ''})
    

} )

module.exports = routes