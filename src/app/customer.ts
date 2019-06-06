import { Address } from "./address"

export interface Customer{
    id: number;
    firstName: string;
    lastName: string;
    address: Address;
}