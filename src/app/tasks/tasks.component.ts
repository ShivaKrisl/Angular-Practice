import { Component, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy_tasks';
import { ITask, AddTaskData } from '../ITask';
import { NewTaskComponent } from '../new-task/new-task.component';
import { v4 as uuid } from 'uuid';

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

  onAddTaskSubmit(task: AddTaskData) {
    // convert AddTaskData to ITask
    const newTask: ITask = {
      id: uuid().toString(),
      title: task.title,
      userId: this.userid(),
      summary: task.summary,
      dueDate: task.dueDate,
    };

    // add it to the tasks array
    this.tasks.push(newTask);

    // close the dialog
    this.isAddTaskVisible = false;
  }
}
