import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestLeftRightComponent} from "./pages/test-left-right/test-left-right.component";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestNumericNewComponent } from './pages/test-numeric-new/test-numeric-new.component';
import {TestRoutingModule} from "./test-routing.module";
import { TestCertificateComponent } from './pages/test-certificate/test-certificate.component';



@NgModule({
  declarations: [

    TestCertificateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    TestRoutingModule,
  ],
  exports: [
  ]
})
export class TestModule { }
