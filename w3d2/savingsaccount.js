"use strict";
class SavingAccount extends Accounts{
    constructor(number, interest) {
        super(number);
        this._interests=interest;
        this.icount = 0;
    }
    get interest(){
        return this._interests;
    }
    set interest(interest){
        this._interests = interest;
    }
    addInterest(){
        this.icount++;
        this._interests =this._interests * this.getBalance()/100;
        this.deposit(this._interests);
    }
    endOfMonth(){
        this.addInterest();
        return `Interest added SavingsAccount: balance: ${this.getBalance()} interest: ${this._interests}`;
    }
    toString(){
        return "Saving account " + this.getNumber() + " Interest: " + this._interests;
    }
}
