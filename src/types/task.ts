export interface ITask {
  _id: string;
  name: string;
  isCompleted: boolean;
  categoryId: string;
  createdAt: string;
  date: string;
}

export interface ITaskRequest {
  name: string;
  isCompleted: boolean;
  categoryId: string;
  date: string;
}
