import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Dimension } from '@model/graph.interface'

@Component({
  selector: '[app-graph-node-controls]',
  templateUrl: './graph-node-controls.component.svg',
  styleUrls: ['./graph-node-controls.component.scss']
})
export class GraphNodeControlsComponent implements OnInit, AfterViewInit {

  @ViewChild('nodeControls')
  nodeControls : ElementRef;
  @Output()
  controlDimChange: EventEmitter<Dimension> = new EventEmitter<Dimension>();
  @Output()
  expansionStateChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  isExpanded: Boolean = true;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() : void {
    let nodeControlsBBox = this.nodeControls.nativeElement.getBBox();
    console.log('Node Controls', nodeControlsBBox);
    this.controlDimChange.emit({
      width: nodeControlsBBox.width,
      height: nodeControlsBBox.height});
  }

  toggleExpansionState() : void {
    this.isExpanded = !this.isExpanded;
    console.log("State changed", this.isExpanded);
    this.expansionStateChange.emit(this.isExpanded);
  }
}
