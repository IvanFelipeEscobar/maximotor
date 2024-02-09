export interface Repairs {
    parts: string[];
    repair: string;
}

export interface UserInfo {
    phone: string;
    fName: string;
    lName: string;
    streetAddress?: string;
    city?: string;
    state?: string;
    zip?: string;
}

export interface Vehicle {
    year: number;
    make: string;
    model: string;
    mileage?: number;
    repairs?: Repairs[];
}

export interface User {
    email: string;
    userInformation?: UserInfo;
    cars?: Vehicle[];

}
