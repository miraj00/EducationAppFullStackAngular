import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPhotoComponent } from './weekly-photo.component';

describe('WeeklyPhotoComponent', () => {
  let component: WeeklyPhotoComponent;
  let fixture: ComponentFixture<WeeklyPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
