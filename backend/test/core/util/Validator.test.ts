import Validator from "@/core/utils/Validator"

test('Deve enviar uma mensagem de erro ao enviar um valor nulo', () => {
    const res = Validator.notNull(null as any, 'Erro')
    expect(res).toBe('Erro')
})

test('Deve enviar um valor não nulo', () => {
    const res = Validator.notNull('abc', 'Erro')
    expect(res).toBe(null)
})

test('Deve enviar uma mensagem de erro ao enviar um valor undefined', () => {
    const res = Validator.notUndefined(undefined as any, 'Erro')
    expect(res).toBe('Erro')
})

test('Deve enviar um valor não undefined', () => {
    const res = Validator.notUndefined('abc', 'Erro')
    expect(res).toBe(null)
})

test('Deve enviar uma mensagem de erro ao enviar um valor menor do que 6 caracteres', () => {
    const res = Validator.sizeSmallerThen('abc', 6, 'Erro')
    expect(res).toBe('Erro')
})

test('Deve enviar um valor maior que 6 caracteres', () => {
    const res = Validator.sizeSmallerThen('abcdefg', 6, 'Erro')
    expect(res).toBe(null)
})

test('Deve enviar uma mensagem de erro ao tentar enviar um texto vazio', () => {
    const res = Validator.notEmpty(' ', 'Erro')
    expect(res).toBe('Erro')
})

test('Deve permitir definir um texto que não é vazio', () => {
    const res = Validator.notEmpty('asasdasda', 'Erro')
    expect(res).toBe(null)
})

test('Deve retornar vários erros', ()=>{
    const res = Validator.combine(
        Validator.notEmpty(' ', 'Erro 1'),
        Validator.notEmpty(' ', 'Erro 2'),
        Validator.notEmpty(' ', 'Erro 3')
    )
    expect(res?.join(', ')).toBe('Erro 1, Erro 2, Erro 3')
})