const Sequelize = require('sequelize')
const Usuario = require('../entity/Usuario')

const Cfop = require('../entity/Cfop')
const CfopTipo = require('../entity/CfopTipo')
const CfopGrupo = require('../entity/CfopGrupo')



const Csosn = require('../entity/Csosn')
const Endereco = require('../entity/Endereco')

const Empresa = require('../entity/Empresa')

const Empuser = require('../entity/Empuser')

const Ncms = require('../entity/Ncms')
const Unidade = require('../entity/Unidade')

const Produto = require('../entity/Produto')

const Venda = require('../entity/Venda')
const Itemvenda = require('../entity/Itemvenda')


const connection = new Sequelize('dbtcc', 'root', 'rada', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

Usuario.init(connection)

Csosn.init(connection)

Cfop.init(connection)
CfopTipo.init(connection)
CfopGrupo.init(connection)

Ncms.init(connection)

Unidade.init(connection)

Endereco.init(connection)
Empresa.init(connection)

Empuser.init(connection)

Produto.init(connection)

Venda.init(connection)

Itemvenda.init(connection)

connection.sync({force: false})

module.exports = connection