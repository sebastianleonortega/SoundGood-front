import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import {CommonModule, LocationStrategy, PathLocationStrategy} from "@angular/common";
import { AlertService } from "./core/services/alert.service";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {AppointmentModule} from "./modules/appointment/appointment.module";
import {ReminderModule} from "./modules/reminder/reminder.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    AppointmentModule,
    ReminderModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 2000
    }),
    MatDialogModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    AlertService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
