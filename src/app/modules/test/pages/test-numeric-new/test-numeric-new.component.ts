import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TestNumericService} from "../../service/test-numeric.service";
import {AlertService} from "../../../../core/services/alert.service";
import ChartDataLabels from 'chartjs-plugin-datalabels';


import {
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Chart,
  Decimation,
  DoughnutController,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  LogarithmicScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  SubTitle,
  TimeScale,
  TimeSeriesScale,
  Title,
  Tooltip
} from 'chart.js';
import {UserResponseData} from "../../interfaces/test-left-right.interface";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TestCertificateComponent} from "../test-certificate/test-certificate.component";
import {Observable, Subject} from "rxjs";
import {AppService} from "../../../../app.service";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  ChartDataLabels
);


@Component({
  selector: 'app-test-numeric-new',
  templateUrl: './test-numeric-new.component.html',
  styleUrls: ['./test-numeric-new.component.scss']
})


export class TestNumericNewComponent implements OnInit {
  @ViewChild('monthlySalesGraph') private monthlySalesGraphRef!: ElementRef;
  public monthlySalesGraph!: Chart;


  public testForm: FormGroup = new FormGroup({});
  idAudio: number = 1;
  graphResult!: number ;


  constructor(
    private renderer: Renderer2,
    private _appService: AppService,
    private _test: TestNumericService,
    private _alert: AlertService,
    private _router: Router,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {

    this.playAudio();
    this.initFormTest();

    this._test.deleteSubmitResults().subscribe({
      next: () =>{
      }
    });
  }


  updateGraphResult(): void {


  }


  //grafica
  getMonthlySalesData() {
    const data: UserResponseData = {
      name: 'Juan Sebastian',
      total_sales: this.graphResult,


    };

    const monthlySalesLabels: string[] = [data.name];
    const monthlySalesData: number[] = [data.total_sales];

    this.createMonthlySalesGraph(monthlySalesLabels, monthlySalesData);
  }

  createMonthlySalesGraph(monthlySalesLabels: string[], monthlySalesData: number[]) {
    this.monthlySalesGraph = new Chart(this.monthlySalesGraphRef.nativeElement, {
      type: 'bar',
      data: {
        labels: monthlySalesLabels,
        datasets: [
          {
            label: 'Respuestas correctas',
            data: monthlySalesData,
            backgroundColor: monthlySalesData.map(d => {
              if (d <= 3) {
                return 'rgba(255, 0, 0, 0.7)'; // Rojo
              } else if (d === 4 || d === 5) {
                return 'rgba(0, 0, 255, 0.7)'; // Azul
              } else {
                return 'rgba(0, 255, 0, 0.7)'; // Verde
              }
            }),
            borderColor: monthlySalesData.map(d => {
              if (d <= 3) {
                return 'rgba(255, 0, 0, 1)';
              } else if (d === 4 || d === 5) {
                return 'rgba(0, 0, 255, 1)';
              } else {
                return 'rgba(0, 255, 0, 1)';
              }
            }),
            borderWidth: 1,
            barPercentage: 0.5,
            categoryPercentage: 0.8
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            position: 'left',
            min: 1,
            max: 6
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              align: 'center'
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          datalabels: {
            display: false
          }
        }
      },
    });
  }

  initGraph() {
    const tiempoDeEspera = 2000; // 2000 milisegundos (2 segundos)

    setTimeout(() => {
      this.getMonthlySalesData();

    }, tiempoDeEspera);

  }

  initFormTest(): void {
    this.testForm = new FormGroup({
      input_numbers: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
    });
  }

  sendTest() {
    console.log("no entro")
    if (this.testForm.valid) {
      const data: any = {
        inputNumbers: this.testForm.get('input_numbers')?.value,
      }
      console.log("entro" + data)

      this._test.submitResults(data).subscribe({
        next: () => {
          this._alert.success('Respuesta enviada correctamente');
        },
        error: (err) => {
          console.error('Error al enviar la respuesta:', err);
          this._alert.error('Error al enviar la respuesta');

        },
      });

      const inputValue = '';
      this.testForm.get('input_numbers')?.setValue(inputValue);

      this.idAudio++;
      this.playAudio();
      if (this.idAudio === 8) {
        this._test.getResult().subscribe({
          next: (data) =>{
            this.graphResult = parseFloat(data.toString());
            console.log("data convertida mi perro"+this.graphResult +"y a no convertida"+ data)
            localStorage.setItem('graphResult', this.graphResult.toString());

          }
        })

        this.initGraph();
        this.updateGraphResult();
      }
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

  scheduleAppointment() {
    this._router.navigateByUrl('/doctor');
    this.closeModal();
  }

  closeModal() {
    this.dialog.closeAll();

  }

  openModalTestCertificate() {
    const nameTest = "numerica";

    this.dialog.open(TestCertificateComponent, {
      data: nameTest,
      width: '700px',
      height: '500px'
    })
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
