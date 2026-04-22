import Errors from "@/core/constants/Errors"
import People from "@/core/people/People"
import Id from "@/core/shared/Id"

test('Deve criar uma pessoa corretamente', () => {
    const people = new People({ name: 'Diego Sousa da Silva', cpf: '99974602009' })
    expect(people.name.firstName).toBe('Diego')
})

test('Deve criar uma pessoa passando ID no construtor', () => {
    const id = Id.generate().value
    const people = new People({ name: 'Diego Sousa da Silva', cpf: '99974602009', id})
    expect(people.id.value).toBe(id)
})

test('Deve retornar erro ao tentar criar pessoa passando id inválido', () => {
    const id = "asdknand"
    expect(()=>new People({ name: 'Diego Sousa da Silva', cpf: '99974602009', id})).toThrow(Errors.INVALID_ID)
})

test('Deve retornar erro ao tentar criar pessoa passando cpf inválido', () => {
    expect(()=>new People({ name: 'Diego Sousa da Silva', cpf: 'dskad512'})).toThrow(Errors.INVALID_CPF)
})

test('Deve lançar erro ao tentar criar uma pessoa com nome vazio', () => {
    expect(() => new People({ name: ' ', cpf: '99974602009' })).toThrow(Errors.EMPTY_NAME)
})

test('Deve gerar um ID automático quando não informado', () => {
    const people = new People({ name: 'Diego Sousa da Silva', cpf: '99974602009' })
    expect(people.id.value).toBeDefined()
    expect(people.id.new).toBe(true)
})

test('Deve lançar erro ao tentar criar pessoa com CPF inválido', () => {
    expect(() => new People({ name: 'Diego Sousa da Silva', cpf: '12345678901' })).toThrow()
})

test('Deve retornar CPF formatado corretamente', () => {
    const people = new People({ name: 'Diego Sousa da Silva', cpf: '99974602009' })
    expect(people.cpf.formatCPF).toBe('999.746.020-09')
})

test('Deve marcar new como false quando ID é informado', () => {
    const id = Id.generate().value
    const people = new People({ name: 'Diego Sousa da Silva', cpf: '99974602009', id })
    expect(people.id.new).toBe(false)
})

test('Deve retornar nome completo corretamente', () => {
    const people = new People({ name: 'Diego Sousa da Silva', cpf: '99974602009' })
    expect(people.name.fullName).toBe('Diego Sousa da Silva')
    expect(people.name.lastName).toEqual(['Sousa', 'da', 'Silva'])
})

test('Deve armazenar props corretamente', () => {
    const props = { name: 'Diego Sousa da Silva', cpf: '99974602009' }
    const people = new People(props)
    expect(people.props.name).toBe(props.name)
    expect(people.props.cpf).toBe(props.cpf)
})

test('Deve clonar uma pessoa com base em novos dados', () => {
    const props = { name: 'Diego Sousa da Silva', cpf: '99974602009' }
    const people = new People(props)
    const newPeople = people.clone({name: "Filipe Sousa da Silva", cpf: "00000000000"})
    expect("Filipe Sousa da Silva").toBe(newPeople.name.fullName)
    expect("00000000000").toBe(newPeople.cpf.value)
})