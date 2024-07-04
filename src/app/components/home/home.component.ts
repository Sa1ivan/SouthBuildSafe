import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fullName!: string;
  phone!: string;

  send(name: string, phone: string)
  { 
    const sendObj = {
      name: name,
      subject: 'Заявка на консултацию!',
      email: 'Yugstroy2024@outlook.com',
      text: `Заявка от гостя ${name}, номер телефона ${phone}.`
    }
    this.fullName = '';
    this.phone = '';
    console.log(sendObj);
    
  }

}
