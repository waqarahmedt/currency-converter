#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.75,
    PKR: 280,
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter form Currency",
        type: "list",
        choices: ['USD', 'INR', 'EUR', 'GBP', 'PKR',]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ['USD', 'INR', 'EUR', 'GBP', 'PKR',]
    },
    {
        name: "Amount",
        message: "Enter your Amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let Amount = user_answer.Amount;
let baseAmount = Amount / fromAmount; // usd base currency   // 4
let ConvertedAmount = baseAmount * toAmount;
console.log(ConvertedAmount);
// console.log("The End");
