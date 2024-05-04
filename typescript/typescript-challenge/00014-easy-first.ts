// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>
];

// ============= Your Code Here =============
// 📌 Not a Solution: 3번째 테스트케이스가 통과 안됨
// type First<T extends (string | number | undefined | object)[]> = T[0];

// 📌 Solution A
// type First<T extends (string | number | undefined | object)[]> = T extends []
//   ? never
//   : T[0];

// 📌 Solution B
type First<T extends (string | number | undefined | object)[]> = T extends [
  infer F,
  ...infer _
]
  ? F
  : never;

/**
 * use ternary operator // expression
 */
