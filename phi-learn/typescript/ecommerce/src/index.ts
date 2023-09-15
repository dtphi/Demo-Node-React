import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express'
import AppMorgan from './middlewares/app.morgan'
import AppRoutes from './routes'

// Init app
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Init log
app.use(AppMorgan)

// Init routes
// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello world Typescript Ecommerce')
// })
app.use(AppRoutes)

export default app
