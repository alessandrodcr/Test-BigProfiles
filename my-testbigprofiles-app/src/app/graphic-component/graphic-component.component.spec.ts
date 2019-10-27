import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicComponentComponent } from './graphic-component.component';

describe('GraphicComponentComponent', () => {
  let component: GraphicComponentComponent;
  let fixture: ComponentFixture<GraphicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
