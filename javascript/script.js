// ---------------------
// DOM 노드 조작
// [예시 링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy#dom_%EB%85%B8%EB%93%9C_%EC%A1%B0%EC%9E%91)
//
// `selected` 속성을 가진 객체에 대한 프록시인 `view` 객체를 생성
// > view.selected에 HTML 요소를 할당하면 요소의 'aria-selected' 속성이 true로 설정됩니다. 그런 다음 view.selected에 다른 요소를 할당하면 이 요소의 'aria-selected' 속성이 true로 설정되고 이전 요소의 'aria-selected' 속성이 자동으로 false로 설정됩니다.
// ---------------------
const items = document.querySelectorAll(".item");
const view = new Proxy(
  {
    selected: null,
  },
  {
    set(obj, prop, newval) {
      const oldval = obj[prop]; // 이전 값

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // 값을 저장하는기본 동작
      obj[prop] = newval;

      // 성공 표시
      return true;
    },
  }
);

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((e) => e.classList.remove("selected"));
    view.selected = item;

    console.log(`// item.getAttribute("aria-selected")
item1: ${items[0].getAttribute("aria-selected")}
item2: ${items[1].getAttribute("aria-selected")}`);

    item.classList.add("selected");
  });
});

// ---------------------
// 브라우저
// ---------------------
const products = new Proxy(
  {
    browsers: ["Firefox", "Chrome", "Safari", "MSIE", "Edge"],
    savedBrowsers: [],
    // currentBrowser: "",
  },
  {
    get(obj, prop) {
      // 마지막 브라우저 반환
      if (prop === "currentBrowser") {
        return obj.savedBrowsers[obj.savedBrowsers.length - 1];
      }

      return obj[prop];
    },
    set(obj, prop, value) {
      if (prop === "currentBrowser") {
        const newBrowser = obj.browsers.find((e) => value.indexOf(e) > -1);
        if (newBrowser) {
          obj.savedBrowsers.push(newBrowser);
        }
        return true;
      }
      return true;
    },
  }
);

const userAgent = navigator.userAgent;
products.currentBrowser = "Safari";
products.currentBrowser = userAgent;

console.log("window 객체의 naviator: ", navigator);

console.log("프록시 객체: ", products);
console.log("마지막 browser", products.currentBrowser);
