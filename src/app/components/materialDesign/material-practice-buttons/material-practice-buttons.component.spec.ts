import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPracticeButtonsComponent } from './material-practice-buttons.component';

describe('MaterialPracticeButtonsComponent', () => {
  let component: MaterialPracticeButtonsComponent;
  let fixture: ComponentFixture<MaterialPracticeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialPracticeButtonsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPracticeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
