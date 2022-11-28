import { Request, Response } from "express"
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connection from './dataBase/connection'
import getAddressInfo from '../src/services/getAddressInfo'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.post('/address', async (req: Request, res: Response): Promise<void> => {
    
    const {cep} = req.body
    let statusCode = 400

    try {
        const result = await getAddressInfo(cep)

        res.status(201).send(result)
    } catch (err: any) {
        res.status(statusCode).send(err.message)
    }

})

app.listen(process.env.PORT || 3003, ()=>{
    console.log(`Server is running at port ${process.env.PORT || 3003}.`)
})