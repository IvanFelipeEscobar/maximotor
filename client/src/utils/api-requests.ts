interface UserInput  {
    email: string
    password: string
}
export const createUser = (userData: UserInput) => {
    return fetch(`http://localhost:3001/api/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
}