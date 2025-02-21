import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // better way of writing functions that uses signals in its body
  getImagePath = computed(() => {
    return `assets/users/${this.selectedUser().avatar}`;
  });

  // get getImagePath(): string {
  //   return `assets/users/${this.selectedUser().avatar}`;
  // }

  // This method will be called when the user selects a user from the list
  onSelectUser(): void {
    const randIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    // Update the selected user
    this.selectedUser.set(DUMMY_USERS[randIndex]);
  }
}
