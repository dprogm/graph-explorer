export interface BaseNode {
  data: any;
  label: string;
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface SubgraphNode extends BaseNode {
  subgraph: Graph;
}

export type GraphNode = BaseNode | SubgraphNode;

export function isSubgraphNode(node: GraphNode): node is SubgraphNode {
  return (node as SubgraphNode).subgraph !== undefined;
}

export interface Point {
  x: number;
  y: number;
}

export interface Dimension {
  width: number;
  height: number;
}

export interface Edge {
  sourceId: number;
  targetId: number;
  points?: Point[];
}

export interface Graph {
  nodes: GraphNode[];
  edges: Edge[];
  width: number;
  height: number;
  isExpanded: Boolean;
}