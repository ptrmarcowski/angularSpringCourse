import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewChildren, inject } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from '../core/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
// implements AfterViewInit, AfterViewChecked
export class TodoListComponent implements OnInit, OnDestroy {
  
  // @ViewChild(TodoComponent) todoComp!: TodoComponent;
  // @ViewChildren(TodoComponent) todoComps!: TodoComponent;
  todos: Todo[] = this.todoService.todos;
  ilezadan: number = 0;
  errorMessage = '';
  sub!: Subscription;

  constructor(private todoService: TodoService) {

  }

  // ngAfterViewInit(): void {
  //   console.log(this.todoComp);
  // }

  // ngAfterViewChecked(): void {
  //   console.log(this.todoComp);
  // }

  ngOnInit(): void {
    this.sub = this.todoService.todoChanged.subscribe({
      next: arrTodos => this.todos = arrTodos
    })
  }


  addTodo(todo: string): void {

    if (todo.length <= 3) {
      // alert('Zadanie powinno mieć co najmniej 4 znaki!');
      this.errorMessage = 'Zadanie powinno mieć co najmniej 4 znaki!'
      return;
    }

    this.todoService.addTodo(todo);
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
