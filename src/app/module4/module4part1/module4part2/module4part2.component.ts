import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-module4part2',
  templateUrl: './module4part2.component.html',
  styleUrls: ['./module4part2.component.css']
})
export class Module4part2Component implements OnInit {
input1 ="abc";
message="module4child";

@Output() messageEvent = new EventEmitter<string>();
//@Output() changeEvent=new EventEmitter<string>();
constructor() { }

sendMessage() {
  this.messageEvent.emit(this.message)
}
// onClick(msg)
// {
//   this.changeEvent.emit(msg);
// }

  ngOnInit() {
  }

}
