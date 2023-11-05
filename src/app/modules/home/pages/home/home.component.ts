import { Component, OnInit } from '@angular/core';
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar, SwiperOptions} from "swiper";
import {Doctor} from "../../../auth/interface/home.interface";
import {Router} from "@angular/router";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  config: SwiperOptions = {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  slides = [
    {
      image: 'assets/images/img-1.png',
    },
    {
      image: 'assets/images/img-2.png',
    },
    {
      image: 'assets/images/img-1.png',
    },
  ];

   doctors : Doctor[] = [
     {
       id: 1,
       name: 'Mario Alejandro',
       lastname: 'Contreras Gutierrez',
       specialty: 'Terapeuta complementario, Médico general',
       img: 'assets/images/doc1.png',
     },
     {
       id: 2,
       name: 'Sandrith Tatiana',
       lastname: 'Guerrero Rincon',
       specialty: 'Otorrinolaringologo',
       img: 'assets/images/doc2.png',
     },
     {
       id: 3,
       name: 'Edgardo Enrique',
       lastname: 'Paba Gonzalez',
       specialty: 'Médico general',
       img: 'assets/images/doc3.png',
     },
     {
       id: 4,
       name: 'Mildreth Amanda',
       lastname: 'Carrascal Torrado',
       specialty: 'Médico general',
       img: 'assets/images/doc4.png',
     },
     {
       id: 5,
       name: 'Juan Carlos',
       lastname: 'Jimenez Illera',
       specialty: 'Médico general',
       img: 'assets/images/doc5.png',
     },
   ]



  constructor(

      private _router: Router,
  ) { }

  ngOnInit(): void {

  }
  getAllDoctors(){

  }

  OnDoctor(){
    this._router.navigateByUrl('/doctor');
  }

}
