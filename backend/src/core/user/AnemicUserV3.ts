import Errors from "../constants/Errors"
import Validator from "../utils/Validator"

export default class AnemicUserV3 {
    constructor(
        private id: number,
        private name: string,
        private email: string,
        private password?: string
    ) {
        this.setId(id)
        this.setName(name)
        this.setEmail(email)
        this.setPassword(password!)
    }

    getId() {
        return this.id
    }

    setId(id: number) {
        this.id = id
    }

    getName() {
        return this.name
    }

    setName(name: string) {
        this.name = name
    }

    getEmail() {
        return this.email
    }

    setEmail(email: string) {
        if (Validator.isValidEmail(email)) {
            this.email = email
        }
    }

    getPassword() {
        return this.password
    }

    setPassword(password: string) {
        if (password.length < 6) {
            throw Error(Errors.INVALID_PASSWORD)
        }
        this.password = password
    }
}