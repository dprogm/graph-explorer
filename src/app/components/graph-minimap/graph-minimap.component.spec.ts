import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphMinimapComponent } from './graph-minimap.component';

describe('GraphMinimapComponent', () => {
  let component: GraphMinimapComponent;
  let fixture: ComponentFixture<GraphMinimapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphMinimapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphMinimapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
