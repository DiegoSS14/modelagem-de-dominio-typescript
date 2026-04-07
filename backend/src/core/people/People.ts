import Id from "../shared/Id";
import PeopleName from "../shared/PeopleName";

export default class People {
    readonly name: PeopleName
    readonly id: Id

    constructor(name: string) {
        this.name = new PeopleName(name)
        this.id = Id.generate()
    }
}