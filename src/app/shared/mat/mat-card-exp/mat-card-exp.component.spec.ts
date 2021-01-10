import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardExpComponent } from './mat-card-exp.component';

describe('MatCardExpComponent', () => {
  let component: MatCardExpComponent;
  let fixture: ComponentFixture<MatCardExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCardExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
