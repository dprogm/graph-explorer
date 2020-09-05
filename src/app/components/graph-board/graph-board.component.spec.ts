import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBoardComponent } from './graph-board.component';

describe('GraphBoardComponent', () => {
  let component: GraphBoardComponent;
  let fixture: ComponentFixture<GraphBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
