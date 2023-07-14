# 선형 대수학 Linear algebra

> https://www.youtube.com/watch?v=kYB8IZa5AuE

## 선형 변환 Linear transformation

> 원점을 고정하고, 공간 space을 변형합니다.

| linear         | 곡선이 아닌 선 |
| -------------- | -------------- |
| transformation | function, 변환 |

- 입력 vector와 출력 vector가 존재합니다.

```tsx
input vector = L(v vector) ⇒ output vector
```

- 2차원에서 선형 변환은 무한한 그리드를 만듭니다.

### 선형 변환의 조건 (not arbitrary transformation!)

1. 모든 선(line)은 직선입니다.
2. 원점은 고정되어 있습니다.
3. 그리드 선은 평행하고 균일한 간격을 가집니다.

### 숫자로 선형 변환 표현하기

- i hat과 j hat을 사용하여 그리드를 표현할 수 있습니다.
- i hat과 j hat을 사용하여 변환을 표현할 수 있습니다.
  - i hat과 j hat에 스칼라 값을 곱하여 표현합니다.

### 2x2 행렬, 2x2 Matrix

- first colum : i hat이 이동하는 곳
- second colum : j hat이 이동하는 곳
- x y ⇒ 입력값

```tsx
x [ a ] + y [ b ] = [ ax + by ]
  [ c ]     [ d ]   [ cx + dy ]
```

- 예시
  | i hat | j hat | | |
  | ----- | ----- | --- | --- |
  | 1 | 0 | 2 | x |
  | 0 | 1 | 3 | y |

<img src="https://github.com/dusunax/javascript/assets/94776135/b600a397-be1c-416e-a92c-7027055ca61f" width="300px" />

### 반시계 90도 회전 -90 deg rotations of grid

<img src="https://github.com/dusunax/javascript/assets/94776135/d3941a53-19d0-4557-b705-0de6bb24beaa" width="500px" />

### 기울기 Shear

<img src="https://github.com/dusunax/javascript/assets/94776135/3feb8685-6d54-4818-92fb-2ca58550d88a" width="500px" />

### 그리드 그려보기

<img src="https://github.com/dusunax/javascript/assets/94776135/e0e3cc1a-382c-4cbc-9f3d-df7cd0dbed2b" width="300px" />

### Linearly dependent columns

- 1차원 span의 경우

<img src="https://github.com/dusunax/javascript/assets/94776135/7cc9fc00-d88b-4f9f-b95a-bbc72aaa44b1" width="500px" />

---

[NextPage](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-04-matrix-multiplication.md)
