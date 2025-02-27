export interface ITask {
  id: string;
  title: string;
  userId: string;
  summary: string;
  dueDate: string;
}

export interface AddTaskData {
  title: string;
  summary: string;
  dueDate: string;
}
