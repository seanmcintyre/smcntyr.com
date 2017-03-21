declare const firebase: any;

export * from './app.component';
export * from './app.module';

export const FB = firebase.initializeApp({
    apiKey: "AIzaSyBTPSArdeuCGjeqHBd2UUBP4LRE95NqJMg",
    authDomain: "smcntyr.firebaseapp.com",
    databaseURL: "https://smcntyr.firebaseio.com",
    storageBucket: "smcntyr.appspot.com",
    messagingSenderId: "1012269791251"
});
