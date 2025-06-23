import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cart } from './cart';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Cart', () => {
  let component: Cart;
  let fixture: ComponentFixture<Cart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cart],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
