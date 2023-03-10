## ES2022 new features!

> ๊ด๋ จ๊ธ:   
> [https://www.turing.com/kb/latest-javascript-features-in-es2022](https://www.turing.com/kb/latest-javascript-features-in-es2022)  
> [https://dev.to/jasmin/whats-new-in-es2022-1de6](https://dev.to/jasmin/whats-new-in-es2022-1de6)

```
๐ธ 2022๋ 6์ ํ์ ๋ ์๋ฐ์คํฌ๋ฆฝํธ ๊ธฐ๋ฅ์๋๋ค.

- Await operator at the top-level // ์ต์์ await(๋ชจ๋ ๋ด)
- Class field declarations // ์์ฑ์ constructor ์์ ์์ฑํ์ง ์์๋ ๋จ
- Private methods and fields // #์ ๋ถ์ฌ์ private ์ฌ์ฉ
- Static class fields and private static methods // static field ์ฌ์ฉ ๊ฐ๋ฅ
- Regexp Match Indices // ํจํด๊ณผ ์ผ์นํ๋ ๋ฌธ์์ ์ธ๋ฑ์ค๋ฅผ ์ ์ ์์
- Ergonomic brand checks for private fields
- Array.prototype.at() function for Indexing // -1, ๋ง์ด๋์ค ์ธ๋ฑ์ค
- Object.hasOwn() // ์๊ธฐ ์์ ์ ์์ฑ์ธ์ง ํ์ธ => boolean
- Temporal function
- Error Cause // ์๋ฌ ๊ฐ์ฒด์ ์์ธ์ ์ ์ `new Error('', {cause: ''});`
```

## ES2022: top-level await โจ

- top-level await๋ ES2022์์ ๋์จ ๊ธฐ๋ฅ์ด๋ฉฐ, ๋ชจ๋์์๋ง ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค.
    - ๋ค์๊ณผ ๊ฐ์ด ์ต์์์์ await๋ฅผ ์ธ ์ ์์ต๋๋ค.

```tsx
const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);
```
```
โ ๏ธ ์ฃผ์์ 

- ์ต์๋จ await๋ฅผ ์ฌ์ฉํ๋ฉด promise๊ฐ resolve๋  ๋๊น์ง ํ๋จ ์ฝ๋๋ฅผ blocking ํฉ๋๋ค.
- ๊ธฐ๋ฅ์ ์ ํํ ์๊ณ  ์ฌ์ฉํ๋ ๊ฒ์ด ์ค์ํฉ๋๋ค.
```
- ์ต์๋จ await๋ก ์ธํด ์ฝ๋๊ฐ blocking ๋๋ ์์์๋๋ค.
    - `console.log(lastPostAwait)`๋ ์๋จ์ `const lastPostAwait = await getLastPost();`๊ฐ resolve๋  ๋๊น์ง ์คํ๋์ง ์์ต๋๋ค.
        
        ```tsx
        const getLastPost = async () => {
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
          const data = await res.json();
        
          return { title: data.at(-1).title, text: data.at(-1).body }; 
          // at() ๋ํ ES2022์ ๊ธฐ๋ฅ์๋๋ค.
        };
        
        const lastPost = getLastPost();
        console.log(lastPost); // X, promise is pending
        
        lastPost.then((last) => console.log(last)); // X, not clean
        
        const lastPostAwait = await getLastPost();
        console.log(lastPostAwait); // O, use top-level await
        ```
        
- **์ต์์ await์ code blocking ์์**
    - ์ต์์ await๊ฐ ์๋ ๋ชจ๋์ importํ๋ฉด, importํ ๋ชจ๋์ ๋ถ๋ฌ์จ ๋ชจ๋์ด blocking code๋ฅผ ์๋ฃํ  ๋๊น์ง ๊ธฐ๋ค๋ฆฝ๋๋ค.
        
        ![image](https://user-images.githubusercontent.com/94776135/213876219-bfa546f4-b4e5-4e8f-a947-67cdf4884aa5.png)        
        
        ```tsx
        console.log("Export Linked");
        console.log("์์ฒญ ์์");
        
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); // resolve๋  ๋๊น์ง ์ฝ๋ blocking
        const data = await res.json(); // resolve๋  ๋๊น์ง ์ฝ๋ blocking
        
        console.log("์์ฒญ ๋");
        
        export const lastData = { title: data.at(-1).title, text: data.at(-1).body }; // await ์์ด๋ ok
        // console.log(lastData) // ์ด๊ณณ์์๋ ์ ์
        ```
        
        ```tsx
        import * as FetchUsers from "./fetchUsers.js";
        
        console.log("Import");
        
        console.log("๋ฉ์ธ ๋ชจ๋ ์์");
        console.log(FetchUsers.lastData); // link๋ lastData ๊ฐ์ ๊ฐ์ ธ์ต๋๋ค.
        ```
        

### ES2022: Array.at()

> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
> [https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.at)
> 
- js์์๋ ํ์ด์ฌ ๋๋ R์ฒ๋ผ array[-1]์ ์ฌ์ฉํ  ์ ์์ต๋๋ค.
- bracket ๋ด๋ถ์ ์์ number๋ string์ผ๋ก ๊ฐ์ฃผํฉ๋๋ค. โ array[โ-1โ]
- at์ ์ฌ์ฉํ๋ฉด, -1๋ก ๋ง์ง๋ง ์์๋ฅผ ๊ฐ์ ธ์ฌ ์ ์์ต๋๋ค.

```tsx
array[array.length - 1]
array.at(-1)
```

- 88.28% โ ์ผ๋ถ ๋ธ๋ผ์ฐ์ ์์ ํธํ๋์ง ์์ต๋๋ค.

![image](https://user-images.githubusercontent.com/94776135/213876232-16a6555d-d3ca-4aaf-87f6-3eb8559aa03b.png)
