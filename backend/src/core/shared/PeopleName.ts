import Errors from "../constants/Errors"
import Validator from "../utils/Validator"

export default class{
    name: string

    constructor(name: string) {
        this.name = name.trim()

        let errors = Validator.combine(
            Validator.notEmpty(name, Errors.EMPTY_NAME)
        )

        if(errors) throw Error(errors.join(','))
    }
}