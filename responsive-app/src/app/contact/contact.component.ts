import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  textColor: string = 'black';

  changeColor() {
    this.textColor = this.textColor === 'black' ? 'blue' : 'black';
  }
}
