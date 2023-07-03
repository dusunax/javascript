# Shortest Path : Bellman-Ford & Dijkstra (feat. 시간 복잡도, Bellman-Ford 예제)

> **BFS is not enough : Real edges has weights**

- 두 노드 사이의 가장 짧은 거리를 구하는 방법에는 BFS, Bellman-Ford 벨만 포드, Dijkstra 다익스트라 알고리즘이 있습니다.

### 0. BFS, Breath First Search

- 최단 거리 우선 탐색
- edge의 가중치를 계산할 수 없음

### 1. Bellman-Ford algorithm

- 음수를 처리할 수 있음

### 2. Dijkstra

- 벨만 포드보다 빠름
- 음수를 처리할 수 없음

| 알고리즘             | 최단 경로 탐색 방법        | 음수 가중치 처리      | 시간 복잡도 (최악의 경우) |
| -------------------- | -------------------------- | --------------------- | ------------------------- |
| Dijkstra             | 가장 작은 가중치 우선 탐색 | 음수 가중치 처리 불가 | O((V + E) log V)          |
| Bellman-Ford         | 모든 간선을 순회하며 탐색  | 음수 가중치 처리 가능 | O(VE)                     |
| BFS (너비 우선 탐색) | 최단 거리 우선 탐색        | 음수 가중치 처리 불가 | O(V + E)                  |

## 시간 복잡도

> 시간 복잡도는 알고리즘의 실행 속도를 나타내는 지표입니다.
> 시간 복잡도가 작을수록 알고리즘의 실행 속도가 빠릅니다

### O, n, V, E란?

| 용어                                                                         | 영어                      | 설명                                                               | 사용                 |
| ---------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------ | -------------------- |
| O                                                                            | Order                     | 알고리즘의 시간 복잡도를 나타내는 표기법                           |
| 실행 시간이 입력 크기에 대해 어떻게 증가하는지를 표현 (최악의 경우를 나타냄) | 알고리즘 시간 복잡도 표기 |
| n                                                                            | Input Size                | 알고리즘의 입력 크기를 나타내는 변수                               | 알고리즘의 입력 크기 |
| V                                                                            | Vertex                    | 그래프에서의 정점(Vertex)의 수, 노드 또는 꼭짓점                   | 그래프의 요소        |
| E                                                                            | Edge                      | 그래프에서의 간선(Edge)의 수, 그래프의 Vertex 정점들을 연결하는 선 | 그래프의 요소        |

### 시간 복잡도의 예시 🤔

| 표기법     | 읽는 법                  | 용어           | 영어 발음         | 설명                                              |
| ---------- | ------------------------ | -------------- | ----------------- | ------------------------------------------------- |
| O(1)       | O of one                 | 상수 시간      | constant time     | 입력 크기에 무관한 실행 시간                      |
| O(log n)   | O of log n               | 로그 시간      | logarithmic time  | 로그 베이스로 입력 크기에 비례하는 실행 시간      |
| O(n)       | O of n                   | 선형 시간      | linear time       | 입력 크기에 직선적으로 비례하는 실행 시간         |
| O(n log n) | O of n log n             | 선형 로그 시간 | linearithmic time | 입력 크기와 로그 베이스의 곱에 비례하는 실행 시간 |
| O(n^2)     | O of n squared           | 이차 시간      | quadratic time    | 입력 크기의 제곱에 비례하는 실행 시간             |
| O(n^3)     | O of n cubed             | 삼차 시간      | cubic time        | 입력 크기의 세제곱에 비례하는 실행 시간           |
| O(2^n)     | O of 2 to the power of n | 지수 시간      | exponential time  | 2의 입력 크기 제곱에 비례하는 실행 시간           |
| O(n!)      | O of n factorial         | 팩토리얼 시간  | factorial time    | 입력 크기의 팩토리얼에 비례하는 실행 시간         |

### Dijkstra vs Bellman-Ford vs BFS 🔥

1. Dijkstra 알고리즘:
   - 시간 복잡도: O((V + E) log V)
   - Dijkstra 알고리즘은 가장 작은 가중치를 우선으로 선택하여 최단 경로를 찾습니다. 시간 복잡도 O((V + E) log V)는 정점의 수 V와 간선의 수 E에 따라 선형적으로 증가합니다. 알고리즘이 정점을 탐색하고 가중치를 업데이트하는 과정에서 우선순위 큐를 사용하여 최소값을 추출하기 때문에 log V의 시간 복잡도가 추가됩니다.
