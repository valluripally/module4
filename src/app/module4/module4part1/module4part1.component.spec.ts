import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4part1Component } from './module4part1.component';

describe('Module4part1Component', () => {
  let component: Module4part1Component;
  let fixture: ComponentFixture<Module4part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module4part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module4part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
