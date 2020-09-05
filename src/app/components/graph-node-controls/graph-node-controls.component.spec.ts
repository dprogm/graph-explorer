import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNodeControlsComponent } from './graph-node-controls.component';

describe('GraphNodeControlsComponent', () => {
  let component: GraphNodeControlsComponent;
  let fixture: ComponentFixture<GraphNodeControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphNodeControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphNodeControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
