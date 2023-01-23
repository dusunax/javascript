// 중첩 객체를 깊은 복사
import { cloneDeep } from "lodash-es";

const state = {
  cart: [
    { product: "부대찌개", quantity: 1 },
    { product: "꽁치찌개", quantity: 1 },
    { product: "김치찌개", quantity: 1 },
  ],
  user: { loggedIn: true },
};

const objectClone = Object.assign({}, state);
const objectDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(objectClone, objectDeepClone);

// --------------------------------
// parcel 예시 : module.hot.accept();

let num = 0;
let acc = 5;

const button = document.createElement("button");
button.innerHTML = `${acc} 더하기 버튼: 값 ${num}`;

const newNum = () => {
  num += acc;
  button.innerHTML = `${acc} 더하기 버튼: 값 ${num}`;
};

button.removeEventListener("click", newNum);
button.addEventListener("click", newNum);

const wrap = document.querySelector(".button-box");

if (wrap.childNodes.length === 0) {
  wrap.append(button);
} else if (+wrap.querySelector("button").innerHTML.split(" ")[0] !== acc) {
  wrap.innerHTML = "";
  wrap.append(button);
}

if (module.hot) {
  module.hot.accept();
}
