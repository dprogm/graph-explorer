import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input()
  expansionState: Boolean = true;
  // Height of the control buttons (=radius)
  controlsHeight: number = 10;
  // Stroke width of the control buttons
  strokeWidth: number = 2;
  // Diameter of the button icons
  iconSize: number = 10;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() : void {
    console.log("State init", this.expansionState);
    let nodeControlsBBox = this.nodeControls.nativeElement.getBBox();
    this.controlDimChange.emit({
      width: nodeControlsBBox.width,
      height: nodeControlsBBox.height});
  }

  toggleExpansionState() : void {
    this.expansionState = !this.expansionState;
    console.log("State changed", this.expansionState);
    this.expansionStateChange.emit(this.expansionState);
  }
}
