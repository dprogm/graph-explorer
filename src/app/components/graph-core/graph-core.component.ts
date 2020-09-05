import { Component, OnInit, Input, Inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Graph, BaseNode, Edge } from '@model/graph.interface'
import * as dagre from 'dagre';

import { GRAPH_NODE_COMPONENT_TOKEN } from '../../tokens'

@Component({
  selector: '[app-graph-core]',
  templateUrl: './graph-core.component.svg',
  styleUrls: ['./graph-core.component.scss']
})
export class GraphCoreComponent implements OnInit, AfterViewInit {

  _graph: Graph;

  minX = Infinity;
  minY = Infinity;

  @ViewChild('graphRef')
  graphRef : ElementRef;

  constructor(@Inject(GRAPH_NODE_COMPONENT_TOKEN) private nodeComponent) { }

  ngAfterViewInit(): void {
    console.log(this.graphRef.nativeElement)
    setTimeout(() => {
      this.updateGraphDimension();
    });
  }

  ngOnInit(): void {
  }

  @Input()
  set graph(value: Graph) {
    this._graph = value;
    this.updateLayout();
  }

  updateGraphDimension() : void {
    console.log("Update dims")
    if(this.graphRef !== undefined) {
      let graphBBox = this.graphRef.nativeElement.getBBox();
      this._graph.width = graphBBox.width;
      this._graph.height = graphBBox.height;
    }
  }

  updateLayout() : void {
    let graph = new dagre.graphlib.Graph();
    graph.setGraph({});
    graph.setDefaultEdgeLabel(function() { return {}; });
    for(let node of this._graph.nodes) {
      graph.setNode(node.id.toString(), {
        label: node.label,
        width: node.width,
        height: node.height })
    }
    for(let edge of this._graph.edges) {
      graph.setEdge(edge.sourceId.toString(), edge.targetId.toString())
    }
    dagre.layout(graph);

    for(let nodeId of graph.nodes()) {
      let dagreNode = graph.node(nodeId);
      for(let node of this._graph.nodes) {
        let parsedId = parseInt(nodeId);
        if(parsedId == node.id) {
          node.x = dagreNode.x;
          node.y = dagreNode.y;
          if(node.x < this.minX) {
            this.minX = node.x;
          }
          if(node.y < this.minY) {
            this.minY = node.y;
          }
        }
      }
      for(let dagreEdge of graph.edges()) {
        for(let edge of this._graph.edges) {
          if(edge.sourceId == parseInt(dagreEdge.v) &&
              edge.targetId == parseInt(dagreEdge.w) ) {
            edge.points = graph.edge(dagreEdge).points;
            break;
          }
        }
      }
    }
  }

  onNodeChanged(node: BaseNode) {
    this.updateLayout();
  }

  buildPath(edge: Edge) {
    let path = "";
    let ctrlPoints = edge.points;
    // There is at least start and end
    if(ctrlPoints.length >= 2) {
      path += `M ${ctrlPoints[0].x} ${ctrlPoints[0].y}`;
      for(let idx=1; idx<ctrlPoints.length; ++idx) {
        path += ` L ${ctrlPoints[idx].x} ${ctrlPoints[idx].y }`;
      }
    }
    return path;
  }
}
