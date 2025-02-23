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

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();

  // custom event
  // @Output() select = new EventEmitter();
  select = output<string>();

  ImagePath = computed(() => {
    return `assets/users/${this.avatar()}`;
  });

  onSelectUser(): void {
    this.select.emit(this.id()); // pass user id to parent component
  }
}
