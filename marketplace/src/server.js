const express = require('express')
const mongoose = require('mongoose')
const uriDatabase = require('./config/database')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.database()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json()) // express.json() da a possibilidade do express ler corpo em formato json
  }

  routes () {
    this.express.use(require('./routes'))
  }

  database () {
    mongoose.connect(uriDatabase('192.168.99.103'), {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }
}

module.exports = new App().express
