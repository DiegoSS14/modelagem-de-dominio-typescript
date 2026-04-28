import People from "@/core/people/People";
import { default as ByRegion, default as PeoplesByRegion } from "@/core/people/PeoplesByRegion";
import PeopleBuilder from "../../data/PeopleBuilder";
import CPFRegion from "@/core/shared/CPFRegion";

const pessoas: People[] = [
    new People({ name: 'Alice Silva', cpf: '576.404.030-22',}),
    new People({ name: 'Bob Souza', cpf: '011.259.040-38',}),
    new People({ name: 'Carlos Oliveira', cpf: '107.875.872-73',}),
    new People({ name: 'Diana Santos', cpf: '142.835.862-50',}),
    new People({ name: 'Eduardo Pereira', cpf: '224.797.632-85',}),
    new People({ name: 'Fernanda Lima', cpf: '827.871.002-36',}),
    new People({ name: 'Gabriel Costa', cpf: '890.667.341-83',}),
    new People({ name: 'Helena Almeida', cpf: '296.881.591-15',}),
    new People({ name: 'Igor Rocha', cpf: '507.946.131-44',}),
    new People({ name: 'Julia Barbosa', cpf: '554.078.724-20',}),
    new People({ name: 'Kevin Mendes', cpf: '726.164.384-02',}),
    new People({ name: 'Laura Ferreira', cpf: '773.673.444-55',})
] as const;

test('Deve agrupar várias pessoas por CPF', ()=>{
    // const peoples: People[] = PeopleBuilder.createMany(100)
    const region: any = new ByRegion(pessoas)
    expect(region.group()).toBeTruthy
    expect(region.group().size).toBe(4)
})

test('Deve agrupar as pessoas da região de SP', ()=>{
    const peoples = PeopleBuilder.createMany(1000)
    const group = new PeoplesByRegion(peoples).group()

    const peoplesSP = group.get(CPFRegion.SP as any) ?? []
    const sameRegion = peoplesSP.every(p => p.cpf.region === CPFRegion.SP)
    expect(true).toBe(sameRegion)
})