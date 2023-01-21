## ES2022 new features!

> 관련글:   
> [https://www.turing.com/kb/latest-javascript-features-in-es2022](https://www.turing.com/kb/latest-javascript-features-in-es2022)  
> [https://dev.to/jasmin/whats-new-in-es2022-1de6](https://dev.to/jasmin/whats-new-in-es2022-1de6)

```
📸 2022년 6월 확정된 자바스크립트 기능입니다.

- Await operator at the top-level // 최상위 await(모듈 내)
- Class field declarations // 속성을 constructor 안에 작성하지 않아도 됨
- Private methods and fields // #을 붙여서 private 사용
- Static class fields and private static methods // static field 사용 가능
- Regexp Match Indices // 패턴과 일치하는 문자의 인덱스를 알 수 있음
- Ergonomic brand checks for private fields
- Array.prototype.at() function for Indexing // -1, 마이너스 인덱스
- Object.hasOwn() // 자기 자신의 속성인지 확인 => boolean
- Temporal function
- Error Cause // 에러 객체에 원인을 적음 `new Error('', {cause: ''});`
```

## ES2022: top-level await ✨

- top-level await는 ES2022에서 나온 기능이며, 모듈에서만 사용 가능합니다.
    - 다음과 같이 최상위에서 await를 쓸 수 있습니다.

```tsx
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);
```
```
⚠️ 주의점

- 최상단 await를 사용하면 promise가 resolve될 때까지 하단 코드를 blocking 합니다.
- 기능을 정확히 알고 사용하는 것이 중요합니다.
```
- 최상단 await로 인해 코드가 blocking 되는 예시입니다.
    - `console.log(lastPostAwait)`는 상단의 `const lastPostAwait = await getLastPost();`가 resolve될 때까지 실행되지 않습니다.
        
        ```tsx
        const getLastPost = async () => {
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
          const data = await res.json();
        
          return { title: data.at(-1).title, text: data.at(-1).body }; 
          // at() 또한 ES2022의 기능입니다.
        };
        
        const lastPost = getLastPost();
        console.log(lastPost); // X, promise is pending
        
        lastPost.then((last) => console.log(last)); // X, not clean
        
        const lastPostAwait = await getLastPost();
        console.log(lastPostAwait); // O, use top-level await
        ```
        
- **최상위 await의 code blocking 예시**
    - 최상위 await가 있는 모듈을 import하면, import한 모듈은 불러온 모듈이 blocking code를 완료할 때까지 기다립니다.
        
        ![image](https://user-images.githubusercontent.com/94776135/213876219-bfa546f4-b4e5-4e8f-a947-67cdf4884aa5.png)        
        
        ```tsx
        console.log("Export Linked");
        console.log("요청 시작");
        
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); // resolve될 때까지 코드 blocking
        const data = await res.json(); // resolve될 때까지 코드 blocking
        
        console.log("요청 끝");
        
        export const lastData = { title: data.at(-1).title, text: data.at(-1).body }; // await 없어도 ok
        // console.log(lastData) // 이곳에서도 정상
        ```
        
        ```tsx
        import * as FetchUsers from "./fetchUsers.js";
        
        console.log("Import");
        
        console.log("메인 모듈 시작");
        console.log(FetchUsers.lastData); // link된 lastData 값을 가져옵니다.
        ```
        

### ES2022: Array.at()

> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
> [https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at)
> 
- js에서는 파이썬 또는 R처럼 array[-1]을 사용할 수 없습니다.
- bracket 내부의 음수 number는 string으로 간주합니다. ⇒ array[”-1”]
- at을 사용하면, -1로 마지막 요소를 가져올 수 있습니다.

```tsx
array[array.length - 1]
array.at(-1)
```

- 88.28% ⇒ 일부 브라우저에서 호환되지 않습니다.

![image](https://user-images.githubusercontent.com/94776135/213876232-16a6555d-d3ca-4aaf-87f6-3eb8559aa03b.png)
