import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoba } from './add-boba';

import 'zone.js';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared/share';

describe('AddBoba', () => {
  let component: AddBoba;
  let fixture: ComponentFixture<AddBoba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBoba],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBoba);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
