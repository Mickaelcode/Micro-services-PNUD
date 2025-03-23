const {Router} = require('express')
const possessionRoute = require('./PossessionRoute')
const batimentRoute = require('./BatimentRoute')
const terrainRoute = require('./TerrainRoute')
const vehicleRoute = require('./VehicleRoute')
const fixedRoute = require('./FixedRoute')

const routes = Router()

routes.use('/possession',possessionRoute)
routes.use('/batiment',batimentRoute)
routes.use('/terrain',terrainRoute)
routes.use('/vehicle',vehicleRoute)
routes.use('/fixed',fixedRoute)

module.exports = routes