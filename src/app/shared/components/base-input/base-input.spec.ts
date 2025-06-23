import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInput } from './base-input';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BaseInput', () => {
  let component: BaseInput;
  let fixture: ComponentFixture<BaseInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseInput],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
