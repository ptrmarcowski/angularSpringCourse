import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, filter, from, interval, map, of, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

// implements AfterContentInit, AfterContentChecked
export class ModalComponent implements OnInit, OnDestroy {
  
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  sub: Subscription = new Subscription();
  // @ContentChild('modalDiv') modalDiv!: ElementRef; 
  // @ContentChild('check') checkBox!: ElementRef; 

  // ngAfterContentInit(): void {
  //   // console.log(this.modalDiv)
  // }

  // ngAfterContentChecked(): void {
  //   // console.log(this.checkBox.nativeElement.checked);
  // }

  ngOnInit(): void {
  //  this.sub = of({name:'test'}).subscribe({
  //     next: value => console.log(value),
  //     error: err => console.log(err),
  //     complete: () => console.log('Test')
  //   })
    // this.sub = from([1,2,3]).subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err),
    //   complete: () => console.log('Test')
    // })
    // this.sub = interval(1000).pipe(take(5)).subscribe({
    //   next: number => console.log(number)
    // })
    // of(1).pipe(
    //     tap(numb => console.log(numb))
    //   )
    //   .subscribe({
    //     next: numb => console.log(numb)
    //   }
    //   )
    // console.log(this.sub)
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    // console.log(this.sub)
  }
  
  onClose() {
    this.close.emit();
  }

}
