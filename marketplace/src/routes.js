const express = require('express')
const authMiddleware = require('./app/middlewares/auth')
const controllers = require('./app/controllers')
const routes = express.Router()

/**
 * User
 */
routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true }))
routes.use(authMiddleware) // As requisições abaixo serão autenticadas

/**
 * Ads
 */
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

/**
 * Purchase
 */

routes.post('/purchases', controllers.PurchaseController.store)
module.exports = routes
