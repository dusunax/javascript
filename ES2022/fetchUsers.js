console.log("Export Linked");
console.log("요청 시작");

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); // resolve될 때까지 코드 blocking
const data = await res.json(); // resolve될 때까지 코드 blocking

console.log("요청 끝");

export const lastData = { title: data.at(-1).title, text: data.at(-1).body }; // await 없어도 ok

// ---------------------------------------------------------
// 사용법에 대한 예시

// 1. 최상위 await는 모듈의 최상단에서만 사용 가능합니다.
// function getLastData() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); // resolve될 때까지 코드 blocking
//   const data = await res.json(); // resolve될 때까지 코드 blocking
// }

// 2. getLastData()가 비동기 작업을 수행하는 함수일 때
const getLastPost = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// 2-1. await가 없으면 Promise가 pending 상태입니다.
// const lastPost = getLastPost();
// console.log(lastPost); // promise is pending

// 2-2. then을 사용할 수 있습니다.(사용하지 않기, 낫클린)
// lastPost.then((last) => console.log(last)); // not clean

// 2-3. 최상위 await를 사용할 수 있습니다.
// const lastPostAwait = await getLastPost();
// console.log(lastPostAwait); // use top-level await
// await는 요청이 끝날 때까지 코드를 blocking합니다.
