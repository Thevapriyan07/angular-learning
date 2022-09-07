import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input() message: string = '';
  @Input() inputMessage: string = '';
  @Input() message2:string="";

  @Output() messageEvent = new EventEmitter<string>;
  @Output() messageEvent2 = new EventEmitter<string>;
  ngOnInit() {}

  sendMessage(){
    this.messageEvent.emit("Hello Im child to parent");
  }

  send(){
    this.messageEvent2.emit("hello im 2nd emit")
  }
}
