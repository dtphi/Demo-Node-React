import express, { Router, Request, Response } from "express"

const AccessRoutes: Router = express.Router()

AccessRoutes.get('/signUp', (req: Request, res: Response) => {
    res.send('Sing Up Shop Success')
})

export default AccessRoutes