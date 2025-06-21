import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core'; // เพิ่ม NgZone
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home implements AfterViewInit {
  @ViewChild('newSwiper') swiperRef: ElementRef | undefined;

  constructor(private ngZone: NgZone) {} // Inject NgZone

  ngAfterViewInit(): void {
    console.log("swiperRef", this.swiperRef);

    // *** ใช้ setTimeout เพื่อให้แน่ใจว่า DOM และ Web Component พร้อม ***
    this.ngZone.runOutsideAngular(() => { // Optional: รันนอก Angular Zone เพื่อ Performance (แต่ setTimeout(0) ก็มักจะพอ)
      setTimeout(() => {
        if (this.swiperRef && this.swiperRef.nativeElement) {
          const swiperEl = this.swiperRef.nativeElement;

          const swiperParams = {
            breakpoints: {
              0: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 3,
              },
            },
          };

          Object.assign(swiperEl, swiperParams);
          swiperEl.initialize();
          console.log("Swiper initialized with params:", swiperParams);
        } else {
          console.error("swiperRef or nativeElement is undefined");
        }
      }, 0);
    });
  }
}
