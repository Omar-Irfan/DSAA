//Edge List
const graph = [[0,2], [2,3],[2,1],[1,3]]
//List of connections between nodes

//Adjacent List
const graph = [[2],[2,3],[0,1,3],[1,2]]
//index is node, value inside is the conncetion for ex 0 is connected to 2, 1 is connected to 2 and 3 etc
//can be done using objects

//Adjacent Matrix
const graph = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
]

//gonna have 0 and 1s to indicated connectioons, 0 means no 1 means yes
//first line means node 0 (the index) is not connected to node 0, node 1 or node 3 but is connected to node 2

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {
    };
  }
  addVertex(node)  {
    this.adjacentList[node] = []
    this.numberOfNodes++
  }
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
}
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5