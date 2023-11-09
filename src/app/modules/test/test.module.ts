import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestNumericComponent} from "./pages/test-numeric/test-numeric.component";
import {TestLeftRightComponent} from "./pages/test-left-right/test-left-right.component";



@NgModule({
  declarations: [
    TestNumericComponent,
    TestLeftRightComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
