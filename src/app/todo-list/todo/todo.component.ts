import { AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

// implements OnChanges
// implements OnInit
// implements OnChanges, DoCheck
// implements AfterViewInit
// implements OnDestroy
export class TodoComponent {
  
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  openModal = false;
  // @ViewChild("li") li!: ElementRef;
  timeout!: number;
  keyValueTest: {[key: string]: string | number} = {
    name: 'test',
    age: 12
  }

  // constructor() {
  //   console.log(this.todo)
  // }

  // ngOnInit(): void {
  //   this.timeout = window.setTimeout(() => {
  //     console.log('setTimeout')
  //   }, 3000)
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

  // ngDoCheck(): void {
  //   console.log('ngDoCheck został wykonany!');
  // }

  // ngAfterViewInit(): void {
  //   console.log(this.li);
  // }

  // ngOnDestroy(): void {
  //   console.log('test')
  //   clearTimeout(this.timeout)
  // }

  changeTodoStatus() {
    this.changeStatus.emit(this.i);
  }

  toggleModal(): void {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
