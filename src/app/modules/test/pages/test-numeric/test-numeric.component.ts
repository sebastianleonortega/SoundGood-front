import {Component, OnInit, Renderer2} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {HomeService} from "../../../home/service/home.service";


@Component({
  selector: 'app-test-numeric',
  templateUrl: './test-numeric.component.html',
  styleUrls: ['./test-numeric.component.scss']
})
export class TestNumericComponent implements OnInit {

  public test: FormGroup = new FormGroup({});


  constructor(
    private renderer: Renderer2,
    private _home: HomeService
  ) { }

  ngOnInit(): void {
    this.playAudio()
    this.testStart()
    this.initFormTest();
  }

  initFormTest(): void {
    this.test = new FormGroup({
      input_numbers: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    });
  }

  sendTest(){
    if(this.test.valid){
      const data: any = {
        inputNumbers : this.test.get('input_numbers')?.value,
      }
      this._home.submitResults(data).subscribe({
        next: ()=> {

        }
      })
  }
  }

  appendToInput(number: string, userInput: HTMLInputElement) {
    userInput.value += number;
  }

  onInputChange(userInput: HTMLInputElement) {
    let inputValue = userInput.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    userInput.value = inputValue;
  }

  testStart() {
    this._home.startTest().subscribe({
      next: (data) => {
        console.log(data)

      }
    })
  }

  playAudio() {
    this._home.getAudio().subscribe((data: any) => {
      const blob = new Blob([data], { type: 'audio/mp3' });
      const url = window.URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
    });
  }



}
