import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTripsDateWiseComponent } from './get-trips-date-wise.component';

describe('GetTripsDateWiseComponent', () => {
  let component: GetTripsDateWiseComponent;
  let fixture: ComponentFixture<GetTripsDateWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTripsDateWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTripsDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
