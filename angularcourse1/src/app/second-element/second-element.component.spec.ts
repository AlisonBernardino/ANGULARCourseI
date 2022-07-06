/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecondElementComponent } from './second-element.component';

describe('SecondElementComponent', () => {
  let component: SecondElementComponent;
  let fixture: ComponentFixture<SecondElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
