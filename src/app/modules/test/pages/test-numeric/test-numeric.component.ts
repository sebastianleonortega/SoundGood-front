import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-test-numeric',
  templateUrl: './test-numeric.component.html',
  styleUrls: ['./test-numeric.component.scss']
})
export class TestNumericComponent implements OnInit {



  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  appendToInput(number: string, userInput: HTMLInputElement) {
    userInput.value += number;
  }

  onInputChange(userInput: HTMLInputElement) {
    let inputValue = userInput.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    userInput.value = inputValue;
  }


}
