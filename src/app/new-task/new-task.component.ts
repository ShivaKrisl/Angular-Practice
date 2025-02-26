import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancel = output();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  onCancel() {
    this.cancel.emit();
  }
}
