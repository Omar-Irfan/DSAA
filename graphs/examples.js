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