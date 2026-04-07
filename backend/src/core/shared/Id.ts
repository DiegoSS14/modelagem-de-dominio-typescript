import { v4 as uuid, validate } from "uuid"
import Errors from "../constants/Errors"

export default class Id {
    readonly value: string
    readonly new: boolean

    constructor(value?: string) {
        this.value = value ?? uuid()
        this.new = !value

        if(!validate(this.value)) throw Error(Errors.INVALID_ID)
    }

    static generate() {
        return new Id()
    }
}