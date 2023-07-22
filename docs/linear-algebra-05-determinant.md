# 선형 대수학 Linear algebra | 행렬식과 평행육면체

> - [Three-dimensional linear transformations | Chapter 5, Essence of linear algebra](https://www.youtube.com/watch?v=rHLEWRxRGiM)
> - [The determinant | Chapter 6, Essence of linear algebra](https://youtu.be/Ip3X9LOh2dk)

- https://www.khanacademy.org/math/linear-algebra
  >

## 📌 **3차원 공간에서의 선형 대수학**

3차원 공간에서의 선형 대수학은 기존의 2차원과 동일한 개념을 적용하지만,
기저 벡터와 좌표축은 다음과 같이 정의됩니다.

### 1. **기저 벡터와 좌표축**

3차원 공간의 기저 벡터는 i hat, j hat, k hat으로 나타냅니다.

- 각각의 기저 벡터는 x, y, z 축을 나타냅니다.

### 2. **3D 선형 변환**

- 3차원 공간에서의 선형 변환

<img src="https://github.com/dusunax/javascript/assets/94776135/6624411d-20ba-44b9-a990-2658a57ced65" width="500px" /><br />

<img src="https://github.com/dusunax/javascript/assets/94776135/63c05d54-0aaf-4293-99ff-e6a8601db171" width="500px" /><br />

### 3. **두 행렬의 곱셈** multiply two metrix

- 오른쪽 적용된 후 왼쪽 적용

<img src="https://github.com/dusunax/javascript/assets/94776135/6502b330-d879-4072-9222-a7308be69a3a" width="500px" /><br />

### 4. **3차원 방향과 오른손 규칙**

3차원 공간에서의 벡터의 방향을 결정하는데 사용되는 오른손 규칙

- 왼손과는 반대 방향으로 적용됩니다.(반대방향 = 음수)

<img src="https://github.com/dusunax/javascript/assets/94776135/7e4d4079-e7b9-4960-920f-71d4e529024b" width="300px" /><br />

---

## 📌 행렬식 determinant이란?

행렬식은 3차원에서의 선형 변환의 `scale` 값을 의미합니다. 행렬식 값이 음수라면 변환된 결과가 반전되는 경우를 나타냅니다.

### 1. 평행육면체 parallelpiped

3차원에서는 `i hat`, `j hat`, `k hat`으로 이루어진 `i x j x k` 볼륨을 scale하게 되는데, 이 볼륨을 평행육면체라 합니다.

- 행렬식 == 평행육면체의 부피값

<img src="https://github.com/dusunax/javascript/assets/94776135/8f65d0fc-f785-4825-a241-104d5952e77a" width="500px" /><br />

- 행렬식의 값이 0이라면 차원이 낮아지거나 원점이 될 수 있습니다.
  이는 선형 의존인 경우를 나타냅니다.

### 2. 행렬식의 적용

행렬식은 평행사변형의 넓이와 밑변, 높이를 곱한 것과 동일합니다.

행렬식의 값이 0이 아니라면 bc는 평행사변형이 얼마나 찌그러지는 지의 값을 나타냅니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/1743e329-94db-42d8-b0ce-804019ab61ff" width="500px" /><br />

---

[NextPage](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-06-inverse-matrix-and-column-space-and-null-space.md)
