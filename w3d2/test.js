"use strict";
describe("For account", function () {
    let _number = "123";
    let account = new Accounts(123);
    it("getNumber() returns 123", ()=> assert.equal(account.getNumber(), 123));

    it('getBalance', ()=>{
        assert.equal(0.0, account.getBalance());
    });
    it('deposit', ()=>{
        account.deposit(100);
        assert.equal(100, account.getBalance());
    });

    it('withdraw', ()=>{
        account.deposit(100);
        account.withdraw(150)
        assert.equal(50, account.getBalance());

        try {
            account.withdraw(-10)
        } catch (error) {
            assert.equal("Withdraw amount has to be greater than zero", error.message);
        }

        try {
            account.withdraw(100)
        } catch (error) {
            assert.equal("Insufficient funds", error.message);
        }
    });

    it('toString Method', ()=>{
        account.deposit(50);
        assert.equal(`Account ${_number}: balance 100`, account.toString());
    });
    // it('endOfMonth', ()=>{
    //     assert.equal("", account.endOfMonth());
    // });
});

describe('For SavingAccount class', function() { //For saving account type
    let account;
    let accist = 2;
    let balance = 1000;
    beforeEach(function() {
        account = new SavingAccount("1234", accist);
        account.deposit(balance);
    });
    it('Getter interest', ()=>{
        assert.equal(accist, account.interest);
    });
    it('Setter interest', ()=>{
        account.interest = 35;
        assert.equal(35, account.interest);
    });
    it('addInterest', ()=>{

        account.addInterest();
        assert.equal(balance * accist / 100, account.interest);
    });

    it('toString', ()=>{
        assert.equal("Saving account " + account.getNumber()
            + " Interest: " + account.interest,
            account.toString());
    });
    it('endOfMonth', ()=>{
        accist = account.getBalance() * account.interest / 100
        assert.equal(`Interest added to SavingsAccount: balance: ${account.getBalance()} interest: ${accist}`, account.endOfMonth());
    });

});

describe('For CheckingAccount class', function() {
    let account;
    let overdraft = 50;
    let balance = 1500;
    beforeEach(function() {
        account = new CheckingAccount("12345", overdraft);
        account.deposit(balance);
    });
    it('Getter overdraft', ()=>{
        assert.equal(overdraft, account.overdraft);
    });
    it('Setter overdraft', ()=>{
        account.overdraft = 100;
        assert.equal(100, account.overdraft);
    });
    it('withdraw', ()=>{
        account.withdraw(1500);
        try {
            account.withdraw(100);
        } catch (error) {
            assert.equal("Overdraft limit has reached", error.message);
        }
    });

    it('toString', ()=>{
        assert.equal("Checking account " + account.getNumber()
            + ": balance " + account.getBalance()
            +", overdraft " + account.overdraft,
            account.toString());
    });
    it('endOfMonth', ()=>{
        account.withdraw(1520);
        assert.equal(`Warning, low balance CheckingAccount 3: balance: ${account._balance} overdraft limit: ${account._overdraft}`, account.endOfMonth());
    });

});

describe('For Bank class', function() {
    let bank;
    beforeEach(function() {
        bank = new Bank();
    });
    it('addAccount', ()=>{
        const accountNumber = bank.addAccount();
        console.log(bank.accounts)
        assert.equal(bank.accounts[0].getNumber(), accountNumber);
    });
    it('addSavingsAccount', ()=>{
        const accountNumber = bank.addSavingsAccount(25);
        assert.equal(bank.accounts[0].getNumber(), accountNumber);
    });
    it('addCheckingAccount', ()=>{
        const accountNumber = bank.addCheckingAccount(50);
        assert.equal(bank.accounts[0].getNumber(), accountNumber);
    });

    it('accountReport', ()=>{
        bank.addAccount();
        bank.addSavingsAccount(25);
        bank.addCheckingAccount(50);
        let expected = "";
        for(let account in bank.accounts){
            expected += account.toString() + '\n';
        }
        assert.equal(expected, bank.accountReport());
    });
    it('endOfMonth', ()=>{

        bank.addAccount();
        assert.equal("", bank.accounts[0].endOfMonth());
        bank.addSavingsAccount(25);

        let account = bank.accounts[1];
        account.deposit(100);

        bank.addCheckingAccount(50);
        account = bank.accounts[2];
        account.withdraw(10);
        let expected = "";
        for(let account in bank.accounts){
            expected += account.toString() + '\n';
        }
        assert.equal(expected, bank.accountReport());
    });
});




