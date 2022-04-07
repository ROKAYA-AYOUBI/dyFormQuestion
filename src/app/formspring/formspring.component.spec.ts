import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspringComponent } from './formspring.component';

describe('FormspringComponent', () => {
  let component: FormspringComponent;
  let fixture: ComponentFixture<FormspringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormspringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormspringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
