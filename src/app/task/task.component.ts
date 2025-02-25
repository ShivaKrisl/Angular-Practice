import { Component, input, output } from '@angular/core';
import { ITask } from '../ITask';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<ITask>();
  completetask = output<string>();

  onCompleteTask() {
    this.completetask.emit(this.task().id);
  }
}
