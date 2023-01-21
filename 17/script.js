import { addToCart as 더하기, cart as 바구니 } from "./shoppingCart.js";
import * as ShoppingCart from "./shoppingCart.js";

console.log("import & download - 메인 모듈");
더하기(600, "apple");
ShoppingCart.addToCart(1, "pineapple");

console.log(
  "cart: " +
    바구니.map((e) => `\n{product: ${e.product} quantity: ${e.quantity}}`)
);
