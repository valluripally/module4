import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module3part1Component } from './module3part1/module3part1.component';
import { Module3part2Component } from './module3part1/module3part2/module3part2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Module3part1Component, Module3part2Component]
})
export class Module3Module { }
