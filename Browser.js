import PromptSync from "prompt-sync";
import Stack from "./Stack.js";

const prompt = PromptSync();
let stack = new Stack();

let exit = false;

while (!exit) {
  const userChoice = prompt(`Please select one of the below choice 
        1.Press 1 to add new domain
        2.Press 2 to see the current domain
        3.Press 3 to to go back
        4.Press 4 to exit
        `);

  const userChoiceNumber = parseInt(userChoice);

  switch (userChoiceNumber) {
    case 1:
      const domain = prompt("Please enter a domain name : ");
      stack.push(domain);
      console.log("New Domain added : ", domain);
      break;

    case 2:
      const currentDomain = stack.peek();
      console.log("Current domain : ", currentDomain);
      break;

    case 3:
      stack.pop();
      console.log("Previous Domain : ", stack.peek());
      break;

    case 4:
      exit = true;
      break;

    default:
      break;
  }
}
