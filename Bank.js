const NewDate = require('./GetDate')
class Bank {
  constructor(){
    this.balance = [];
    this.currentCredit = 0
    this.currentDate = new NewDate();
  }

  deposit(value){
    this.currentCredit = this.currentCredit + value;
    this.balance.push( this.currentDate.getCurrentDate() + " || " + this.currentCredit)
  }

  withdrawal(value){
    this.currentCredit = this.currentCredit - value + 0.0;
    this.balance.push( this.currentDate.getCurrentDate() + " || " + this.currentCredit)
  }
  statement(){
    return this.balance
  }
}

module.exports = Bank;