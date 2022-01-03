import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPracticeDataTableComponent } from './material-practice-data-table.component';

describe('MaterialPracticeDataTableComponent', () => {
  let component: MaterialPracticeDataTableComponent;
  let fixture: ComponentFixture<MaterialPracticeDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPracticeDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPracticeDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
