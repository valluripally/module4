import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3part2Component } from './module3part2.component';

describe('Module3part2Component', () => {
  let component: Module3part2Component;
  let fixture: ComponentFixture<Module3part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module3part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module3part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
