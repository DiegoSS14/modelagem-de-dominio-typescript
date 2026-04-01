import User from "@/core/user/AnemicUserV2";

const violedUser: ()=>User = () => new User(0, "", "", "")

test('deve permitir deixar um nome vazio', () => {
    let user: User = violedUser()
    user.name = ""
    expect(user.name).toBe("")
})

test('deve permitir definir um nome undefined', () => {
    let user: User = violedUser()
    user.name = undefined as any
    expect(user.id).toBeUndefined
})

test('deve permitir definir uma senha fraca', () => {
    let user: User = violedUser()
    user.password = "a"
    expect(user.password).toBe("a")
})

test('deve permitir definir um id negativo', () => {
    let user: User = violedUser()
    user.id = -300
    expect(user.id).toBe(-300)
})