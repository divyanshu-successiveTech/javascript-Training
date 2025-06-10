// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().



class BankAccount {
    
    constructor(balance,owner){
        this.balance = balance;
        this.owner = owner;
    }

    deposit(n){
        this.balance += n;
    }

    withdraw(n){
        this.balance -= n;
    }

    displayBalance(){
        console.log(this.balance);
    }
}
const person = new BankAccount(10000,"harsh");

person.deposit(5000);
person.withdraw(2000);
person.displayBalance();

