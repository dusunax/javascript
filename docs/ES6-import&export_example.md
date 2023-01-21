# Modern JavaScript Development: Modules and Tooling

## Import & Export 실습

- 하위 모듈들의 import와 다운로드, 링크, 실행이 이뤄진 후, 메인 모듈이 실행됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b56971bf-0b49-402d-a9f1-7fcbadccc128/Untitled.png)

- 다음과 같이 실행한 결과입니다.
  - `script.js` : 메인 모듈
      <aside>
      👉 console.log(cart)
      
      해당 함수 스코프의 변수환경을 확인할 수 있습니다.(클로저)
      import한 cart는 exports의 cart와 link되었기 때문에,  이후에 바뀐 값을 알아볼 수 있습니다.
      
      </aside>
      
      ```tsx
      import { addToCart, cart } from "./shoppingCart.js"; 
      // a. import하고 download합니다.
      // b. exports를 import와 link합니다.
      // c. 하위 모듈을 실행합니다. => shoppingCart로
      ...
      // e. 하위 모듈 코드를 실행한 후, 결과를 export합니다.
      // f. 메인 모듈을 실행합니다.
      
      console.log("import & download - 메인 모듈");
      addToCart(600, "apple"); // addToCart는 shoppingCart에서 import한 함수입니다. 
      addToCart(1, "pineapple");
      
      console.log(
        "cart: " +
          cart.map((e) => `\n{product: ${e.product} quantity: ${e.quantity}}`)
      		// cart는 [{{product: 600 quantity: apple}, {product: 1 quantity: pineapple}] 입니다.
      		// 해당 함수 스코프의 변수환경을 확인할 수 있습니다.(클로저)
      		// import한 cart는 exports의 cart와 link되었기 때문에, 
      		// 이후에 바뀐 값을 알아볼 수 있습니다.
      );
      ```

  - `shoppingCart.js` : 하위 모듈
    ```jsx
    console.log("import한 모듈 실행"); // c. 하위 모듈을 실행합니다.
    const shippingCost = 3500;
    export const cart = [];
    // e. 하위 모듈 코드를 실행한 후, 결과를 export합니다.

    export const addToCart = (product, quantity) => {
      // e. 하위 모듈 코드를 실행한 후, 결과를 export합니다.
      cart.push({ product, quantity });
      console.log(`${quantity} ${product} added to cart`);
    };

    console.log("cart: " + cart);
    // d. 하위 모듈이 실행됩니다. 현재 cart는 []입니다.
    console.log("exporting - import한 모듈과 link");
    ```
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5905eb0b-71ce-4888-ab52-55c0d0f15b91/Untitled.png)
- import 변수명을 바꿀 수 있습니다.
  ```tsx
  import { addToCart as 더하기, cart as 바구니 } from "./shoppingCart.js";

  console.log("import & download - 메인 모듈");
  더하기(600, "apple");
  더하기(1, "pineapple");

  console.log(
    "cart: " +
      바구니.map((e) => `\n{product: ${e.product} quantity: ${e.quantity}}`)
  );
  ```
- 와일드카드로 전부 불러올 때, 첫글자 대문자로 convention한 뒤, public API처럼 사용할 수 있습니다.
  ```tsx
  import * as ShoppingCart from './shoppingCart'
  ...
  ShoppingCart.totalPrice
  ```
- default export와 export를 동시에 사용할 수 있습니다. (복잡해지므로 사용하지 않습니다.)
  ```tsx
  import add, { cart } from "./shoppingCart.js";
  ```
