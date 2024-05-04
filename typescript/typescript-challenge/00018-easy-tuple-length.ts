// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

// ============= Your Code Here =============
type Length<T extends readonly string[]> = T["length"];

// "튜플"의 length
// "readonly string"

// T["length"]
// 일반적인 배열인 경우에는 length 프로퍼티에 접근하여 배열의 길이를 가져올 수 없습니다. 왜냐하면 배열이 가변적이기 때문에 언제든지 요소가 추가되거나 제거될 수 있기 때문.
// readonly 키워드로, 배열이 불변하게 되므로 => 배열의 길이에 대한 정보를 보장
