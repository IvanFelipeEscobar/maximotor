interface UserInput  {
    email: string
    password: string
}
export const createUser = async (userData: UserInput) => {
    return await fetch(`http://localhost:3001/api/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
}

export const signIn = async (userData: UserInput) => {
    return await fetch(`http://localhost:3001/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
}

export const getUserInfo = async (token: string) => {
return await fetch(`http://localhost:3001/api/users`, {
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
    }
})
}