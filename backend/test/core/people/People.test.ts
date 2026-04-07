import Errors from "@/core/constants/Errors"
import People from "@/core/people/People"

test('Deve criar uma pessoa corretamente', ()=>{
    const people = new People('Diego Sousa da Silva')
    expect(people.name.firstName).toBe('Diego')
})

test('Deve lançar erro ao tentar criar uma pessoa com nome vazio', ()=>{
    expect(()=>new People(' ')).toThrow(Errors.EMPTY_NAME)
})