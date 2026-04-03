import Errors from "@/core/constants/Errors"
import PeopleName from "@/core/shared/PeopleName"

test('Deve lançar erro ao cadastrar nome vazio', ()=>{
    expect(()=>new PeopleName('')).toThrow(Error(Errors.EMPTY_NAME))
})

test('Deve criar um nome corretamente', ()=>{
    expect(new PeopleName('Diego').name).toBe(newName)
})

test('Deve lançar erro ao cadastrar nome muito grande', ()=>{
    expect(()=>new PeopleName('')).toThrow(Error(Errors.VERY_BIG_NAME))
})

test('Deve lançar erro ao cadastrar nome muito pequeno', ()=>{
    expect(()=>new PeopleName('')).toThrow(Error(Errors.VERY_SMALL_NAME))
})

test('Deve lançar erro ao cadastrar nome com caracteres inválidos', ()=>{
    expect(()=>new PeopleName('')).toThrow(Error(Errors.INVALID_CHARACTERS))
})

test('Deve lançar erro ao cadastrar nome sem sobrenome', ()=>{
    expect(()=>new PeopleName('')).toThrow(Error(Errors.NO_LASTNAME))
})