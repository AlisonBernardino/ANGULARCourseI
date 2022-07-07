import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralElementComponent } from './integral-element.component';

describe('IntegralElementComponent', () => {
  let component: IntegralElementComponent;
  let fixture: ComponentFixture<IntegralElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegralElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegralElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
