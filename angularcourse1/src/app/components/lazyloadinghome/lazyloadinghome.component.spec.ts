import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadinghomeComponent } from './lazyloadinghome.component';

describe('LazyloadinghomeComponent', () => {
  let component: LazyloadinghomeComponent;
  let fixture: ComponentFixture<LazyloadinghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadinghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadinghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
