import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world Typescript Ecommerce')
})

export default app
