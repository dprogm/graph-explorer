import { InjectionToken } from '@angular/core';

// Required because we have a circular dependency:
// Core -> Node -> Core
// See https://stackoverflow.com/questions/62695095/angular-circular-dependency-components-call-each-other
export const GRAPH_NODE_COMPONENT_TOKEN = new InjectionToken<any>('GraphNodeComponent');
export const GRAPH_CORE_COMPONENT_TOKEN = new InjectionToken<any>('GraphCoreComponent');