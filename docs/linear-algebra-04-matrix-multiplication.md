# Linear algebra -4: Matrix multiplication

# 선형 대수학 Linear algebra

> https://www.youtube.com/watch?v=XkY2DOUCWMU

## 행렬 복제 Matrix multiplication

### Linear Transformation

> 이전 공부 내용 : [Linear algebra -3: Linear transformation](https://www.notion.so/Linear-algebra-3-Linear-transformation-9ed4e4b5ec594b7bb5df6f829fa8ed9d?pvs=21)

- 2x2 Matrix와 vector로 구성
- vector input과 vector output을 가지는 function이라 할 수 있음

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8270aef7-4fb4-4e09-9edc-2c23eec3df60/Untitled.png)

<aside>
📎 매트릭스 읽는 순서
1   3
2   4

</aside>

### Composition of two separate transformation

- 만약 일련의 rotate과 shear의 linear transformation을 수행할 때
  마지막으로 도착하는 matrix는 rotate과 shear의 합성과 같음
      ```tsx
      f(g(x)): read right to left
      ```

      ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7b3b3de-f1a4-4ba6-aaa2-78b44904e5de/Untitled.png)
- 괄호의 transform를 먼저 처리 후, 바깥 transform을 처리
  - 1번 선형 변환
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a98ee77-f8f4-441a-9b52-1466a8270972/Untitled.png)
  - 2번 선형 변환
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7dedfb6c-b0ec-4b74-b40c-ab95a627cacb/Untitled.png)
- 쓰면서 일단 외우기
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f2ee0fa-1100-433d-95ce-e0465a6a3128/Untitled.png)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2cb46e23-10a8-430a-8975-191d10c4614d/Untitled.png)
- Matrix를 숫자가 아니라 그래프 위의 화살표로 생각했을 때(그래픽적으로 vector를 생각했을 때)
  - (1) `rotate` 후에 `shear`와 (2) `shear` 후에 `rotate` ⇒ 결과는 같음
  - 해당 개념으로 A(BC) = (AB)C를 접근합니다.
