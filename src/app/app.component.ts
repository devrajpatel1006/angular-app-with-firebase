import { Component } from '@angular/core';
import { User } from './interfaces/users.interface';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase';

  userData: Observable<User[]>;
  constructor(store: Firestore) {
    const collections = collection(store, 'users');
    this.userData =collectionData(collections, {idField: 'id'}) as Observable<User[]>;
  }

}
