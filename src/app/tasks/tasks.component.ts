import { Component, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy_tasks';
import { ITask } from '../ITask';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  userid = input.required<string>();

  tasks: Array<ITask> = dummyTasks;

  isAddTaskVisible: boolean = false;

  get getSelectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userid());
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onAddTask() {
    this.isAddTaskVisible = true;
  }

  onClearAddTask() {
    this.isAddTaskVisible = false;
  }
}
