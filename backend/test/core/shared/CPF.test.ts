import Errors from "@/core/constants/Errors"
import CPF from "@/core/shared/CPF"
import CPFRegion from "@/core/shared/CPFRegion"

test('Deve formatar um CPF corretamente', () => {
    const baseCpf = '99974602009'
    const cpf = new CPF(baseCpf)
    expect(cpf.formatCPF).toBe('999.746.020-09')
})

test('Deve validar um CPF corretamente', () => {
    const baseCpf = '00000000604'
    expect(CPF.verify(baseCpf)).toBeTruthy()
})

test('Deve retornar false ao validar CPF undefined', () => {
    expect(CPF.verify(undefined)).toBeFalsy()
})

test('Deve reotnar erro ao digitar um cpf com dígito verificador inválido', () => {
    expect(()=>new CPF('99974602008')).toThrow(Errors.INVALID_CPF)
})

test('Deve retornar o dígito verificador do CPF', () => {
    const cpf = new CPF('999.746.020-09')
    expect(cpf.verifierDigit).toBe('09')
})

test('Deve retornar erro ao tentar criar um CPF inválido', () => {
    expect(() => new CPF('02')).toThrow(Errors.INVALID_CPF)
})

test('Deve retornar erro ao tentar criar um CPF undefined', () => {
    expect(() => new CPF(undefined)).toThrow(Errors.INVALID_CPF)
})

test('Deve retornar erro ao tentar criar um CPF vazio', () => {
    expect(() => new CPF('')).toThrow(Errors.INVALID_CPF)
})

test('Validar os últimos dígitos de um CPF', () => {
    expect(CPF.verify("52998224725")).toBeTruthy()
})

test('Deve retornar a região do CPF', ()=>{
    const cpf = new CPF('999.746.020-09')
    const cpf2 = new CPF('456.679.624-89')
    const cpf3 = new CPF('188.019.135-08')
    expect(CPFRegion.findByCode(0)).toEqual(cpf.region)
    expect(CPFRegion.findByCode(4)).toEqual(cpf2.region)
    expect(CPFRegion.findByCode(5)).toEqual(cpf3.region)
})