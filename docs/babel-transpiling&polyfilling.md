# Babel

> [https://babeljs.io/](https://babeljs.io/)  
> 플러그인 : [https://babeljs.io/docs/en/plugins](https://babeljs.io/docs/en/plugins)  
> 프리셋 : [https://babeljs.io/docs/en/presets](https://babeljs.io/docs/en/presets)
> 

### Babel이란?

- Babel은 최신 JavaScript 구문을 호환되는 이전 버전의 JavaScript로 변환하는 도구입니다. (트랜스파일링)
- 모던 브라우저를 지원하지 않는 이전 버전의 브라우저에서도 사용 가능하도록 만듭니다.
    - 플러그인과 프리셋을 사용합니다.

### 플러그인 & 프리셋

> 바벨은 JavaScript 코드를 트랜스파일 할 때 사용하는 플러그인과 프리셋이라는 두 가지 요소로 구성됩니다.
> 
> **플러그인(plugins)** : 특정 기능을 추가하거나 지원하는 도구로, 예를 들어 "class properties"를 지원하는 플러그인이 있거나 "decorators"를 지원하는 플러그인이 있습니다. 이러한 플러그인들은 추가적인 설정을 필요로 하며, 필요한 기능만 선택적으로 추가할 수 있습니다.
> 
> **프리셋(presets)** : 이것들은 특정 버전의 JavaScript나 특정 기능 집합을 지원하기 위해 함께 작동하도록 설계된 플러그인의 집합입니다. 예를 들어, 최신 버전의 JavaScript의 모든 기능을 지원하는 프리셋이 있거나, JavaScript 버전 ES2015의 모든 기능을 지원하는 프리셋이 있을 수 있습니다. 프리셋은 한번에 여러 플러그인을 추가하는 편리한 방법으로 자주 사용됩니다.
> 

| 종류 | 내용 | 예시 |
| --- | --- | --- |
| 플러그인 | 특정 단일 js 기능을 추가하거나 지원하는 도구 (코드 자체를 ES5로 변환함) | const ⇒ var, class properties |
| 프리셋 | 특정 버전의 JavaScript나 특정 기능 집합을 지원, 플러그인의 집합 | promise, async & await |

---

### 1. Parcel과 Babel

👉 정확한 config과, 지원하는 브라우저를 설정하는 것은 복잡할 수 있습니다.  
parcel은 기본값을 토대로 자동으로 babel을 적용합니다.

또한, `.babelrc` 파일을 사용하여, 자세한 설정을 적용할 수 있습니다.

- `.babelrc`

```tsx
{
  "presets": ["@babel/preset-env"]
}
```

- `package.json`

```tsx
{
  "name": "my-project",
  "dependencies": {
    "@babel/preset-env": "^7.12.1"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
}
```
>

### 2. Webpack과 Babel

👉 Babel은 최신 JavaScript 코드를 이전 버전의 브라우저와 호환되는 JavaScript로 변환할 수 있는 도구입니다. 화살표 함수, 템플릿 리터럴, 구조 분해 등 새로운 JavaScript 기능을 이전 버전 브라우저에서 실행할 수 있는 코드로 변환합니다.

Webpack은 여러 개의 JavaScript 파일을 하나의 파일로 묶어 브라우저에서 로드할 수 있도록 하는 모듈 번들러입니다. 로더를 사용하면 코드를 어떻게 변형시켜야 할지 정의할 수 있고, 이를 통해 번들링하기 전에 코드를 변형할 수 있습니다.

Webpack에서 Babel을 사용하려면, 첫째로 "@babel/core"와 "@babel/preset-env"와 같은 Babel 로더를 설치해야 합니다. 그리고 Webpack을 Babel 로더를 사용할 수 있도록 구성해야 합니다. 이를 위해 webpack.config.js 파일에 모듈 규칙을 추가하면 모든 JavaScript 파일을 Babel 로더로 처리하도록 지정할 수 있습니다.

- `webpack.config.js` : webpack에서 babel을 설정하는 예시

```tsx
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
```

이것은 Webpack에 .js 확장자를 가진 모든 파일(node_modules 폴더 제외)에 대해 "babel-loader"를 사용하도록 지시합니다. 옵션 객체는 로더에 전달되며 "@babel/preset-env" 프리셋을 사용하도록 지정합니다. 이는 현재 환경에 맞는 필요한 변환을 자동으로 결정합니다.

이 후, 코드에서 최신 JavaScript 구문을 사용할 수 있으며, webpack은 babel을 사용하여 이를 트랜스파일하여 이전 버전의 브라우저에서도 호환될 수 있도록 합니다.

---

# Polyfilling vs Transpiling

- 오래된 브라우저에서 모던 JS 코드를 실행할 수 있도록 하는 두 가지 기술입니다.

## Polyfilling vs Transpiling 개요

👉 **폴리필링**과 **트랜스파일링**은 모두 오래된 브라우저에서 현대 JavaScript 코드를 실행할 수 있도록 하는 기술입니다. 그러나 두 기술은 방법이 다릅니다.

**트랜스파일링 (Transpiling)** : 현대 JavaScript 코드를 이전 버전의 JavaScript로 변환하는 것입니다. 예를 들어, 최신 버전의 JavaScript (ES6)로 작성된 코드를 이전 버전의 JavaScript (ES5)와 호환되도록 변환하는 것입니다. 이는 Babel과 같은 도구를 사용하여 수행됩니다.

**폴리필링 (Polyfilling)** : 오래된 브라우저에 기능을 추가하여 현대 JavaScript 코드를 이해하고 실행할 수 있도록 하는 것입니다. 이는 JavaScript 코드(폴리필)를 사용하여 오래된 브라우저에서 누락된 기능을 모사하는 것으로 수행됩니다.

간단히 요약하자면, 트랜스파일링은 코드를 오래된 브라우저와 호환되도록 변경하는 반면, 폴리필링은 오래된 브라우저에 없는 기능을 추가하여 현대 JavaScript 코드와 호환되도록 만듭니다.

| 기술 | 영어 | ES6 코드 처리방법 |
| --- | --- | --- |
| 트랜스파일링 | transpilling | ES5로 변환 |
| 폴리필링 | polyfilling | 모사한 기능을 추가 |

### 바벨은 Polyfilling 도구 인가요? 아니면 Transpiling 도구 인가요? 🤔

👉 **Babel은 기본적으로 트랜스파일링 도구입니다.**

현대 JavaScript 코드를 오래된 브라우저가 이해할 수 있는 이전 버전의 JavaScript로 변환합니다. 그러나 일부 플러그인을 사용하여 폴리필링도 수행 할 수 있습니다. 예를 들어, Babel은 일부 브라우저에서 아직 지원되지 않는 ECMAScript 기능에 대한 폴리필을 추가 할 수 있습니다. 이는 기능의 누락된 구현을 JavaScript 코드에 추가하여 오래된 브라우저에서 코드를 실행할 수 있도록 합니다. 

따라서 Babel은 필요에 따라 폴리필링을 수행할 수 있는 트랜스파일링 도구라 볼 수 있습니다.

## polyfilling이란? 😀

- ES5에 존재하지 않는 기능을 재구현하여 번들에서 사용할 수 있도록 합니다. ex) promise, async & await
- 존재하지 않는 기능은 ES6 이전으로 변환할 수 없습니다.(존재하지 않으므로)
    - 따라서 누락된 기능을 모사하여 추가하는데, 이를 폴리필링 polyfilling이라 합니다.

### core-js 라이브러리

- 라이브러리에서 제공하는 polyfill
- `npm i core-js`

```tsx
import "core-js";
```

### 트리쉐이킹 예시

- 다음과 같이 선택적으로 라이브러리를 import했을 떄

```tsx
import "core-js/features/array/find";
import "core-js/features/promise";
```

- 다음과 같이 추가됩니다.
    - dist : `npm\dist\index.8cfc62b9.js`

```tsx
},{"lodash-es":"bXNwz","core-js/modules/esnext.promise.try.js":"9Mfk9"}],"bXNwz":[function(require,module,exports) {
```

- 번들 사이즈를 줄일 수 있습니다. (30061 ⇒ 24803줄)

![image](https://user-images.githubusercontent.com/94776135/214245786-162804fb-e8f4-4904-8a6a-55ca75604950.png)
