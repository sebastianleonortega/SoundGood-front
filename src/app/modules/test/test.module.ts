import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestNumericComponent} from "./pages/test-numeric/test-numeric.component";
import {TestLeftRightComponent} from "./pages/test-left-right/test-left-right.component";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TestNumericComponent,
    TestLeftRightComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TestModule { }
