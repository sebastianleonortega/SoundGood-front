import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  selectedFile: File | null = null;
  selectedPdfFile: File | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
