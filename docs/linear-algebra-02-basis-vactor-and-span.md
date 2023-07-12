# 선형 대수학 Linear algebra

> https://www.youtube.com/watch?v=k7RM-ot2NWY&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=2

## 기저 벡터 basis vectors

- 벡터 공간을 생성하는 데 사용되는, 기저 역할을 수행하는 벡터

### 벡터 공간 Vector Space 이란?

- 일종의 `공간`으로 벡터들의 집합
  - 벡터의 덧셈은 항상 같은 결과
  - 벡터와 스칼라의 곱셈은 분배 법칙

### 기저 벡터 basis vectors란

- 2D 좌표 시스템의 기저 벡터: scaler를 수정하여 모든 벡터를 만들 수 있음

| 벡터     | 거리                 |
| -------- | -------------------- |
| i hat    | x축 +1칸             |
| j hat    | y축 +1칸             |
| [ 3 -2 ] | (3)i-hat + (-2)j-hat |

## Span이란?

- 두 Vector를 변형하여 얻을 수 있는 모든 벡터 값 ⇒ 두 Vector의 Span이라고 함
  - 벡터의 쌍으로 2차원에서의 모든 벡터를 표현할 수 있음

### 선형 조합 Linear combination

```tsx
v = (v₁, v₂, ..., vₙ) (v의 요소) 벡터 v
w = (w₁, w₂, ..., wₙ) (w의 요소) 벡터 w
c₁, c₂ 스칼라(실수)
```

- 한 scaler를 고정 값으로 둔다면 ⇒ 만들어지는 벡터는 선 위에 그려짐
- 두 scaler를 자유롭게 변경한다면 ⇒ 모든 벡터를 그릴 수 있음
  - 다만 둘 다 제로거나, 방향이 같은 경우도 있을 수 있음

<img src="https://github.com/dusunax/javascript/assets/94776135/ac158287-a1b8-48b5-9a33-1d58fbbb96ad" width="400px" />

### **단일 벡터 Single Vector** & **다중 벡터 Vector Collection**

| 단일 벡터 (Single Vector) | 다중 벡터 (Vector Collection)                                        |
| ------------------------- | -------------------------------------------------------------------- |
| 하나의 벡터               | 여러 개의 벡터들의 집합                                              |
| 화살표 arrow              | 점 point                                                             |
| 길이와 방향을 가짐        | 개별 벡터들은 각각 길이와 방향을 가짐 (tail을 origin으로 하는 point) |

### 선형 종속 Linearly Depenedent & 선형 독립 Linearly Independent

| 선형 종속 (Linearly Dependent)                             | 선형 독립 (Linearly Independent)           |
| ---------------------------------------------------------- | ------------------------------------------ |
| 벡터들 간 선형 종속한 관계                                 | 벡터들 간 선형 독립한 관계                 |
| 적어도 하나의 벡터가 다른 벡터들의 선형 조합으로 표현 가능 | 모든 벡터들이 서로 다른 방향과 크기를 가짐 |
| 벡터들이 일직선 상에 위치함                                | 벡터들이 일직선 상에 위치하지 않음         |
| 차원이 낮아짐                                              | 차원을 유지                                |

<img src="https://github.com/dusunax/javascript/assets/94776135/f1a7330b-1d54-4b51-bfe5-da929a5dd390" width="400px" />   
<br />
<img src="https://github.com/dusunax/javascript/assets/94776135/83fd5194-2307-40ad-96dc-66c0925f2482" width="400px" />

### Vectors in 3D dimention (v, w, u)

| 벡터 | 내용                                                            |
| ---- | --------------------------------------------------------------- |
| v    | 시작점을 원점으로 하는 화살표                                   |
| w    | 시작점을 v의 끝점으로 하는 화살표                               |
| u    | 벡터 공간 위에 존재하지 않는다면(독립적), 3차원 공간에서의 벡터 |

---

[NextPage](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-03-linear-transformation.md)
