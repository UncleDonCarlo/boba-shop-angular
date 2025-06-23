import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobaList } from './boba-list';

import 'zone.js';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared/share';

describe('BobaList', () => {
  let component: BobaList;
  let fixture: ComponentFixture<BobaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BobaList],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BobaList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
