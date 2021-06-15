const express = require('express')
const UserController = require('./user.controller')
const router = express.Router()


router.get('/', UserController.findAll)

router.get('/:id', UserController.findbyId)

router.post('/', UserController.create)

router.put('/:id', UserController.update)

router.delete('/:id', UserController.remove)


module.exports = router

