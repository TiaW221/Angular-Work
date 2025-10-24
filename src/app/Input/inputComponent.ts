import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './inputComponent.html',
  styleUrl: './inputComponent.scss'
})

export class InputComponent {
  @Input()
  inputCharLength: number = 0;

  @Input()
  inBox: string = "Input Area";
}

export class Box extends class InputComponent {

}
