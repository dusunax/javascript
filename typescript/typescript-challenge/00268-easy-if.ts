// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>
];

// @ts-expect-error
type error = If<null, "a", "b">;

// ============= Your Code Here =============
// 에러케이스가 통과되지 않음
// type If<C, T, F> = C extends Boolean ? (C extends true ? T : F) : never;

// 이렇게 사용해야함, 그래야 오류 발생
type If<C extends boolean, T, F> = C extends true ? T : F;
