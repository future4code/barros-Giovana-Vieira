import { Request, Response } from "express"
import {getAddressInfos} from "./services/getAddressInfos"
import connection from './dataBase/connection'

export const addressInfos = async (req: Request, res: Response): Promise<void> => {
    
    const {cep, numero, complemento} = req.body
    let statusCode = 400

    try {
        const address = await getAddressInfos(cep)

        await connection("user_addresses").insert({
            cep,
            logradouro: address.logradouro,
            num: numero,
            complemento,
            bairro: address.bairro,
            cidade: address.localidade,
            estado: address.uf
        })

        const userAddresses = await connection("user_addresses").select("*")

        res.status(201).send(userAddresses)

    } catch (err: any) {
        res.status(statusCode).send(err.message)
    }
}

