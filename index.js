class Account {

    constructor() {
        this.bankBalance = 0;
        this.transactionsLog = [];
    }

    deposit(amount) {
        this.bankBalance += amount;
    }

    withdraw(amount) {
        this.bankBalance -= amount;
    }

    logTransaction(date, amount) {
        this.transactionsLog.push({ date: date, amount: amount })
    }
}

module.exports = {
    Account,
};