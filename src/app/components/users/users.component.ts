import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private fstore: Firestore, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  @Input() user: User | null = null;
  @Output() edit = new EventEmitter<User>();

  toggleStatus(){
    if(this.user)
    {
      this.user.disabled = !this.user.disabled;
      this.edit.emit(this.user);
      const docRef = doc(this.fstore, 'users', this.user.id);
      updateDoc(docRef, { disabled : this.user.disabled });
      this.snackBar.open('Status changed successfully');


    }
  }
}
