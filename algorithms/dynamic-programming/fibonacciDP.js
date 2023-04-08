let cacluations = 0;

function fibonacciFn() {
  let cache = {}; // 해시 테이블에 피보나치 계산값을 캐싱합니다.

  return function fib(n) {
    cacluations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fibDP = fibonacciFn(); // 변수에 함수를 할당

const fibonacciIndex = 20;
const fibonacciNumber = fibDP(fibonacciIndex);

// if fibonacciIndex: 9, cacluations: 39
// O of N
console.log(`
Caculate Fibonacci with DP
-----------------------------
fibonacciIndex: ${fibonacciIndex}, 
fibonacciNumber: ${fibonacciNumber}, 
cacluations: ${cacluations}
`);
