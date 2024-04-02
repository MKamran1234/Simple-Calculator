#! /usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {name: "Num1" ,type: "number", message: "Enter first number:" },
  { name: "Num2" ,type: "number", message: "Enter first number:" },
  {
    message: "select one of the operator to perform operation:",
    type: "list",
    name: "operator",
    choices: ["+", "-", "*", "/"],
  },
]);
let number1:number = answer.Num1
let number2: number = answer.Num2
let opt:string = answer.operator
console.log(number1) 
console.log(number2) 
console.log(opt) 
if (opt === "+"){
    console.log(`${number1} ${opt} ${number2} = ${number1 + number2}`)
}
else if (opt === "-"){
    console.log(`${number1} ${opt} ${number2} = ${number1 - number2}`)
}
else if (opt === "*"){
    console.log(`${number1} ${opt} ${number2} = ${number1 * number2}`)
}
else if (opt === "/"){
    console.log(`${number1} ${opt} ${number2} = ${number1 / number2}`)
}


