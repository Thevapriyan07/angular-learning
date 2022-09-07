import { Component, Input, OnInit } from '@angular/core';

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
  ngOnInit() {}
}
