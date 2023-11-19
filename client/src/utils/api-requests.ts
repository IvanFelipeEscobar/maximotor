interface UserInput  {
    username: string
    email: string
    phone: string
    password: string
}
export const createUser = (userData: UserInput) => {
    return fetch(`/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
}