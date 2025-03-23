const {Router} = require('express')
const possessionRoute = require('./PossessionRoute')
const batimentRoute = require('./BatimentRoute')
const terrainRoute = require('./TerrainRoute')

const routes = Router()

routes.use('/possession',possessionRoute)
routes.use('/batiment',batimentRoute)
routes.use('/terrain',terrainRoute)

module.exports = routes