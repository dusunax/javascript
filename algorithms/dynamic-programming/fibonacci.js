let cacluations = 0;
function fibonacci(n) {
  cacluations++;

  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciIndex = 20;
const fibonacciNumber = fibonacci(fibonacciIndex);

// if fibonacciIndex: 9, cacluations: 109
// O of Two to the Power of N
console.log(`
Caculate Fibonacci with Recursion 
-----------------------------
fibonacciIndex: ${fibonacciIndex}, 
fibonacciNumber: ${fibonacciNumber}, 
cacluations: ${cacluations}
`);
