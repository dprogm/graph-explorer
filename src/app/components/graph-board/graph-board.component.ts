import { Component, OnInit } from '@angular/core';
import { Graph } from '@model/graph.interface'

@Component({
  selector: 'app-graph-board',
  templateUrl: './graph-board.component.svg',
  styleUrls: ['./graph-board.component.scss']
})
export class GraphBoardComponent implements OnInit {

  graph: Graph = {
    nodes: [
      {
        data: null,
        label: "Node1",
        id: 1,
        x: 0,
        y: 0,
        width: 150,
        height: 75
      },
      {
        data: null,
        label: "Node2",
        id: 2,
        x: 0,
        y: 0,
        width: 150,
        height: 75
      },
      {
        data: null,
        label: "Node3",
        id: 3,
        x: 0,
        y: 0,
        width: 150,
        height: 75
      },
      {
        data: null,
        label: "Node4",
        id: 4,
        x: 0,
        y: 0,
        width: 150,
        height: 75
      },
      {
        data: null,
        label: "Node5",
        id: 5,
        x: 0,
        y: 0,
        width: 150,
        height: 75
      },
      {
        data: null,
        label: "Node6",
        id: 6,
        x: 0,
        y: 0,
        width: 150,
        height: 75
      },
      {
        data: null,
        label: "Node7",
        id: 7,
        x: 0,
        y: 0,
        width: 150,
        height: 75,
        subgraph: {
          nodes: [
            {
              data: null,
              label: "Node1",
              id: 1,
              x: 0,
              y: 0,
              width: 150,
              height: 75,
              subgraph: {
                nodes: [
                  {
                    data: null,
                    label: "Node1",
                    id: 1,
                    x: 0,
                    y: 0,
                    width: 150,
                    height: 75
                  },
                  {
                    data: null,
                    label: "Node2",
                    id: 2,
                    x: 0,
                    y: 0,
                    width: 150,
                    height: 75
                  },
                  {
                    data: null,
                    label: "Node3",
                    id: 3,
                    x: 0,
                    y: 0,
                    width: 150,
                    height: 75
                  }
                ],
                edges: [
                  {
                    sourceId: 1,
                    targetId: 2
                  },
                  {
                    sourceId: 2,
                    targetId: 3
                  },
                  {
                    sourceId: 1,
                    targetId: 3
                  }
                ],
                width: 0,
                height: 0,
                isExpanded: true
              }
            },
            {
              data: null,
              label: "Node2",
              id: 2,
              x: 0,
              y: 0,
              width: 150,
              height: 75
            },
            {
              data: null,
              label: "Node3",
              id: 3,
              x: 0,
              y: 0,
              width: 150,
              height: 75
            }
          ],
          edges: [
            {
              sourceId: 1,
              targetId: 2
            },
            {
              sourceId: 2,
              targetId: 3
            },
            {
              sourceId: 1,
              targetId: 3
            }
          ],
          width: 0,
          height: 0,
          isExpanded: true
        }
      }
    ],
    edges: [
      {
        sourceId: 1,
        targetId: 2
      },
      {
        sourceId: 1,
        targetId: 3
      },
      {
        sourceId: 2,
        targetId: 4
      },
      {
        sourceId: 3,
        targetId: 4
      },
      {
        sourceId: 1,
        targetId: 4
      },
      {
        sourceId: 3,
        targetId: 5
      },
      {
        sourceId: 4,
        targetId: 6
      },
      {
        sourceId: 5,
        targetId: 6
      },
      {
        sourceId: 1,
        targetId: 6
      },
      {
        sourceId: 1,
        targetId: 7
      }
    ],
    width: 0,
    height: 0,
    isExpanded: true
  }

  constructor() { }

  ngOnInit(): void {
    this.graph.nodes[0]
  }

}
