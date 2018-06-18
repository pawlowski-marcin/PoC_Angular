import { Component } from '@angular/core';
import { TasksService } from '../services/tasks.services';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent {
  tasksList = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  remove(task: string) {
    this.tasksService.remove(task);
  }

  done(task: string) {
    this.tasksService.done(task);
  }
}
