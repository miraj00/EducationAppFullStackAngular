import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantFactComponent } from './plant-fact.component';

describe('PlantFactComponent', () => {
  let component: PlantFactComponent;
  let fixture: ComponentFixture<PlantFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantFactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
