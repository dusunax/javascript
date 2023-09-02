# 선형 대수학 Linear algebra

> https://www.youtube.com/watch?v=XkY2DOUCWMU

## 행렬 곱셈 Matrix multiplication

### 선형 변환 Linear Transformation

> 이전 공부 내용 : [Linear algebra -3: Linear transformation](https://www.notion.so/Linear-algebra-3-Linear-transformation-9ed4e4b5ec594b7bb5df6f829fa8ed9d?pvs=21)

- 2x2 Matrix(행렬)과 vector로 구성
- vector input과 vector output을 가지는 function이라 할 수 있음

<img src="https://github.com/dusunax/javascript/assets/94776135/ce38b858-ccf6-428e-bb52-799d89130aaa" width="500px" />

> 📎 매트릭스 읽는 순서
> 1 3
> 2 4

### 두 변환의 합성 Composition of two separate transformation

- 만약 `rotate`과 `shear`의 선형 변환을 연쇄적으로 수행할 때
  마지막으로 도착하는 `matrix`는 `rotate`과 `shear`의 합성과 같음  
  <img src="https://github.com/dusunax/javascript/assets/94776135/4d7df921-e755-4306-8a15-35edbaf70bd9" width="500px" />
  ```tsx
  f(g(x)): read right to left
  ```

- 괄호의 transform를 먼저 처리 후, 바깥 transform을 처리
  - 1번 선형 변환  
    <img src="https://github.com/dusunax/javascript/assets/94776135/55fc6512-43c2-4268-81b5-49bcc8344c25" width="500px" />
  - 2번 선형 변환  
    <img src="https://github.com/dusunax/javascript/assets/94776135/a4aac70f-e418-43cf-aaaa-1b277fe0db64" width="500px" />
- 쓰면서 일단 외우기  
  <img src="https://github.com/dusunax/javascript/assets/94776135/296de2af-4fff-42d2-bbc1-cbf85eeb5358" width="500px" />  
  <img src="https://github.com/dusunax/javascript/assets/94776135/1c8ec44c-9f26-43bc-b358-061ddb5b8710" width="500px" />  
  <br />

### A(BC) = (BC)A

- Matrix를 숫자가 아니라 그래프 위의 화살표로 생각했을 때(그래픽적으로 vector를 생각했을 때)
  - (1) `rotate` 후에 `shear`와 (2) `shear` 후에 `rotate` ⇒ 결과는 같음
  - 해당 그래프를 이미징하여 `A(BC) = (AB)C`의 개념에 접근합니다.

---

[NextPage](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-05-determinant.md)
