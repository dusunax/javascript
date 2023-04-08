function memoizedAddTo80WithCloser() {
  let cache = {};

  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("처리 중...");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80WithCloser();

console.log("메모이제이션");
console.log("첫 번째: ", memoized(1)); // 연산 후 캐싱
console.log("두 번째: ", memoized(1)); // O of One

// console.log("첫 번째: ", memoizedAddTo80WithCloser()(1));
// console.log("두 번째: ", memoizedAddTo80WithCloser()(1));
