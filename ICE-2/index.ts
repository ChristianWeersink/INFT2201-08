// ICE 2 for INFT 2202-07
// March 07, 2024
// Christian Weersink 100791903
// Turned js into ts compatible code
import {
  Calcs,
  add,
  subtract,
  multiply,
  divide
} from "./calculator";
import PromptSync from 'prompt-sync';


var readInput = () => {
  console.log("Welcome to the calculator. Choose one of the following options");
  console.log("1. add");
  console.log("2. subtract");
  console.log("3. multiply");
  console.log("4. divide");
  console.log("5. exit");

  const prompt = PromptSync();
  var option = prompt(">> ");

  if (option !== "5") {
    console.log("Enter the first number");
    let a:number = Number((">> "));

    console.log("Enter the second number");
    let b:number = Number(prompt(">> "));

    let c:Number;
    switch(option){
      case "1": {
        c = add(a, b);
        console.log(`a + b = ${c}`);
      }
      break;

      case "2": {
        c = subtract(a, b);
        console.log(`a - b = ${c}`);
      }
      break;

      case "3": {
        c = multiply(a, b);
        console.log(`a * b = ${c}`);
      }
      break;

      case "4": {
        c = divide(a, b);
        console.log(`a / b = ${c}`);
      }
      break;
    }    

    readInput();
  }
}

readInput();

console.log("Thank you for using calculator. Good Bye");

function promptSync() {
  throw new Error("Function not implemented.");
}
