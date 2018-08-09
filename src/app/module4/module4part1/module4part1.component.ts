import { Component, OnInit } from '@angular/core';
import { Module4part2Component } from './module4part2/module4part2.component';

@Component({
  selector: 'app-module4part1',
  templateUrl: './module4part1.component.html',
  styleUrls: ['./module4part1.component.css']
})
export class Module4part1Component implements OnInit {
  
 
  
  constructor() { }
  message:string;

  receiveMessage($event) {
    this.message = $event
  }
  // receiveChangingMessage($event) {
  //   this.message = $event
  // }

  ngOnInit() {
  }

}
