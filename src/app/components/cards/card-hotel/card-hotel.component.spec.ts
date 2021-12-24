import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHotelComponent } from './card-hotel.component';

describe('CardHotelComponent', () => {
  let component: CardHotelComponent;
  let fixture: ComponentFixture<CardHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
