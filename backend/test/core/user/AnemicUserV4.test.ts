import User from "@/core/user/AnemicUserV4";
import Errors from "@/core/constants/Errors";

const violedUser: ()=>User = () => new User(0, "sdada", "dsadsdads@gmail.com", "dasdasdasda")

test('deve permitir deixar um nome vazio', () => {
    let user: User = violedUser()
    user.name = ''
    expect(user.name).toBe("")
})

test('deve permitir definir um nome undefined', () => {
    let user: User = violedUser()
    user.name = undefined as any
    expect(user.name).toBeUndefined
})

test('deve lançar um erro ao tentar definir uma senha com menos de 6 caracteres', () => {
    let user: User = violedUser()
    expect(() => user.password = 'a').toThrow(Errors.INVALID_PASSWORD)
})

test('deve definir uma senha com 6 ou mais caracteres', () => {
    let user: User = violedUser()
    const newPass = "asdasdasdsadas"
    user.password = newPass
    expect(user.password).toBe(newPass)
})

test('deve permitir definir um id negativo', () => {
    let user: User = violedUser()
    user.id = -300
    expect(user.id).toBe(-300)
})

test('deve permitir setar um email válido', () => {
    const emailValido = "diego@gmail.com"
    let user: User = violedUser()
    user.email = emailValido
    expect(user.email).toBe(emailValido)
})

test('deve permitir setar um email válido', () => {
    const originalEmail = "dsadsdads@gmail.com"
    let user: User = violedUser()
    user.email = 'a'
    expect(user.email).toBe(originalEmail)
})