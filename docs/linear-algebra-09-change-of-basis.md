# 선형 대수학 Linear algebra

> https://www.youtube.com/watch?v=P2LTAUO1TdA  
> [선형 변환 Linear transformation](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-03-linear-transformation.md)  
> [행렬 곱셈 Matrix multiplication](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-04-matrix-multiplication.md)  

## 📌 기저 변환 Change of basis

> 어떤 기저 v에 대해 표현된 좌표들을 다른 기저 w에 대해 표현된 좌표들로 변환하는 작업

### 기본 개념

- 같은 벡터라도, 다른 기저 벡터, 다른 좌표계에서 다른 행렬을 가집니다.
  | 요소 | 내용 |
  | ------------------- | --------------------------- |
  | origin 원점 | 항상 동일 |
  | axies, grid spacing | depends on own basis vector |

<img src="https://github.com/dusunax/javascript/assets/94776135/b3fca7da-ef65-4a65-9801-2cf5377bb71f" width="500px" />
<br />
<img src="https://github.com/dusunax/javascript/assets/94776135/68a7f40b-9d4f-4bd6-95b7-c9cd47e70d76" width="500px" />
<br />
<img src="https://github.com/dusunax/javascript/assets/94776135/1eed5873-80a6-4873-832d-9a4e11f283b7" width="500px" />

## 📌 기저 벡터 변환하기

### 1. 대상 기저 벡터를, 현재 기저 벡터로 변환

- 벡터(노란색)를 다음과 같이, [-1, 2] 행렬로 표현할 수 있는
  좌표계의 기저 벡터는 b1, b2입니다.
  <img src="https://github.com/dusunax/javascript/assets/94776135/7cd16708-3c37-475c-a342-a9b80d1e1d89" width="500px" /><br />  
- 이 벡터를 현재 좌표계를 통해 표현하면, b1과 b2의 좌표는 다음과 같습니다.
  <img src="https://github.com/dusunax/javascript/assets/94776135/02faf16a-3fc1-4369-8c39-febf3b1b6999" width="500px" /><br />  
- 좌표계에 벡터를 스케일링 scaling 합니다.
  - 행렬 곱셈 [matrix-vector multiplication](https://github.com/dusunax/javascript/blob/main/docs/linear-algebra-04-matrix-multiplication.md#행렬-곱셈-matrix-multiplication)
  <img src="https://github.com/dusunax/javascript/assets/94776135/11d11024-116c-4d24-8b90-70496f66ac1a" width="500px" /><br />  
- 같은 좌표계
  - 현재 기저 벡터일 때: 현재 좌표계 > 대상 좌표계 > 현재 좌표계 행렬곱셈
  <img src="https://github.com/dusunax/javascript/assets/94776135/41142c57-168d-46a6-b805-b041d64430be" width="500px" /><br />  



### 2. 현재 기저 벡터를, 대상 기저 벡터로 변환

- 벡터(노란색)를 다음과 같이, i hat, j hat으로 표현 시
  행렬은 [3, 2]입니다.  
  <img src="https://github.com/dusunax/javascript/assets/94776135/28013a51-48da-42c9-bf49-069ce788eca1" width="500px" /><br /> 
- 해당 벡터를 다음 b1, b2 기저 벡터를 가진 대상 좌표계에서 확인하려 합니다.  
  <img src="https://github.com/dusunax/javascript/assets/94776135/cb5c80aa-e96b-4aed-81e0-878d7a82ee16" width="500px" /><br />
- 행렬은 다음과 같습니다.  
  <img src="https://github.com/dusunax/javascript/assets/94776135/a1720f1d-1d6c-4788-8e71-13e819110286" width="500px" /><br />
- 역행렬을 통해 계산합니다.  
  <img src="https://github.com/dusunax/javascript/assets/94776135/884f83f5-4dd6-43a9-a1e7-07c09d735c14" width="500px" /><br />
  <img src="https://github.com/dusunax/javascript/assets/94776135/dda9609d-5b48-4870-ab56-5845dd1b3123" width="500px" /><br />

### 역행렬을 사용하는 이유

- 대상의 기저 벡터를, 현재 기저 벡터로 표현한 행렬 A  
  <img src="https://github.com/dusunax/javascript/assets/94776135/c12285f0-7e29-4a98-a295-f8cdc81d174c" width="500px" /><br />
- 대상의 벡터에 행렬 A를 곱함으로서, 현재 좌표계의 행렬을 알 수 있다.  
  <img src="https://github.com/dusunax/javascript/assets/94776135/8a968536-1ff7-434b-9e8e-14e46c82a8b8" width="500px" /><br />
- 이를 역으로 계산하는 것  
  <img src="https://github.com/dusunax/javascript/assets/94776135/0471ed83-ed04-4612-8f34-50b32c1aa891" width="500px" /><br />

## 📌 변환 공식

> 예시: 특정 기저 벡터를 가진 행렬에서, 반시계방향으로 90도 회전

### 1. 기저 변환 행렬 Change of basis matrix

<img src="https://github.com/dusunax/javascript/assets/94776135/896ab79d-922f-49c8-ad44-e9f31bce74a8" width="500px" /><br />


### 2. 변환 행렬

- 선형 변환  
  <img src="https://github.com/dusunax/javascript/assets/94776135/f31cd429-675b-49c5-bce1-021294de3e95" width="500px" /><br />

### 3. 역변환

- 기저 변환 행렬을 되돌리기
  - Inverse change of basis matrix (컴퓨터 계산)  
  <img src="https://github.com/dusunax/javascript/assets/94776135/ff77218b-d5e4-4eeb-b78c-41cd2210bdfd" width="500px" /><br />
  
### 결과

<img src="https://github.com/dusunax/javascript/assets/94776135/099708d3-6d8f-4e0d-a36c-94f79fc15b1c" width="500px" /><br />
<img src="https://github.com/dusunax/javascript/assets/94776135/22ad0cc9-8ddf-4e1b-b7fc-1edffabc5303" width="500px" /><br />

### Expression

<img src="https://github.com/dusunax/javascript/assets/94776135/ff69fb38-9164-46ae-8492-78d13f0e3f8b" width="200px" /><br />

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
