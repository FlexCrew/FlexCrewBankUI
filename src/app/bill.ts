export interface Bill{
    id: number;
    status: string;
    payee: string;
    nickname: string;
    creationDate: string;
    paymentDate: string;
    recurringDate: string;
    upcomingPaymentDate: string;
    paymentAmount: number;
    accountId: string;
}