## Javascript Study

> 모던 자바스크립트 Deep Dive + Mozilla

## 📌표준 빌트인 객체/표준 내장 객체 Standard Built-in Object

> 자바스크립트
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects
>
> - 자바스크립트의 표준 내장 객체에 대한 내용입니다(자바스크립트 핵심 기능)

- 표준 빌트인 객체는 자바스크립트 언어 자체에 내장되어 있어서, 어떤 환경에서도 사용할 수 있습니다.

### 객체 접근

- 표준 내장 객체는 Strict 모드 여부에 따라, 다음과 같이 접근할 수 있다.

| 구분                  | 접근       |
| --------------------- | ---------- |
| Strict Mode일 때      | globalThis |
| Strict Mode가 아닐 때 | this       |

### 내용

| 구분             | 해당 값                                                                                                                                                                                                    | 비고                                                                                                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 값 속성          | Infinity, NaN, undefined, globalThis                                                                                                                                                                       | 원시형과는 다르다!😡 데이터 타입이 아님!                                                                                                                                                                               |
| 함수 속성        | eval(), isFinite(), isNaN(), parseFloat()/부동소숫점, parseInt()/정수, endcodeURI()/특수문자를 인코딩, encodeURIComponent(), decodeURI(), decodeURIComponent()                                             | 문자열 인코딩 encodeURI, (deprecated)escape, 문자열 디코딩 decodeURI, (deprecated)unescape                                                                                                                             |
| 기초 객체        | Object, Function, Boolean, Symbol                                                                                                                                                                          | 일반 객체, 함수, 오류 객체 포함                                                                                                                                                                                        |
| 오류 객체        | Error, AggregateError, EvalError, InternalError(비표준), RangeError(값 번위가 아닌 인수 전달), ReferenceError(변수 참조), SyntaxError(문법 에러), TypeError(자료형), URIError(전역 URI 핸들링 함수 오사용) | AggregateError(Promise.any()로 전달된 모든 프로미스 거부, Error 하위 클래스), RangeError(값 번위가 아닌 인수전달), SyntaxEror(Error 하위 클래스, 문법 에러)                                                            |
| 숫자, 날짜       | Number, BigInt, Math, Date                                                                                                                                                                                 |                                                                                                                                                                                                                        |
| 텍스트           | String, RegExp                                                                                                                                                                                             |                                                                                                                                                                                                                        |
| 인덱스 콜렉션    | Array, 각 정수배열 (Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array)                                 | 배열과 배열형 객체                                                                                                                                                                                                     |
| 키 콜렉션        | Map, Set, WeakMap, WeakSet                                                                                                                                                                                 | 키를 사용하는 콜렉션, Iterable 콜렉션은 삽입 순서대로 순회할 수 있다.                                                                                                                                                  |
| 구조화 데이터    | ArrayBuffer, SharedArrayBuffer, Atomics(❓), DataView(❓), JSON                                                                                                                                            | SharedArrayBuffer (비활성화 이슈😡), Atomic (아토믹 연산을 정적 메소드로 제공, SharedArrayBuffer와 ArrayBuffer 객체와 홤께 사용), DataView (엔디언x, ArrayBuffer에서 다양한 숫자 자료형을 읽고 쓰는 저수준 인터페이스) |
| 제어 추상화 객체 | Promise(대리자), Generator, GeneratorFunction, AsyncFunction, AsyncGenerator, AsyncGeneratorFunction                                                                                                       | Promise (pending, fulfilled, rejceted / Web Worker / settled대기에서 벗어남, resolved잠김)                                                                                                                             |
| 리플렉션         | Reflect, Proxy                                                                                                                                                                                             |                                                                                                                                                                                                                        |
| 국제화           | Intl, Intl.Collator, Intl.DateTimeFormat, Intl.ListFormat, Intl.NumberFormat, Intl.PluralRules. Intl.RelativeTimeFormat. Intl.Locale                                                                       | ECMAScript 코어에 추가된 언어 구분 기능                                                                                                                                                                                |

### 📝 Mozilla 읽어보기 📝

- Atomics 객체 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Atomics
  - SharedArrayBuffer, ArrayBufffer와 함께 사용, 연산에 사용하는 메소드
- DataView()
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/DataView
  - ArrayBuffer로 뷰를 만듦
    - DataView.prototype.buffer: 참조하는 ArrayBuffer
    - DataView.prototype.byteLength: 시작점부터의 길이
    - DataView.prototype.byteOffect: 시작점 오프셋
    - DataView.prototype.getUint16… 시작점부터 주어진 오프셋 위치의 각 배열 객체를 return
    - DataView.prototype.setUnit… 저장
- 엔디언 Endian
  - https://developer.mozilla.org/ko/docs/Glossary/Endianness
  - 바이트 순서, 숫자를 구성하는 바이트를 컴퓨터가 정렬하는 방법
  ```tsx
  리틀 엔디언(Intel): 0x78 0x56 0x34 0x12
  빅 엔디언(네트워크 바이트 순서): 0x12 0x34 0x56 0x78
  혼합 엔디언(구형, 매우 드묾): 0x34 0x12 0x78 0x56
  ```
- Promise
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
  - api 통신에 .all() 잘못 사용할 시 트래픽 문제 있음
  - allSettled() - 모든 프로미스 처리까지 대기하는 프로미스 반환
  - any() - 하나라도 이행
  - race() - 하나라도 처리될 때까지 대기
- Intl
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
