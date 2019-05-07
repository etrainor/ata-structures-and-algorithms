'use strict';

let { Graph, Edge, Vertex } = require('../graph.js');

// const theGraph = new Graph();
// let color1 = theGraph.addVertex('red');
// let color2 = theGraph.addVertex('blue');
// let color3 = theGraph.addVertex('green');
// let color4 = theGraph.addVertex('purple');
// let color5 = theGraph.addVertex('yellow');
// let color6 = theGraph.addVertex('orange');

// theGraph.addUndirectedEdge(color1,color2,10);
// theGraph.addUndirectedEdge(color2,color3,78);
// theGraph.addUndirectedEdge(color3,color4,43);
// theGraph.addUndirectedEdge(color4,color5,92);
// theGraph.addUndirectedEdge(color6,color1,8);

// theGraph.print();

// console.log(theGraph.getAllVertices());

describe('graph.js', () => {
  it('Node can be successfully added to the graph', () => {
    let graph = new Graph();
    graph.addVertex('red');
    let result = graph.getAllVertices();
    expect(result).toEqual([{'value': 'red'}]);
  });
  xit('An edge can be successfully added to the graph', () => {
    let graph = new Graph();
    let color1 = graph.addVertex('red');
    let color2 = graph.addVertex('blue');
    graph.addUndirectedEdge(color1,color2,10);
    let result = graph.print();
    console.log(graph);
    console.log(graph.print());
    expect(result).toEqual('stuff');
  });
  it('An edge can be successfully added to the graph', () => {

  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {

  });
  it('All appropriate neighbors can be retrieved from the graph', () => {

  });
  it('Neighbors are returned with the weight between nodes included', () => {

  });
  it('The proper size is returned, representing the number of nodes in the graph', () => {

  });
  it('A graph with only one node and edge can be properly returned', () => {

  });
  it('An empty graph properly returns null', () => {

  });
});
