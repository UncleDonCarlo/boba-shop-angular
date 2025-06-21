import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobaList } from './boba-list';

describe('BobaList', () => {
  let component: BobaList;
  let fixture: ComponentFixture<BobaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BobaList]
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
