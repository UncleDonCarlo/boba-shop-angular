import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobaForm } from './boba-form';

describe('BobaForm', () => {
  let component: BobaForm;
  let fixture: ComponentFixture<BobaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BobaForm]
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
