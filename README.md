# 1. to run the tests:
 run 'jest' on the terminal

# 2. My approach for this program was create 2 classes:
GetDate class  => that handles the date format
Bank clASS => That uses the getDate class to display to the user the current date after doing a bank operation.

I decide to structure my approach in this way so the responsabilite of my classes are splited in 2. Bank operations and set the date.

# 3. To Run The Code
  This program was built in JavaScript and uses the Jest test suit. It requires the following
  nvm use node
  npm add jest
  npm install -g jest

  -Run node in the terminal
  Require the Bank class and the getDate class

  ```javascript 
  const Bank = require('./Bank');
  const getDate = require('./GetDate');
```

  -Create a new instance of each:
  ```javascript
  const bank = new Bank;
  const date = new GetDate;
  ```

  Deposit:
  ```javascript
  .deposit(value)
  ```
  takes a number as an argument to deposit that amount. This must be a number and it cannot have more than 2 decimal numbers.

  Withdraw:
  ```javascript
  .withdraw(value)
  ```
  takes a number as an argument to withdraw that amount. This must be a number and it cannot have more than 2 decimal numbers. If you have not deposited any money into the account, or if you are trying to withdraw a number which exceeds the current balance, you will be thrown an error.

  Statement:
   ```javascript
  .statement()
  ```
  will print the statement of your account transactions.

Dependencies:
No dependencies were used. I contemplated including jest-extension but I found I could use the matchers without relying on the extension and therefore decided against it.
