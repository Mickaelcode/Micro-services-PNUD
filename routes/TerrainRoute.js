const {Router} = require('express')
const { getAllTerrains, getTerrainById, createTerrain, updateTerrain, deleteTerrain } = require('../controllers/TerrainController')

const terrainRoute = Router()

terrainRoute.get('/',getAllTerrains)
terrainRoute.get('/:id',getTerrainById)
terrainRoute.post('/',createTerrain)
terrainRoute.put('/:id',updateTerrain)
terrainRoute.delete('/:id',deleteTerrain)

module.exports = terrainRoute