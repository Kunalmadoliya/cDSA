import PromptSync from "prompt-sync";
import Queue from "./Queue.js";

let prompt = PromptSync();
const printer = new Queue();

let exit = false;

while (!exit) {
  let user = prompt(` Please select one of the below choice :
    Press 1 to add element in printer
    Press 2 to delete the the first copy
    Press 3 to check 
    press 4 how many pages to copy 
    Press 5 to exit
     `);
  let userInput = parseInt(user);

  switch (userInput) {
    case 1:
      const userPrinter = prompt("what do you want to printer : ");
      printer.enqueue(userPrinter);
      console.log("Printing successfully .....");
      break;

    case 2:
      printer.dequeue();
      console.log("Deleting successfully .....");
      break;

    case 3:
      console.log("Checking : ", printer.peek());
      break;

    case 4:
      console.log("Pages : ", printer.size());
    break
    case 5:
      console.log("Exit successfully .....");
      exit = true;
      break;

    default:
      break;
  }
  console.log(user);
}
