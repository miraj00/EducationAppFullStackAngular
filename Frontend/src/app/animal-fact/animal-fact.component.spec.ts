import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFactComponent } from './animal-fact.component';

describe('AnimalFactComponent', () => {
  let component: AnimalFactComponent;
  let fixture: ComponentFixture<AnimalFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalFactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
