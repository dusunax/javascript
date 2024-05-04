// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];

// ============= Your Code Here =============
type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;

/**
 * Spread
 * https://www.typescriptlang.org/docs/handbook/variable-declarations.html#spread
 *
 * let bothPlus = [0, ...first, ...second, 5];
 *
 * let search = { ...defaults, food: "rich" };
 * 
  class C {
    p = 12;
    m() {}
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
  clone.m(); // error!
 */
