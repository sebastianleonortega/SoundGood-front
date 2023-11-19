import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TestNumericService} from "../../service/test-numeric.service";
import {AlertService} from "../../../../core/services/alert.service";


@Component({
  selector: 'app-test-numeric-new',
  templateUrl: './test-numeric-new.component.html',
  styleUrls: ['./test-numeric-new.component.scss']
})
export class TestNumericNewComponent implements OnInit {



  public testForm: FormGroup = new FormGroup({});

  idAudio: number = 1;


  constructor(
    private renderer: Renderer2,
    private _test: TestNumericService,
    private _alert: AlertService ,
  ) {
  }

  ngOnInit(): void {
    this.playAudio();
    this.initFormTest();
  }



  //grafica


  initFormTest(): void {
    this.testForm = new FormGroup({
      input_numbers: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
    });
  }

  sendTest() {
    if (this.testForm.valid) {
      const data = {
        inputNumbers: [''],
      }
      this._test.submitResults("321").subscribe({
        next: () => {
          this._alert.success('respuesta enviada correctamente');
        }
      })
      this.testForm.get('inputNumbers')?.reset();
      this.idAudio ++;
      console.log(this.idAudio)
      this.playAudio();

    }
  }

  deleteLastInput(): void {
    const currentInputValue = this.testForm.get('input_numbers')?.value;
    if (currentInputValue.length > 0) {
      // Elimina el último dígito
      this.testForm.get('input_numbers')?.setValue(currentInputValue.slice(0, -1));
    }
  }


  appendToInput(number: string): void {
    const currentInputValue = this.testForm.get('input_numbers')?.value;
    this.testForm.get('input_numbers')?.setValue(currentInputValue + number);
  }


  playAudio() {
    this._test.getAudio(this.idAudio).subscribe((data: any) => {
      const blob = new Blob([data], {type: 'audio/mp3'});
      const url = window.URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
    });
  }

}
