const {Router} = require('express')
const { getAllPossession, createPossession, updatePossession, deletePossession, getPossessionById } = require('../controllers/PossessionController')

const possessionRoute = Router()

possessionRoute.get('/',getAllPossession)
possessionRoute.post('/',createPossession)
possessionRoute.put('/:id',updatePossession)
possessionRoute.delete('/:id',deletePossession)
possessionRoute.get('/:id',getPossessionById)

module.exports =possessionRoute