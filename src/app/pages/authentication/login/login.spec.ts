import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import 'zone.js';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseInput } from '../../../shared/components/base-input/base-input';

describe('Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent,BaseInput],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        RouterModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
