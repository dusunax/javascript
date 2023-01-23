# NPM

### npm (패키지 매니저) 을 사용하는 이유

👉 **패키지 매니저를 사용하지 않았을 때**
1. 대규모 프로젝트에서 자바스크립트의 로드를 관리할 수 없음
2. 라이브러리의 새 버전이 나왔을 때, 파일을 업데이트해야함
3. 이전에는 모든 패키지를 포함한 단일 저장소가 없었음

```
즉, 더 나은 방식으로 의존성을 관리하기 위해 사용하는 모던 개발 방식입니다.
```

### global로 패키지를 설치하는 이유

- 글로벌 도구를 사용하기 위해서입니다.
    - ex) live server, nodemon, parcel
    - 하지만 패키지를 글로벌로 설치하면 항상 최신 버전을 유지하기 어렵습니다.

```
설치하는 패키지의 버전을 최신으로 유지하기 위해, global 설치를 지양할 이유가 있습니다.
```
---

# dev dependency란?

```tsx
npm i parcel --save-dev
```

- devDependency는 애플리케이션을 빌드하기 위한 도구입니다. 
개발에 사용되기 때문에 devDependency라는 이름을 가지고 있습니다.
    - dependency와 같이 코드에 포함되는 의존성이 아닙니다.
    
    | 종속성(의존성) | 운영환경 | 개발환경 | cli |
    | --- | --- | --- | --- |
    | 일반(정규) 의존성 regular dependency | O | O | npm i ~ |
    | 개발 의존성 devDependency | X | O | npm i ~ —save-dev |
    | 운영 의존성 production dependency | O | X | npm i ~ —production |
    
```
🤔 **regular dependency와 dev dependency의 차이점은?**

소프트웨어 개발에서, 의존성은 코드 작동에 필요한 패키지나 라이브러리입니다. 
npm 혹은 yarn 같은 패키지 관리자를 사용할 때는 package.json 파일에 이러한 의존성을 지정할 수 있습니다.

종속성(dependency)은 코드가 **운영 환경**에서 실행될 때 필요한 패키지입니다. 
이들은 사용자가 응용 프로그램이나 라이브러리를 사용하려면 필요한 것들입니다. 

운영 종속성(production dependency)만을 설치하기 위해 npm i ~ —production 명령어를 사용할 수 있습니다.

개발 종속성(dev dependencies)은 **개발 중에만 필요**한 패키지입니다. 
이러한 것들은 테스트 프레임워크, 빌드 도구, 린터 등이 포함될 수 있습니다. 
운영 환경에서 응용 프로그램이나 라이브러리를 실행할 때 필요하지 않으므로, 코드를 배포할 때는 포함되지 않습니다.
```
    

## leaflet : 외국 map api

