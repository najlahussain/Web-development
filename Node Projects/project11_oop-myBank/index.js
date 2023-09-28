class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobile;
    account;
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.gender = "F";
        this.age = 0;
        this.mobile = 0;
        this.account = new BankAccount();
    }
}
class BankAccount {
    id = parseInt((Math.random() * 1000).toFixed());
    balance = 0;
    get getBalance() {
        return this.balance;
    }
    get getId() {
        return this.id;
    }
    debitMoney(amount) {
        if (this.balance < amount)
            console.log("Transaction not possible, insufficient funds.");
        else
            this.balance -= amount;
        return this.balance;
    }
    creditMoney(amount) {
        if (amount > 100) {
            this.balance += (amount - 1);
            console.log(`Additional $1 charges on amount greater than $100`);
        }
        return this.balance;
    }
}
export {};
