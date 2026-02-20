import { PaymentMethod } from "./payment-method";

export class CreditCard extends PaymentMethod {
    private cardNumber: string = "";
    constructor(cardNumber: string, accountName: string) {
        super(accountName);
        this.cardNumber = cardNumber;
    }
    processPayment(amount: number): boolean {
        console.log(`Cutting credit card balance: ${amount} Baht`);
        return true;
    }
    getPaymentFee(amount: number): number {
        return amount * 0.02;
    }
}
