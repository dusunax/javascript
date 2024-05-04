// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>
];

// @ts-expect-error
type error = MyAwaited<number>;

// ============= Your Code Here =============
// 에러 케이스가 동작하지 않음
// type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;

type MyAwaited<T extends PromiseLike<any>> =
  // T가 PromiseLike<infer Response>를 확장하는 경우에 대해 분기
  // => T가 PromiseLike 인터페이스나 유사한 형태를 갖는 타입일 때
  // => T가 Promise처럼 동작하며, 그 결과값의 타입을 Response로 추론할 수 있다
  T extends PromiseLike<infer Response>
    ? Response extends PromiseLike<any> // Response가 PromiseLike<any>를 확장하는 경우 (nest)
      ? MyAwaited<Response> // 재귀, 내부의 Promise resolve
      : Response // 응답 결과 반환
    : never; // MyAwaited로 처음 전달한 Type argument가 PromiseLike가 아님

// ----------------------------------------------------------------
// Promise 확인하기~! => PromiseLike
// interface PromiseLike<T> {
//   /**
//    * Attaches callbacks for the resolution and/or rejection of the Promise.
//    * @param onfulfilled The callback to execute when the Promise is resolved.
//    * @param onrejected The callback to execute when the Promise is rejected.
//    * @returns A Promise for the completion of which ever callback is executed.
//    */
//   then<TResult1 = T, TResult2 = never>(
//     onfulfilled?:
//       | ((value: T) => TResult1 | PromiseLike<TResult1>)
//       | undefined
//       | null,
//     onrejected?:
//       | ((reason: any) => TResult2 | PromiseLike<TResult2>)
//       | undefined
//       | null
//   ): PromiseLike<TResult1 | TResult2>;
// }
