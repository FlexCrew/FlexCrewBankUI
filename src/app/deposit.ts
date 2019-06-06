export interface Deposit{
    id: number;
    type: string;
    transaction_date: string;
    status: string;
    payee_id: string;
    medium: string;
    amount: number;
    description: string; 
}