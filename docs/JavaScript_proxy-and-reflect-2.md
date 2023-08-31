# Javascript Study

> 모던 자바스크립트 Deep Dive + Mozilla

## 📌 Proxy & Reflect: part2

> 자바스크립트
> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy#%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97_%EC%86%8D%EC%84%B1_%ED%8F%AC%EC%9B%8C%EB%94%A9_%EC%97%86%EC%9D%8C  
> https://replit.com/@dusunax/javascript#index.js
>
> - Proxy 좀 더 알아보기

## Proxy 예제 살펴보기-1

### 기본 프록시

```jsx
const handler = {
  get(obj, prop) {
    return prop in obj ? obj[prop] : 37; // 키가 있으면 값을 반환, 아니면 37 반환
  },
};

const p = new Proxy(
  {
    a: 1,
    b: undefined,
  },
  handler
);
// p.a = 1;
// p.b = undefined;

console.log(p.a, p.b);
//  1, undefined

console.log("c" in p, p.c);
//  false, 37
```

### No-op 포워딩 프록시

- 프록시가 target 객체에게 작업 전달

```jsx
const targetEmpty = {};
const fp = new Proxy(targetEmpty, {});

fp.a = 37;
//  대상 객체에게 작업 전달

console.log(targetEmpty.a); // 37
console.log(fp); // { a: 37 }
console.log(fp.a); // 37
```

### 객체 프라이빗 속성에 직접 접근X

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global*Objects/Proxy#프라이빗*속성*포워딩*없음](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy#%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97_%EC%86%8D%EC%84%B1_%ED%8F%AC%EC%9B%8C%EB%94%A9_%EC%97%86%EC%9D%8C)

- 프록시 ⇒ 다른 ID를 가진 객체, 래핑된 객체와 외부 사이에서 작동

```jsx
class Secret {
  #secret; // private
  constructor(secret) {
    this.#secret = secret;
  }

  get secret() {
    return this.#secret.replace(/\d+/, "[REDACTED]");
  }
}

const aSecret = new Secret("전화번호 1234567");
console.log(aSecret.secret); // [REDACTED]

// no-op 포워딩 같지만...
const proxy = new Proxy(aSecret, {});
console.log(proxy.secret); // TypeError: Cannot read private member #secret from an object whose class did not declare it
```

![image](https://github.com/dusunax/javascript/assets/94776135/b0f13c92-61dd-4891-81a0-8f549bdb76e9)

- get()이 호출될 때, this값이 secret이 아니라 proxy이므로 #secret에 액세스할 수 없음
  - secret을 this로 사용할 것

>💡 get trap
>
>`get` 트랩은 `return target[prop]`과 같이 원래 객체의 프로퍼티 값을 반환하는 것이 일반적입니다. 이렇게 하면 `Proxy` 객체가 원래 객체의 행동을 보강하거나 변경할 수 있으면서도, 기존의 객체 동작을 그대로 활용할 수 있습니다.

```jsx
const proxyS = new Proxy(aSecret, {
  get(target, prop) {
    // 'this' == Reflect.get(target, prop, receiver)
    return target[prop];
  },
});
```

- 메소드의 this값 원래 객체로 리디렉션

```jsx
class Secret4 {
  #x = 1;
  x() {
    return this.#x;
  }
}

const aSecret4 = new Secret4(); // target
const proxy4 = new Proxy(aSecret4, {
  get(target, prop, receiver) {
    const value = target[prop];
    if (value instanceof Function) {
      // instance가 함수인 경우
      return function (...args) {
        // 함수 래핑
        return value.apply(this === receiver ? target : this, args); // 기존 동작을 가로챔
        // 만약 this가 receiver와 같다면(this === receiver가 참이라면), target 객체로 설정
        // 그렇지 않으면 현재 객체(this)로 설정
      };
    }
    return value;
  },
});
console.log(proxy4.x());
```

- 일부 js 객체에는 액세스 할 수 없는 내부 슬롯이 있음 ex) Map의 [[MapData]]
- 검증: 객체에 전달된 값 확인 가능

```jsx
const validator = {
  set(obj, prop, value) {
    if (prop === "age") {
      // age property일 때
      if (!Number.isInteger(value)) {
        // 정수 아님
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        // 사람 나이 아님
        throw new RangeError("The age seems invalid");
      }
    }

    // 값을 저장하는 기본 동적
    obj[prop] = value;

    // 성공 표시
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // 예외 발생: type error
person.age = 300; // 예외 발생: range error
```

![image](https://github.com/dusunax/javascript/assets/94776135/22bbbf54-c116-4b81-9a80-6938243b9893)

### 예제: 생성자 확장하기, construct(), apply()

- prototype extend: 프로토타입을 extend한 클래스 생성자
  - extend 어떻게? Proxy로 sup 생성자를 감싸서 동작 추가

```jsx
function extend(sup, base) {
  base.prototype = Object.create(sup.prototype);
  base.prototype.constructor = new Proxy(base, {
    construct(target, args) {
      const obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    },
  });

  // 확장된 클래스 생성자 함수 반환
  return base.prototype.constructor;
}

const Person = function (name) {
  this.name = name;
};

const Boy = extend(Person, function (name, age) {
  this.age = age;
});

Boy.prototype.gender = "M"; // Boy 클래스 생성자의 프로토 타입에 값 추가

const Peter = new Boy("Peter", 13);

// 프로퍼티와 메서드 출력
console.log(Person.prototype); // {}
console.log(Boy.prototype); // Person { constructor: [Function (anonymous)], gender: 'M' }
console.log(Boy.prototype.gender); // "M"
console.log(Peter.gender); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13
```

- constructor function = to ⇒ class declaration

```jsx
// Person 클래스 정의
const Person = function (name) {
  // 익명함수, this.키 = 값
  this.name = name;
};
```

![image](https://github.com/dusunax/javascript/assets/94776135/62b4014e-7acb-4946-9e60-d08eab43270b)

- `construct()`: new 연산자에 대한 트랩 (new target이 유효해야 함, [[Construct]])

```jsx
new Proxy(target, {
  construct(target, argumentsList, newTarget) {},
  // target: 대상 객체, argumentsList: 생성자 인수 목록, newTarget 원래 호출된 생성자
});
```

```jsx
// ---------------------
// construct()
// ---------------------
function monster1(disposition) {
  this.disposition = disposition;
  console.log("나는 target");
}

const handler1 = {
  construct(target, args) {
    console.log(`Creating a ${target.name}`);
    console.log(target);
    // Expected output: "Creating a monster1"

    return new target(...args);
  },
};

// target, handler
const proxy1 = new Proxy(monster1, handler1);
console.log(proxy1 + "hi");

console.log(new proxy1("fierce").disposition);
// Expected output: "fierce"
```

- `apply()`: 함수 호출에 대한 트랩

```jsx
var p = new Proxy(target, {
  apply: function (target, thisArg, argumentsList) {},
});
```

```jsx
// ---------------------
// apply()
// ---------------------
function multiply(a, b) {
  return a * b;
}

const handler = {
  apply: function (target, thisArg, argumentsList) {
    console.log(`Calculate multiply than convert to rem: ${argumentsList}`);

    return target(argumentsList[0], argumentsList[1]) * 0.0625;
  },
};

const calcRem = new Proxy(multiply, handler);

console.log(multiply(8, 2));
// Expected output: 16
console.log(calcRem(8, 2));
// Expected output: 1
```

=> [Proxy 예제 살펴보기-2](https://github.com/dusunax/javascript/blob/main/docs/JavaScript_proxy-and-reflect-3.md)에서 계속
