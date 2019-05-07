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

  getEdge(graph, array) {
    let price;
    if(!graph.adjacencyList[arr[0]){
      return 'City is not present in the graph';
    }
    for( let i = 0 ; i < array.length-1 ; i++) {
      if(graph.adjacencyList[i].value.includes[array[i+1]]){
        price= price + graph.adjacencyList[i].weight.value;
      } else {
        return 'Unable to reach desired destination'
      }
      return `Congratulations! Your trip is possible. It will cost ${price} dollars.`
    }
  }
}

//make a graph
const graph = new Graph();
let SEA = graph.addVertex('Seattle');
let NYC = graph.addVertex('New York');
let ORD = graph.addVertex('Chicago');
let MIA = graph.addVertex('Miami');

let multiStopTrip = [SEA, ORD, NYC, MIA];

graph.addUndirectedEdge(SEA,ORD,100);
graph.addUndirectedEdge(ORD,NYC,300);
graph.addUndirectedEdge(NYC,MIA,500);
graph.addUndirectedEdge(SEA,MIA,900);

graph.print();

// console.log(graph.getAllVertices());
// console.log(graph.getAllVertices()[0].value, 'what is this?');
console.log(graph.adjacencyList, 'the list'); 

// getEdge(graph, multiStopTrip);

module.exports = { Graph, Edge, Vertex };


