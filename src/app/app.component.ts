import { Component } from '@angular/core';
import { Post } from './models/Post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBuGDcy--ba3NQjSrizMi09_1CbJwpbhaE",
    authDomain: "myawsomeblog-824c9.firebaseapp.com",
    databaseURL: "https://myawsomeblog-824c9.firebaseio.com",
    projectId: "myawsomeblog-824c9",
    storageBucket: "myawsomeblog-824c9.appspot.com",
    messagingSenderId: "361980001728"
  };
  firebase.initializeApp(config);
  }
  /*
  //array of posts
  posts = [
      new Post("My first post", "Fruer zeezzrezze ezovnfefzbf ezifbez pakd aifab faof, ai to,ge8f zi jezfezinfe, feznficnznkezic ikiznkz5fz,,znfze. Sfruer zeezzrezze ezovnfefzbf ezifbez pakd aifab faof, ai to,ge8f zi jezfezinfe, feznficnznkezic ikiznkz5fz,,znfze. Kfruer zeezzrezze ezovnfefzbf ezifbez pakd aifab faof, ai to,ge8f zi jezfezinfe, feznficnznkezic ikiznkz5fz,,znfze."),
      new Post("My second post", "Fruer zeezzrezze ezovnfei to,ge8f zi jezfezinfe, feznficnznkezic ikiznkz5fz,,znfze."),
      new Post("Another post", "Fruer zeezzrezze ezovnfei to, feznficnznkezic ikiznkz5fz,,znfze. Lfruer zeezzrezze ezovnfefzbf ezifbez pakd aifab faof, ai to,ge8f zi jezfezinfe, feznficnznkezic ikiznkz5fz,,znfze.")
  ];*/
}
