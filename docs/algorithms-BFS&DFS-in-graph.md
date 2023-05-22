# 그래프와 BFS, DFS

- 그래프를 직접 그려볼 수 있는 사이트

[Graph Traversal (Depth/Breadth First Search) - VisuAlgo](https://visualgo.net/en/dfsbfs)

## DFS🏃‍♀️

- source에서 가장 가까운 곳부터 방문 ⇒ 점점 멀리 이동

  - 자식을 확인하고, 없다면 더 먼 곳 방문
    ![chrome-capture-2023-4-22-dfs](https://github.com/dusunax/javascript/assets/94776135/f95cad11-7bb8-43bc-ba84-1b6fdd91a6cd)

- 타겟이 존재하는지 확인합니다.
- 깊은 곳까지 빠르게 이동 합니다.
  - 그래프가 깊어질수록 느려짐
- ex) 미로 풀이 (가장 짧은 길을 알 수 없음)

## BFS🏃‍♂️

- source에서 가장 가까운 곳을 방문하고 다시 돌아옴

  - parent node와 children node를 트랙킹
    ![chrome-capture-2023-4-22-bfs](https://github.com/dusunax/javascript/assets/94776135/556ab16b-9d77-40ed-b827-3578ce2a587d)


- 가장 가까운 길을 확인합니다.
- 최단 거리를 구합니다.
  - recommendation engines, peer to peer networks
- ex) 구글 맵, 페이스북 친구 추천

---

[NextPage](https://github.com/dusunax/javascript/blob/main/docs/algorithms-shortest-path.md)
