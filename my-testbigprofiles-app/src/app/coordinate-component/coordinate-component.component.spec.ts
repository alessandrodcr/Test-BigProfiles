import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateComponentComponent } from './coordinate-component.component';

describe('CoordinateComponentComponent', () => {
  let component: CoordinateComponentComponent;
  let fixture: ComponentFixture<CoordinateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
