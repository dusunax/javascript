# 선형 대수학 Linear algebra | 비정사각형 행렬, 내적

> - [https://www.youtube.com/watch?v=v8VSDg_WQlA](https://www.youtube.com/watch?v=v8VSDg_WQlA&list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B&index=9)
> - https://www.youtube.com/watch?v=LyGKycYT2v0

## 📌 비정사각형 행렬 **Nonsquare matrices**

비정사각형 행렬은 행과 열의 개수가 같지 않은 행렬을 의미합니다.

- 3x2 행렬은 `3개의 행`과 `2개의 열`로 이루어져 있으며,
- 2x3 행렬은 `2개의 행`과 `3개의 열`로 이루어져 있습니다.

이러한 비정사각형 행렬을 다루는 것은 2차원에서 3차원으로 또는 3차원에서 2차원으로 벡터를 변환하는 상황을 의미할 수 있습니다.

### 1. 3x2 행렬 (3x2 matrix)

- 3x2 행렬의 열공간
  - 3차원 공간에서 2차원 평면으로 투영된 벡터들의 집합입니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/0fae0fcd-29dc-48fc-b8f3-e2ef7239704a" width="300px" /><br />

### 2. 2x3 행렬 (2x3 matrix)

- 행렬의 열공간
  - 2차원 공간에 존재하는 벡터들의 집합입니다

<img src="https://github.com/dusunax/javascript/assets/94776135/73da4865-24ff-40a6-bd2b-1ca9e35fc21f" width="400px" /><br />

<img src="https://github.com/dusunax/javascript/assets/94776135/da5907af-541c-4c13-bb71-7377b0f72452" width="500px" /><br />

### 3. 1x2 행렬 (1x2 matrix)

- number line

<img src="https://github.com/dusunax/javascript/assets/94776135/ae0b826f-c609-484d-8735-afd5d4127cef" width="500px" /><br />

비정사각형 행렬 **Nonsquare matrices**은 다양한 상황에 사용하며, 열공간 Column Space을 통해 변환된 벡터들의 특징을 파악할 수 있습니다.

## 📌 내적 **Dot products**

### 1. 내적이란?

내적은 같은 차원을 가진 두 벡터 간의 연산으로,

두 벡터의 각 성분을 곱한 후 그 합을 구하는 것을 의미합니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/ccb86b4b-8064-42e9-ae34-93e27ec15091" width="500px" /><br />

### 2. 투영 Project

두 벡터 중 하나를 다른 벡터에 투영하여 그 결과를 구하는 것을 의미합니다.

투영은 두 벡터가 같은 방향을 가리키는 정도를 나타내며, 내적은 투영을 통해 계산됩니다.

- 두 벡터의 내적은 `W 벡터`를 `0과 v벡터를 지나는 선` 위로 투영하는 것으로 생각할 수 있습니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/ba8c1e81-789b-4299-8090-8d22838e088a" width="500px" /><br />

- 어느 벡터를 투영해도 결과는 같습니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/60ed85ae-5b6e-4a23-859b-704d9ff6691d" width="500px" /><br />

### 3. 벡터의 방향

| 내적 Dot Product | 방향      | direction           |
| ---------------- | --------- | ------------------- |
| 0보다 큼         | 같은 방향 | Similar directions  |
| 0과 같음         | 직각      | Perpendicular       |
| 0보다 작음       | 반대 방향 | Opposing directions |

<img src="https://github.com/dusunax/javascript/assets/94776135/e620e020-89b7-492c-b13a-ef965640ca07" width="400px" /><br />

<img src="https://github.com/dusunax/javascript/assets/94776135/0128fccc-ce5d-4235-8810-ae139aaeff59" width="400px" /><br />

<img src="https://github.com/dusunax/javascript/assets/94776135/1ca9ba1e-b9d0-4bb6-86b7-1875ac7e46e0" width="400px" /><br />

### 4. 벡터와 행렬

- 2d vectors ↔ 1x2 matrices

<img src="https://github.com/dusunax/javascript/assets/94776135/9bf4b959-b53e-4c28-861c-257e50568b15" width="500px" /><br />

### 5. 이중성 duality

내적은 선형 변환과의 이중성 (duality)을 가지고 있습니다.

이는 벡터가 가진 선형 변환 성질과 관련된 개념으로, 내적은 벡터의 방향, 크기, 그리고 벡터 사이의 각도에 따라 다양한 결과를 가질 수 있습니다.

### 5. 행렬 벡터 곱셈 matrix vector multification

내적은 행렬과 벡터를 곱하는 연산으로도 표현할 수 있습니다.

예를 들어, 1x2 행렬과 2x1 행렬을 내적하면 스칼라 값이 나오게 됩니다.

행렬 벡터 곱셈 (Matrix-Vector multiplication)을 내적으로 표현하면 다음과 같습니다:

<img src="https://github.com/dusunax/javascript/assets/94776135/9da6e56a-7da1-4074-ac97-1924b32f0169" width="500px" /><br />

- 내적은 단위 벡터의 성질을 이용하여 계산할 수도 있습니다.
  - u hat 벡터를 i hat과 j hat에 투영하면 다음과 같은 결과를 얻을 수 있습니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/c9843a7f-943e-4758-82ce-845378204cba" width="500px" /><br />

<img src="https://github.com/dusunax/javascript/assets/94776135/47f78130-57b1-44c9-8e61-37484bcf5296" width="500px" /><br />

---

[NextPage](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-08-cross-products.md)
