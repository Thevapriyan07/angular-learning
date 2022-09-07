import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  inputdata: string;
  outputdata: string; //@output decorator
  outputdata2: string; //@output decorator

  messagedata: string = 'hello im parent component';

  message2data: string = '';

  newmessage($event: any) {
    //@output decorator
    this.outputdata = $event;
  }

  newmessage2($event: any) {
    //@output decorator
    this.outputdata2 = $event;
  }

  display(text: any) {
    this.inputdata = text;
  }
}
