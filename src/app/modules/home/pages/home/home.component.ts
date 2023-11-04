import { Component, OnInit } from '@angular/core';
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar, SwiperOptions} from "swiper";


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

  constructor() { }

  ngOnInit(): void {
  }

}
