class Customer {
    firstName:string;
    lastName:string;
    gender:string;
    age:number;
    mobile:number;
    account : BankAccount;

    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.gender = "F";
        this.age = 0;
        this.mobile = 0;
        this.account = new BankAccount();
    }
}

class BankAccount {
    private id:number = parseInt((Math.random()*1000).toFixed());
    private balance : number = 0;

    get getBalance(){
        return this.balance;
    }

    get getId(){
        return this.id;
    }
    debitMoney(amount:number){
        if(this.balance<amount)
            console.log("Transaction not possible, insufficient funds.");
        else
            this.balance -= amount;
        return this.balance;
    }
    creditMoney(amount:number){
        if(amount>100) {
            this.balance += (amount-1);
            console.log(`Additional $1 charges on amount greater than $100`);
        }
        return this.balance;
    }
}