import { PaymentMethod } from "./payment-method";
import { CreditCard } from "./credit-card";
import { EWallet } from "./ewallet";

// ============================================
// ทดสอบ Polymorphism: PaymentMethod
// ============================================
console.log("=== Testing Polymorphism: PaymentMethod ===");

const payments: PaymentMethod[] = [
  new CreditCard("John Doe", "1234-5678-9012-3456"),
  new EWallet("Jane Doe", "081-234-5678"),
];

const amount = 1000;

payments.forEach((payment, index) => {
  console.log(`\nPayment ${index + 1} (${payment.constructor.name}):`);
  console.log(`Account: ${payment.getAccountName()}`);

  // Process Payment
  const success = payment.processPayment(amount);
  console.log(`Payment Status: ${success ? "Success" : "Failed"}`);

  // Calculate Fee
  const fee = payment.getPaymentFee(amount);
  console.log(`Fee: ${fee}`);
});

// Expected Output:
//
// Payment 1 (CreditCard):
// Account: John Doe
// Payment Status: Success
// Fee: 20
//
// Payment 2 (EWallet):
// Account: Jane Doe
// Payment Status: Success
// Fee: 10
