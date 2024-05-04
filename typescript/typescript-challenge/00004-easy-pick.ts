// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============
// MyPick<T, K>는 두 개의 제네릭 타입 매개변수를 받음
// - T: 속성을 선택할 타입
// - K: T에서 선택할 속성의 키들 (extends keyof T)
type MyPick<T, K extends keyof T> = {
  // [P in K]:
  // - P in K는 K에 있는 모든 키들을 반복
  // - T[P]는 T 타입의 키 P에 해당하는 값의 타입을 가져옴
  // 따라서, MyPick 타입은 T 타입에서 K에 있는 키를 선택한 새로운 객체(타입)
  [P in K]: T[P];
};

/** 
- 진짜 Pick 타입을 참조하여 작성
- https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys

type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
From T, pick a set of properties whose keys are in the union K
*/
