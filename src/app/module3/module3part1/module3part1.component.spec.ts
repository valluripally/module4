import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3part1Component } from './module3part1.component';

describe('Module3part1Component', () => {
  let component: Module3part1Component;
  let fixture: ComponentFixture<Module3part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module3part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module3part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
