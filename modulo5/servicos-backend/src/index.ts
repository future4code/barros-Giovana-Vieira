import { Request, Response } from "express"
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { addressInfos } from "./requests"


dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.post('/address', addressInfos)

app.listen(process.env.PORT || 3003, ()=>{
    console.log(`Server is running at port ${process.env.PORT || 3003}.`)
})