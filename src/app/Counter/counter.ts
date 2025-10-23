import {Component, EventEmitter, Output } from '@angular/core';

@Component ({
  selector: 'app-counter',
  templateUrl: './counter.html',
})

export class Counter {
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  addToCount() {
    this.counter = this.counter + 1
    this.counterChange.emit(this.counter);
  }
}
