const { Account } = require('./index.js');

test('can create a new account with a bank balance', () => {
    let account = new Account();
    let expectedObject = { bankBalance: 0, transactionsLog: [] };
    expect(account).toMatchObject(expectedObject);
});

test('it can deposit funds', () => {
    let account = new Account();
    account.deposit(100);
    expect(account.bankBalance).toBe(100);
});

test('it can deposit funds multiple times', () => {
    let account = new Account();
    account.deposit(100);
    expect(account.bankBalance).toBe(100);
    account.deposit(150);
    expect(account.bankBalance).toBe(250);
});

test('it can withdraw funds', () => {
    let account = new Account();
    account.deposit(1000);
    expect(account.bankBalance).toBe(1000);
    account.withdraw(500);
    expect(account.bankBalance).toBe(500);
});

test('record transactions', () => {
    let account = new Account();
    const date = '10/01/2021';
    const amount = 300;
    account.logTransaction(date, amount);
    const expectedObject = { date: date, amount: amount };
    expect(account.transactionsLog[0]).toMatchObject(expectedObject);
});

// dates


// print transactions