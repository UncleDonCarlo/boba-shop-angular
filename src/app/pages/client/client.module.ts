import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/share";
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';
import { Home } from './home/home';
import { register } from 'swiper/element/bundle';
import { BobaList } from './boba-list/boba-list';
import { Cart } from './cart/cart';

register();

@NgModule({
  declarations: [
    Home,
    BobaList,
    Cart
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ClientModule { }
