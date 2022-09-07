import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  inputvision: string;

  messagedata: string = 'hello im parent component';

  display(text: any) {
    this.inputvision = text;
  }
}
