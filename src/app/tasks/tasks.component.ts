import { Component, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy_tasks';
import { ITask } from '../ITask';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  userid = input.required<string>();

  tasks: Array<ITask> = dummyTasks;

  get getSelectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userid());
  }
}