- [https://leafletjs.com/](https://leafletjs.com/)

> an open-source JavaScript library
for mobile-friendly interactive maps
> 

![image](https://user-images.githubusercontent.com/94776135/214060114-ac153120-5734-467c-96b5-ba125b038643.png)

## lodash : javaScript를 더 편하게 쓰기

- 종류
    - 그냥 lodash ⇒ use **common JS**
    - lodash-es ⇒ **es6**
- cloneDeep 메소드
    - 중첩 개체 nested obejct에 깊은 복사 deep copy / deep clone을 수동으로 구현하는 것은 복잡합니다.,
        1. json으로 변환 후 object로 재변환 ⇒ 느린 속도, 함수에 적용할 수 x
        2. Lodash를 사용 ⇒ 의존성
        3. 재귀 함수를 사용 ⇒ 참조한 객체를 분리해가며 깊은 복사
        - 레퍼런스: [https://velog.io/@jason0503/JavaScriptES6-중첩된-객체의-깊은-복사-방법](https://velog.io/@jason0503/JavaScriptES6-%EC%A4%91%EC%B2%A9%EB%90%9C-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC-%EB%B0%A9%EB%B2%95)
    - cloneDeep()을 사용하여 깊은 복사를 진행할 수 있습니다.
        
        ```tsx
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
        
        const objectClone = Object.assign({}, state); // 얕은 복사
        const objectDeepClone = cloneDeep(state); // lodash의 깊은 복사 기능
        
        state.user.loggedIn = false;
        
        console.log(objectClone); // loggedIn은 false입니다.
        console.log(objectDeepClone); // loggedIn은 true입니다.
        ```
        

# Parcel

> [https://parceljs.org/](https://parceljs.org/)
> 
- 설정 없이 사용할 수 있는 모던 개발 빌드 도구입니다.

## parcel vs webpack

<aside>
🤔 **parcel vs webpack 차이점은?**

Parcel과 Webpack은 둘 다 **JavaScript 번들러**입니다. 이들은 JavaScript 코드와 기타 자산(이미지 또는 CSS 파일 같은)을 하나의 파일(또는 여러 파일)로 결합하여 웹 브라우저가 로드할 수 있게 합니다.

두 가지 사이의 주요 차이점은 **Parcel은 설정 파일 없이 작동하는 번들러**이며, 코드를 어떻게 번들링 할지를 지정하는 webpack.config.js와 같은 설정 파일을 만들 필요가 없다는 점입니다. 대신 규칙과 히위릭(heuristics)을 사용하여 코드를 자동으로 번들링 할 수 있는 방법을 찾아냅니다.

Webpack은 반면에 설정 파일이 필요하며, 코드를 번들링 할 때 더 세분화된 제어를 할 수 있습니다. 이는 Parcel보다 강력하고 유연하지만, 설정하고 설정하는 것이 더 복잡하며 학습 곡선이 높아질 수 있습니다.

다른 차이점으로는 webpack이 더 인기있고 사용량이 더 많기 때문에, 더 많은 커뮤니티 서포트와 서드파티 플러그인을 가지고 있습니다.

</aside>

## parcel 실행하기

```tsx
npx parcel index.html
```

- npx : npm에 내장된 응용 프로그램
- parcel의 옵션 : entry point  
![image](https://user-images.githubusercontent.com/94776135/214060474-10263073-3d4b-4878-8fa3-f79bfffb7848.png)
- /dist
    - parcel 빌드 ⇒ dist에 위치
    - `index.html`
        
        ```tsx
        <script src="/index.8cfc62b9.js" defer=""></script>
        ```
        

### npx parcel index.html vs “start”: “parcel index.html”

```
❓ **why "npx parcel index.html" is became "start": "parcel index.html" in package.json script? 
⇒ why there is no npx prefix?**

---

"npx parcel index.html"과 "start": "parcel index.html"는 관련되지만 서로 다른 목적을 가지고 있습니다.

"npx parcel index.html"를 command line에서 실행하면 **npx 패키지 러너를 사용하여 
parcel 명령을 실행하고 개발 서버를 시작**합니다. 이때 npx 패키지 러너를 사용하여 
**설치한 로컬 버전의 parcel을 사용**하도록 합니다.

반면에 package.json의 script 섹션에 있는 "start": "parcel index.html"는 npm script 명령어를 사용하여 
실행할 수 있는 명령을 정의하는데 사용됩니다. "npm start" 또는 "yarn start"를 실행하면 
start 스크립트에 적힌 명령인 "parcel index.html"이 실행됩니다. 이 명령은 **개발 서버를 시작**하지만 
**npx 패키지 러너를 사용하지 않고, 프로젝트에 설치된 로컬 버전의 parcel 명령**을 사용합니다.

package.json 스크립트에서 **npx 접두사가 필요하지 않은 이유**는 스크립트가 프로젝트의 
**로컬 node_modules 컨텍스트 내에서 명령을 실행**하기 때문입니다. 
이곳에는 **로컬로 설치된 parcel 패키지**가 위치해 있기 때문입니다. 
그러나 명령을 명령 행에서 직접 실행할 때는 npx 접두사가 필요하며 
이를 통해 정확한 버전의 parcel을 사용할 수 있도록 합니다.

```

| 실행하는 곳 | 명령어 | 실행하는 패키지의 위치 |
| --- | --- | --- |
| command line | npx parcel index.html | npx 패키지 러너에서, 설치한 로컬 버전의 parcel 실행 |
| script | “start” : “parcel index.html” | 로컬 node_module 컨텍스트 내, 로컬로 설치된 parcel 패키지 |

### build

- compress build ⇒ `/dist` 내

```tsx
"build": "parcel build index.html"
```

### 🚫 parcel build 에러 : main entry 에 대해서!

- 현재 parcel 버전 `"parcel": "^2.8.3”` 에서 예제와 같이 빌드 시, 다음과 같은 에러가 발생합니다.

![image](https://user-images.githubusercontent.com/94776135/214060651-d57de55c-649a-4bbd-86b8-eb14d0f7d6de.png)

- “main” 필드가 “script.js”인데 반해, 컴파일된 번들의 타입은 “html”이므로, 타입이 매치되지 않아 생기는 에러입니다.
    - 터미널의 안내에 따라 “script.html”으로 바꾸거나 ( main을 html로 )
    또는 script의 build를 js로 바꾸려고 했을 때는 또 다른 에러가 발생합니다.
    - 관련 문서: [https://parceljs.org/features/targets/#library-targets](https://parceljs.org/features/targets/#library-targets)
        
        ![image](https://user-images.githubusercontent.com/94776135/214060695-4ea12e85-cd09-47cb-b4d7-b6d714bfeaa4.png)        
        
- main 필드를 지우면 에러가 해결됩니다. (값을 지우는 것이 아니라, 필드 자체를 삭제합니다.)

```
main field is not mandatory for every package, 
if you don't want to set the main field in your package.json file, 
you can remove it.
```

## hot module replacement

- 전체 페이지가 새로고침 되지 않음
    - 페이지를 로드해도, 데이터 유지

```tsx
if (module.hot) {
  module.hot.accept();
}
```

- 실험
    - 새로 고침 되지 않으므로 버튼 append + 버튼의 증가값 다름
    - 저장 할 때마다 계속 append

![image](https://user-images.githubusercontent.com/94776135/214060896-e4b35b06-d94f-4bf8-afa9-ffd986d17a17.png)

```tsx
let num = 0;
let acc = 5; // 1에서 5로 변경

const button = document.createElement("button");
button.innerHTML = `${acc} 더하기 버튼: 값 ${num}`;

const newNum = () => {
  num += acc;
  button.innerHTML = `${acc} 더하기 버튼: 값 ${num}`;
};

button.removeEventListener("click", newNum);
button.addEventListener("click", newNum);

document.querySelector(".button-box").append(button);

if (module.hot) {
  module.hot.accept();
}
```
