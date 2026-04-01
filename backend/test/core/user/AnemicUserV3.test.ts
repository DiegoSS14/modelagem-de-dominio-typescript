import User from "@/core/user/AnemicUserV3";
import Errors from "@/core/constants/Errors";

const violedUser: ()=>User = () => new User(0, "sdada", "dsadsdads@gmail.com", "dasdasdasda")

test('deve permitir deixar um nome vazio', () => {
    let user: User = violedUser()
    user.setName("")
    expect(user.getName()).toBe("")
})

test('deve permitir definir um nome undefined', () => {
    let user: User = violedUser()
    user.setName(undefined as any)
    expect(user.getName()).toBeUndefined
})

test('deve lançar um erro ao tentar definir uma senha com menos de 6 caracteres', () => {
    let user: User = violedUser()
    expect(() => user.setPassword("a")).toThrow(Errors.INVALID_PASSWORD)
})

test('deve definir uma senha com 6 ou mais caracteres', () => {
    let user: User = violedUser()
    const newPass = "asdasdasdsadas"
    user.setPassword(newPass)
    expect(user.getPassword()).toBe(newPass)
})

test('deve permitir definir um id negativo', () => {
    let user: User = violedUser()
    user.setId(-300)
    expect(user.getId()).toBe(-300)
})

test('deve permitir setar um email válido', () => {
    const emailValido = "diego@gmail.com"
    let user: User = violedUser()
    user.setEmail(emailValido)
    expect(user.getEmail()).toBe(emailValido)
})

test('não deve alterar o e-mail pois está inválido', () => {
    const originalEmail = "dsadsdads@gmail.com"
    let user: User = violedUser()
    user.setEmail('a')
    expect(user.getEmail()).toBe(originalEmail)
})