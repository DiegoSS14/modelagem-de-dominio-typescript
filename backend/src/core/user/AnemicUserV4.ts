import Errors from "../constants/Errors"
import Validator from "../utils/Validator"

export default class AnemicUserV4 {
    constructor(
        private _id: number,
        private _name: string,
        private _email: string,
        private _password?: string
    ) {}

    get id() {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    get name() {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get email() {
        return this._email
    }

    set email(email: string) {
        if (Validator.isValidEmail(email)) {
            this._email = email
        }
    }

    get password() {
        return this._password
    }

    set password(password: string | undefined) {
        if (password && password.length < 6) {
            throw Error(Errors.INVALID_PASSWORD)
        }
        this._password = password
    }
}