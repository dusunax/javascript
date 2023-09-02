# 선형 대수학 Linear algebra

> https://www.youtube.com/watch?v=P2LTAUO1TdA
>
> [선형 변환 Linear transformation](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-03-linear-transformation.md)
>
> [행렬 곱셈 Matrix multiplication](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-04-matrix-multiplication.md)

## 📌 기저 변환 Change of basis

> 어떤 기저 v에 대해 표현된 좌표들을 다른 기저 w에 대해 표현된 좌표들로 변환하는 작업

### 기본 개념

- 같은 벡터라도, 다른 기저 벡터, 다른 좌표계에서 다른 행렬을 가집니다.
  | 요소 | 내용 |
  | ------------------- | --------------------------- |
  | origin 원점 | 항상 동일 |
  | axies, grid spacing | depends on own basis vector |
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/e43474b5-03d2-4477-8381-d0147f684970/Untitled.png)
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/baaac360-5a95-437f-99b7-d7bf60eba780/Untitled.png)
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/e7d479b3-71de-4fc0-93ce-228d1fa5645e/Untitled.png)

## 📌 기저 벡터 변환하기

### 1. 대상 기저 벡터를, 현재 기저 벡터로 변환

- 벡터(노란색)를 다음과 같이, [-1, 2] 행렬로 표현할 수 있는
  좌표계의 기저 벡터는 b1, b2입니다.
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/f5cf5da5-2f5f-44ad-ab9c-a8cbf2881fda/Untitled.png)
- 이 벡터를 현재 좌표계를 통해 표현하면, b1과 b2의 좌표는 다음과 같습니다.
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/1f6811ad-9af0-45ec-b0c5-c126e9adacf9/Untitled.png)
- 좌표계에 벡터를 스케일링 scaling 합니다.
  - 행렬 곱셈 [matrix-vector multiplication](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-04-matrix-multiplication.md#행렬-곱셈-matrix-multiplication)
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/44bb38f4-992a-490e-89c8-48a380c70a77/Untitled.png)
- 같은 좌표계
  - 현재 기저 벡터일 때: 현재 좌표계 > 대상 좌표계 > 현재 좌표계 행렬곱셈
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/1b67ed92-4ca8-4bbf-b58d-0b2a149d0c06/Untitled.png)

### 2. 현재 기저 벡터를, 대상 기저 벡터로 변환

- 벡터(노란색)를 다음과 같이, i hat, j hat으로 표현 시
  행렬은 [3, 2]입니다.
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/f9ad8b84-870e-456c-8afa-ae7681903daf/Untitled.png)
- 해당 벡터를 다음 b1, b2 기저 벡터를 가진 대상 좌표계에서 확인하려 합니다.
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/aa79e6fd-7d79-4b1f-ad2b-caf6fbde66de/Untitled.png)
- 행렬은 다음과 같습니다.
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/c12dc98e-7a58-459d-be9a-ac65114f3b21/Untitled.png)
- 역행렬을 통해 계산합니다.
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/362e5e12-4a8e-4e49-8404-903f4618cd98/Untitled.png)
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/aae96b1b-7302-4626-869a-0d2bcd565262/Untitled.png)

### 역행렬을 사용하는 이유

- 대상의 기저 벡터를, 현재 기저 벡터로 표현한 행렬 A
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/39c6a9dd-745f-428b-8228-8f235f09a7d4/Untitled.png)
- 대상의 벡터에 행렬 A를 곱함으로서, 현재 좌표계의 행렬을 알 수 있다.
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/90b23166-bcd1-4750-a77d-af292bb6e6ca/Untitled.png)
- 이를 역으로 계산하는 것
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/2e72341f-e741-4fa8-8f5f-dc93c7517da7/Untitled.png)

## 📌 변환 공식

> 예시: 특정 기저 벡터를 가진 행렬에서, 반시계방향으로 90도 회전

### 1. 기저 변환 행렬 Change of basis matrix

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/af346b3c-4b1a-4a35-8d93-f82242ffd4f3/Untitled.png)

### 2. 변환 행렬

- 선형 변환
  ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/c40745bb-b778-49e2-8642-c8c766abd4de/Untitled.png)

### 3. 역변환

- 기저 변환 행렬을 되돌리기
  - Inverse change of basis matrix (컴퓨터 계산)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/eee49379-db5f-4399-b565-741d8ef9bd8f/Untitled.png)

### 결과

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/4ff6bf55-2f91-4002-8c38-1d732ffbef42/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/614bd7bc-ff47-487a-94d4-434a39afd81d/Untitled.png)

### Expression

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d3e38bbd-e38d-4abe-8775-a54589a393d6/73dbdcb2-4f64-4295-8ad8-4af3fa143e06/Untitled.png)

| expression | 설명               |
| ---------- | ------------------ |
| A⁻¹, A     | 시점의 변화        |
| M          | 내 시점에서의 변환 |

```
💡 영어

prerequisites[ˌpriːrɪˈkwɪzəts] 선수 조건: conditions or requirements that must be fulfilled before something else can happen or be done
```

---

<!-- [NextPage](https://github.com/dusunax/javascript/blob/main/docs/) -->
