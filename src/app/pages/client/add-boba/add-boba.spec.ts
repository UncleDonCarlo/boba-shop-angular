import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoba } from './add-boba';

describe('AddBoba', () => {
  let component: AddBoba;
  let fixture: ComponentFixture<AddBoba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBoba]
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