2. Bellman-Ford 알고리즘:
   - 시간 복잡도: O(VE)
   - Bellman-Ford 알고리즘은 모든 간선을 순회하며 최단 경로를 탐색합니다. 시간 복잡도 O(VE)는 정점의 수 V와 간선의 수 E에 비례하여 증가합니다. 알고리즘이 간선을 순회하며 최단 거리를 갱신하는 과정을 V-1번 반복하기 때문에 VE의 시간 복잡도가 발생합니다.
3. BFS (너비 우선 탐색):
   - 시간 복잡도: O(V + E)
   - BFS 알고리즘은 최단 거리 우선으로 탐색하는 방식입니다. 시간 복잡도 O(V + E)는 정점의 수 V와 간선의 수 E에 선형적으로 증가합니다. 알고리즘이 너비 우선으로 정점을 탐색하는 과정에서 모든 정점과 간선을 한 번씩만 방문하므로 V + E의 시간 복잡도가 필요합니다.

<aside>
⏰ Dijkstra 알고리즘은 가장 빠르지만, 음수 가중치를 처리할 수 없는 단점이 있고, 
Bellman-Ford 알고리즘은 음수 가중치를 처리할 수 있지만 실행 속도가 느린 편입니다. 
BFS는 가중치를 처리할 수 없지만, 정점과 간선의 수에 비례하여 실행 속도가 증가합니다.

</aside>

## bellman-Ford Algorithm

- 벨만 포드 - 자바스크립트 예시 확인하기 + 주석 달기

  - [https://codesandbox.io/s/bellman-ford-algorithms-yeje-juseog-ul7o81?file=/src/index.js](https://codesandbox.io/s/bellman-ford-algorithms-yeje-juseog-ul7o81?file=/src/index.js)

  ```tsx
  // 그래프의 간선을 표현하는 클래스
  class Edge {
    constructor(source, destination, weight) {
  		// 현재 간선의 출발 정점
      this.source = source;
  		// 현재 간선의 도착 정점
      this.destination = destination;
  		// 가중치
      this.weight = weight;
    }
  }

  // 벨만 포드 알고리즘 함수
  function bellmanFord(graph, start) {
    const numVertices = graph.length; // 그래프의 길이
  	const distances = new Array(numVertices).fill(Infinity); // 최단 거리를 저장하기 위한 배열 초기화

    distances[start] = 0;

    // 시작 정점부터 (정점의 개수 - 1)번 반복
    for (let i = 0; i < numVertices - 1; i++) {
      // 이중 for문으로 그래프의 모든 간선을 탐색
  		// 시작 정점으로부터 다른 정점까지의 최단 거리를 차례대로 계산
      for (let j = 0; j < graph.length; j++) {
        const edge = graph[j];
        const { source, destination, weight } = edge;

        // 현재 간선의 출발 정점을 거쳐 도착 정점까지의 거리를 계산하여 최소값으로 갱신
  			// [간선의 가중치]
        if (distances[source] + weight < distances[destination]) {
  				// 현재까지 알려진 최단 거리보다 더 짧은 경로를 찾았을 때 해당 정점까지의 거리를 갱신하는 작업
          distances[destination] = distances[source] + weight
        }
  			// 알고리즘이 점진적으로 최단 거리를 업데이트
      }
  		// 따라서 distances[destination]는 최단 경로  }

    // 음수 사이클 검사
    for (let i = 0; i < graph.length; i++) {
      const edge = graph[i];
      const { source, destination, weight } = edge;

      // 음수 사이클이 존재하면 최단 거리가 계속해서 갱신
      if (distances[source] + weight < distances[destination]) {
        console.log("음수 사이클이 존재합니다.");
        return;
      }
    }

    return distances; // 최단 거리 배열을 반환
  }

  // 그래프 생성 및 예시 실행
  const graph = [
    new Edge(0, 1, 4),
    new Edge(0, 2, 3),
    new Edge(1, 3, 2),
    new Edge(1, 2, -5), // 음수 가중치 예시
    new Edge(2, 4, 1),
    new Edge(3, 4, 4)
  ]

  const startVertex = 0;
  const shortestDistances = bellmanFord(graph, startVertex);
  console.log("최단 거리 배열:", shortestDistances); // 최단 거리 배열: [0, 4, 3, 5, 6]
  ```

---

Next
