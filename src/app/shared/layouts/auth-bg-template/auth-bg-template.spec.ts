import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBgTemplateComponent } from './auth-bg-template';

describe('AuthBgTemplateComponent', () => {
  let component: AuthBgTemplateComponent;
  let fixture: ComponentFixture<AuthBgTemplateComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ AuthBgTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
