import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUserFormComponent } from './template-user-form.component';

describe('TemplateUserFormComponent', () => {
  let component: TemplateUserFormComponent;
  let fixture: ComponentFixture<TemplateUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateUserFormComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
