import CPFRegion from "../shared/CPFRegion";
import People from "./People";

export default class ByRegion{
    public constructor(private peoples: People[]){}

    group(): Map<CPFRegion, People[]> {
        return this.peoples.reduce((map, people)=>{
            const region = people.cpf.region
            const peoplesByRegion = map.get(region) ?? []
            peoplesByRegion?.push(people)
            map.set(region, peoplesByRegion)
            return map
        }, new Map<CPFRegion, People[]>)
    }
}