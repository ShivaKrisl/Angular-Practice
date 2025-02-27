import { Component, input, output } from '@angular/core';
import { ITask } from '../ITask';
import { CardComponent } from '../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
