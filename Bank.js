const NewDate = require('./GetDate')
class Bank {
  constructor(){
    this.balance = [];
    this.currentCredit = 0
    this.currentDate = new NewDate();
  }

  deposit(value){
    if(value < 0){
      throw new Error('Invalid amount');
    }
    this.currentCredit = this.currentCredit + value;
    this.balance.push( this.currentDate.getCurrentDate() + " || " + this.currentCredit)
  }

  withdrawal(value){
    if(value > this.currentCredit){
      throw new Error("Insufficient balance");
    } else if(value < 0){
      throw new Error("Invalid amount");
    }else{
    this.currentCredit = this.currentCredit - value + 0.0;
    this.balance.push( this.currentDate.getCurrentDate() + " || " + this.currentCredit)
    }
  }
  statement(){
    return this.balance
  }
}

module.exports = Bank;