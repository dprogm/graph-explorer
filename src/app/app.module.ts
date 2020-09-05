import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphNodeComponent } from './components/graph-node/graph-node.component';
import { GraphNodeControlsComponent } from './components/graph-node-controls/graph-node-controls.component';
import { GraphBoardComponent } from './components/graph-board/graph-board.component';
import { GraphMinimapComponent } from './components/graph-minimap/graph-minimap.component';
import { GraphCoreComponent } from './components/graph-core/graph-core.component';

import { GRAPH_CORE_COMPONENT_TOKEN, GRAPH_NODE_COMPONENT_TOKEN } from './tokens'

@NgModule({
  declarations: [
    AppComponent,
    GraphNodeComponent,
    GraphNodeControlsComponent,
    GraphBoardComponent,
    GraphMinimapComponent,
    GraphCoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: GRAPH_NODE_COMPONENT_TOKEN, useValue: GraphNodeComponent },
    { provide: GRAPH_CORE_COMPONENT_TOKEN, useValue: GraphCoreComponent }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
