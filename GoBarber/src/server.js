const express = require('express')
const session = require('express-session')
const LokiStore = require('connect-loki')(session)
const nunjucks = require('nunjucks')
const path = require('path')
const flash = require('connect-flash')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.views()
    this.routes()
  }

  /**
   * express.urlencoded: Ajuda o node a lidar com formularios.
   */
  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(flash())
    this.express.use(
      session({
        store: new LokiStore({
          path: path.resolve(__dirname, '..', 'tmp', 'sessions.db')
        }),
        secret: 'MyAppSecret',
        resave: false,
        saveUninitialized: true
      })
    )
  }

  /**
   * path.resolve: Adiciona barra ou contra barra dependendo do sistema operacional
   * __dirname: Pega o diretorio raiz do projeto
   */
  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev, // diz ao node para verificar alterações nos arquivos apenas se for desenvolvimento
      express: this.express,
      autoescape: true
    })

    this.express.use(express.static(path.resolve(__dirname, 'public'))) // Mostra ao node onde está a pasta publica para servir o css sem problemas de acesso.

    this.express.set('view engine', 'njk') // diz ao node para utilizar a extensão njk
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
