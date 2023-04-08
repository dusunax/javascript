// 해결책을 캐싱합니다.

let cache = {
  // property에 접근 : O of One Time
  1: 81,
};

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("처리 중...");
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log("메모이제이션");
console.log("첫 번째 연산: ", memoizedAddTo80(1)); // 연산 후 캐싱
console.log("두 번째 연산: ", memoizedAddTo80(1)); // O of One
