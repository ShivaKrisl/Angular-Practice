import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get getImagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }
}
