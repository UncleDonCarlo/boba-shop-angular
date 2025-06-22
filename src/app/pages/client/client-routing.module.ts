import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { BobaList } from './boba-list/boba-list';
import { Cart } from './cart/cart';
import { AddBoba } from './add-boba/add-boba';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'boba-list',
    component: BobaList
  },
  {
    path: 'add-boba',
    component: AddBoba
  },
  {
    path: 'cart',
    component: Cart
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
