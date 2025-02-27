import { Component, input, output } from '@angular/core';
import { ITask } from '../ITask';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-task',
  imports: [CardComponent],
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
