import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
// This is what the footer is a part of and is using
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})

// Exporting a class and calling these premade functions
export class Footer implements OnInit, OnChanges, OnDestroy{
  @Input()
  title: string = '';
  // If i want to do this more efficiently, I can type
  // title!: string;

  @Input()
  counter: number = 0;
  // counter!: number;

  @Input()
  complete: boolean = false;

  staticValue = 'static value';

  ngOnInit(): void {
    if (this.complete) {
      this.staticValue = 'another static value';
      console.log(this.staticValue)
    }
    console.log('footer component initialized');
    console.log(this.title);
  }

  ngOnDestroy() {
    console.log('this footer component is destroyed')
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(this.counter);
    if(this.counter > 10){
      this.staticValue = 'new static value';
    }
  }
}

