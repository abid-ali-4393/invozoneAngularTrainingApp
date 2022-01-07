import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesDemoComponent } from './types-demo.component';

describe('TypesDemoComponent', () => {
  let component: TypesDemoComponent;
  let fixture: ComponentFixture<TypesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
