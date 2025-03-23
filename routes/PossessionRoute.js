const {Router} = require('express')
const { getAllPossession } = require('../controllers/PossessionController')

const router = Router()

router.get('/',getAllPossession)

module.exports =router