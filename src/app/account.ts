import { Customer } from './customer';

enum Type{
    CHECKING, SAVINGS, REWARDS
}

export interface Account{
    id: number;
    nickname: string;
    rewards: number;
    balance: number;
    customer: Customer;
    type: Type;
}