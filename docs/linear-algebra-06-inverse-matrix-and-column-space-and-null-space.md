# 선형 대수학 Linear algebra

> [Inverse matrices, column space and null space | Chapter 7, Essence of linear algebra](https://www.youtube.com/watch?v=uQhTuRlWMxw&list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B&index=8)

## 📌 **선형 대수학과 활용**

> 선형 대수학은 다양한 분야에서 활용되며, `컴퓨터 그래픽`, `로봇 공학` 등에서 널리 사용됩니다.  
> 선형 대수학은 방정식 계산에도 활용되며, `선형 방정식계`를 해결하는데 사용됩니다.  
> <img src="https://github.com/dusunax/javascript/assets/94776135/8347f42d-b875-4f73-9b7d-3a1df0c679dd" width="300px" /><br />

### 1. **선형 방정식계와 변수**

선형 방정식계는 여러 개의 선형 방정식으로 이루어진 식들의 집합을 의미합니다.

이때, 방정식의 계수는 행렬로, 변수는 벡터로 표현됩니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/e3c99572-576e-4303-a9a9-b908a6451a0e" width="500px" /><br />

변환 행렬 A을 적용한 후의 결과 벡터 V를 구하기 위해 변수 벡터 X를 찾는 것이 목표입니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/f69f7bec-a63a-4a50-8713-aed860c9c482" width="200px" /><br />

### 2. **행렬식과 변환**

1. 행렬식 A가 0이 아닌 경우, 벡터의 이동 거리가 변환된 방향과 반대 방향으로 이동합니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/deed3385-38a0-4c68-be95-9b0337279dac" width="200px" /><br />

1. 행렬식 A가 0인 경우, 차원을 다시 펼칠 수 없습니다.
   - 다음의 경우 제외: i hat, j hat 기저벡터가 같은 라인 위에 놓여있는 경우
     <img src="https://github.com/dusunax/javascript/assets/94776135/540b0296-1cb5-4856-bf9f-5258a4820ffb" width="500px" /><br />

## 📌 **역행렬과 항등 변환**

<img src="https://github.com/dusunax/javascript/assets/94776135/06064ca1-1089-44b0-b9b2-780a5a83b7c0" width="100px" /><br />

### 1. 역행렬 Inverse matrix

행렬 A의 역행렬은 A의 곱셈 결과로 항등 변환을 수행하는 행렬입니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/7236abcf-454b-4401-8570-ad72f4ab5cc6" width="500px" /><br />

### 2. 항등 변환 Identity transformation

항등 변환은 아무런 변환을 하지 않는 변환이며, 원래의 벡터와 동일한 결과를 얻을 수 있습니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/d74c0623-a6c8-46d8-9290-a2e208aac111" width="500px" /><br />

## 📌 **열공간과 계수**

### 열공간 Column space

열공간은 행렬의 가능한 결과들의 집합을 의미합니다.

### 계수 Rank

계수는 열공간의 차원 수를 나타내며, **변환 결과**의 차원을 의미합니다.

| Rank 1 | 변환 결과가 1차원 | rank of one   |
| ------ | ----------------- | ------------- |
| Rank 2 | 변환 결과가 2차원 | rank of two   |
| Rank 3 | 변환 결과가 3차원 | rank of three |

- Full rank는 변환 결과가 이전과 같은 경우를 의미합니다.
- zero vector는 원점에 해당하는 벡터들의 집합을 의미합니다.
  - 모든 Rank는 zero vector를 가지고 있습니다.(원점)
  - Rank가 줄어들 경우, zero vector가 증가됩니다.

## 📌 영공간 Null space

영공간은 행렬의 영벡터 zero vector(원점으로 이동하는 벡터)들의 집합을 의미합니다.

`Null space` 또는 `Kernel of a matrix`라고도 합니다.

---

[NextPage](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-07-nonsquare-matrices-and-dot-product.md)
