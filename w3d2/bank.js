"use strict";
class Bank{
    static nextNumber = 10110;
    constructor() {
        this.accounts=[];
    }

    static nextNumber;
    addAccount(){
        const newAcc = new Accounts(this.nextNumber);
        this.accounts.push(newAcc);
        this.nextNumber++;
        return newAcc.getNumber();
    }
    addSavingsAccount(interest){
        const newAcc = new SavingAccount(this.nextNumber);
        this.accounts.push(newAcc);
        this.nextNumber++;
        return newAcc.getNumber();
    }
    addCheckingAccount(overdraft){
        const newAcc = new CheckingAccount(this.nextNumber);
        this.accounts.push(newAcc);
        this.nextNumber++;
        return newAcc.getNumber();
    }
    closeAccount(number){
        for(let i in this.accounts){
            if(number===this.accounts[i].getNumber()){
                this.accounts[i].slice(i,1);
            }
        }
    }
    accountReport(){
        let out = "";
        for(let account in this.accounts){
            out += account.toString() + "\n";
        }
        return out;
    }
    endOfMonth(){
        let out = "";
        for(let account in this.accounts){
            out += account.endOfMonth() + '\n';
        }
        return out;
    }
}