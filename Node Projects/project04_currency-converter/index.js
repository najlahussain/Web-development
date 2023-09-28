/**The TypeScript console app is used to convert currencies:
 * the users enter a certain amount of money in one currency and set the currency
 * they want to check the monetary value of. */
import inquirer from "inquirer";
var currencies;
(function (currencies) {
    currencies[currencies["PKR"] = 0] = "PKR";
    currencies[currencies["USD"] = 1] = "USD";
    currencies[currencies["EURO"] = 2] = "EURO";
    currencies[currencies["AED"] = 3] = "AED";
})(currencies || (currencies = {}));
;
let hashMap = new Map();
hashMap.set(currencies.PKR, Math.random());
let answer = await inquirer.prompt([
    {
        name: "currencyFrom",
        type: "rawlist",
        choices: ['PKR', 'USD', 'EURO', 'AED'],
        message: `Enter the currency you want to convert from: `
    },
    {
        name: "currencyTo",
        type: "rawlist",
        choices: ['PKR', 'USD', 'EURO', 'AED'],
        message: `Enter the currency you want to: `
    },
    {
        name: "amount",
        type: "number",
        message: `Enter the amount: `
    }
]);
console.log("Converted amount in ", answer.currencyTo, " is", answer.amount * Math.random());
