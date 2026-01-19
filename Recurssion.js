function FactorialByLoop(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

const factioalLoop = FactorialByLoop(3);
console.log(factioalLoop);

function FactorialByRecursion(n) {
  if (n == 0) return 1;
  return n * FactorialByRecursion(n - 1);
}

const factorialRecursion = FactorialByRecursion(5);
console.log(factorialRecursion);

function fibonacciByLoop(n) {
  let first = 0;
  let second = 1;

  if (n === 0) return first;
  if (n === 1) return second;
  let sum;

  for (let i = 2; i <= n; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return second;
}

console.log(fibonacciByLoop(5));


function fibonacci(n){
    let first = 0 
    let second = 1
    let sum = 1 ;

    if( n=== 0 ) return 0 
    if( n === 1) return 1

      return  fibonacci(n - 1)  + fibonacci(n-2)
    
  
}

console.log(fibonacci(6 ));

