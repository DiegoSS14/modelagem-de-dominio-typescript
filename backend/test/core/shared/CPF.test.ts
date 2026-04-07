import Errors from "@/core/constants/Errors"
import CPF from "@/core/shared/CPF"

test('Deve formatar um CPF corretamente',()=>{
    const baseCpf = '00000000000'
    const cpf = new CPF(baseCpf)
    expect(cpf.formatCPF).toBe('000.000.000-00')
})

test('Deve retornar erro ao tentar criar um CPF inválido', ()=>{
    expect(()=>new CPF('02')).toThrow(Errors.INVALID_CPF)
})

test('Validar os últimos dígitos de um CPF',()=>{
    expect(CPF.verify("52998224725")).toBeTruthy()
})