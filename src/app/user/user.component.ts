import {
  Component,
  computed,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';

interface IUser {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  user = input.required<IUser>();
  isUserSelected = input.required<boolean>();

  // custom event
  // @Output() select = new EventEmitter();
  select = output<string>();

  ImagePath = computed(() => {
    return `assets/users/${this.user().avatar}`;
  });

  onSelectUser(): void {
    this.select.emit(this.user().id); // pass user id to parent component
  }
}
