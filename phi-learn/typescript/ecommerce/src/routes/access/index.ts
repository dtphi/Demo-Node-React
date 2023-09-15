import express, { Router, Request, Response } from "express"

const AccessRoutes: Router = express.Router()

AccessRoutes.get('/signUp', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'Sign Up',
        code: 200
    })
})

export default AccessRoutes