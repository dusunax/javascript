## BFS & DFS : Triversal technique

### 1. BFS, Breadth First Search

| good | shortest path, closer nodes |
| ---- | --------------------------- |
| bad  | more memory                 |

### 2. DFS, Depth for Search

| good | less memory, does path exist |
| ---- | ---------------------------- |
| bad  | can get slow                 |

## BFS vs DFS

|                | BFS                         | DFS                        |
| -------------- | --------------------------- | -------------------------- |
| 상황           | 최단 경로, 가장 가까운 노드 | 길이 존재하는지 여부       |
| 구현 방식      | 큐(queue)                   | 스택(stack) 또는 재귀 함수 |
| 탐색 순서      | 너비 우선                   | 깊이 우선                  |
| 탐색 방향      | 수평                        | 수직                       |
| 최단 경로 탐색 | 가능                        | 불가능                     |
| 공간 복잡도    | O(V) (V: 노드 수)           | O(V) (V: 노드 수)          |
| 시간 복잡도    | O(V + E) (E: 간선 수)       | O(V + E) (E: 간선 수)      |

## Quiz

| quiz                                                         | reply | answer | explain                                     |
| ------------------------------------------------------------ | ----- | ------ | ------------------------------------------- |
| If you know a solution is not far from the root of the tree. | BFS   | BFS    |                                             |
| If the tree is very deep and solutions are rare.             | DFS   | BFS    | DFS will take long if the tree is very deep |
| If the tree is very wide.                                    | BFS   | DFS    | BFS will need too much memory               |
| If solutions are frequent but located deep in the tree.      | DFS   | DFS    |                                             |
| determining whether a path exists between two roads.         | DFS   | DFS    |                                             |
| Finding the shortest path.                                   | BFS   | BFS    |                                             |

---

[NextPage](https://github.com/dusunax/javascript/blob/main/docs/algorithms-BFS&DFS-01.md)
