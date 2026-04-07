import { verify } from "node:crypto"
import Errors from "../constants/Errors"

export default class CPF{
    readonly value: string

    constructor(value: string) {
        this.value = value
        if(!CPF.verify(value)) throw Errors.INVALID_CPF
    }

    get formatCPF() {
        let formatValue = this.value.slice(0, 9).match(/.{1,3}/g)?.join('.')
        return formatValue + '-' + this.value.slice(9, 11)
    }

    static verify(cpf: string): boolean {
        const onlyDigits = cpf.replace(/\D/g, '')
        if (onlyDigits.length !== 11) return false

        const dv1 = this.verifyDv(onlyDigits.slice(0, 9)) === Number(onlyDigits[9])
        const dv2 = this.verifyDv(onlyDigits.slice(0, 10)) === Number(onlyDigits[10])

        return dv1 && dv2
    }

    private static verifyDv(value: string): number {
        let calc = 0
        const initialWeight = value.length + 1

        for (let i = 0; i < value.length; i++) {
            calc += Number(value[i]) * (initialWeight - i)
        }

        const remainder = (calc * 10) % 11
        return remainder === 10 ? 0 : remainder
    }
}