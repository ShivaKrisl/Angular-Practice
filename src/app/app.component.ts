import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;

  selectedUserId: string = 'u1';

  get SelectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  // event handler
  selectUserTasks(id: string) {
    this.selectedUserId = id;
  }
}
