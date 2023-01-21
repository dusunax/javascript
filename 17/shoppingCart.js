console.log("import한 모듈 실행");
const shippingCost = 3500;
export const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

console.log("cart: " + cart);
console.log("exporting - import한 모듈과 link");
