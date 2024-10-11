// A closure is a function that remembers and has access to variables from its outer scope, even after the outer function has returned.
// It allows functions to maintain state between executions.
// Closures are useful for creating private variables in JavaScript, which are not directly accessible from the outside.

// Q: Implement a Bank Account with Closures in JavaScript

function bankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        }
    };
}

const myAccount = bankAccount(100);
console.log(myAccount.deposit(50));  // 150
console.log(myAccount.withdraw(30)); // 120
console.log(myAccount.withdraw(200)); // 'Insufficient funds'
console.log(myAccount.balance);      // undefined (balance is private)
