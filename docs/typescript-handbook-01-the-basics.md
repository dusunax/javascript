# Typescript Handbook

## The Basics

```tsx
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// 1. Is message has a property 'toLowerCase' on it?
// 2. Is 'toLowerCase' is callable?
// 3. What do 'toLowerCase' return?

// Calling 'message'
message(); // 🤔 Is message callable?
```

- JS에서는 실행 했을 때(런타임에서) 타입 오류를 확인할 수 있다
  - `TypeError: message is not a function`
- JavaScript 런타임은 코드가 실행될 때 자신이 무엇을 해야 할지 결정하기 위하여
  `값의 타입`, 즉 해당 `값`이 어떤 동작과 능력을 가지고 있는지를 확인합니다
- 함수의 경우, 실행 시점에서 해당 값의 타입을 확인하는 매커니즘 x
  > or some values, such as the primitives string and number, we can identify their type at runtime using the typeof operator. But for other things like functions, there’s no corresponding runtime mechanism to identify their types. For example, consider this function:

### Static type-checking, 정적 타입 검사

- a type is the concept of describing which values can be passed to fn and which will crash, JavaScript only truly provides dynamic typing - running the code to see what happen. - use a static type system to make predictions about what the code is expected to do before it runs
- Static types systems describe the shapes and behaviors of what our values will be, when we run our programs

### Non-exception Failures, 예외가 아닌 실행 실패

- 런타임 오류: the JavaScript runtime tells us that it thinks something is nonsensical (ECMAScript 명세)

1. In TypeScript, the following code produces an error about location not being defined

```tsx
// Javascript에서 없는 property에 접근 시, 에러가 아닌 undefined
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined
```

```
Property 'location' does not exist on type '{ name: string; age: number; }'.
```

2. TypeScript catches bugs

```tsx
// - typo
announcement.toLocalLowerCase(); // toLocaleLowerCase

// - Meant to be Math.random()
Math.random < 0.5;

// - basic logic errors.
// This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // 🚧 Oops, unreachable
}
```

### Types for Tooling, 프로그래밍 도구로서의 타입

- the core type-checker can provide error messages and code completion as you type in the editor. (code completion 코드 완성 기능)
- An editor that supports TypeScript can deliver “quick fixes” to automatically fix errors, refactorings to easily re-organize code, and useful navigation features for jumping to definitions of a variable, or finding all references to a given variable. All of this is built on top of the type-checker and is fully cross-platform

### `tsc` the TypeScript compiler

```tsx
tsc hello.ts
```

- tsc
  - ts to js, compile or transform
- 사람이 작성한 듯이 깔끔하고 읽을 수 있는 코드
  - 일관성 있게 들여 쓰기를 수행
  - 여러 줄에 걸쳐 코드가 작성되는 것을 감안
  - 코드 주변에 작성된 주석도 잘 배치
- js 코드만 작성해도, TypeScript compiler 타입 검사를 통해 command line에서 문제점을 확인할 수 있다.

### Emitting with Errors, 오류 발생시키기

- 타입스크립트에서 오류가 발생해도 코드 실행 중단x, 방해x
- TypeScript’s core values: much of the time, you will know better than TypeScript
  - JavaScript로 작성된 코드를 TypeScript로 마이그레이션하는 과정에서 타입 검사 오류가 발생하는 경우를 떠올려보세요. 결국에는 타입 검사를 통과하도록 코드를 수정해나가겠지만, 사실 원본 JavaScript 코드는 이미 제대로 잘 작동하고 있는 상태
- TypeScript가 보다 엄격하게 동작하기를 원할 수도 있습니다. 이 경우 --noEmitOnError 컴파일러 옵션을 사용하면 됩니다. hello.ts 파일을 수정한 뒤 위 플래그 옵션을 사용하여 tsc를 실행해보세요.

```tsx
tsc --noEmitOnError hello.ts
```

### Explicit Types, 명시적 타입

```tsx
// type annotation
// greet takes a person of type string, and a date of type Date
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

- In many cases, TypeScript can infer (or “figure out”) the types for us.

### Erased Types

```tsx
// compiled js
"use strict";
function greet(person, date) {
  // no longer have type annotations.
  console.log(
    // `Hello ${person}, today is ${date.toDateString()}!`;
    "Hello ".concat(person, ", today is ").concat(date.toDateString(), "!")
    // that string that used backticks (the ` character) - was converted to plain strings with concatenations.
  );
}
greet("Maddison", new Date());
```

- there really aren’t any browsers or other runtimes that can just run TypeScript unmodified -> That's why TypeScript needs a compiler
-

```tsx
Remember: Type annotations never change the runtime behavior of your program.
```

### Downleveling, 다운레벨링

- TypeScript has the ability to rewrite code from newer versions to older versions
- By default TypeScript targets ES3
  > While the default target is ES3, the great majority of current browsers support ES2015. Most developers can therefore safely specify ES2015 or above as a target, unless compatibility with certain ancient browsers is important.

### Strictness, 엄격도

- Different users come to TypeScript looking for different things in a type-checker
  - more loose opt-in experience which can help validate only some parts of their program, and still have decent tooling
  - (대다수의 사용자들) prefer to have TypeScript validate as much as it can straight away, and that’s why the language provides strictness settings as well
- type-checking strictness flags: 켜고 끌 수 있는 타입 검사 엄격도 플래그
  - CLI에서 --strict 플래그
  - tsconfig.json에 "strict": true
  - 개별적 옵션: noImplicitAny, strictNullChecks

#### noImplicitAny

- using any often defeats the purpose of using TypeScript in the first place. The more typed your program is, the more validation and tooling you’ll get

#### strictNullChecks

- makes handling null and undefined more explicit

---

##### English

- alluding: /əˈlo͞od/, suggest or call attention to indirectly; hint at. 암시
- particular: /pə(r)ˈtikyələr/
- explicit: /ikˈsplisət/, stated clearly and in detail, leaving no room for confusion or doubt.
- legitimate: /ləˈjidəmət/
- acquaint: /əˈkwānt/, make someone aware of or familiar with. 익숙
- `+`, concatenations: /kənˌkadəˈnāSH(ə)n/ 연결
- pedantic: /pəˈdan(t)ik/ 깐깐, 엄격
- lenient: /ˈlēnyənt/ 느슨
