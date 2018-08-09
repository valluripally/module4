import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4part2Component } from './module4part2.component';

describe('Module4part2Component', () => {
  let component: Module4part2Component;
  let fixture: ComponentFixture<Module4part2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module4part2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module4part2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
