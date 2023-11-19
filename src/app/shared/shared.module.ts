import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SwiperModule} from "swiper/angular";
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarrouselComponent } from './layouts/carrousel/carrousel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,


  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
    HeaderComponent,
    FooterComponent,
    CarrouselComponent
  ]
})
export class SharedModule { }
