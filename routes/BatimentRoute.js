const {Router} = require('express')
const { getAllBatiments, getBatimentById, createBatiment, deleteBatiment } = require('../controllers/BatimentController')

const batimentRoute = Router()

batimentRoute.get('/',getAllBatiments)
batimentRoute.get('/:id',getBatimentById)
batimentRoute.post('/',createBatiment)
batimentRoute.put('/:id',createBatiment)
batimentRoute.delete('/:id',deleteBatiment)

module.exports = batimentRoute