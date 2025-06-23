import { Injectable } from '@angular/core';
import { Cart } from '../../interfaces/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export default class CartService {
  private carts: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([]);

  constructor() {
    this.loadFromStorage();
  }

  addProduct(cart: Cart) : void {
    const currentCarts = [...this.carts.value];
    const existingCartIndex = currentCarts.findIndex(p => p.id === cart.id);

    if (existingCartIndex > -1) {
      currentCarts[existingCartIndex].quantity += 1;
    } else {
      currentCarts.push(cart);
    }

    this.carts.next(currentCarts);
    localStorage.setItem("carts", JSON.stringify(currentCarts));
  }

  removeProduct(id: number) : void {
    const currentCarts = [...this.carts.value];
    const existingCartIndex = currentCarts.findIndex(p => p.id === id);

    if(currentCarts[existingCartIndex].quantity <= 1){
      currentCarts.splice(existingCartIndex, 1);
    } else {
      currentCarts[existingCartIndex].quantity -= 1;
    }

    this.carts.next(currentCarts);
    localStorage.setItem("carts", JSON.stringify(currentCarts));
  }

  getTotalCartAmount(): number{
    let count = 0;

    this.carts.value.forEach(c => {
      count += c.quantity;
    });

    return count;
  }

  get getCart(){
    return this.carts.asObservable();
  }

  set setCart(carts: BehaviorSubject<Cart[]>){
    this.carts = carts
  }

  private loadFromStorage() {
    const carts = localStorage.getItem("carts");
    const parsedCarts = carts ? JSON.parse(carts) : [];
    this.setCart = new BehaviorSubject<Cart[]>(parsedCarts);
  }
}

