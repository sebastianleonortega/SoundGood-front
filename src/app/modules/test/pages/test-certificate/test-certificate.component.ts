import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import {TestNumericNewComponent} from "../test-numeric-new/test-numeric-new.component";
import {MatDialogRef} from "@angular/material/dialog";
import * as html2canvas from 'html2canvas';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";



@Component({
  selector: 'app-test-certificate',
  templateUrl: './test-certificate.component.html',
  styleUrls: ['./test-certificate.component.scss']
})
export class TestCertificateComponent implements OnInit {
  @ViewChild('certificado') certificadoRef!: ElementRef;

  @Input() nombreUsuario: string = 'Diany Garcia';
  constructor(
    @Inject(MAT_DIALOG_DATA) public nameTest: any,

    private dialogRef: MatDialogRef<TestNumericNewComponent>


  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  descargarCertificadoComoImagen(): void {
    const certificadoElement = this.certificadoRef.nativeElement;

    html2canvas.default(certificadoElement).then((canvas: HTMLCanvasElement) => {
      const imgData = canvas.toDataURL('image/png');

      const a = document.createElement('a');
      a.href = imgData;
      a.download = 'Certificado-Sound-good.png';
      a.click();
    });
  }

}
