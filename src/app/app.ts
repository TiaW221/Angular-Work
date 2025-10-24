import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Importing a variable called hello from file on the left
// calling it from file directory
import {Hello} from './hello/hello';
// Importing a variable called footer from file on the left
import {Footer} from './footer/footer';
import {Counter} from './Counter/counter';
import {InputComponent} from './Input/inputComponent';

@Component({
  //the html tag I'm going to use is called app root
  selector: 'app-root',
  imports: [RouterOutlet, Hello, Footer, Counter, InputComponent],
  // this is the html it's part of
  templateUrl: './app.html',
  // this is the scss it's using
  styleUrl: './app.scss'
})


// A class called App
export class App {
  counter2 = 0;
  // attributes on the class

  complete2: boolean = true;
  message = "Anything"
  addToCount() {
    this.counter2 = this.counter2 +1;
  }

  onCounterChanged(count: number) {
    if (count >= 10) {
      this.message = 'Greater than ten';
    }
  }
}

