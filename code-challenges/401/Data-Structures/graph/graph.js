'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph { //will give the size is graph.size is called.
  constructor() {
    this.adjacencyList = new Map();
    this.size = 0;
  }

  addVertex(value) { //Add Node
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this.size ++;
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    let edges = this.adjacencyList.get(startVertex);
    edges.push(new Edge(endVertex, weight));
  }

  addUndirectedEdge(start, end, weight) {
    this.addDirectedEdge(start, end, weight);
    this.addDirectedEdge(end, start, weight);
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getAllVertices() { //will return the size of the graph
    let allVert = [];
    let values = this.adjacencyList.keys();
    for(let value of values) {
      allVert.push(value);
    }
    // return [...this.adjacencyList.keys()]; this is the same thingv :)
    return allVert;
  }

  print() {
    //iterators
    for(const[key, value] of this.adjacencyList) {
      console.log(key, value);
    }
  }
}

//make a graph
const graph = new Graph();
let color1 = graph.addVertex('red');
let color2 = graph.addVertex('blue');
let color3 = graph.addVertex('green');
let color4 = graph.addVertex('purple');
let color5 = graph.addVertex('yellow');
let color6 = graph.addVertex('orange');

graph.addUndirectedEdge(color1,color6,10);
graph.addUndirectedEdge(color2,color3,78);
graph.addUndirectedEdge(color3,color4,43);
graph.addUndirectedEdge(color4,color5,92);
graph.addUndirectedEdge(color6,color1,8);

graph.print();

console.log(graph.getAllVertices());

module.exports = { Graph, Edge, Vertex };
