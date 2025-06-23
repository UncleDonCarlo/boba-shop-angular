import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';

import 'zone.js';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Home],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
