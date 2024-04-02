import { RepairInfo } from "./types";

interface UserInput  {
    email: string
    password: string
}
interface UserInfoInput {
    firstName: string,
    lastName: string,
    phone: string,
    streetAddress?: string,
    streetAddress2?: string,
    city?: string,
    state?: string,
    zip?: string,
}
interface VehicleInput {
    year: number;
    make: string;
    model: string;
}

const apiUrl: string = process.env.NODE_ENV === 'production'
  ? 'https://maximotor.onrender.com'
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

export const addUserInfo = async (input: UserInfoInput, token: string) => {
    return await fetch(`${apiUrl}/api/users/user-info`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(input)
    })
}
export const getSingleVehicle = async (vehicleId: string, token: string) => {
    return await fetch(`${apiUrl}/api/users/vehicles/${vehicleId}`, {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    })
}
export const addNewVehicle = async (input: VehicleInput, token: string) => {
    return await fetch(`${apiUrl}/api/users/vehicles`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
        },
        body: JSON.stringify(input)
    })
}

export const deleteVehicle = async (vehicleId: string,  token: string) => {
    return await fetch(`${apiUrl}/api/users/vehicles/${vehicleId}`, {
        method: 'DELETE',
        headers:{
            authorization: `Bearer ${token}`
        }
    })

}

export const addRepair = async ( input: RepairInfo, vehicleId: string ) => {
    return await fetch(`${apiUrl}/api/users/vehicles/repairs/${vehicleId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
    })

}

export const editRepair = async ( input: RepairInfo, vehicleId: string, repairId: string ) => {
    return await fetch(`${apiUrl}/api/users/vehicles/repairs/${vehicleId}/${repairId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
    })

}

export const deleteRepair = async (vehicleId: string,repairId: string ) => {
    return await fetch(`${apiUrl}/api/users/vehicles/repairs/${vehicleId}/${repairId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })

}


