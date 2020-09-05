import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCoreComponent } from './graph-core.component';

describe('GraphCoreComponent', () => {
  let component: GraphCoreComponent;
  let fixture: ComponentFixture<GraphCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
