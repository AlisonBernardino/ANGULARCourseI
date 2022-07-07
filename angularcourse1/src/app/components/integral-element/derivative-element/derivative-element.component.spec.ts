import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeElementComponent } from './derivative-element.component';

describe('DerivativeElementComponent', () => {
  let component: DerivativeElementComponent;
  let fixture: ComponentFixture<DerivativeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerivativeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerivativeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
