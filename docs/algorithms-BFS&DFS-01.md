## BFS 구현하기 (feat. BST란?)

- [Data Structures: Trees-traversals] [https://replit.com/@aneagoie/Data-Structures-Trees-traversals-bfs#index.js](https://replit.com/@aneagoie/Data-Structures-Trees-traversals-bfs#index.js)

```tsx
Binary Search Tree, BST:
       A
     /   \
    B     C
   / \   / \
  D   E F   G

BFS: A - B - C - D - E - F - G

DFS: A - B - D - E - C - F - G
```

- `breadthFirstSearch()`

```tsx
breadthFirstSearch() {
	let currentNode = this.root; // 루트 노드
	let list = [];
	let queue = []; // 레벨을 트래킹
	queue.push(currentNode); // 큐에 루트 노드를 push

	while(queue.length > 0) { // 큐 배열 길이가 0 이상일 떄
		currentNode = queue.shift(); // 큐의 첫번째 아이템
		list.push(currentNode.value); // A로 시작

		if (currentNode.left) { // 왼쪽 자식을 선택
			queue.push(currentNode.left);
		}
		if (currentNode.right) { // 오른쪽 자식을 선택
			queue.push(currentNode.right);
		}
		return list;
	}
}
```

- `breathFirstSearchRecursive()`

```tsx
breadthFirstSearchRecursive(queue, list) { // queue와 list를 매개변수로 넘김, 아니라면 recursive 시 초기화
	if (!queue.length) { // 큐 배열 길이가 0이라면 얼리 리턴, 재귀 종료
		return list;
	}
	let currentNode = queue.shift();
	list.push(currentNode.value); // A로 시작

	if (currentNode.left) { // 왼쪽 자식을 선택
		queue.push(currentNode.left);
	}
	if (currentNode.right) { // 오른쪽 자식을 선택
		queue.push(currentNode.right);
	}

	return this.breadthFirstSearchRecursive(queue, list); // 재귀
}

breadthFirstSearch(tree.root, [])
```

## BST, Binary Search Tree, 이진 트리

- 바이너리 서치 트리(Binary Search Tree, BST)는 이진 트리(Binary Tree)의 한 종류로, 다음과 같은 속성을 갖습니다:

```
각 노드는 하나의 값과 왼쪽 서브트리와 오른쪽 서브트리를 가질 수 있습니다.
왼쪽 서브트리의 모든 노드의 값은 해당 노드의 값보다 작습니다.
오른쪽 서브트리의 모든 노드의 값은 해당 노드의 값보다 큽니다.
중복된 값을 가지는 노드는 존재하지 않습니다.
이러한 속성으로 인해 바이너리 서치 트리는 데이터를 효율적으로 탐색, 삽입, 삭제할 수 있는 자료구조입니다. 바이너리 서치 트리의 주요 특징은 다음과 같습니다:
```

- **탐색**: 트리의 루트부터 시작하여 값을 찾거나, 해당 값을 가진 노드가 없을 경우 이진 탐색을 통해 값을 찾습니다. 이진 탐색은 현재 노드의 값과 찾고자 하는 값을 비교하여 왼쪽 또는 오른쪽 서브트리로 이동하면서 탐색합니다. 이로 인해 탐색 시간은 O(log n)의 시간 복잡도를 가집니다.
- **삽입**: 트리에 새로운 값을 삽입할 때는 탐색을 통해 값을 삽입할 위치를 찾은 후에 해당 위치에 노드를 삽입합니다. 이때 삽입 위치는 적절한 값을 유지하기 위해 이진 탐색의 속성을 유지해야 합니다.
- **삭제**: 트리에서 값을 삭제할 때는 세 가지 경우를 고려해야 합니다. 첫째, 삭제할 노드가 단말 노드인 경우 해당 노드를 그냥 삭제합니다. 둘째, 삭제할 노드가 하나의 서브트리를 갖는 경우 삭제할 노드를 그 서브트리로 대체합니다. 셋째, 삭제할 노드가 두 개의 서브트리를 갖는 경우 삭제할 노드의 왼쪽 서브트리에서 가장 큰 값을 찾아 삭제할 노드로 대체하거나, 오른쪽 서브트리에서 가장 작은 값을 찾아 대체합니다.

## currentNode.left

- **`currentNode.left`**는 이진 트리에서 현재 노드(**`currentNode`**)의 왼쪽 자식 노드를 나타내는 링크나 포인터입니다.
  이 링크는 현재 노드와 왼쪽 자식 노드를 연결합니다. - 이진 트리의 각 노드는 최대 두 개의 자식을 가질 수 있으므로, **`currentNode.left`**는 왼쪽 자식 노드가 존재할 경우 해당 노드를 가리키는 링크입니다. 왼쪽 자식 노드가 없을 경우 **`currentNode.left`**는 보통 **`null`**이나 비어 있는 값을 가지게 됩니다. - 이 링크를 통해 왼쪽 자식 노드에 접근할 수 있으며, 왼쪽 자식 노드의 값이나 해당 자식 노드의 하위 자식 노드에 접근할 수도 있습니다. 이러한 접근을 통해 트리의 구조를 탐색하고, 원하는 작업을 수행할 수 있습니다.
- 아래는 이진 트리에서 **`currentNode.left`**를 시각적으로 표현한 예시입니다:

  ```
          A
         / \
        B   C
       / \
      D   E

  currentNode: B

        (currentNode)
           B
          / \
  (currentNode.left) D   E

  ```

  - 위 예시에서 **`currentNode`**가 B인 경우, **`currentNode.left`**는 D를 가리킵니다.
    따라서 **`currentNode.left`**를 통해 B의 왼쪽 자식 노드인 D에 접근할 수 있습니다.

## currentNode.right

- **`currentNode.right`**는 이진 트리에서 현재 노드(**`currentNode`**)의 오른쪽 자식 노드를 나타내는 링크나 포인터입니다. 이 링크는 현재 노드와 오른쪽 자식 노드를 연결합니다.
  - 이진 트리의 각 노드는 최대 두 개의 자식을 가질 수 있으므로, **`currentNode.right`**는 오른쪽 자식 노드가 존재할 경우 해당 노드를 가리키는 링크입니다. 오른쪽 자식 노드가 없을 경우 **`currentNode.right`**는 보통 **`null`**이나 비어 있는 값을 가지게 됩니다.
  - 이 링크를 통해 오른쪽 자식 노드에 접근할 수 있으며, 오른쪽 자식 노드의 값이나 해당 자식 노드의 하위 자식 노드에 접근할 수도 있습니다. 이러한 접근을 통해 트리의 구조를 탐색하고, 원하는 작업을 수행할 수 있습니다.
- 아래는 이진 트리에서 **`currentNode.right`**를 시각적으로 표현한 예시입니다:

  ```
          A
         / \
        B   C
       / \
      D   E

  currentNode: B

        (currentNode)
           B
          / \
         D   E
                \
                 (currentNode.right) E's right

  ```

  - 위 예시에서 **`currentNode`**가 B인 경우, **`currentNode.right`**는 E를 가리킵니다. 따라서 **`currentNode.right`**를 통해 B의 오른쪽 자식 노드인 E에 접근할 수 있습니다. 또한, E의 오른쪽 자식 노드인 E's right에도 **`currentNode.right.right`**를 통해 접근할 수 있습니다.

---

[NextPage](https://github.com/dusunax/javascript/blob/main/docs/algorithms-BFS&DFS-02.md)
