import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module4part1Component } from './module4part1/module4part1.component';
import { Module4part2Component } from './module4part1/module4part2/module4part2.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Module4part1Component, Module4part2Component]
})
export class Module4Module {
  Counter = 5;
 
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }
 }
