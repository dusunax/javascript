// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}

// ============= Your Code Here =============
// 모든 요소 확인

// 제네릭 타입 A가 제네릭 타입 B와 할당 호환되는지를 확인 => 호환되면 never, 아니면 A
// type MyExclude<A, B> = A extends B ? never : A;

// **mapped type**
// "Key in keyof T": mapped type을 사용하여 T의 속성들을 순회
// K에 해당하는 속성은 제외하고 나머지 속성들을 유지, 값은 T[S]
// type MyOmit<T, K extends keyof T> = { [S in MyExclude<keyof T, K>]: T[S] };

// ----------------------------------------------------------------
// 제네릭 타입 T에서 특정 속성 K를 제외한 새로운 타입을 생성
// K는 T의 key
type MyOmit<T, K extends keyof T> = {
  // "Key in keyof T": mapped type을 사용하여 T의 속성들을 순회
  // "as Key extends K": TS 4.1부터 key remapping이 가능

  // 순회 중
  // - T의 Key가 K임? never
  // - T의 Key가 K가 아님? Key를 다시 반환 (value는 T[Key])
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};
