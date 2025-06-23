import { Component, OnDestroy } from '@angular/core';
import CartService from '../../../services/cart-service/cart.service';
import { Cart } from '../../../interfaces/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boba-list',
  standalone: false,
  templateUrl: './boba-list.html',
  styleUrl: './boba-list.scss'
})
export class BobaList {
  bobaList: Cart[] = [
    {
      id: 1,
      name: "Thai Tea",
      price: 100,
      quantity: 1
    },
    {
      id: 2,
      name: "Green Tea",
      price: 100,
      quantity: 1
    },
    {
      id: 3,
      name: "Apple Soda",
      price: 100,
      quantity: 1
    },
    {
      id: 4,
      name: "Kiwi Soda",
      price: 100,
      quantity: 1
    }
  ];

  isSuccess: boolean = false;

  isLoading: boolean = false;

  intervalId: any;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  addItem(id: number) {
    try {
      this.isLoading = true;
      const findBoba = this.bobaList.find(b => b.id === id);

      if (!findBoba) {
        alert(`There is no Any boba with Id : ${id}`);
        return;
      }
      this.cartService.addProduct(findBoba);
      this.isSuccess = true;
      this.isLoading = false;

      this.intervalId = setInterval(() => {
        this.isSuccess = false;
      }, 4000)

    } catch(err){
      console.error(err);
    }
  }


  goToAddBoba(){
    this.router.navigate(['/client/add-boba'])
  }
}
