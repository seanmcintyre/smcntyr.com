import { Component } from '@angular/core';

declare const firebase: any;

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    fb: string;

    constructor() {
        const t = this;
        var config = {
            apiKey: "AIzaSyBTPSArdeuCGjeqHBd2UUBP4LRE95NqJMg",
            authDomain: "smcntyr.firebaseapp.com",
            databaseURL: "https://smcntyr.firebaseio.com",
            storageBucket: "smcntyr.appspot.com",
            messagingSenderId: "1012269791251"
        };
        firebase.initializeApp(config);

        firebase
            .database()
            .ref('test')
            .once('value')
            .then(function(s) {
                console.log(JSON.stringify(s.val()));
            });
    }
}
