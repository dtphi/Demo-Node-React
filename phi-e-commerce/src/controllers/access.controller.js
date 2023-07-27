'use strict'

const AccessService = require('../services/access.service')
const { SuccessResponse, CREATED } = require('../core/success.response')

class AccessController {

    handlerRefreshToken = async (req, res, next) => {
        new SuccessResponse({
            message: 'Get token successfully',
            metadata: await AccessService.handlerRefreshToken(req.body.refreshToken)
        }).send(res)
    }

    logout = async (req, res, next) => {
        console.log('Controller Key Store:::', req.keyStore)
        new SuccessResponse({
            message: 'Logged out successfully',
            metadata: await AccessService.logout(req.keyStore)
        }).send(res)
    }

    login = async (req, res, next) => { 
        new SuccessResponse({
            metadata: await AccessService.login( req.body )
        }).send(res)
    }

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