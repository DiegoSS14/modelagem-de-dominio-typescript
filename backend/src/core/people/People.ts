import CPF from "../shared/CPF";
import Id from "../shared/Id";
import PeopleName from "../shared/PeopleName";

export interface PeopleProps {
    name: string
    cpf: string
    id?: string
}

export default class People {
    readonly props: PeopleProps

    readonly name: PeopleName
    readonly cpf: CPF
    readonly id: Id

    constructor(props: PeopleProps) {
        this.props = props
        this.id = props.id ? new Id(props.id) : Id.generate()
        this.name = new PeopleName(props.name)
        this.cpf = new CPF(props.cpf)
    }

    clone(newProps: Partial<PeopleProps>) {
        return new People({...this.props, ...newProps, id: this.id.value})
    }
}