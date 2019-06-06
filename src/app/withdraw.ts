export interface Withdraw{
    id: number;
    type: string;
    transaction_date: string;
    status: string;
    payer_id: number;
    medium: string;
    amount: number;
    desciption: string;
}