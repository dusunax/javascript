## Module Pattern이란?

- 모듈 패턴은 ES6 module 이전부터 오랫동안 사용되어온 패턴입니다.(아직 사용할 수도 있습니다.)
    - 모든 스크립트를 HTML에 연결합니다.
    - 단점
      - HTML에서 불러오는 order가 중요합니다.
      - 모든 변수가 global scope에서 읽을 수 있도록 작성해야 합니다.
      - 모듈 번들러가 하나로 번들링할 수 없습니다.
         - 모던 자바스크립트 개발에 있어서 모듈 번들러의 역할이 중요합니다.
- 모듈 패턴의 목표
    1. 기능을 캡슐화
    2. private 데이터를 보유
    3. public API를 공개
        - function을 사용합니다.

### IIFE, 즉시 호출 함수 표현식

> [https://developer.mozilla.org/en-US/docs/Glossary/IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
> 
- 한 번만 생성되는 함수
- 다음과 같이 실행합니다.

```
(function () {
  console.log("hi");
})();
```

### Module Pattern 예시

- IIFE(즉시 호출 함수 표현식)의 리턴에 있는 변수값에 계속 접근할 수 있는 이유 
  - ⇒ 클로저
  - 함수는 생성된 곳 birthplace에 있는 변수에 접근할 수 있습니다.

```tsx
const ShoppingCart = (function () {
  let shippingCost = 3500;
  let cart = [];
  let totalCost = 30000;
  const totalQty = cart.length;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    const price = 100 * quantity + shippingCost;
    totalCost += price;

    console.log(
      `${quantity} ${product} added to cart,
cost: ${price}, 
total cost: ${totalCost}`
    );
  };

  const orderStock = () => {
    cart = cart.map((item) =>
      // (item) => console.log(item)
      console.log(`${item.product} ${item.quantity}개 주문 완료`)
    );
    cart = [];
  };

  return {
    addToCart,
    orderStock,
    cart,
    totalCost,
    totalQty,
  };
})();

ShoppingCart.addToCart("사탕", 4);
ShoppingCart.addToCart("햄버거", 3);

// closure
console.log(ShoppingCart); // 반환한 변수들에 접근할 수 있음
ShoppingCart.orderStock(); // 아이템 주문
console.log(ShoppingCart.totalQty); // 아이템: 0개
```

![image](https://user-images.githubusercontent.com/94776135/213924288-9561f5db-74e8-44eb-b5dd-26a65016d1cd.png)

