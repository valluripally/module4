import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-module3part2',
  templateUrl: './module3part2.component.html',
  styleUrls: ['./module3part2.component.css']
})
export class Module3part2Component implements OnInit {
@Input() childmessage:string
  constructor() { }

  ngOnInit() {
  }

}
