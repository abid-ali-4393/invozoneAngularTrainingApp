import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPracticeNavbarComponent } from './material-practice-navbar.component';

describe('MaterialPracticeNavbarComponent', () => {
  let component: MaterialPracticeNavbarComponent;
  let fixture: ComponentFixture<MaterialPracticeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialPracticeNavbarComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPracticeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
