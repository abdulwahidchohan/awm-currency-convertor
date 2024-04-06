#! /usr/bin/env node
import inquirer from "inquirer";
let currency: any = {
    USD: 1.00,
    PKR: 277.7,
    EURO: 0.9225,
    GBP: 0.791237,
    INR: 83.293847,
    AUS: 1.520073,
    CD: 1.359028,
    SD: 1.348795,
    JPY: 151.617762,
    CYR:	7.233262};
let user_answer = await inquirer.prompt([
    {
        type: "list", 
        name: "convertFromCurrency",
        choices: ["USD", "EURO","GBP","JPY","PKR","INR","AUS","CD","SD","CYR"],
        message:"Select the currency you want to Convert  ",
    },
    {
        type: "list", 
        name: "convertToCurrency",
        choices: ["USD", "EURO","GBP","JPY","PKR","INR","AUS","CD","SD","CYR"],
        message: "What is the target currency",
    
    },
    {
        type: "number", 
        name: "amount",
        message: "Enter the amount",

    }
])
let fromAmount = currency[user_answer.convertFromCurrency]
let toAmount = currency[user_answer.convertToCurrency]
let amount = user_answer.amount
let result = (amount * toAmount) / fromAmount
console.log(result)