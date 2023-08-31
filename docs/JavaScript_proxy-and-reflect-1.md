# Javascript Study

> 모던 자바스크립트 Deep Dive + Mozilla

## 📌 Proxy & Reflect: part1

> 자바스크립트
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy#%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97_%EC%86%8D%EC%84%B1_%ED%8F%AC%EC%9B%8C%EB%94%A9_%EC%97%86%EC%9D%8C > https://replit.com/@dusunax/javascript#index.js
>
> - Proxy와 Reflect

### 1. Reflect

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect

- 중간에 가로챌 수 있는 메소드를 제공하는 내장 객체
- 정적 메소드: 프록시 메소드와 이름 같음
- construct의 경우, Object.create()와 차이 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct#reflect.construct_vs_object.create
  - Reflect.construct()를 호출하면 newTarget 존재 시 newTarget, 아니면 target을 가리킴 (undefined를 가리키지 않는다.)
- apply()

  ```jsx
  Reflect.apply(Math.floor, undefined, [1.75]);
  // 1;

  Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
  // "hello"

  Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
  // 4

  Reflect.apply("".charAt, "ponies", [3]);
  // "i"
  ```

#### 메소드

- proxy와 정적 메소드명 동일

| 메소드                   | 내용                                                                          | 구문, 비고                                               |
| ------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------- |
| apply                    | 대상 함수를 주어진 매개변수로 호출 // this 값을 지정하거나, 매개변수를 넘기기 | Reflect.apply(target, thisArgument, argumentsList);      |
| construct                | new 연산자, 매개변수를 가변 길이로 호출 가능                                  | Reflect.construct(target, argumentsList[, newTarget])    |
| defineProperty           | 키&값 설정, Boolean 반환                                                      | Reflect.defineProperty(target, propertyKey, attributes); |
| deleteProperty           | 함수로 object로부터 property 삭제                                             | Reflect.deleteProperty(target, propertyKey);             |
| get                      | 속성 값 반환                                                                  | Reflect.get(target, propertyKey[, receiver])             |
| getOwnPropertyDescriptor | 속성이 대상 객체에 존재하면 서술자 반환, 아니면 undefind                      | Reflect.getOwnPropertyDescriptor(target, propertyKey);   |
| getPrototypeOf           | 프로토타입 반환                                                               | Reflect.getPrototypeOf(target);                          |
| has                      | in 연산자, return Boolean                                                     | Reflect.has(target, propertyKey);                        |
| isExtensible             | 객체 확장 여부, return Boolean                                                | Reflect.isExtensible(target);                            |
| ownKeys                  | 객체의 자체 속성 키 배열 반환                                                 | Reflect.ownKeys(target);                                 |
| preventExtensions        | 확장(객체 추가) 가능 여부                                                     | Reflect.preventExtensions(target);                       |
| set                      | 객체 속성의 값 결정                                                           | Reflect.set(target, propertyKey, value[, receiver])      |
| setPrototypeOf           | 객체의 프로토타입을 다른 객체나 null로 바꿀 수 있음                           | Reflect.setPrototypeOf(target, prototype);               |

## 2. Proxy

- 한 객체에 대한 기본 작업을 가로채고 재정의하는 프록시
  - 속성 액세스 기록, 입력 유효성 검사, 형식 지정, 삭제
- target과 handler를 사용하여 Proxy 생성

```jsx
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

- get() 처리기 == 트랩 trap

```jsx
// get()
const handler2 = {
  get(target, prop, receiver) {
    return "world";
  },
};
const proxy2 = new Proxy(target, handler2);

console.log(proxy2); // { message1: 'hello', message2: 'everyone' }
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

- reflect와 proxy

```jsx
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments); // Reflect 없을 시, message1은 undefined
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
```

=> [Proxy 예제 살펴보기-1](https://github.com/dusunax/javascript/blob/main/docs/JavaScript_proxy-and-reflect-2.md)에서 계속
