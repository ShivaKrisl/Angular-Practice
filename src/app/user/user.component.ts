import { Component, computed, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  ImagePath = computed(() => {
    return `assets/users/${this.avatar()}`;
  });

  onSelectUser(): void {}
}
