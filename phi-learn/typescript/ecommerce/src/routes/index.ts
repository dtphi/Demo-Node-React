import express, { Router } from "express"
import AccessRoutes from "./access"

const AppRoutes: Router = express.Router()

AppRoutes.use('/v1/api', AccessRoutes)

export default AppRoutes