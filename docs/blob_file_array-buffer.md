# File: Blob, ArrayBuffer, TypedArray(Uint8Array)

> **목표**: 이미지 File을 좀 더 제대로 알고 다뤄보자✨  
> **개요**: 웹 어플리케이션에서 파일을 다루는데 사용되는 개념인 Blob, ArrayBuffer, Binary Data에 대해 알아보겠습니다. 파일 처리, 데이터 전송, 이미지 처리에 사용되는 개념입니다.
>
> **0. 벨로그 포스트**: [File: Blob, ArrayBuffer, TypedArray(Uint8Array)](https://velog.io/@dusunax/File-Blob-ArrayBuffer-TypedArrayUint8Array)
>
> **1. CodeSandbox 실험** > [https://codesandbox.io/s/unit8array-raw-binary-data-buffer-z3ki4q?file=/src/form/Form.jsx:275-694](https://codesandbox.io/s/unit8array-raw-binary-data-buffer-z3ki4q?file=/src/form/Form.jsx:275-694)
>
> **2. _MDN 레퍼런스_**
> Blob: [https://developer.mozilla.org/en-US/docs/Web/API/Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)  
> Binary Data Buffer: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)  
> TypedArray: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)  
> Unit8Array: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

---

# 1. Blob이 대체 뭐야?🤔

> The **`Blob`** object represents a blob, which is a file-like object of immutable, raw data
> [Blob - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Blob)

## File과 Blob

웹 개발을 하면서 `File`을 다루다보면 `Blob`을 보셨을 거라고 생각해요. `Blob`은 뭐 하는 친구일까요?

- `File`과 `Blob`은 모두 웹 플랫폼에서 파일 데이터를 나타내는 객체입니다.
  - 이 두 객체는 상속 관계에 있으며, `File`은 `Blob`의 확장입니다.
  - `File`은 `Blob`을 상속하므로 `Blob`의 메서드와 속성을 모두 사용할 수 있습니다. 또한 `File`은 파일과 관련된 메타데이터를 추가로 포함하고 있어 파일에 대한 정보를 더욱 쉽게 액세스할 수 있습니다.
- `Blob`은 일반적인 이진 데이터 또는 텍스트 데이터의 컨테이너로 사용되고,
  `File`은 주로 파일 업로드 및 관련 작업에 활용됩니다.

  |            | File                                          | Blob                                     |
  | ---------- | --------------------------------------------- | ---------------------------------------- |
  | 설명       | 파일 데이터 컨테이너 및 추가 메타데이터 포함  | 이진 또는 텍스트 데이터 컨테이너         |
  | 상속       | Blob을 상속함                                 | N/A                                      |
  | 사용법     | 파일 처리 및 업로드 등 파일 관련 작업에 사용  | 데이터 컨테이너로 사용                   |
  | 소스       | 일반적으로 사용자 입력에서 얻어진 파일의 객체 | 이진 데이터 또는 텍스트 데이터           |
  | 메타데이터 | 파일 이름, 크기, 유형 등의 메타데이터 포함    | 추가 메타데이터 없음                     |
  | 메서드     | Blob의 메서드 상속 + 파일 관련 메서드         | slice(), stream(), text(), arrayBuffer() |
  | 사용 예시  | 사용자가 선택한 파일 처리, 파일 조작 등       | 이미지 업로드, 이진 데이터 처리          |

## Blob, Binary Large Object

Blob은 **이진 데이터**(binary data)를 다룹니다.

- 파일이나 이미지와 같은 바이너리 데이터를 Blob 객체로 표현할 수 있습니다.

  - Blob 객체는 `읽기 전용`입니다.
  - 속성과 메서드를 제공하여, 파일에 대한 작업을 수행할 수 있습니다.

    | 메서드                    | 설명                                                    |
    | ------------------------- | ------------------------------------------------------- |
    | Blob.slice()              | Blob의 일부를 잘라내어 새로운 Blob을 생성               |
    | Blob.arrayBuffer()        | Blob을 ArrayBuffer 형식으로 비동기적으로 변환           |
    | Blob.text()               | Blob을 텍스트로 비동기적으로 변환                       |
    | Blob.stream()             | Blob을 ReadableStream 형태로 반환                       |
    | Blob.stream().getReader() | ReadableStream으로부터 데이터를 읽을 Reader 객체를 반환 |

#### **Blob 만들어보기**

```tsx
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

---

# **2. arrayBuffer 알아보기**

## arraryBuffer 메소드란?

![](https://velog.velcdn.com/images/dusunax/post/960e4c4f-be61-4440-920a-13e6681489dc/image.png)

arrayBuffer는 `ArrayBuffer`객체를 반환하는 Promise를 반환하는 **비동기적인 메서드**입니다.

- Promise, ArraryBuffer

![](https://velog.velcdn.com/images/dusunax/post/331c69db-1d18-4682-b082-502d7baded14/image.png)

## 고정된 길이의 이진 데이터 버퍼

`ArrayBuffer`는 고정된 길이의 이진 데이터 버퍼를 나타내는 JavaScript의 내장 객체입니다.

### ❓ 고정된 길이가 어떻게 되는데요?

`ArrayBuffer`의 크기(고정된 길이)는 생성할 때 지정됩니다. 크기는 바이트 단위로 지정되며, 0 이상의 정수로 설정할 수 있습니다. 예를 들어, `new ArrayBuffer(16)`은 16바이트 크기의 `ArrayBuffer`를 생성합니다.

`Uint8Array`, `Int16Array`, `Float32Array` 등의 TypedArray를 사용하여 `ArrayBuffer`의 버퍼를 읽고 쓸 수 있습니다. 이러한 TypedArray는 `ArrayBuffer`의 메모리 버퍼를 특정 데이터 형식으로 해석하고 조작할 수 있도록 도와줍니다.

### 📌 TypedArray의 예시

> A **_TypedArray_** object describes an array-like view of an underlying [binary data buffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
>
> [TypedArray - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)
>
> | TypedArray        | Size in bytes | 사용 예시                                               |
> | ----------------- | ------------- | ------------------------------------------------------- |
> | Int8Array         | 1 byte        | 부호 있는 8비트 정수 값을 다룰 때 사용                  |
> | Uint8Array        | 1 byte        | 부호 없는 8비트 정수 값을 다룰 때 사용                  |
> | Uint8ClampedArray | 1 byte        | 0에서 255 사이의 부호 없는 8비트 정수 값을 다룰 때 사용 |
> | Int16Array        | 2 bytes       | 부호 있는 16비트 정수 값을 다룰 때 사용                 |
> | Uint16Array       | 2 bytes       | 부호 없는 16비트 정수 값을 다룰 때 사용                 |
> | Int32Array        | 4 bytes       | 부호 있는 32비트 정수 값을 다룰 때 사용                 |
> | Uint32Array       | 4 bytes       | 부호 없는 32비트 정수 값을 다룰 때 사용                 |
> | Float32Array      | 4 bytes       | 32비트 단정밀도 부동소수점 값을 다룰 때 사용            |
> | Float64Array      | 8 bytes       | 64비트 배정밀도 부동소수점 값을 다룰 때 사용            |
> | BigInt64Array     | 8 bytes       | 64비트 부호 있는 정수 값을 다룰 때 사용 (BigInt 형식)   |
> | BigUint64Array    | 8 bytes       | 64비트 부호 없는 정수 값을 다룰 때 사용 (BigInt 형식)   |

### ❓ 이진 데이터 버퍼가 뭔가요?

**이진 데이터 버퍼**는 컴퓨터에서 `이진 데이터를 저장하는 메모리`의 일부분입니다.
**이진 데이터**는 0과 1로 구성된 비트(bit)의 나열로 표현되는 데이터를 말합니다.

컴퓨터에서는 모든 데이터가 이진 형태로 저장되며, 숫자, 문자, 이미지, 오디오, 비디오 등 모든 유형의 데이터가 이진 데이터로 표현됩니다.

#### **사용하는 이유!**

1. `ArrayBuffer`는 일반적으로 이진 데이터를 효율적으로 다루기 위해 사용됩니다.
   - 예를 들어, 이미지, 오디오, 비디오, 파일 등과 같은 바이너리 데이터는 `ArrayBuffer`를 사용하여 메모리에 할당된 버퍼에 저장됩니다.
     이를 통해 JavaScript는 바이너리 데이터를 처리하고 조작할 수 있습니다.
2. 파일이나 네트워크 요청 등에서 데이터를 비동기적으로 읽을 때 사용됩니다.
   - 일반적으로 `FileReader`와 함께 사용되며, 파일을 비동기적으로 읽은 후 `ArrayBuffer`로 변환하여 다양한 작업을 수행할 수 있습니다.

### 📌 같이 알아두기: 이진 데이터

#### **binary 파일:**

- 저장과 처리 목적을 위해 `이진 형식으로 인코딩 된 데이터 파일`입니다.
- 숫자, 문자, 이미지, 오디오, 비디오 등 모든 종류의 데이터를 포함할 수 있습니다.

#### **raw 파일:**

- 특정 파일 형식의 헤더나 압축 등의 처리를 거치지 않고 그대로 저장한 `순수한 이진 데이터 파일`입니다.
- 주로 이미지, 오디오, 비디오 등의 바이너리 데이터를 저장하기 위해 사용됩니다.

---

# 3. file 주시구요, binary data로 주세요.

> 🥪 안 드시는 야채 있으세요?
>
> #### CodeSandBox 실험!
>
> [Unit8Array : raw binary data buffer - CodeSandbox](https://codesandbox.io/s/unit8array-raw-binary-data-buffer-z3ki4q?file=/src/form/Form.jsx)

파일을 저장하려 할 때, 다음 이미지와 같이 `File`는 _name, size, lastModified_ 등, 원하지 않는 메타 정보까지 전부 포함하고 있습니다.

- 만약에 이 이미지 파일의 raw 데이터만 저장하고 싶다면 어떻게 해야 할까요?

```tsx
const file = e.target.files[0];
```

![](https://velog.velcdn.com/images/dusunax/post/960e4c4f-be61-4440-920a-13e6681489dc/image.png)

### Blob.arrayBuffer()

arrayBuffer는 `ArrayBuffer` 객체를 반환하는 Promise를 반환합니다.

```tsx
const buffer = await file.arrayBuffer();
```

다만 비동기로 받은 ArrayBuffer는 콘솔에서는 확인할 수 없습니다.

![](https://velog.velcdn.com/images/dusunax/post/b48096f6-dd4c-487b-a25a-5d93f1a5ca8c/image.png)

### 📌 console에서 arrayBuffer를 확인할 수 없는 이유

콘솔에서 `arrayBuffer`를 직접 출력하면 예상한 결과가 표시되지 않는 이유는 `arrayBuffer`가 바이너리 데이터를 포함하는 특수한 형식이기 때문입니다. `arrayBuffer`는 일련의 바이트로 이루어진 버퍼로서 텍스트로 직접 해석하기 어렵거나 의미가 없는 이진 데이터를 포함할 수 있습니다.

- reader가 onload된 후, JSON.stringify를 통해 확인할 수 있습니다.

```tsx
console.log("Buffer Stringify: ", JSON.stringify(unit8Buffer, null, 2));
```

> 👉 `JSON.stringify()`
>
> JSON의 stringify 메소드는 JavaScript 객체나 배열을 JSON 문자열로 변환하는 함수입니다. `JSON.stringify()` 메서드는 세 개의 매개변수를 받습니다.

- 첫 번째 매개변수: 변환할 JavaScript 객체 또는 배열입니다.
- 두 번째 매개변수: replacer 함수로, 원하는 속성을 필터링하거나 변환하는데 사용할 수 있습니다. 일반적으로 `null`을 전달하여 모든 속성을 변환합니다.
- 세 번째 매개변수: 들여쓰기(indentation)에 사용되는 공백 문자 number입니다. `2`를 전달하면 2칸의 공백 문자로 들여쓰기가 적용됩니다.

## Unit8Array

> 📎 Unit8Array는 부호 없는 8비트 정수 값을 다룰 때 사용하는 TypedArray입니다.

- `TypedArray`는 `buffer` 속성을 통해 같은 메모리를 공유하며, `TypedArray.from()` 메서드나 생성자 함수 등을 사용하여
  서로 다른 `TypedArray` 사이에서 쉽게 데이터를 변환할 수 있습니다.
- 웹 브라우저, Node.js, 웹 워커 등 다양한 플랫폼과 환경에서 일관된 방식으로 사용할 수 있습니다.
이는 코드를 여러 플랫폼에서 재사용하거나 이식성을 높일 수 있는 장점을 제공합니다.
</aside>

### 왜 Unit8Array죠?

#### 이유 A. 효율적인 메모리 사용

`Uint8Array`는 8비트 부호 없는 정수 값을 저장하기 위해 **1바이트**를 사용합니다.
본문 상단에서 정리했던 것과 같이, 다른 `TypedArray`는 더 큰 크기의 데이터를 저장하기 위해 더 많은 바이트를 사용하는 경우가 있습니다.
따라서, `Uint8Array`로 메모리 사용을 더 효율적으로 관리할 수 있습니다.

#### 이유 B. 이미지 파일의 픽셀 데이터 표현

대부분의 이미지 파일은 8비트 픽셀 데이터로 구성되어 있습니다.

- `Uint8Array`는 8비트 부호 없는 정수를 다루는 `TypedArray`로서, 이미지 파일의 픽셀 데이터를 표현하기에 적합합니다.
- 이미지 파일은 **픽셀 값들의 배열**로 구성되어 있으며, 각 픽셀은 RGB 값(각 색상이 0~255) 또는 RGBA 값으로 표현됩니다.
  `Uint8Array`는 0부터 255까지의 값을 표현할 수 있기 때문에 픽셀 데이터를 정확하게 표현할 수 있습니다.

### ArrayBuffer를 변환하기

이미지를 Unit8Array 형태의 바이트 데이터로 변환합니다.

- `new Unit8Array()`
  ```tsx
  const imageByteData = [...new Unit8Array(buffer)];
  // buffer: 위에서 반환 받은 ArrayBuffer
  ```

### Unit8Array를 spread하는 이유!

`new Uint8Array(buffer)`를 `[...new Uint8Array(buffer)]`로 spread하는 이유는 `Uint8Array`를 JavaScript의 일반 배열로 변환하기 위해서입니다.

- `Uint8Array`는 TypedArray로서, 이진 데이터를 효율적으로 다룰 수 있는 배열 형태입니다.
  하지만 `Uint8Array`는 일반 배열과는 다른 특징을 가지고 있습니다.
  예를 들어, `Uint8Array`는 `map`, `filter`, `reduce`와 같은 배열 메소드를 직접적으로 사용할 수 없습니다.
- 따라서, `Uint8Array`의 값을 가지는 일반 배열을 사용하기 위해, spread 연산자(**`...`**)를 사용합니다.

### 다음과 같이 이진 데이터를 화면에 출력하여 확인할 수 있습니다.

다음과 같은 형태의 `Uint8Array` binary data를 데이터 저장, 통신에 사용할 수 있습니다.

```tsx
<div>
  <h4>이진 데이터 binary data: </h4>
  <div style={{ fontSize: "10px", maxWidth: "320px" }}>
    {arrayBuffer && JSON.stringify(arrayBuffer, null, 2)}
  </div>
</div>
```

![](https://velog.velcdn.com/images/dusunax/post/da61dd05-0868-41b1-987f-6c236354a755/image.png)

# 결론

### 이미지 파일과 관련하여 Binary Data(TypedArray), Blob, ArrayBuffer에 대해 알아보았습니다😎

> 🥪 **이미지 데이터를 Blob, ArrayBuffer, Uint8Array 등을 활용하여, 이진 형식으로 변환하고 처리**할 수 있습니다.
>
> 이를 통해 웹 애플리케이션에서 **이미지 업로드와 관련된 다양한 작업을 수행**할 수 있습니다.

1. 이미지 업로드:
   사용자가 이미지 파일을 선택하면 해당 파일은 JavaScript에서 `File` 객체로 나타낼 수 있습니다.

- `File` 객체는 Blob의 하위 클래스이며, 파일에 대한 정보와 데이터를 포함합니다.
  - 사용자가 선택한 이미지 파일은 `FileReader`를 사용하여 비동기적으로 읽을 수 있습니다.
- `FileReader`의 `readAsArrayBuffer()` 메서드를 호출하여 이미지 파일을 ArrayBuffer로 변환할 수 있습니다.

2. 이미지 데이터 활용:
   `readAsArrayBuffer()` 메서드의 완료 이벤트 핸들러에서, 이미지 파일의 ArrayBuffer 데이터를 가져옵니다.
   - ArrayBuffer를 사용하여 `Uint8Array`로 변환합니다. `Uint8Array`는 8비트 부호 없는 정수 배열로, 이진 데이터를 처리하기에 적합합니다.
     이 데이터를 서버로 전송하여 저장하거나, 브라우저 내에서 이미지를 가공하거나 표시하는 등의 작업을 수행할 수 있습니다.
