# Depth First Search/Traversal, 깊이 우선 탐색: 순회 방식 알아보기

> 📎 **DFS를 진행하는 세가지 방법**
>
> 1.  inorder: everything in order
> 2.  preorder: parent node에서 시작, 자식 (왼쪽 ⇒ 오른쪽)
>
> - 트리를 recreate할 수 있습니다.
>
> 3.  postoder: 자식에서 부모로 “반대 방향”으로 올라가며 진행

| 순회 방식          | 순서                                                    |
| ------------------ | ------------------------------------------------------- |
| Inorder 중위 순회  | 왼쪽 서브트리, 루트, 오른쪽 서브트리 순서로 노드를 방문 |
| Preorder 전위 순회 | 루트, 왼쪽 서브트리, 오른쪽 서브트리 순서로 노드를 방문 |
| Postorder후위 순회 | 왼쪽 서브트리, 오른쪽 서브트리, 루트 순서로 노드를 방문 |

---

## 1. Inorder, 중위 순회

```
- 왼쪽 서브트리 ⇒ 루트 ⇒ 오른쪽 서브트리
```

### 트리로 알아보기

```
        A
       / \
      B   C
     / \
    D   E

Inorder: D - B - E - A - C

1. 함수 호출 - A(root), []
2. 왼쪽 자식 B로 이동, 재귀 - B, []
   왼쪽 자식 D로 이동, 재귀
   노드 D 값을 배열에 추가 - [D]
   오른쪽 자식 없음
	 노드 B 값을 배열에 추가 - [D, B]
	 오른쪽 자식 E로 이동, 재귀 -E, [D, B]
	 왼쪽 자식 없음
	 노드 E 값을 배열에 추가 - [D, B, E]
   오른쪽 자식 없음
   모든 하위 노드 처리 완료
3. 노드 A 값을 배열에 추가 - [D, B, E, A]
4. 오른쪽 자식 C로 이동, 재귀 - C, [D, B, E, A]
	 왼쪽 자식 없음
	 노드 C를 배열에 추가
   오른쪽 자식 없음
5. 모든 노드 처리 완료
6. 배열 반환
```

### 코드로 알아보기

```tsx
function **traverseInOrder**(node, list) {
	if (node.left) {
		traverseInOrder(node.left, list);
		// 왼쪽 자식이 있다면 재귀
	}

	**list.push(node.value)**; // 방문

	if (node.right) {
		traverseInOrder(node.right, list);
		// 오른쪽 자식이 있다면 재귀
	}
	return list;
}
```

> 📎 이진 트리 용어 🤔
>
> **현재 노드**: 현재 처리 중인 노드
>
> **재귀 호출**: 왼쪽 자식이 있는 경우 해당 자식 노드에 대해 **`traverseInOrder`** 함수를 재귀적으로 호출합니다. 재귀 호출이 없는 경우는 다음 단계로 진행합니다.
>
> **처리된 값**: 현재 노드에서 처리된 값이 있을 경우 해당 값을 표시합니다. 보통은 재귀 호출이 완료된 후에 값을 처리합니다.
>
> **결과 리스트**: 현재까지 처리된 값들이 모인 리스트를 나타냅니다. 각 단계에서 처리된 값을 결과 리스트에 추가하거나 조작합니다.

---

## 2. Preorder, 전위 순회

```
- 루트 ⇒ 왼쪽 서브트리 ⇒ 오른쪽 서브트리
```

### 트리로 알아보기

```
        A
       / \
      B   C
     / \
    D   E

Preorder: A - B - D - E - C

1. 함수 호출 - A(root), []
2. 노드 A값을 배열에 추가 -> [A]
3. 왼쪽 자식 B로 이동, 재귀 호출 - B, [A]
   노드 B값을 배열에 추가 -> [A, B]
   왼쪽 자식 D로 이동, 재귀 호출 - D, [A, B]
   노드 D값을 배열에 추가 -> [A, B, D]
   오른쪽 자식 없음
   하위 노드 처리 완료
   노드 E로 이동, 재귀 호출 - E, [A, B, D]
   노드 E값을 배열에 추가 -> [A, B, D, E]
	 왼쪽 자식 없음
   오른쪽 자식 없음
	 모든 하위 노드 처리 완료
4. 노드 C로 이동, 재귀 호출 - C, [A, B, D, E]
   노드 C값을 배열에 추가 -> [A, B, D, E, C]
	 왼쪽 자식 없음
   오른쪽 자식 없음
5. 모든 노드 처리 완료
6. 배열 반환
```

### 코드로 알아보기

```tsx
function **traversePreOrder**(node, list) {
	**list.push(node.value**); // 먼저 방문

	if (node.left) {
		traverseInOrder(node.left, list);
		// 왼쪽 자식이 있다면 재귀
	}

	if (node.right) {
		traverseInOrder(node.right, list);
		// 오른쪽 자식이 있다면 재귀
	}
	return list;
}
```

---

## Postorder, 후위 순회

```
- 왼쪽 서브트리 ⇒ 오른쪽 서브트리 ⇒ 루트
```

### 트리로 알아보기

```
        A
       / \
      B   C
     / \
    D   E

Postorder: D - E - B - C - A

1. 함수 호출 - A(root), []
   왼쪽 자식 B로 이동, 재귀 호출 - B, []
   왼쪽 자식 D로 이동, 재귀 호출 - D, []
	 왼쪽 자식 없음
	 오른쪽 자식 없음
	 노드 D값을 배열에 추가 - [D]
   하위 노드 없음
   노드 E로 이동, 재귀 호출 - E, [D]
	 왼쪽 자식 없음
	 오른쪽 자식 없음
	 노드 E값을 배열에 추가 - [D, E]
   하위 노드 없음
2. 노드 B로 이동, 재귀 호출 - B, [D, E]
	 왼쪽 자식 없음
	 오른쪽 자식 없음
	 노드 B값을 배열에 추가 - [D, E, B]
   하위 노드 없음
3. 노드 C로 이동, 재귀 호출 - C, [D, E, B]
	 왼쪽 자식 없음
	 오른쪽 자식 없음
	 노드 C값을 배열에 추가 - [D, E, B, C]
   하위 노드 없음
4. 노드 A로 이동
	 노드 A값을 배열에 추가 - [D, E, B, C, A]
5. 모든 노드 처리 완료
6. 최종 결과인 리스트 [D, E, B, C, A]를 반환
```

### 트리로 알아보기

```tsx
function **traversePostOrder**(node, list) {
	if (node.left) {
		traverseInOrder(node.left, list);
		// 왼쪽 자식이 있다면 재귀
	}

	if (node.right) {
		traverseInOrder(node.right, list);
		// 오른쪽 자식이 있다면 재귀
	}

	**list.push(node.value);** // 마지막으로 방문

	return list;
}
```

---

NextPage
