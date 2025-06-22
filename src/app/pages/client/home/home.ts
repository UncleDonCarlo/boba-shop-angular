import { Component, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core'; // เพิ่ม NgZone
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home implements AfterViewInit {
  @ViewChild('newSwiper') swiperRef: ElementRef | undefined;

  constructor(
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
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
        } else {
          console.error("swiperRef or nativeElement is undefined");
        }
      }, 0);
    });
  }

  goToHome(){
    this.router.navigate(['/client/boba-list']);
  }
}
