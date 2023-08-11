import dotenv from 'dotenv'
import app from "./src"

dotenv.config()

const port: string = process.env.PORT || '3000'

app.listen(port, () => {
    console.log(`Server listening on ::`, port)
})