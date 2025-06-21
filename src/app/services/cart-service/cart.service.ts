import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export default class CartService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() {}

  addProduct(product: Product) : void {
    const currentProducts = [...this.products.value];
    const existingProductIndex = currentProducts.findIndex(p => p.id === product.id);

    if (existingProductIndex > -1) {
      currentProducts[existingProductIndex].quantity += 1;
    } else {
      currentProducts.push(product);
    }

    this.products.next(currentProducts);
  }

  getTotalCartAmount(): number{
    let count = 0;

    this.products.value.forEach(p => {
      count += p.quantity;
    });

    return count;
  }

  get getProduct(){
    return this.products || [];
  }
}

