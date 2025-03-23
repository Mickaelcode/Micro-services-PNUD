const {Router} = require('express')
const possessionRoute = require('./PossessionRoute')
const batimentRoute = require('./BatimentRoute')

const routes = Router()

routes.use('/possession',possessionRoute)
routes.use('/batiment',batimentRoute)

module.exports = routes