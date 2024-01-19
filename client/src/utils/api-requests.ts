interface UserInput  {
    email: string
    password: string
}
const apiUrl: string = process.env.NODE_ENV === 'production'
  ? 'https://maximotor-server.vercel.app/'
  : 'http://localhost:3001';

// Use `apiUrl` in your code


export const createUser = async (userData: UserInput) => {
    return await fetch(`${apiUrl}/api/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
}

export const signIn = async (userData: UserInput) => {
    return await fetch(`${apiUrl}/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
}

export const getUserInfo = async (token: string) => {
return await fetch(`${apiUrl}/api/users`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
    }
})
}