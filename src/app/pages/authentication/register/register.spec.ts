import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register';

import 'zone.js';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Register', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
