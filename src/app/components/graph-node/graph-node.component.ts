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

  baseNode: BaseNode;

  @ViewChild('labelField')
  labelField : ElementRef;

  labelWidth: number = 0;
  labelHeight: number = 0;

  ctrlDim: Dimension = {width: 0, height: 0};

  subgraph: Graph = undefined;

  isExpanded: Boolean = true;

  subgraphContainer = {
    paddingY: 10,
    paddingX: 10
  }

  @Output()
  nodeChange: EventEmitter<BaseNode> = new EventEmitter<BaseNode>();

  constructor() { }

  ngAfterViewInit(): void {
    // Measuring the dimensions of the label field needs to be done here because the DOM is not ready
    // when ngOnInit runs. Use the timeout in order to prevent the "Expression has changed after it
    // was checked" error (see https://blog.angular-university.io/angular-debugging/)
    setTimeout(() => {
      let labelFieldBBox = this.labelField.nativeElement.getBBox();
      this.labelWidth = labelFieldBBox.width;
      this.labelHeight = labelFieldBBox.height;
      if(this.subgraph !== undefined) {
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
      this.subgraph = node.subgraph;
    }
  }

  setSubgraphNodeDimension() : void {
    this.baseNode.width = this.subgraph.width+2*this.subgraphContainer.paddingX;
    this.baseNode.height = this.subgraph.height+2*this.subgraphContainer.paddingY+this.labelHeight;
  }

  setDefaultNodeDimension() : void {
    this.baseNode.width = 150;
    this.baseNode.height = 75;
  }

  onControlDimChanged(ctrlDim: Dimension) : void {
    setTimeout(() => {
      this.ctrlDim = ctrlDim;
    });
  }

  onExpansionStateChanged(state: Boolean) : void {
    this.isExpanded = state;
    if(this.isExpanded) {
      this.setSubgraphNodeDimension();
    } else {
      this.setDefaultNodeDimension();
    }
    this.nodeChange.emit(this.baseNode);
  }
}
