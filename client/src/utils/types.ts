export interface RepairInfo {
    _id: number;
    parts: string;
    repair: string;
    mileage?: string;
    dateOfRepair?: string
}

export interface UserInfo {
    phone: string;
    firstName: string;
    lastName: string;
    streetAddress?: string;
    streetAddress2?: string;
    city?: string;
    state?: string;
    zip?: string;
}

export interface Vehicle {
    year: number;
    make: string;
    model: string;
    mileage?: number;
    repairs?: RepairInfo[];
    _id: number;
}

export interface User {
    email: string;
    userInformation?: UserInfo;
    cars?: Vehicle[];

}
export interface UDProps {
    userData: User 
  }
