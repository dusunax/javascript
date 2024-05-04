// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const tuple = [1] as const;

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];

// @ts-expect-error
type error = Concat<null, undefined>;

// ============= Your Code Here =============
// 통과되지만 너무 김
// type Concat<
//   T extends readonly (string | number | string | boolean)[],
//   U extends readonly (string | number | string | boolean)[]
// > = [...T, ...U];

// 중복 타입 개선
// type Primitive = string | number | boolean;
// type Concat<T extends readonly Primitive[], U extends readonly Primitive[]> = [
//   ...T,
//   ...U
// ];

type Tuple = readonly any[];
type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];
