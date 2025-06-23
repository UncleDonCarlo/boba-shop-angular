import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobaForm } from './boba-form';

import 'zone.js';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BobaForm', () => {
  let component: BobaForm;
  let fixture: ComponentFixture<BobaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BobaForm],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BobaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
