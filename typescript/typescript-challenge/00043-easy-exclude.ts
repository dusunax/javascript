// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

// ============= Your Code Here =============
type MyExclude<T, U> = T extends U ? never : T;
// T가 U에 할당 가능하다?

/**
 * never: https://www.typescriptlang.org/docs/handbook/2/functions.html#never
 *
 * - 함수의 반환 타입으로 사용될 때: 함수가 절대로 값을 반환하지 않음
 * - 타입스크립트에서 유효하지 않은 상태를 나타낼 때: 예를 들어, 함수가 에러를 던지거나 무한루프에 빠진 경우, 실행 종료 등
 * - 타입스크립트의 타입 추론에서 사용될 때: union에 아무것도 남지 않음
 *
 * 진짜 Exclude
 * type Exclude<T, U> = T extends U ? never : T
 * Exclude from T those types that are assignable to U
 */
