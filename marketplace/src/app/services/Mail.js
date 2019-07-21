const nodemaile = require('nodemailer')
const mailConfig = require('../../config/mail')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const transport = nodemaile.createTransport(mailConfig)
const viewPath = path.resolve(__dirname, '..', 'views', 'emails')

transport.use('compile', hbs({
  viewEngine: exphbs.create({
    partialsDir: path.resolve(viewPath, 'partials'),
    defaultLayout: false
  }),
  viewPath,
  extName: '.hbs'
}))
module.exports = transport

// servidor de email: https://mailtrap.io
