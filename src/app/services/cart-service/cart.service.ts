import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export default class CartService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor() {
    this.loadFromStorage();
  }

  addProduct(product: Product) : void {
    const currentProducts = [...this.products.value];
    const existingProductIndex = currentProducts.findIndex(p => p.id === product.id);

    if (existingProductIndex > -1) {
      currentProducts[existingProductIndex].quantity += 1;
    } else {
      currentProducts.push(product);
    }

    this.products.next(currentProducts);
    localStorage.setItem("products", JSON.stringify(currentProducts));
  }

  removeProduct(id: number) : void {
    const currentProducts = [...this.products.value];
    const existingProductIndex = currentProducts.findIndex(p => p.id === id);

    if(currentProducts[existingProductIndex].quantity <= 1){
      currentProducts.splice(existingProductIndex, 1);
    } else {
      currentProducts[existingProductIndex].quantity -= 1;
    }

    this.products.next(currentProducts);
    localStorage.setItem("products", JSON.stringify(currentProducts));
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

  set setProduct(products: BehaviorSubject<Product[]>){
    this.products = products
  }

  private loadFromStorage() {
    const products = localStorage.getItem("products");
    const parsedProducts = products ? JSON.parse(products) : [];
    this.setProduct = new BehaviorSubject<Product[]>(parsedProducts);
  }
}

