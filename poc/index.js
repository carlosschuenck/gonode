const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// Diz pro express como lidar com formulario HTML, para pegar dados via request body
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'njk')

const users = ['Carlos', 'Alberto', 'Schuenck', 'Junior']

app.get('/', (req, res) => {
  return res.render(`list`, { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)

/**
 * SEM EXPRESS
 */

// const http = require("http");

// http.createServer((req, res) => {
//   console.log(req);
//   return res.end("HELLO HOR")

// }).listen(3000);
