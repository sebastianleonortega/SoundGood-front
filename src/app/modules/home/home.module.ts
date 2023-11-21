import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {TestNumericNewComponent} from "../test/pages/test-numeric-new/test-numeric-new.component";
import {TestLeftRightComponent} from "../test/pages/test-left-right/test-left-right.component";


@NgModule({
  declarations: [
    HomeComponent,
    TestNumericNewComponent,
    TestLeftRightComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class HomeModule {
}
