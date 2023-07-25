'use strict'

const AccessService = require('../services/access.service')

class AccessController {

    signUp = async (req, res, next) => {
        try {
            console.log(`Sign Up body: ${req.body}`)
            return res.status(200).json(AccessService.signUp(req.body))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController()