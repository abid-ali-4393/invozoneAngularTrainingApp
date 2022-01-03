import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPracticeFormComponent } from './material-practice-form.component';

describe('MaterialPracticeFormComponent', () => {
  let component: MaterialPracticeFormComponent;
  let fixture: ComponentFixture<MaterialPracticeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPracticeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPracticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
