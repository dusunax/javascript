# 선형 대수학 Linear algebra

> [https://www.youtube.com/watch?v=eu6i7WJeinw](https://www.youtube.com/watch?v=eu6i7WJeinw&t=3s)

## 📌 외적 Cross products

> - 외적은 선형 대수학에서 두 벡터의 벡터 곱을 의미합니다.

- 두 벡터로 만든 평면에 수직인 새로운 벡터를 생성합니다. (오른손 법칙)
- 외적은 `×` 기호로 표시됩니다.

### 1. 외적은?

두 벡터인 v와 w의 외적을 계산하기 위해, 평행사변형을 형성합니다.  
새로운 벡터는 평행사변형의 평면에 수직으로 생성

- 만약 v가 w의 왼쪽에 위치한다면, 외적 (v × w) 값은 음수
- 만약 v가 w의 오른쪽에 위치한다면, 외적 (w × v) 값은 양수

<img src="https://github.com/dusunax/javascript/assets/94776135/9ed643ca-b9fa-43ee-9133-e747273776aa" width="200px" />

### 2. 행렬식 determinant

> [Linear algebra -5: **Determinant, Parallelpiped**](https://www.notion.so/Linear-algebra-5-Determinant-Parallelpiped-9dbd14f84d0a4e1c902880745e4d231a?pvs=21)

- 행렬식으로 평행사변형의 값을 계산

<img src="https://github.com/dusunax/javascript/assets/94776135/d4c15feb-6a54-4366-ae06-d11427278a84" width="400px" />
<br />
<img src="https://github.com/dusunax/javascript/assets/94776135/f226cb21-8f55-4e4a-8d4b-c38f1114d47c" width="400px" />

### 3. cross products 특징

- 두 벡터 사이의 각이 커질수록, 외적의 크기가 커집니다 (평행사변형의 면적을 나타내므로)
- 하나의 벡터의 크기가 2배가 되면, 외적의 크기도 2배가 됩니다.

### 4. 3차원 벡터 결합

<img src="https://github.com/dusunax/javascript/assets/94776135/b82a1407-3545-4e0a-8643-4960018527c3" width="200px" />

외적은 두 개의 3차원 벡터를 결합하여 새로운 3차원 벡터로 표현할 수 있습니다.

이렇게 생성된 벡터는 원래 벡터로 형성된 평행사변형의 면적을 나타냅니다.

- 결과 벡터의 길이는 평행사변형의 면적과 같다.
- 방향은 오른손 법칙을 따라 평행사변형의 평면에 수직으로 설정된다.

<img src="https://github.com/dusunax/javascript/assets/94776135/e8da97ae-95b6-479e-a7da-03a14ad5e442" width="200px" />

### 5. 3차원 행렬식

3차원 행렬식은 세 개의 3차원 벡터를 사용하여 계산됩니다.

이는 세 벡터로 형성된 평행육면체의 부피를 나타냅니다.

<img src="https://github.com/dusunax/javascript/assets/94776135/cf8aed62-71f6-4666-b13f-45fcb44ee5b0" width="400px" />

---

<!-- [NextPage](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-09-change-of-basis.md) -->
