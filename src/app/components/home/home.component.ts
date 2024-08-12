import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fullName = '909951_ct@mail.ru';
  phone= '8 (8652) 909-951';

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
