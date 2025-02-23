import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get ImagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser(): void {}
}
