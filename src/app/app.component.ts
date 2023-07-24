import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { environment } from 'src/environments/environment';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name:string="";
  score:number=0;

  ngOnInit() {

   firebase.initializeApp(environment.firebaseConfig);

  }

  async addSandwich() { 
    await firebase.firestore().collection('sandwiches').add({
      name: this.name,
      score: this.score,
    });
  }
  title = 'PostsApp';
}
