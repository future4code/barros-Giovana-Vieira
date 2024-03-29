import { Express } from "express"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, ()=>{
    console.log(`Server is running at port ${process.env.PORT || 3003}.`)
})

export default app
