// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: "A" }): void => {};
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];

// ============= Your Code Here =============

// solution from https://github.com/type-challenges/type-challenges/issues/5112
type MyParameters<T> = T extends (...any: infer A) => any ? A : never;
// T가 함수인지를 확인
// "infer A": 추론된 타입 A는 전체 매개변수들의 타입을 튜플 형태로 가져옴
