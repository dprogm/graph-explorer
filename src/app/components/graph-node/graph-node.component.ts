import {
  Component,
  OnInit, Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter } from '@angular/core';

import {
  GraphNode,
  BaseNode,
  Dimension,
  isSubgraphNode,
  Graph } from '@model/graph.interface'

@Component({
  selector: '[app-graph-node]',
  templateUrl: './graph-node.component.svg',
  styleUrls: ['./graph-node.component.scss']
})
export class GraphNodeComponent implements OnInit, AfterViewInit {

  @ViewChild('labelField')
  labelField : ElementRef;
  @ViewChild('nodeBody')
  nodeBody : ElementRef;
  @Output()
  nodeChange: EventEmitter<BaseNode> = new EventEmitter<BaseNode>();

  labelWidth: number = 0;
  labelHeight: number = 0;
  baseNode: BaseNode;
  subgraph: Graph = undefined;

  nodeProperties = {
    rx: 15,
    ry: 15
  }
  subgraphContainer = {
    paddingY: 15,
    paddingX: 15
  }
  graphControls = {
    dimension: {
      width: 0,
      height: 0
    },
    paddingY: 5,
    paddingX: 5
  }

  constructor() { }

  ngAfterViewInit(): void {
    // Measuring the dimensions of the label field needs to be done here because the DOM is not ready
    // when ngOnInit runs. Use the timeout in order to prevent the "Expression has changed after it
    // was checked" error (see https://blog.angular-university.io/angular-debugging/)
    setTimeout(() => {
      let labelFieldBBox = this.labelField.nativeElement.getBBox();
      this.labelWidth = labelFieldBBox.width;
      this.labelHeight = labelFieldBBox.height;
      if(this.subgraph !== undefined && this.subgraph.isExpanded) {
        this.setSubgraphNodeDimension();
        this.nodeChange.emit(this.baseNode);
      }
    });
  }

  ngOnInit(): void {
  }

  @Input()
  set node(node: GraphNode) {
    this.baseNode = node;
    if(isSubgraphNode(node)) {
      console.log(node.subgraph.isExpanded)
      this.subgraph = node.subgraph;
    }
  }

  changeSize(width, height) {
    this.baseNode.width = width;
    this.baseNode.height = height;
    this.nodeChange.emit(this.baseNode);
  }

  setSubgraphNodeDimension() : void {
    this.changeSize(this.subgraph.width+2*this.subgraphContainer.paddingX,
      this.subgraph.height+2*this.subgraphContainer.paddingY+this.labelHeight)
  }

  setDefaultNodeDimension() : void {
    this.changeSize(150, 75);
  }

  onControlDimChanged(ctrlDim: Dimension) : void {
    setTimeout(() => {
      this.graphControls.dimension = ctrlDim;
    });
  }

  onSubgraphChanged() : void {
    this.setSubgraphNodeDimension();
    this.nodeChange.emit(this.baseNode);
  }

  onExpansionStateChanged(state: Boolean) : void {
    this.subgraph.isExpanded = state;
    if(state) {
      this.setSubgraphNodeDimension();
    } else {
      this.setDefaultNodeDimension();
    }
    this.nodeChange.emit(this.baseNode);
  }
}
