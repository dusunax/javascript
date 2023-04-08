let cacluations = 0;

// fibonacciBottomUp 함수 정의, n을 인자로 받음
function fibonacciBottomUp(n) {
  // 초기값 설정
  let answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    cacluations++;
    answer.push(answer[i - 2] + answer[i - 1]);
    // i-2번째와 i-1번째 항을 더한 값을 answer 배열에 추가
  }

  // 구한 값들 중 n번째 값 반환
  return answer.pop();
}

const fibonacciIndex = 20;
const fibonacciNumber = fibonacciBottomUp(fibonacciIndex);

// if fibonacciIndex: 9, cacluations: 109
// O of N
console.log(`
Caculate Fibonacci with Bottom up
-----------------------------
fibonacciIndex: ${fibonacciIndex}, 
fibonacciNumber: ${fibonacciNumber}, 
cacluations: ${cacluations}
`);
