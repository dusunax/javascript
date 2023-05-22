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
        distances[destination] = distances[source] + weight;
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
}

// 그래프 생성 및 예시 실행
const graph = [
  new Edge(0, 1, 4),
  new Edge(0, 2, 3),
  new Edge(1, 3, 2),
  new Edge(1, 2, -5), // 음수 가중치 예시
  new Edge(2, 4, 1),
  new Edge(3, 4, 4),
];

const startVertex = 0;
const shortestDistances = bellmanFord(graph, startVertex);
console.log("최단 거리 배열:", shortestDistances); // 최단 거리 배열: [0, 4, -1, 6, 0, Infinity];

document.getElementById("bellman-ford").innerHTML = `
<section>
  <h1>⏱ bellman-ford algorithms ⏱</h1>
  <div>
    <h4>예시 그래프:</h4>

    <pre style="background-color: #eee; padding: 1rem; max-width: 400px">
const graph = [
  new Edge(0, 1, 4),
  new Edge(0, 2, 3),
  new Edge(1, 3, 2),
  new Edge(1, 2, -5), // 음수 가중치 예시
  new Edge(2, 4, 1),
  new Edge(3, 4, 4)
]; </pre>

    <h3>
      최단 거리 배열: [${shortestDistances.join(", ")}]
    </h3>
  </div>
</section>
`;
