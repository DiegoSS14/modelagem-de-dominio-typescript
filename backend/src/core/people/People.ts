import CPF from "../shared/CPF";
import Id from "../shared/Id";
import PeopleName from "../shared/PeopleName";

export default class People {
    readonly name: PeopleName
    readonly cpf: CPF
    readonly id: Id

    constructor(name: string, cpf: string) {
        this.name = new PeopleName(name)
        this.cpf = new CPF(cpf)
        this.id = Id.generate()
    }
}