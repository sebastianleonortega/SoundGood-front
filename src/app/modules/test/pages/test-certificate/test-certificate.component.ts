import { Component, OnInit, Input } from '@angular/core';
import {TestNumericNewComponent} from "../test-numeric-new/test-numeric-new.component";
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-test-certificate',
  templateUrl: './test-certificate.component.html',
  styleUrls: ['./test-certificate.component.scss']
})
export class TestCertificateComponent implements OnInit {

  @Input() nombreUsuario: string = 'Juan Leon';
  constructor(
    private dialogRef: MatDialogRef<TestNumericNewComponent>


  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
