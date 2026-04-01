import User from "@/core/user/AnemicUserV1";

const user: User = {
    id: 0,
    name: "",
    email: "",
    password: ""
}

test('deve permitir deixar um nome vazio', ()=>{
    user.name = ""
    expect(user.name).toBe("")
})

test('deve permitir definir um nome undefined', ()=>{
    user.name = undefined as any
    expect(user.id).toBeUndefined
})

test('deve permitir definir um id negativo', ()=>{
    user.id = -300
    expect(user.id).toBe(-300)
})

test('deve permitir definir uma senha fraca', ()=>{
    user.password = "a"
    expect(user.password).toBe("a")
})