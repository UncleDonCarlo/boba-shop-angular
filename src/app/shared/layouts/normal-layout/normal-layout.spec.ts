import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalLayout } from './normal-layout';
import 'zone.js';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('NormalLayout', () => {
  let component: NormalLayout;
  let fixture: ComponentFixture<NormalLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NormalLayout],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
