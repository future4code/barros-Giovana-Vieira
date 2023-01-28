import { CustomError } from "./CustomError"

export class MissingInfos extends CustomError{
    constructor(){
        super(422, "Missing informations!")
    }
}