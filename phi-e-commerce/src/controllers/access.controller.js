'use strict'

const AccessService = require('../services/access.service.ecommerce')

class AccessController {

    signUp = async (req, res, next) => {
        try {
            const json = await AccessService.signUp(req.body)
            console.log(`Sign Up body: ${json}`)
            return res.status(200).json(json)
        } catch (error) {
            console.log('Controller error response::', error)
            next(error)
        }
    }
}

module.exports = new AccessController()