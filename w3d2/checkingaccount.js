"use strict";
class CheckingAccount extends Accounts{
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }
    getOverdraft(){
        return this._overdraft;
    }
    setOverdraft(overdraft){
        this._overdraft = overdraft;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (Math.abs(this._balance - amount) >= this.overdraft ) {
            throw Error("Overdraft limit has reached");
        }
        this._balance -= amount;
    }
    toString(){
        return "Checking Account " + this.getNumber() + " overdraft is: " + this._overdraft;
    }
    endOfMonth(){
        if(this._balance < 0){
            return `The checking balance is low:- balance: ${this._balance} overdraft limit: ${this._overdraft}`;
        } else {
            return "";
        }
    }
}