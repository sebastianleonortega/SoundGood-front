import {Component, OnInit} from '@angular/core';
import {DocumentsComponent} from "../documents/documents.component";
import {MatDialog} from "@angular/material/dialog";
import {GraphUserComponent} from "../graph-user/graph-user.component";
import {TableUserComponent} from "../table-user/table-user.component";
import {TableAppointmentComponent} from "../table-appointment/table-appointment.component";
import {TestNumericService} from "../../../test/service/test-numeric.service";
import {AppService} from "../../../../app.service";

@Component({
  selector: 'app-medical-view',
  templateUrl: './medical-view.component.html',
  styleUrls: ['./medical-view.component.scss']
})
export class MedicalViewComponent implements OnInit {


  constructor(
    private _dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {




  }

  openModalDocument() {
    const data = 1;
    this._dialog.open(DocumentsComponent, {
      data: data,
      width: '500px',
      height: '500px'
    })
  }

  openModalUser() {
    this._dialog.open(TableUserComponent, {
      width: '900px',
      height: '500px'
    })
  }

  openModalAppointment() {
    this._dialog.open(TableAppointmentComponent, {
      width: '900px',
      height: '500px'
    })
  }

  openModalTesResul() {
    this._dialog.open(GraphUserComponent, {
      width: '800px',
      height: '600px'
    })
  }

}


