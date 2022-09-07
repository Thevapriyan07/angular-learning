import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  inputdata: string;

  messagedata: string = 'hello im parent component';

  message2data: string = '';

  display(text: any) {
    this.inputdata = text;
  }
}
