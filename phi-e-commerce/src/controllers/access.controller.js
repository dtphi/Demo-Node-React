'use strict'

const AccessService = require('../services/access.service.ecommerce')
const { OK, CREATED } = require('../core/success.response')

class AccessController {

    signUp = async (req, res, next) => {
        //return res.status(200).json(await AccessService.signUp(req.body))
        new CREATED({
            message: 'Registered OK',
            metadata: await AccessService.signUp(req.body),
            options: {
                limit: 10,
                offsets: 20
            }
        }).send(res)
    }
}

module.exports = new AccessController()