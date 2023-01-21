# Modern JavaScript Development: Modules and Tooling

> Building a Morden Javascript Application
> modern JavaScript Development use modules, 3rd-party packages

## Build Process & JavaScript Bundle

| 빌드 과정  | 내용                    |
| ---------- | ----------------------- | ------------------------------------------------ |
| bundling   | 모듈을 하나로 합칩니다. |
| transpling | polyfilling             | 모던 자바스크립트를 ES5 이전으로 convert 합니다. |

<aside>
💡 **JavaScript를 트랜스파일링하는 기준은 왜 ES6 (ES2015)인가요?**

Babel은 JavaScript 코드를 트랜스파일(transpile)하는 도구입니다. 트랜스파일링은 새로운 JavaScript 문법을 지원하지 않는 브라우저에서도 실행 가능하도록 이전 버전의 JavaScript 코드로 변환하는 것을 말합니다.

ES6는 JavaScript의 새로운 버전으로, 많은 새로운 기능과 개선을 제공합니다. 이러한 기능들은 코드를 더 깔끔하게 작성하는데 도움이 되고, 개발자들의 효율을 높여줍니다. 예를들어, 화살표 함수, 블록 스코프 변수, 클래스, 모듈 등은 코드를 간단하게 작성하고 이해하는데 도움을 줍니다.

</aside>

### Software development?

| 과정               | 내용                                   | 구성                          | 사용                       |
| ------------------ | -------------------------------------- | ----------------------------- | -------------------------- |
| development        | modules, 3rd-party package로 구성      | package manager : npm, nodeJS |
| build process      | building과 transpilng                  | polyfilling 과정              | bundler : webpack & parcel |
| transplier : babel |
| production         | 빌딩 프로세스가 완료된 JavaScript 번들 |                               |

### Module은?

- 재사용 가능한 코드 & 코드를 캡슐화합니다.
- 기본적으로 module은 독립적인 파일(standalone file)로 구성되어 있습니다.
  - import & export
    - import : dependency
    - export : public api

### Module의 장점

1. 구성 요소를 분리 Compose software
2. 컴포넌트를 독립화 Isolate component
3. 추상화 Abstract code
4. 코드를 정리 Organized code
5. 코드를 재사용 Reuse code

## ES6 Module vs Script

## ES6 module을 Import하는 과정

> import가 실행되는 과정을 알아봅니다.

### 예시

- index.js

```tsx
import { rand } from "./math.js";
import { showDice } from "./dom.js";
const dice = rand(1, 6, 2);
showDice(dice);
```

### Parsing

- 메인 module이 실행되기 전에 parsing 작업이 일어납니다.

<aside>
💡 module을 동기적으로 import합니다.

동기적으로 발생하는 이유는 dead 코드 삭제 & 번들링을 원활히 하기 위함입니다.

import해온 모든 모듈이 다운되고, 실행된 다음 메인 module이 실행됩니다.

최상단에서 module을 import하여, 실행 전에 알아볼 수 있습니다.

</aside>

- 관련 레퍼런스
  - [https://blog.bitsrc.io/secret-behind-javascript-performance-v8-hidden-classes-ba4d0ebfb89d](https://blog.bitsrc.io/secret-behind-javascript-performance-v8-hidden-classes-ba4d0ebfb89d)
  - V8 ⇒ JIT, AST, hidden Class optimization
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/324dad0e-6bb6-4511-9fd3-73490caf9935/Untitled.png)

### Download

- **비동기**로 다운로드 합니다.
  - module의 import 자체는 동기로 발생
  - module의 다운로드는 비동기로 발생
  ```tsx
  각 모듈이 import => download되면, 각 모듈 또한 parsing, export 과정을 거칩니다.
  ```

### linking imports

- import한 module의 exports를 메인 module에 연결 link 합니다.
- link된 값은 복사된 값이 아니라, 연결된 값(참조하는 값)입니다.

  - Live connection, NOT copies. like a pointer
  - 따라서 exports의 값이 바뀐다면 import한 값도 바뀌게 됩니다.
    <aside>
    👉 **ES6 Module의 특징입니다!**

    다른 언어의 module에서는 해당되지 않습니다.

    </aside>

- linking 후, import한 각 모듈을 실행합니다.

### import 순서 정리

<aside>
📋 순서를 정리하자면

1. 메인 module을 파싱합니다.
2. import가 동기로 발생합니다.
3. download가 비동기로 발생합니다.
4. imports의 exports를 linking합니다.
5. 각 module을 실행합니다.
6. 이후, 메인 module을 실행합니다.
</aside>
