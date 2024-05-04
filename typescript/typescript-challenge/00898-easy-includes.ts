// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">, true>
  >,
  Expect<
    Equal<Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: "A" }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: "A" }], { readonly a: "A" }>, false>>,
  Expect<Equal<Includes<[{ readonly a: "A" }], { a: "A" }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>
];

// ============= Your Code Here =============
// 테스트 케이스 통과가 까다로움
// - strict equal checking
// - false가 include인 경우
// - 요소가 1 or 2 인 경우
// - null 체크

// solution from https://github.com/type-challenges/type-challenges/issues/1568

// 두 개의 타입이 동일한지를 확인
type IsEqual<X, Y> = (<G>() => G extends X ? 1 : 2) extends <G>() => G extends Y
  ? 1
  : 2
  ? true
  : false;

// Includes<T, U>는 입력된 배열 T에 특정 요소 U가 포함되어 있는지를 검사하는 제네릭 타입
type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? // 첫 번째 요소와 U를 비교하여 일치하는 경우 true를 반환하고, 아니라면 나머지 요소들에 대해 재귀적으로 Includes를 호출하여 검사
    IsEqual<First, U> extends true
    ? true
    : Includes<Rest, U> // 재귀재귀
  : false; // 끝까지 발견되지 않으면 false
