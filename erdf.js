/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = {};

  for (const [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }

  for (const key in graph) {
    graph[key].sort().reverse(); // to를 lexcial order로 정렬
  }

  const itinerary = [];

  function dfs(airport) {
    console.log(graph);
    while (graph[airport] && graph[airport].lenth > 0) {
      dfs(graph[airport].pop());
    }
    itinerary.push(airport);
  }
  dfs("JFK");

  return itinerary.reverse();
};
