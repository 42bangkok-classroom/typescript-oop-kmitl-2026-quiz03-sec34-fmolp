import { PaymentMethod } from "./payment-method";

export class EWallet extends PaymentMethod {
    walletId: string = "";
    constructor(walletId: string, accountName: string) {
        super(accountName);
        this.walletId = walletId;
    }
    processPayment(amount: number): boolean {
        console.log(`Cutting e-wallet balance: ${amount} Baht`);
        return true;
    }
    getPaymentFee(amount: number): number {
        return amount * 0.01;
    }
}
