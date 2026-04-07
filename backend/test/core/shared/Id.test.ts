import Errors from "@/core/constants/Errors";
import Id from "@/core/shared/Id";

test('Deve criar um novo id', ()=>{
    const id: Id = Id.generate()
    expect(id.value).toHaveLength(36)
    expect(id.new).toBeTruthy()
})

test('Deve criar um id a partir de um id já existente', ()=>{
    const oldId = Id.generate().value
    const newId = new Id(oldId)
    expect(newId.value).toHaveLength(36)
    expect(newId.new).toBeFalsy()
})

test('Deve lançar erro ao tentar criar um Id a partir de um valor inválido', ()=>{
    expect(()=> new Id('123')).toThrow(Errors.INVALID_ID)
})