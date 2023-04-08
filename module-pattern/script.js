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
