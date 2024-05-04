// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// ============= Your Code Here =============
// type MyReadonly<T> = Readonly<T>;
// => mapped type Readonly<T> that makes all properties readonly:

// TypeScript has a readonly modifier for properties.
type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

/**
 * - https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const 

type Readonly<T> = { readonly [P in keyof T]: T[P]; } // 순회
Make all properties in T readonly
 */
